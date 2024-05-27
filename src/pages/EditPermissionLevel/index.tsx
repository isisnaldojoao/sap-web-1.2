import { FormEditPermissionLevel } from "../../components/FormEditPermissionLevel";
import { Container, Title } from "./styles";

export const EditPermissionLevel = () => {
  return (
    <Container>
      <Title>Editar nível de permissão</Title>
      <FormEditPermissionLevel />
    </Container>
  );
};
