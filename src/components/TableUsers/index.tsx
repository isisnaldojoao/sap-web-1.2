import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";
import { User } from "../../pages/Users";
import { Alert } from "../Alert";

const accessLevel = {
  admin: 'Administrador',
  operator: 'Operador',
  supervisor: 'Supervisor'
}

interface TableUsersProps {
  users: User[];
  onActivateUser: (userId: string) => void;
  onDeactivateUser: (userId: string) => void;
}

export function TableUsers({
  users,
  onActivateUser,
  onDeactivateUser
}: TableUsersProps) {
  const navigate = useNavigate();
  const [isActivateUserModalOpen, setIsActivateUserModalOpen] = useState(false);
  const [isDeactivateUserModalOpen, setIsDeactivateUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<null | User>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenActivateUserModal(user: User) {
    setSelectedUser(user);
    setIsActivateUserModalOpen(true);
  }

  function handleCloseActivateUserModal() {
    setIsActivateUserModalOpen(false);
    setSelectedUser(null);
  }

  function handleOpenDeactivateUserModal(user: User) {
    setSelectedUser(user);
    setIsDeactivateUserModalOpen(true);
  }

  function handleCloseDeactivateUserModal() {
    setIsDeactivateUserModalOpen(false);
    setSelectedUser(null);
  }

  async function handleActivateUser() {
    try {
      setIsLoading(true);

      // fazer request

      onActivateUser(selectedUser!.id);
      setIsLoading(false);
      setIsActivateUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeactivateUser() {
    try {
      setIsLoading(true);

      // fazer request

      onDeactivateUser(selectedUser!.id);
      setIsLoading(false);
      setIsDeactivateUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEditUser() {
    navigate('/users/edit', { replace: true ,state: selectedUser });
  }

  return (
    <>
      <Alert
        alertText="Deseja reativar este usuário?"
        buttonText="Reativar"
        visible={isActivateUserModalOpen}
        onClose={handleCloseActivateUserModal}
        onClick={handleActivateUser}
        isLoading={isLoading}
      />

      <Alert
        alertText="Deseja desativar este usuário?"
        buttonText="Desativar"
        visible={isDeactivateUserModalOpen}
        onClose={handleCloseDeactivateUserModal}
        onClick={handleDeactivateUser}
        isLoading={isLoading}
      />

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
                    <ButtonIcon type="button" onClick={handleEditUser}>
                      <Icon
                        src="/src/assets/icons/edit-icon.svg"
                        alt="ícone de editar usuário"
                      />
                    </ButtonIcon>
                    
                      {user.status === 'active' ? (
                        <ButtonIcon type="button" onClick={() => handleOpenDeactivateUserModal(user)}>
                          <Icon
                            src="/src/assets/icons/inactive-icon.svg"
                            alt="ícone de desativar usuário"
                          />
                        </ButtonIcon>
                      ) : (
                        <ButtonIcon type="button" onClick={() => handleOpenActivateUserModal(user)}>
                          <Icon
                            src="/src/assets/icons/active-icon.svg"
                            alt="ícone de ativar usuário"
                          />
                        </ButtonIcon>
                      )}
                  </Actions>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
