import {
  Container,
  ContainerElements,
  ContainerTexts,
  IconApp,
  TextMain,
  TextSecondary,
} from "./styles";

export interface CardAppProps {
  icon: string;
  textMain: string;
  textSecondary: string;
  downloadUrl: string;
}

export function CardApps({ icon, textMain, textSecondary, downloadUrl }: CardAppProps) {

  const handleDownload = () => {
    window.location.href = downloadUrl;
  };

  return (
    <Container onClick={handleDownload} style={{ cursor: 'pointer' }}>
      <ContainerElements>
        <IconApp src={icon} />
        <ContainerTexts>
          <TextMain>{textMain}</TextMain>
          <TextSecondary>{textSecondary}</TextSecondary>
        </ContainerTexts>
      </ContainerElements>
    </Container>
  );
}
