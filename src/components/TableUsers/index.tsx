import { useState } from "react";
import { ModalActivateUser } from "../ModalActivateUser";
import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";
import { User } from "../../pages/EditUsers";
import { ModalDeactivateUser } from "../ModalDeactivateUser";

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

  return (
    <>
      <ModalActivateUser
        visible={isActivateUserModalOpen}
        onClose={handleCloseActivateUserModal}
        onActivateUser={handleActivateUser}
        isLoading={isLoading}
      />

      <ModalDeactivateUser
        visible={isDeactivateUserModalOpen}
        onClose={handleCloseDeactivateUserModal}
        onDeactivateUser={handleDeactivateUser}
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
                          alt="ícone de desativar usuário"
                          onClick={() => handleOpenDeactivateUserModal(user)}
                        />
                      ) : (
                        <Icon
                          src="/src/assets/icons/active-icon.svg"
                          alt="ícone de ativar usuário"
                          onClick={() => handleOpenActivateUserModal(user)}
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
    </>
  );
};
