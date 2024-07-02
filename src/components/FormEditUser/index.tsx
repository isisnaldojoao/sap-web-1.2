import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import {
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";
import { api } from "../../lib/axios";
import { Alert } from "../Alert";
import { AlertError } from "../AlertError";

const editUserSchema = z.object({
	nome: z
		.string()
		.min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
  nomeDeUsuario: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 caracteres.' }),
  email: z
		.string()
		.email({ message: 'E-mail inválido.' }),
  // password: z
	// 	.string()
	// 	.min(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' }),
  niveisDeAcesso: z.coerce.number({ required_error: 'O nível de acesso é obrigatório.' }),
});

type EditUserSchema = z.infer<typeof editUserSchema>;
type NiveisDeAcessoOptions = {
        codigo: number,
        nome: string,
        nivel: number,
        status: string
    };

export function FormEditUser() {
  const [isAlertSuccessOpen, setIsAlertSuccessOpen] = useState(false);
  const [isAlertErrorOpen, setIsAlertErrorOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [niveisDeAcessoOptions, setNiveisDeAcessoOptions] = useState<NiveisDeAcessoOptions[]>([]);

  const { userId } = useParams();

  const { register, handleSubmit, setValue, formState: { errors} } = useForm<EditUserSchema>({
		resolver: zodResolver(editUserSchema),
	})
  
  


  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = localStorage.getItem('@aco-verde-br:token');
        if (!token) {
          throw new Error('Token não encontrado');
        }
        
        const response = await api.get(`/usuarios/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseNiveisAcesso = await api.get(`/niveis-de-acesso`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        
        setValue('nome', userData.nome);
        setValue('nomeDeUsuario', userData.nomeDeUsuario);
        setValue('email', userData.email);
        setValue('niveisDeAcesso', userData.niveisDeAcesso.codigo);

        setNiveisDeAcessoOptions(responseNiveisAcesso.data);

      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchUserData();
  }, [userId, setValue])

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  // };

  const handleSubmitData = async (data: EditUserSchema) => {
    
  };

  const editUser = async (data: EditUserSchema) => {
    console.log('chegou aqui');
    console.log(data);
    try {
      const response = await api.patch(`/usuarios/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
        }
      });
      setIsAlertSuccessOpen(true);
    } catch (error) {
      console.log(error);
      setIsAlertErrorOpen(true);
    }
    
  }
  console.log(errors);
  return (
    <>
      <AlertSuccess
        alertText="Alterações salvas com sucesso!"
        buttonText="Fechar"
        visible={isAlertSuccessOpen}
        onClose={() => setIsAlertSuccessOpen(false)}
      />

      <AlertError
        alertText="Houve um erro ao salvar as alterações. As alterações não foram salvas!"
        buttonText="Fechar"
        visible={isAlertErrorOpen}
        onClose={() => setIsAlertErrorOpen(false)} 
      />

      <Form onSubmit={ handleSubmit(editUser)} >
        <div>
          <ContainerInputLabel className="name">
            <label htmlFor="name">Nome</label>
            <input 
              {...register('nome')}
              type="text" 
              id="nome"
              placeholder="Nome" 
            />
            {errors?.nome && (
              <span className="error">{errors.nome.message}</span>
            )}
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="email">E-mail</label>
            <input 
              {...register('email')}
              type="email" 
              id="email"
              placeholder="E-mail" 
            />
            {errors?.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="nomeDeUsuario">Usuário</label>
            <input 
              {...register('nomeDeUsuario')}
              type="text" 
              id="nomeDeUsuario"
              placeholder="Usuário" 
            />
            {errors?.nomeDeUsuario && (
              <span className="error">{errors.nomeDeUsuario.message}</span>
            )}
          </ContainerInputLabel>

          {/* <ContainerInputLabel>
            <label htmlFor="password">Senha</label>
            <div className="password">
              <input
                {...register('password')}
                type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                id="password"
                placeholder="Senha"
              />
              <IconViewPassword
                src="/src/assets/icons/view.svg"
                onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
              />
            </div>
            {errors?.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </ContainerInputLabel> */}

          <ContainerInputLabel>
            <label htmlFor="niveisDeAcesso">Nível de acesso</label>
            <select {...register('niveisDeAcesso')} id="niveisDeAcesso">
              { niveisDeAcessoOptions.map((niveisDeAcesso) => (
                <option key={niveisDeAcesso.codigo} value={niveisDeAcesso.codigo}>{niveisDeAcesso.nome}</option>   
              ))}
            </select>
            {errors?.niveisDeAcesso && (
              <span className="error">{errors.niveisDeAcesso.message}</span>
            )}
          </ContainerInputLabel>
        </div>

        <button type="submit">Salvar alterações</button>
        
      </Form>
    </>
  );
}
