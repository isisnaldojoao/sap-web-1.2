import {
  ButtonUniversal,
  Container,
  TextAlert,
  TextButtonUniversal,
} from "./styles";

export interface AlertProps {
  textAlert: string;
  buttonText: string;
}

export function AlertSucess({ textAlert, buttonText }: AlertProps) {
  return (
    <Container>
      <TextAlert>{textAlert}</TextAlert>
      <ButtonUniversal>
        <TextButtonUniversal>{buttonText}</TextButtonUniversal>
      </ButtonUniversal>
    </Container>
  );
}
