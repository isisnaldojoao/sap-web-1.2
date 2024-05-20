import { useState } from "react";
import {
  ButtonLogin,
  Container,
  Img,
  Input,
  Label,
  LinkAcess,
  SubTitle,
  Title,
  P,
  ContainerCard,
  ContainerTitles,
  ContainerForm,
  InputLabelGroup,
  ContainerInputLabelGroup,
  IconViewPassword,
} from "./styles";

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  return (
    <Container>
      <ContainerCard>
        <Img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

        <ContainerTitles>
          <Title>Boas Vindas!</Title>
          <SubTitle>Faça login para continuar</SubTitle>
        </ContainerTitles>

        <ContainerForm>
          <ContainerInputLabelGroup>
            <InputLabelGroup>
              <Label>E-mail</Label>
              <Input type="email" placeholder="E-mail" />
            </InputLabelGroup>

            <InputLabelGroup>
              <Label>Senha</Label>
              <Input
                type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                placeholder="Senha"
              />
              <IconViewPassword
                src="/src/assets/icons/view.svg"
                onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
              />
            </InputLabelGroup>
          </ContainerInputLabelGroup>
          
          <ButtonLogin>ENTRAR</ButtonLogin>

          <P>
            Não possui conta? <LinkAcess>Solicitar acesso</LinkAcess>
          </P>
        </ContainerForm>
      </ContainerCard>
    </Container>
  );
}
