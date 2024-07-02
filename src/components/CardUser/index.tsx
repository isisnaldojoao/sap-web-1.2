import { useNavigate } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import avatar from "./image/avatar.png";
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
import { useState } from "react";

export function CardUser() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate()

  return (
    <Container>
      <DivImgText>
        <Img src="/image/avatar.png" alt="avatar" />

        <DivText>
          <Title>{ localStorage.getItem("@aco-verde-br:user") ?? "" }</Title>
        </DivText>
      </DivImgText>

      {/* <ContainerButtonIcon>
        <EditProfileButton onClick={() => navigate('/app/profile')}>
          <MdOutlineModeEdit />
          Editar perfil
        </EditProfileButton>
      </ContainerButtonIcon> */}
    </Container>
  );
}
