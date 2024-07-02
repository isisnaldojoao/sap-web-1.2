import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";
import { Permission } from "../../pages/ManagePermissionsLevels";
import { Alert } from "../Alert";
import { api } from "../../lib/axios";

interface TablePermissionsProps {
  permissions: Permission[];
  onActivatePermission: (permissionCode: string) => void;
  onDeactivatePermission: (permissionCode: string) => void;
}

export function TablePermissions({
  permissions,
  onActivatePermission,
  onDeactivatePermission
}: TablePermissionsProps) {
  const navigate = useNavigate();
  const [isActivatePermissionModalOpen, setIsActivatePermissionModalOpen] = useState(false);
  const [isDeactivatePermissionModalOpen, setIsDeactivatePermissionModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<null | Permission>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenActivatePermissionModal(permission: Permission) {
    setSelectedPermission(permission);
    setIsActivatePermissionModalOpen(true);
  }

  function handleCloseActivatePermissionModal() {
    setIsActivatePermissionModalOpen(false);
    setSelectedPermission(null);
  }

  function handleOpenDeactivatePermissionModal(permission: Permission) {
    setSelectedPermission(permission);
    setIsDeactivatePermissionModalOpen(true);
  }

  function handleCloseDeactivatePermissionModal() {
    setIsDeactivatePermissionModalOpen(false);
    setSelectedPermission(null);
  }

  async function handleActivatePermission() {
    try {
      setIsLoading(true);

      // fazer request
      try {
        const response = await api.patch(`/niveis-de-acesso/status-active/${selectedPermission!.codigo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
          }
        });
      } catch (error) {
        console.log(error);
      }

      onActivatePermission(selectedPermission!.codigo);
      setIsLoading(false);
      setIsActivatePermissionModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeactivatePermission() {
    try {
      setIsLoading(true);

      // fazer request
      try {
        const response = await api.patch(`/niveis-de-acesso/status-inactive/${selectedPermission!.codigo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
          }
        });
      } catch (error) {
        console.log(error);
      }

      onDeactivatePermission(selectedPermission!.codigo);
      setIsLoading(false);
      setIsDeactivatePermissionModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Alert
        alertText="Deseja reativar este nível de permissão?"
        buttonText="Reativar"
        visible={isActivatePermissionModalOpen}
        onClose={handleCloseActivatePermissionModal}
        onClick={handleActivatePermission}
        isLoading={isLoading}
      />

      <Alert
        alertText="Deseja desativar este nível de permissão?"
        buttonText="Desativar"
        visible={isDeactivatePermissionModalOpen}
        onClose={handleCloseDeactivatePermissionModal}
        onClick={handleDeactivatePermission}
        isLoading={isLoading}
      />

      <Container>
        <Table>
          <thead>
            <tr>
              <th>Cód.</th>
              <th>Nome</th>
              <th>Nível de acesso</th>
              <th>Status</th>
              <th style={{ width: '84px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.codigo}>
                <td>{permission.codigo}</td>
                <td>{permission.nome}</td>
                <td>{permission.nivel}</td>
                <td>{permission.status === 'ativo' ? <StatusActive>Ativo</StatusActive> : <StatusInactive>Desativado</StatusInactive>}</td>
                <td>
                  <Actions>
                    <ButtonIcon type="button" onClick={() => navigate(`/app/manager-permissions-levels/${permission.codigo}/edit`)}>
                      <Icon
                        src="/src/assets/icons/edit-icon.svg"
                        alt="ícone de editar nível de permissão"
                      />
                    </ButtonIcon>
                    
                      {permission.status === 'ativo' ? (
                        <ButtonIcon type="button" onClick={() => handleOpenDeactivatePermissionModal(permission)}>
                          <Icon
                            src="/src/assets/icons/inactive-icon.svg"
                            alt="ícone de desativar nível de permissão"
                          />
                        </ButtonIcon>
                      ) : (
                        <ButtonIcon type="button" onClick={() => handleOpenActivatePermissionModal(permission)}>
                          <Icon
                            src="/src/assets/icons/active-icon.svg"
                            alt="ícone de ativar nível de permissão"
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
