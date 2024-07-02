import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar";
import { Container, Main } from "./styles";

export const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Main $isOpen={isSidebarOpen}>
        <Outlet />
      </Main>
    </Container>
  );
};