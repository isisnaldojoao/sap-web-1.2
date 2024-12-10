import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Usuario } from '../../contexts/auth';
import { CardUser } from "../CardUser";
import {
  Container,
  ContainerCardUser,
  Logo,
  UserText,
  DivMenu,
  ButtonMenu,
  GroupButton,
  IconsMenu,
  TextButton,
  ButtonExit,
  IconButtonExit,
  TextButtonExit,
  ButtonCloseNavbar,
  IconCloseNavbar,
  ButtonOpenNavbar,
  OpenNavbarContainer,
  Logo2,
  ContainerCloseNavbar,
  ContainerTop,
} from "./styles";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import { getNivelLocalStorage } from "../../utils/auth";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [nivel, setNivel] = useState<number | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
    const storedNivel = getNivelLocalStorage();
    console.log('storedNivel:', storedNivel);
    setNivel(storedNivel);
    console.log('user', user, 'nivel', storedNivel);
  }, [user, navigate, nivel]);

  function handleLogout() {
    logout();
    navigate('/auth/login');
  }
  
  return (
    <>
      {isOpen && (
        <Container>
          <ContainerTop>
            <ContainerCloseNavbar>
              <Logo src="/src/assets/logo-avb-white.svg" />
              <ButtonCloseNavbar onClick={onToggle}>
                <IconCloseNavbar src="/src/assets/icons/close.svg" />
              </ButtonCloseNavbar>
            </ContainerCloseNavbar>

            <ContainerCardUser>
              <CardUser />
            </ContainerCardUser>

            <UserText>USUÁRIOS</UserText>

            <DivMenu>
              <GroupButton>
                {(user && nivel === 1 || nivel === 2) && (
                  <>
                    <ButtonMenu to="/app/users">
                      <IconsMenu
                        src="/src/assets/icons/edit.svg"
                        alt="icone de editar"
                      />
                      <TextButton>Editar usuários</TextButton>
                    </ButtonMenu>

                    <ButtonMenu to="/app/manager-permissions-levels">
                      <IconsMenu
                        src="/src/assets/icons/manage-access-levels.svg"
                        alt="icone de gerenciar níveis de acesso"
                      />
                      <TextButton>Gerenciar níveis de acesso</TextButton>
                    </ButtonMenu>
                  </>
                )}

                <ButtonMenu to="/app/download-apps">
                  <IconsMenu
                    src="/src/assets/icons/dowload-app.svg"
                    alt="icone de baixar app"
                  />
                  <TextButton>Baixar Apps</TextButton>
                </ButtonMenu>

                <ButtonMenu to="/app/AberturaDeChamados">
                  <IconsMenu
                    src="/src/assets/icons/icon-coletor.svg"
                    alt="icone de baixar app"
                  />
                  <TextButton>Abertura de Chamado</TextButton>
                </ButtonMenu>

                <ButtonMenu to="/app/dashboard-production">
                  <IconsMenu
                    src="/src/assets/dashboard.svg"
                    alt="icone de baixar app"
                  />
                  <TextButton>DashBoard de Produção</TextButton>
                </ButtonMenu>  


              </GroupButton>
            </DivMenu>
          </ContainerTop>

          <ButtonExit onClick={handleLogout}>
            <IconButtonExit
              src="/src/assets/icons/exit.svg"
              alt="icone de sair"
            />
            <TextButtonExit>Sair</TextButtonExit>
          </ButtonExit>
        </Container>
      )}

      {!isOpen && (
        // Chama a função para alternar a visibilidade da navbar
        <OpenNavbarContainer>
          <ButtonOpenNavbar onClick={onToggle}>
            <MdMenu style={{ color: 'white', fontSize: '26px' }} />
          </ButtonOpenNavbar>
          <Logo2 src="/src/assets/AVB-02.svg" />
        </OpenNavbarContainer>
      )}
    </>
  );
}
