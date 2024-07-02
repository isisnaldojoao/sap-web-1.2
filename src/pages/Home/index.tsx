import { CardApps } from "../../components/CardApps";
import { Container, ContainerCard, SubTitle, TitleMain } from "./styles";

export const Home = () => {

  const downloadUrl = "http://localhost:3000/download-app/apk";

  return (
    <Container>
      <TitleMain>Boas vindas! 👋</TitleMain>
      <SubTitle>Baixe os Apps</SubTitle>
      <ContainerCard>
        <CardApps
          icon="/image/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR" 
          downloadUrl={downloadUrl} 
        />
        {/* <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR" 
          downloadUrl={""}        
          />
        <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR" 
          downloadUrl={""}        
          />
        <CardApps
          icon="src/assets/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR" 
          downloadUrl={""}        
          /> */}
      </ContainerCard>
    </Container>
  );
};
