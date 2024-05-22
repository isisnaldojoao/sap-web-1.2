import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Container,
  ContainerInputLabel,
  IconViewPassword,
  Form
} from "./styles";

const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'E-mail inválido.' }),
  password: z
		.string()
		.min(1, { message: 'A senha é obrigatória.' }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  function login({ email, password }: LoginSchema) {
    console.log({ email, password });
  }

  return (
    <Container>
      <img src="/src/assets/AVB-02.svg" alt="logo-aco-verde-brasil" />

      <div className="container-title">
        <h2>Boas Vindas!</h2>
        <span>Faça login para continuar</span>
      </div>

      <Form onSubmit={handleSubmit(login)}>
        <ContainerInputLabel>
          <label>E-mail</label>
          <input 
            {...register('email')}
            type="email" 
            placeholder="E-mail" 
          />
          {formState.errors?.email && (
            <span className="error">{formState.errors.email.message}</span>
          )}
        </ContainerInputLabel>

        <ContainerInputLabel>
          <label>Senha</label>
          <div className="password">
            <input
              {...register('password')}
              type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
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
