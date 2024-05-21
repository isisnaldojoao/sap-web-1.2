import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Container, Main } from "./styles";

export const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para controlar a visibilidade da navbar

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna entre mostrar e ocultar a navbar
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onToggle={handleToggleSidebar} />
      <Main $isOpen={isSidebarOpen}>
        <Outlet />
      </Main>
    </Container>
  );
};