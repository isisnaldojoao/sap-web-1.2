import { FormEvent, useState } from "react";
import {
  Container,
  ContainerImage,
  ContainerInputLabel,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";
import { ModalEditPassword } from "../ModalEditPassword";

export function FormEditProfile() {
  const [isAlertSuccessEditProfileOpen, setIsAlertSuccessEditProfileOpen] = useState(false);
  const [isAlertSuccessEditPasswordOpen, setIsAlertSuccessEditPasswordOpen] = useState(false);
  const [isModalEditPasswordOpen, setIsModalEditPasswordOpen] = useState(false);

  function handleEditPassword() {
    setIsModalEditPasswordOpen(false);
    setIsAlertSuccessEditPasswordOpen(true);
  }

  function handleEditProfile(event: FormEvent) {
    event.preventDefault();

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

        <Form onSubmit={handleEditProfile}>
          <div>
            <ContainerInputLabel>
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Nome" />
            </ContainerInputLabel>

            <ContainerInputLabel>
              <label htmlFor="user">Usuário</label>
              <input type="text" placeholder="Usuário" />
            </ContainerInputLabel>
          </div>

          <button type="submit">Salvar alterações</button>
        </Form>
      </Container>
    </>
  );
}
