import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Container,
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";

const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'E-mail inválido.' }),
  password: z
		.string()
		.min(1, { message: 'A senha é obrigatória.' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const auth = useAuth();
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

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

  function login({ email, password }: LoginSchema) {
    console.log({ email, password });
    navigate('/home')
  }

  return (
    <Container>
      <img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

      <div className="container-title">
        <h2>Boas Vindas!</h2>
        <span>Faça login para continuar</span>
      </div>

      <Form onSubmit={handleLogin(login)}>
        <ContainerInputLabel>
          <label htmlFor="email">E-mail</label>
          <input 
            {...register('email')}
            type="email" 
            id="email"
            placeholder="E-mail" 
          />
          {formState.errors?.email && (
            <span className="error">{formState.errors.email.message}</span>
          )}
        </ContainerInputLabel>

        <ContainerInputLabel>
          <label htmlFor="password">Senha</label>
          <div className="password">
            <input
              {...register('password')}
              type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
              id="password"
              placeholder="Senha"
            />
            <IconViewPassword
              src="/src/assets/icons/view.svg"
              onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
            />
          </div>
          {formState.errors?.password && (
            <span className="error">{formState.errors.password.message}</span>
          )}
        </ContainerInputLabel>
        
        <button type="submit">ENTRAR</button>

        <span>
          Não possui conta? <a>Solicitar acesso</a>
        </span>
      </Form>
    </Container>
  );
}
