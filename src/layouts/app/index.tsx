import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";

export const AppLayout = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};