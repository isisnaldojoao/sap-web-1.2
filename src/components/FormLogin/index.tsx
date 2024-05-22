import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };
  
  interface ResponseLogin {
    accessToken: string;
    payload: { email: string; username: string }
  }

  const validateForm = () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (event:any) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let urlBase = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${urlBase}/login`, {
        email,
        password
      });
      
      const { accessToken } = response.data as ResponseLogin;
      localStorage.setItem('token', accessToken);
      console.log('Logged in successfully:', accessToken);
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
