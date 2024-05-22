import { useNavigate } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import {
  Container,
  ContainerButtonIcon,
  DivImgText,
  DivText,
  EditProfileButton,
  Img,
  SubTitle,
  Title,
} from "./styles";

export function CardUser() {
  const navigate = useNavigate()

  return (
    <Container>
      <DivImgText>
        <Img src="https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1716208377~exp=1716211977~hmac=cc8468b12961953ccec2f784d61eabb4c0bb9c096bf0d2e102113e776aae2a6b&w=740" />

        <DivText>
          <Title>Usuário da Silva</Title>
          <SubTitle>Administrador</SubTitle>
        </DivText>
      </DivImgText>

      <ContainerButtonIcon>
        <EditProfileButton onClick={() => navigate('/profile')}>
          <MdOutlineModeEdit />
          Editar perfil
        </EditProfileButton>
      </ContainerButtonIcon>
    </Container>
  );
}
