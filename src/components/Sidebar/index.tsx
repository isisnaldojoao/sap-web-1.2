import { CardUser } from "../CardUser";
import { useNavigate } from "react-router-dom";
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

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
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
                <ButtonMenu to="/users">
                  <IconsMenu
                    src="/src/assets/icons/edit.svg"
                    alt="icone de editar"
                  />
                  <TextButton>Editar usuários</TextButton>
                </ButtonMenu>

                <ButtonMenu to="/manager-permissions-levels">
                  <IconsMenu
                    src="/src/assets/icons/manage-access-levels.svg"
                    alt="icone de gerenciar níveis de acesso"
                  />
                  <TextButton>Gerenciar níveis de acesso</TextButton>
                </ButtonMenu>

                <ButtonMenu to="/download-apps">
                  <IconsMenu
                    src="/src/assets/icons/dowload-app.svg"
                    alt="icone de baixar app"
                  />
                  <TextButton>Baixar Apps</TextButton>
                </ButtonMenu>
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

      {!isOpen && (
        // Chama a função para alternar a visibilidade da navbar
        <OpenNavbarContainer>
          <ButtonOpenNavbar onClick={onToggle}>
            <IconCloseNavbar src="/src/assets/icons/open-navbar.svg" />
          </ButtonOpenNavbar>
          <Logo2 src="/src/assets/AVB-02.svg" />
        </OpenNavbarContainer>
      )}
    </>
  );
}
