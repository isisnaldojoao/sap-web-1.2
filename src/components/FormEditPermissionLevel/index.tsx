import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContainerInputLabel,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";

const editPermissionLevelSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
  accessLevel: z.
    enum(['1', '2', '3', '4', '5'], { required_error: 'O nível de acesso é obrigatório.' }),
  status: z.
    enum(['active', 'inactive'], { required_error: 'O status é obrigatório.' }),
});

type EditPermissionLevelSchema = z.infer<typeof editPermissionLevelSchema>;

export function FormEditPermissionLevel() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<EditPermissionLevelSchema>({
		resolver: zodResolver(editPermissionLevelSchema),
	})

  function editPermissionLevel(data: EditPermissionLevelSchema) {
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

      <Form onSubmit={handleSubmit(editPermissionLevel)}>
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
            <label htmlFor="accessLevel">Nível de acesso</label>
            <select {...register('accessLevel')} id="accessLevel">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors?.accessLevel && (
              <span className="error">{errors.accessLevel.message}</span>
            )}
          </ContainerInputLabel>

          <ContainerInputLabel>
            <span>Status</span>
            <div>
              <div>
                <input type="radio" id="active" {...register('status')} value="active" defaultChecked />
                <label htmlFor="active">Ativo</label>
              </div>
              <div>
                <input type="radio" id="inactive" {...register('status')} value="inactive" />
                <label htmlFor="inactive">Desativado</label>
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
