import { CardApps } from "../../components/CardApps";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerCard, SubTitle, TitleMain } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Sidebar />
      <TitleMain>Boas vindas! 👋</TitleMain>
      <SubTitle>Baixe os Apps</SubTitle>

      <ContainerCard>
        <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR"
        />
      </ContainerCard>
    </Container>
  );
};
