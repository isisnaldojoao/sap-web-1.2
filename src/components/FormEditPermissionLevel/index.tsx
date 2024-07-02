import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContainerInputLabel,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";
import { AlertError } from "../AlertError";
import { api } from "../../lib/axios";

const editPermissionLevelSchema = z.object({
	nome: z
		.string()
		.min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
  nivel: z.number().min(1, { required_error: 'O nível de acesso é obrigatório.' }),
    // enum(['1', '2', '3', '4', '5'], { required_error: 'O nível de acesso é obrigatório.' }),
  status: z.
    enum(['ativo', 'inativo'], { required_error: 'O status é obrigatório.' }),
});

type EditPermissionLevelSchema = z.infer<typeof editPermissionLevelSchema>;

export function FormEditPermissionLevel() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isAlertSuccessOpen, setIsAlertSuccessOpen] = useState(false);
  const [isAlertErrorOpen, setIsAlertErrorOpen] = useState(false);

  const { permissionLevelId } = useParams();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<EditPermissionLevelSchema>({
		resolver: zodResolver(editPermissionLevelSchema),
	})

  useEffect(() => {

    if (!permissionLevelId) {
      console.log('ID de permissão não encontrado');
      console.log('permissionLevelId', permissionLevelId);
      return;
    }

    async function fetchPermissionData() {
      try {
        const token = localStorage.getItem('@aco-verde-br:token');
        if (!token) {
          throw new Error('Token não encontrado');
        }
        
        const response = await api.get(`/niveis-de-acesso/${permissionLevelId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const permissionData = response.data;

        console.log('permissionData', permissionData);
        
        setValue('nome', permissionData.nome);
        setValue('nivel', permissionData.nivel);
        setValue('status', permissionData.status);

      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchPermissionData();
  }, [permissionLevelId, setValue])


  const editPermissionLevel = async (data: EditPermissionLevelSchema) => {
    try {
      // console.log(data);
      const response = await api.patch(`/niveis-de-acesso/${permissionLevelId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
        }
      });
      console.log(data);
      setIsAlertSuccessOpen(true);
    } catch (error) {
      console.log(error);
      setIsAlertErrorOpen(true);
    }
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

      <AlertError
        alertText="Houve um erro ao salvar as alterações. As alterações não foram salvas!"
        buttonText="Fechar"
        visible={isAlertErrorOpen}
        onClose={() => setIsAlertErrorOpen(false)} 
      />

      <Form onSubmit={handleSubmit(editPermissionLevel)}>
        <div>
          <ContainerInputLabel className="name">
            <label htmlFor="nome">Nome</label>
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
            <label htmlFor="nivel">Nível de acesso</label>
            <select {...register('nivel', { valueAsNumber: true })} id="nivel">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            {errors?.nivel && (
              <span className="error">{errors.nivel.message}</span>
            )}
          </ContainerInputLabel>

          <ContainerInputLabel>
            <span>Status</span>
            <div>
              <div>
                <input type="radio" id="ativo" {...register('status')} value="ativo" />
                <label htmlFor="ativo">Ativo</label>
              </div>
              <div>
                <input type="radio" id="inativo" {...register('status')} value="inativo" />
                <label htmlFor="inativo">Desativado</label>
              </div>
            </div>
            {errors?.status && (
              <span className="error">{errors.status.message}</span>
            )}
          </ContainerInputLabel>
        </div>

        <button type="submit">Salvar alterações</button>
      </Form>
    </>
  );
}
