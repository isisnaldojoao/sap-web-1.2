import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";
import { User } from "../../pages/Users";
import { Alert } from "../Alert";
import { api } from "../../lib/axios";


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
      try {
        const response = await api.patch(`/usuarios/status-active/${selectedUser!.codigo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
          }
        });
      } catch (error) {
        console.log(error);
      }

      onActivateUser(selectedUser!.codigo);
      setIsLoading(false);
      setIsActivateUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeactivateUser() {
    try {
      setIsLoading(true);
      //console.log('selectedUser!.codigo', selectedUser!.codigo)
      // fazer request
      try {
        const response = await api.patch(`/usuarios/status-inactive/${selectedUser!.codigo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
          }
        });
      } catch (error) {
        console.log(error);
      }

      onDeactivateUser(selectedUser!.codigo);
      setIsLoading(false);
      setIsDeactivateUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
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
              <th style={{ width: '84px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.codigo}>
                <td>{user.codigo}</td>
                <td>{user.nome}</td>
                <td>{user.nomeDeUsuario}</td>
                <td>{user.email ?? '-'}</td>
                <td>{user.niveisDeAcesso.nome}</td>
                <td>{user.status === 'ativo' ? <StatusActive>Ativo</StatusActive> : <StatusInactive>Desativado</StatusInactive>}</td>
                <td>{new Date(user.ultimoLogin).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</td>
                <td>
                  <Actions>
                    <ButtonIcon type="button" onClick={() => navigate(`/app/users/${user.codigo}/edit`)}>
                      <Icon
                        src="/src/assets/icons/edit-icon.svg"
                        alt="ícone de editar usuário"
                      />
                    </ButtonIcon>
                    
                      {user.status === 'ativo' ? (
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
