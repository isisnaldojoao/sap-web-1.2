import { FormEditProfile } from "../../components/FormEditProfile";
import { Container, Title } from "./styles";

export const Profile = () => {
  return (
    <Container>
      <Title>Editar usuário</Title>
      <FormEditProfile />
    </Container>
  );
};
