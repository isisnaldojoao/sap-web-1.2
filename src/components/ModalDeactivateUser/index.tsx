import { useEffect } from "react";
import { ModalBody, Overlay } from "./styles";

interface ModalDeactivateUserProps {
  visible: boolean;
  onClose: () => void;
  onDeactivateUser: () => Promise<void>;
  isLoading: boolean;
}

export function ModalDeactivateUser({
  visible,
  onClose,
  onDeactivateUser,
  isLoading
}: ModalDeactivateUserProps) {
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

  return (
    <Overlay className="overlay">
      <ModalBody>
        <button className="close-modal" type="button" onClick={onClose}>
          <img src="/src/assets/icons/close-modal.svg" alt="Ícone de fechar modal" />
        </button>

        <img src="/src/assets/icons/alert.svg" />

        <h3>Deseja desativar este usuário?</h3>

        <button
          type="button"
          className="primary"
          disabled={isLoading}
          onClick={onDeactivateUser}
        >
          DESATIVAR
        </button>
      </ModalBody>
    </Overlay>
  );
}