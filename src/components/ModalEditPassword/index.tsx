import { FormEvent, useEffect, useState } from "react";
import { ContainerInputLabel, Form, IconViewPassword, ModalBody, Overlay } from "./styles";

interface ModalEditPasswordProps {
  visible: boolean;
  onClose: () => void;
  onClick: () => void;
}

export function ModalEditPassword({
  visible,
  onClose,
  onClick
}: ModalEditPasswordProps) {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const [showRepeatPassword, setShowRepeatPassword] = useState(false); // Estado para controlar a visibilidade da senha

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        onClose();
      }
    }

    function handleClickOverlay(event: MouseEvent) {
      if (event.target === document.querySelector('.overlay')) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOverlay);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOverlay);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e ocultar a senha
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword); // Alterna entre mostrar e ocultar a senha
  };

  function handleEditPassword(event: FormEvent) {
    event.preventDefault();

    onClick();
  }

  return (
    <Overlay className="overlay">
      <ModalBody>
        <button className="close-modal" type="button" onClick={onClose}>
          <img src="/src/assets/icons/close-modal.svg" alt="Ícone de fechar modal" />
        </button>

        <h3>Mudar minha senha</h3>

        <Form onSubmit={handleEditPassword}>
          <div>
            <ContainerInputLabel>
              <label htmlFor="password">Nova senha</label>
              <input
                type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                name="password"
                id="password"
                placeholder="Senha"
              />
              <IconViewPassword
                src="/src/assets/icons/view.svg"
                onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
              />
            </ContainerInputLabel>

            <ContainerInputLabel>
              <label htmlFor="repeatPassword">Repita a nova senha</label>
              <input
                type={showRepeatPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repita a nova senha"
              />
              <IconViewPassword
                src="/src/assets/icons/view.svg"
                onClick={toggleRepeatPasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
              />
            </ContainerInputLabel>
          </div>

          <button type="submit">
            Mudar a senha
          </button>
        </Form>
      </ModalBody>
    </Overlay>
  );
}