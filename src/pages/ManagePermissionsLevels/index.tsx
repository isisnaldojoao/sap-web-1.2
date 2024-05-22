import { useState } from "react";
import { Container, Title } from "./styles";
import { TablePermissions } from "../../components/TablePermissions";

export interface Permission {
  code: string;
  name: string;
  accessLevel: number;
  status: 'active' | 'inactive';
}

const data: Permission[] = [
  { code: '1', name: 'Administrador', accessLevel: 1, status: 'active' },
  { code: '2', name: 'Supervisor', accessLevel: 2, status: 'active' },
  { code: '3', name: 'Operador', accessLevel: 3, status: 'inactive' },
  { code: '4', name: 'Auditores', accessLevel: 4, status: 'active' },
  { code: '5', name: 'Clientes', accessLevel: 5, status: 'inactive' }
];

export const ManagerPermissionsLevels = () => {
  const [permissions, setPermissions] = useState<Permission[]>(data);
  
  function handleActivatePermission(permissionCode: string) {
    setPermissions((prevState) => prevState.map((permission) => permission.code === permissionCode ? { ...permission, status: 'active' } : permission));
  }
  
  function handleDeactivatePermission(permissionCode: string) {
    setPermissions((prevState) => prevState.map((permission) => permission.code === permissionCode ? { ...permission, status: 'inactive' } : permission));
  }
  
  return (
    <Container>
      <Title>Gerenciar níveis de acesso</Title>
      <TablePermissions
        permissions={permissions}
        onActivatePermission={handleActivatePermission}
        onDeactivatePermission={handleDeactivatePermission}
      />
    </Container>
  );
};
