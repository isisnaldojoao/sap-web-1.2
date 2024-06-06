import { useState, useEffect } from "react";
import { TableUsers } from "../../components/TableUsers";
import { Container, Title } from "./styles";
import axios from "axios";

//type AccessLevel = 'admin' | 'operator' | 'supervisor';
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

/*const data: User[] = [
  { id: '1', name: 'Marcos Teixeira', user: 'marcos', email: 'marcos@usuario.com', NivelDeAcesso: 'operator', status: 'active', lastLogin: new Date('2023-05-01T10:20:30Z') },
  { id: '2', name: 'Administrador', user: 'Administrador', email: null, accessLevel: 'admin', status: 'active', lastLogin: new Date('2023-04-12T08:15:45Z') },
  { id: '3', name: 'João Pereira', user: 'joao', email: 'joao@usuario.com', accessLevel: 'supervisor', status: 'active', lastLogin: new Date('2023-03-23T12:45:00Z') },
  { id: '4', name: 'Maria Souza', user: 'maria', email: 'maria@usuario.com', accessLevel: 'operator', status: 'active', lastLogin: new Date('2023-02-14T07:30:20Z') },
  { id: '6', name: 'Fernanda Oliveira', user: 'fernanda', email: 'fernanda@usuario.com', accessLevel: 'operator', status: 'inactive', lastLogin: new Date('2022-12-25T11:05:55Z') },
  { id: '7', name: 'Pedro Santos', user: 'pedro', email: 'pedro@usuario.com', accessLevel: 'supervisor', status: 'active', lastLogin: new Date('2022-11-14T04:20:30Z') },
  { id: '9', name: 'Ricardo Mendes', user: 'ricardo', email: 'ricardo@usuario.com', accessLevel: 'operator', status: 'active', lastLogin: new Date('2022-09-22T06:45:00Z') },
  { id: '10', name: 'Juliana Costa', user: 'juliana', email: 'juliana@usuario.com', accessLevel: 'supervisor', status: 'inactive', lastLogin: new Date('2022-08-11T10:30:20Z') }
];*/

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:3000/usuarios');

        console.log(response.data);

        const usersData = response.data.map((user) => ({
          ...user,
        }));
        setUsers(usersData);
        console.log(usersData);
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
