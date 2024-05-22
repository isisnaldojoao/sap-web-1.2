import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";

const editUserSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
    email: z
		.string()
		.email({ message: 'E-mail inválido.' }),
  user: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 caracteres.' }),
  password: z
		.string()
		.min(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' }),
  accessLevel: z.enum(['operator', 'supervisor', 'admin'], { required_error: 'O nível de acesso é obrigatório.' }),
});

type EditUserSchema = z.infer<typeof editUserSchema>;

export function FormEditUser() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const { register, handleSubmit, formState: { errors } } = useForm<EditUserSchema>({
		resolver: zodResolver(editUserSchema),
	})

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  function editUser(data: EditUserSchema) {
    console.log(data);
    setIsAlertOpen(true);
  }

  return (
    <>
      <AlertSuccess
        alertText="Alterações salvas com sucesso!"
        buttonText="Fechar"
        visible={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />

      <Form onSubmit={handleSubmit(editUser)}>
        <div>
          <ContainerInputLabel className="name">
            <label htmlFor="name">Nome</label>
            <input 
              {...register('name')}
              type="text" 
              id="name"
              placeholder="Nome" 
            />
            {errors?.name && (
              <span className="error">{errors.name.message}</span>
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
            <label htmlFor="user">Usuário</label>
            <input 
              {...register('user')}
              type="text" 
              id="user"
              placeholder="Usuário" 
            />
            {errors?.user && (
              <span className="error">{errors.user.message}</span>
            )}
          </ContainerInputLabel>

          <ContainerInputLabel>
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
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="accessLevel">Nível de acesso</label>
            <select {...register('accessLevel')} id="accessLevel">
              <option value="operator">Operador</option>
              <option value="supervisor">Supervisor</option>
              <option value="admin">Administrador</option>
            </select>
            {errors?.accessLevel && (
              <span className="error">{errors.accessLevel.message}</span>
            )}
          </ContainerInputLabel>
        </div>

        <button type="submit">Salvar alterações</button>
      </Form>
    </>
  );
}
