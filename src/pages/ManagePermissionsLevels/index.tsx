import { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import { TablePermissions } from "../../components/TablePermissions";
import axios from "axios";
import { api } from "../../lib/axios";

export interface Permission {
  codigo: string;
  nome: string;
  nivel: number;
  status: 'ativo' | 'inativo';
}


export const ManagerPermissionsLevels = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchPermissions = async () => {  
      try {
       // const response = await axios.get<Permission[]>('http://:3000/niveis-de-acesso');
        const response = await api.get<Permission[]>('/niveis-de-acesso', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('@aco-verde-br:token')}`,
          }

        })
        const permissionsData = response.data.map((permission) => ({
          ...permission,
        }));
        setPermissions(permissionsData);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      } finally {
        setLoading(false);
      };
    };
    fetchPermissions();
}, []);
  
  function handleActivatePermission(permissionCode: string) {
    setPermissions((prevState) => prevState.map((permission) => permission.codigo === permissionCode ? { ...permission, status: 'ativo' } : permission));
  }
  
  function handleDeactivatePermission(permissionCode: string) {
    setPermissions((prevState) => prevState.map((permission) => permission.codigo === permissionCode ? { ...permission, status: 'inativo' } : permission));
  }
  
  if (loading) {
    return <div>Carregando...</div>;
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
