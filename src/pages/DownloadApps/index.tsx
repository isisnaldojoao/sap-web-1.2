import { CardApps } from "../../components/CardApps";
import { Container, ContainerCards, Title } from "./styles";

export const DownloadApps = () => {

 // const downloadUrl = "http://localhost:3000/download-app/apk";
    const downloadUrl = "http://192.168.0.14:3000/download-app/apk";
    // const downloadUrl2 = "http://192.168.0.14:3000/download-app/apk";
  return (
    <Container>
      <Title>Baixar Apps</Title>
      <ContainerCards>
        <CardApps
          icon="/image/icons/icon-coletor.svg"
          textMain="Aplicação Coletor Offline"
          textSecondary="BAIXAR"
          downloadUrl={downloadUrl}
        />
        {/* <CardApps
          icon="/image/icons/icon-coletor.svg"
          textMain="123 testando"
          textSecondary="BAIXAR"
          downloadUrl={downloadUrl2}
        /> */}
      </ContainerCards>
    </Container>
  );
};
