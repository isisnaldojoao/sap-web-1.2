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
import { useAuth } from "../../contexts/auth";

const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'E-mail inválido.' }),
  password: z
		.string()
		.min(1, { message: 'A senha é obrigatória.' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

// interface LoginResponse {
//   accessToken: string;
//   payload: { email: string; username: string }
// }

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [error, setError] = useState("");

  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const navigate = useNavigate(); 

  const { login } = useAuth();

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  async function handleLogin({ email, password }: LoginSchema) {

    if (isBlocked) {
      setError("Bloqueio por tentativas excessivas de acesso incorreto.");
      return;
    }

    setError("");
    try {
      await login({ email, password });
      console.log('authenticated');
      navigate('/home');
    } catch (error) {
      const attempts = loginAttempts + 1;
      setLoginAttempts(attempts);
      if (attempts >= 3) {
        setIsBlocked(true);
        setError("Bloqueio por tentativas excessivas de acesso incorreto.");
      } else {
        setError('Houve um erro ao fazer login. Verifique suas credenciais e tente novamente.');
      }
      //setError('Houve um erro ao fazer login. Verifique suas credenciais e tente novamente.');
      console.error('There was an error logging in!', error);
    }
  }

  return (
    <Container>
      <img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

      <div className="container-title">
        <h2>Boas Vindas!</h2>
        <span>Faça login para continuar</span>
      </div>

      <Form onSubmit={handleSubmit(handleLogin)}>
        <ContainerInputLabel>
          <label htmlFor="email">E-mail</label>
          <input 
            {...register('email')}
            type="email" 
            id="email"
            placeholder="E-mail"
            disabled={isBlocked} 
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
              disabled={isBlocked}
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

        {error && <span className="error">{error}</span>}
        
        <button type="submit">ENTRAR</button>

        <span>
          Não possui conta? <a>Solicitar acesso</a>
        </span>
      </Form>
    </Container>
  );
}
