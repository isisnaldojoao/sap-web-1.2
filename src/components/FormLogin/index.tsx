import { useState } from "react";
import {
  Container,
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  return (
    <Container>
      <img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

      <div className="container-title">
        <h2>Boas Vindas!</h2>
        <span>Faça login para continuar</span>
      </div>

      <Form>
        <ContainerInputLabel>
          <label>E-mail</label>
          <input type="email" placeholder="E-mail" />
        </ContainerInputLabel>

        <ContainerInputLabel>
          <label>Senha</label>
          <input
            type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
            placeholder="Senha"
          />
          <IconViewPassword
            src="/src/assets/icons/view.svg"
            onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
          />
        </ContainerInputLabel>
        
        <button type="submit">ENTRAR</button>

        <span>
          Não possui conta? <a>Solicitar acesso</a>
        </span>
      </Form>
    </Container>
  );
}
