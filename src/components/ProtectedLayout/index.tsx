import { ReactNode } from "react";
import { useAuth } from "../../contexts/auth";

export function ProtectedLayout ({ children }: { children: ReactNode }) {
  const { logged } = useAuth();
  
  if (!logged) {
    return (
      <h1>Você não tem acesso a esta página</h1>
    );
  }
  
  return children;
};