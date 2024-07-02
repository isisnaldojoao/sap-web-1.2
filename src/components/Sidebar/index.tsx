import { useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Usuario } from './usuario';
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
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
    console.log(user);
  }, [user]);

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
                {(user && (user as Usuario).nivel === 1 || user && (user as Usuario).nivel === 2) && (
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
