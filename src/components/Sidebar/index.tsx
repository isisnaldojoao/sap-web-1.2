import { useState } from "react";
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
  RouteLink,
  OpenNavbarContainer,
  Logo2,
  ContainerCloseNavbar,
  ContainerTop,
} from "./styles";

export function Sidebar() {
  const [navbarOpen, setNavbarOpen] = useState(true); // Estado para controlar a visibilidade da navbar

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen); // Alterna entre mostrar e ocultar a navbar
  };

  return (
    <>
      {navbarOpen && (
        <Container>
          <ContainerTop>
            <ContainerCloseNavbar>
              <Logo src="/src/assets/logo-avb-white.svg" />
              <ButtonCloseNavbar onClick={toggleNavbar}>
                <IconCloseNavbar src="/src/assets/icons/close.svg" />
              </ButtonCloseNavbar>
            </ContainerCloseNavbar>

            <ContainerCardUser>
              <CardUser />
            </ContainerCardUser>

            <UserText>USUÁRIOS</UserText>

            <DivMenu>
              <GroupButton>
                <RouteLink to="/">
                  <ButtonMenu>
                    <IconsMenu
                      src="/src/assets/icons/edit.svg"
                      alt="icone de editar"
                    />
                    <TextButton>Editar usuários</TextButton>
                  </ButtonMenu>
                </RouteLink>

                <RouteLink to="/manager-permissions-levels">
                  <ButtonMenu>
                    <IconsMenu
                      src="/src/assets/icons/manage-access-levels.svg"
                      alt="icone de gerenciar níveis de acesso"
                    />
                    <TextButton>Gerenciar níveis de acesso</TextButton>
                  </ButtonMenu>
                </RouteLink>

                <RouteLink to="/download-apps">
                  <ButtonMenu>
                    <IconsMenu
                      src="/src/assets/icons/dowload-app.svg"
                      alt="icone de baixar app"
                    />
                    <TextButton>Baixar Apps</TextButton>
                  </ButtonMenu>
                </RouteLink>
              </GroupButton>
            </DivMenu>
          </ContainerTop>

          <ButtonExit>
            <IconButtonExit
              src="/src/assets/icons/exit.svg"
              alt="icone de sair"
            />
            <TextButtonExit>Sair</TextButtonExit>
          </ButtonExit>
        </Container>
      )}

      {!navbarOpen && (
        // Chama a função para alternar a visibilidade da navbar
        <OpenNavbarContainer>
          <ButtonOpenNavbar onClick={toggleNavbar}>
            <IconCloseNavbar src="/src/assets/icons/open-navbar.svg" />
          </ButtonOpenNavbar>
          <Logo2 src="/src/assets/AVB-02.svg" />
        </OpenNavbarContainer>
      )}
    </>
  );
}
