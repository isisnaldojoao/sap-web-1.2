import { CardApps } from "../../components/CardApps";
import { Container, ContainerCards, Title } from "./styles";

export const DownloadApps = () => {
  return (
    <Container>
      <Title>Baixar Apps</Title>
      <ContainerCards>
        <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR"
        />
      </ContainerCards>
    </Container>
  );
};
