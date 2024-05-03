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
  return (
    <Container>
      <DivImgText>
        <Img src="https://s3-alpha-sig.figma.com/img/c14e/3070/aae6880e34d3a8d05bbe589e14f92e2d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hri4ZRCb6pIQeJe8apfOgIWsz5vBkbLBt2kfJ1s-1Vuty-m~Kf7SqrQV42DgKPpUy2eD0N2UUekr4JeBZLywuICRTrjrT~qJnH9iFMDv3eU6MSnf8aGufxB3Cq3RdtXR7B~vlCfhj1SXJuTP8s8JuXvpa9-g8mkXKuljMTqR593BoZjUwIDIkHKovEl0~n-ed12ivD3vZw9bYX6ZQBwkUEnQfwj94U2bTnxmM7cfqtmDh-7t0Zq6XoD-yNVrfv757dKnz2hY8iRkBzFezdGb4p6~u15eMxJVstRLc5-zX~K4I6HqdcxJKE4qtS~U-QkVXL8aVGhoc64O3MXGgMJTCA__" />

        <DivText>
          <Title>Usuário da Silva</Title>
          <SubTitle>Administrador</SubTitle>
        </DivText>
      </DivImgText>

      <ContainerButtonIcon>
        <EditProfileButton>
          <MdOutlineModeEdit />
          Editar perfil
        </EditProfileButton>
      </ContainerButtonIcon>
    </Container>
  );
}
