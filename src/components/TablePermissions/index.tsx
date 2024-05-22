import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actions, ButtonIcon, Container, Icon, StatusActive, StatusInactive, Table } from "./styles";
import { Permission } from "../../pages/ManagePermissionsLevels";
import { Alert } from "../Alert";

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

      onActivatePermission(selectedPermission!.code);
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

      onDeactivatePermission(selectedPermission!.code);
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
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.code}>
                <td>{permission.code}</td>
                <td>{permission.name}</td>
                <td>{permission.accessLevel}</td>
                <td>{permission.status === 'active' ? <StatusActive>Ativo</StatusActive> : <StatusInactive>Desativado</StatusInactive>}</td>
                <td>
                  <Actions>
                    <ButtonIcon type="button" onClick={() => navigate(`/permissions/${permission.code}/edit`)}>
                      <Icon
                        src="/src/assets/icons/edit-icon.svg"
                        alt="ícone de editar nível de permissão"
                      />
                    </ButtonIcon>
                    
                      {permission.status === 'active' ? (
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
