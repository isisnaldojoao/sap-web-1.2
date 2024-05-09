import { CardApps } from "../../components/CardApps";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerCard, Title } from "./styles";

export const DownloadApps = () => {
  return (
    <Container>
      <Title>Baixar Apps</Title>
      <ContainerCard>
        <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR"
        />
      </ContainerCard>
      <Sidebar />
    </Container>
  );
};
