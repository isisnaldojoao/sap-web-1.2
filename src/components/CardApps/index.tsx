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
}

export function CardApps({ icon, textMain, textSecondary }: CardAppProps) {
  return (
    <Container>
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
