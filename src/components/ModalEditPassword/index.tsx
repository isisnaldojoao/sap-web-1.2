import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdClose } from "react-icons/md";
import { ContainerInputLabel, Form, IconViewPassword, ModalBody, Overlay } from "./styles";

const editPasswordSchema = z.object({
  password: z
		.string()
		.min(6, { message: 'A senha precisa ter no mínimo 6 caracteres.' }),
  confirmPassword: z
		.string()
		.min(6, { message: 'A confirmação de senha precisa ter no mínimo 6 caracteres.' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem.',
  path: ['confirmPassword'],
});

type EditPasswordSchema = z.infer<typeof editPasswordSchema>;

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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para controlar a visibilidade da senha
  
  const { register, handleSubmit, formState: { errors } } = useForm<EditPasswordSchema>({
		resolver: zodResolver(editPasswordSchema),
	})

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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Alterna entre mostrar e ocultar a senha
  };

  function editPassword(data: EditPasswordSchema) {
    console.log(data);
    onClick();
  }

  return (
    <Overlay className="overlay">
      <ModalBody>
        <button className="close-modal" type="button" onClick={onClose}>
          <MdClose style={{ color: 'black', fontSize: '24px' }} />
        </button>

        <h3>Mudar minha senha</h3>

        <Form onSubmit={handleSubmit(editPassword)}>
          <div>
            <ContainerInputLabel>
              <label htmlFor="password">Nova senha</label>
              <div className="password">
                <input
                  {...register('password')}
                  type={showPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                  id="password"
                  placeholder="Senha"
                />
                <IconViewPassword
                  src="/src/assets/icons/view.svg"
                  onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
                />
              </div>
              {errors?.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </ContainerInputLabel>

            <ContainerInputLabel>
              <label htmlFor="confirmPassword">Repita a nova senha</label>
              <div className="password">
                <input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? "text" : "password"} // Altera o tipo do input para "text" se showPassword for true
                  id="confirmPassword"
                  placeholder="Repita a nova senha"
                />
                <IconViewPassword
                  src="/src/assets/icons/view.svg"
                  onClick={toggleConfirmPasswordVisibility} // Chama a função para alternar a visibilidade da senha ao clicar no ícone
                />
              </div>
              {errors?.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}
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