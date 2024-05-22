import { useEffect } from "react";
import { ModalBody, Overlay } from "./styles";

export interface AlertSuccessProps {
  alertText: string;
  buttonText: string;
  visible: boolean;
  onClose: () => void;
}

export function AlertSuccess({ 
  alertText,
  buttonText,
  visible,
  onClose
}: AlertSuccessProps) {
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

        <h3>{alertText}</h3>

        <button
          type="button"
          className="primary"
          onClick={onClose}
        >
          {buttonText}
        </button>
      </ModalBody>
    </Overlay>
  );
}
