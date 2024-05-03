import {
  ButtonUniversal,
  Container,
  IconAlert,
  TextAlert,
  TextButtonUniversal,
} from "./styles";

export interface AlertProps {
  textAlert: string;
  buttonText: string;
}

export function Alert({ textAlert, buttonText }: AlertProps) {
  return (
    <Container>
      <IconAlert src="/src/assets/icons/alert.svg" />
      <TextAlert>{textAlert}</TextAlert>
      <ButtonUniversal>
        <TextButtonUniversal>{buttonText}</TextButtonUniversal>
      </ButtonUniversal>
    </Container>
  );
}
