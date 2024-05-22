import { useState } from "react";
import { Container, ContainerInputLabel, Form, IconViewPassword, Title } from "./styles";

export const EditUser = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  return (
    <Container>
      <Title>Editar usuários</Title>
      <Form>
        <div>
          <ContainerInputLabel className="name">
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Nome" />
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="E-mail" />
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="user">Usuário</label>
            <input type="text" placeholder="Usuário" />
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
              name="password"
              id="password"
              placeholder="Senha"
            />
            <IconViewPassword
              src="/src/assets/icons/view.svg"
              onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
            />
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="accessLevel">Nível de acesso</label>
            <select name="accessLevel" id="accessLevel">
              <option value="operator">Operador</option>
              <option value="supervisor">Supervisor</option>
              <option value="admin">Administrador</option>
            </select>
          </ContainerInputLabel>
        </div>

        <button type="submit">Salvar alterações</button>
      </Form>
    </Container>
  );
};
