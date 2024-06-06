import { useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { Sidebar } from "../../components/Sidebar";
import { useAuth } from "../../contexts/auth";
import { api } from "../../lib/axios";
import { Container, Main } from "./styles";

export const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const { logged } = useAuth();

  // const navigate = useNavigate();

  // useLayoutEffect(() => {
  //   if (!logged) {
  //     navigate('/login', { replace: true });
  //   }

  //   const interceptorId = api.interceptors.response.use(
	// 		(response) => response,
	// 		(error) => {
        
  //       console.log(error)
	// 			if (isAxiosError(error)) {
	// 				const status = error.response?.status

	// 				if (status === 401) {
	// 					navigate('/login', {
	// 						replace: true,
	// 					})
	// 				}
	// 			}

	// 			return Promise.reject(error)
	// 		},
	// 	)

	// 	// Limpe o efeito colateral quando o componente for desmontado
	// 	return () => {
	// 		api.interceptors.response.eject(interceptorId)
	// 	}
  // }, [logged, navigate]);

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Main $isOpen={isSidebarOpen}>
        <Outlet />
      </Main>
    </Container>
  );
};