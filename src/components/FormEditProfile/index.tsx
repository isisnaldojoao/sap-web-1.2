import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import {
  Container,
  ContainerImage,
  ContainerInputLabel,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";
import { ModalEditPassword } from "../ModalEditPassword";

const editProfileSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
  user: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 caracteres.' }),
});

type EditProfileSchema = z.infer<typeof editProfileSchema>;

export function FormEditProfile() {
  const [isAlertSuccessEditProfileOpen, setIsAlertSuccessEditProfileOpen] = useState(false);
  const [isAlertSuccessEditPasswordOpen, setIsAlertSuccessEditPasswordOpen] = useState(false);
  const [isModalEditPasswordOpen, setIsModalEditPasswordOpen] = useState(false);

  const { userId } = useParams();
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<EditProfileSchema>({
		resolver: zodResolver(editProfileSchema),
	})

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:4000/api/users/${userId}`);
        const userData = response.data;
        
        setValue('name', userData.name);
        setValue('user', userData.user);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchUserData();
  }, [userId, setValue])

  function handleEditPassword() {
    setIsModalEditPasswordOpen(false);
    setIsAlertSuccessEditPasswordOpen(true);
  }

  function editProfile(data: EditProfileSchema) {
    console.log(data);
    setIsAlertSuccessEditProfileOpen(true);
  }

  return (
    <>
      <AlertSuccess
        alertText="Alterações salvas com sucesso!"
        buttonText="Fechar"
        visible={isAlertSuccessEditProfileOpen}
        onClose={() => setIsAlertSuccessEditProfileOpen(false)}
      />
      
      <ModalEditPassword 
        visible={isModalEditPasswordOpen}
        onClick={handleEditPassword}
        onClose={() => setIsModalEditPasswordOpen(false)}
      />

      <AlertSuccess
        alertText="A senha foi alterada com sucesso!"
        buttonText="Fechar"
        visible={isAlertSuccessEditPasswordOpen}
        onClose={() => setIsAlertSuccessEditPasswordOpen(false)}
      />

      <Container>
        <ContainerImage>
          <img src="https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1716208377~exp=1716211977~hmac=cc8468b12961953ccec2f784d61eabb4c0bb9c096bf0d2e102113e776aae2a6b&w=740" alt="" />
          <div>
            <button type="button">Alterar foto</button>
            <button type="button" onClick={() => setIsModalEditPasswordOpen(true)}>Mudar minha senha</button>
          </div>
        </ContainerImage>

        <Form onSubmit={handleSubmit(editProfile)}>
          <div>
            <ContainerInputLabel>
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
          </div>

          <button type="submit">Salvar alterações</button>
        </Form>
      </Container>
    </>
  );
}
