import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";

type AccessLevel = 'admin' | 'operator' | 'supervisor';
type Status = 'active' | 'inactive';

interface User {
  id: string;
  name: string;
  user: string;
  email: string | null;
  accessLevel: AccessLevel;
  status: Status;
  lastLogin: Date;
}

const users: User[] = [
  { id: '1', name: 'Marcos Teixeira', user: 'marcos', email: 'marcos@usuario.com', accessLevel: 'operator', status: 'active', lastLogin: new Date('2023-05-01T10:20:30Z') },
  { id: '2', name: 'Administrador', user: 'Administrador', email: null, accessLevel: 'admin', status: 'active', lastLogin: new Date('2023-04-12T08:15:45Z') },
  { id: '3', name: 'João Pereira', user: 'joao', email: 'joao@usuario.com', accessLevel: 'supervisor', status: 'active', lastLogin: new Date('2023-03-23T12:45:00Z') },
  { id: '4', name: 'Maria Souza', user: 'maria', email: 'maria@usuario.com', accessLevel: 'operator', status: 'active', lastLogin: new Date('2023-02-14T07:30:20Z') },
  { id: '6', name: 'Fernanda Oliveira', user: 'fernanda', email: 'fernanda@usuario.com', accessLevel: 'operator', status: 'inactive', lastLogin: new Date('2022-12-25T11:05:55Z') },
  { id: '7', name: 'Pedro Santos', user: 'pedro', email: 'pedro@usuario.com', accessLevel: 'supervisor', status: 'active', lastLogin: new Date('2022-11-14T04:20:30Z') },
  { id: '9', name: 'Ricardo Mendes', user: 'ricardo', email: 'ricardo@usuario.com', accessLevel: 'operator', status: 'active', lastLogin: new Date('2022-09-22T06:45:00Z') },
  { id: '10', name: 'Juliana Costa', user: 'juliana', email: 'juliana@usuario.com', accessLevel: 'supervisor', status: 'inactive', lastLogin: new Date('2022-08-11T10:30:20Z') }
];

const accessLevel = {
  admin: 'Administrador',
  operator: 'Operador',
  supervisor: 'Supervisor'
}

export const TableUsers = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>E-mail</th>
            <th>Nível de acesso</th>
            <th>Status</th>
            <th>Último login</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.user}</td>
              <td>{user.email ?? '-'}</td>
              <td>{accessLevel[user.accessLevel]}</td>
              <td>{user.status === 'active' ? <StatusActive>Ativo</StatusActive> : <StatusInactive>Desativado</StatusInactive>}</td>
              <td>{user.lastLogin.toLocaleString()}</td>
              <td>
                <Actions>
                  <ButtonIcon>
                    <Icon
                      src="/src/assets/icons/edit-icon.svg"
                      alt="ícone de editar usuário"
                    />
                  </ButtonIcon>
                  <ButtonIcon>
                    {user.status === 'active' ? (
                      <Icon
                        src="/src/assets/icons/inactive-icon.svg"
                        alt="ícone de deletar usuário"
                      />
                    ) : (
                      <Icon
                        src="/src/assets/icons/active-icon.svg"
                        alt="ícone de deletar usuário"
                      />
                    )}
                  </ButtonIcon>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
