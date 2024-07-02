import { useState, useEffect } from "react";
import { TableUsers } from "../../components/TableUsers";
import { Container, Title } from "./styles";
import { api } from "../../lib/axios";

type Status = 'ativo' | 'inativo';

export interface NivelDeAcesso {
  codigo: string;
  nome: string;
  nivel: number;
  status: string;
}

export interface User {
  codigo: string;
  nome: string;
  nomeDeUsuario: string;
  email: string | null;
  niveisDeAcesso: NivelDeAcesso;
  status: Status;
  ultimoLogin: Date;
}


export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get<User[]>('/usuarios');

        const usersData = response.data.map((user) => ({
          ...user,
        }));
        setUsers(usersData);

      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  
  function handleActivateUser(userId: string) {
    setUsers((prevState) => prevState.map((user) => user.codigo === userId ? { ...user, status: 'ativo' } : user));
  }
  
  function handleDeactivateUser(userId: string) {
    setUsers((prevState) => prevState.map((user) => user.codigo === userId ? { ...user, status: 'inativo' } : user));
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Title>Editar usuários</Title>
      <TableUsers 
        users={users}
        onActivateUser={handleActivateUser}
        onDeactivateUser={handleDeactivateUser}
      />
    </Container>
  );
};
