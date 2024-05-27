import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { ModalBody, Overlay } from "./styles";

interface AlertProps {
  alertText: string;
  buttonText: string;
  visible: boolean;
  onClose: () => void;
  onClick: () => Promise<void>;
  isLoading: boolean;
}

export function Alert({
  alertText,
  buttonText,
  visible,
  onClose,
  onClick,
  isLoading
}: AlertProps) {
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
          <MdClose style={{ color: 'black', fontSize: '24px' }} />
        </button>

        <img src="/src/assets/icons/alert.svg" />

        <h3>{alertText}</h3>

        <button
          type="button"
          className="primary"
          disabled={isLoading}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </ModalBody>
    </Overlay>
  );
}