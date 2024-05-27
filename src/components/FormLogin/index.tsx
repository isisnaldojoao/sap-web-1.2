import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const auth = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };
  
  interface ResponseLogin {
    accessToken: string;
    payload: { email: string; username: string }
  }

  const validateForm = () => {
    console.log('email', email)
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (event:any) => {
    event.preventDefault();

    try {
      if (!validateForm()) {
        return;
      } 
           
      await auth.authenticate(email, password);
      
      navigate("/home");

    } catch (error) {
      setError('Houve um erro ao fazer login. Verifique suas credenciais e tente novamente.');
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <Container>
      <img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

      <div className="container-title">
        <h2>Boas Vindas!</h2>
        <span>Faça login para continuar</span>
      </div>

      <Form onSubmit={handleLogin}>
        <ContainerInputLabel>
          <label>E-mail</label>
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContainerInputLabel>

        <ContainerInputLabel>
          <label>Senha</label>
          <input
            type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
