import { FormEvent, useState } from "react";
import {
  ContainerInputLabel,
  Form
} from "./styles";
import { AlertSuccess } from "../AlertSuccess";

export function FormEditPermissionLevel() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function handleEditPermissionLevel(event: FormEvent) {
    event.preventDefault();

    setIsAlertOpen(true);
  }

  return (
    <>
      <AlertSuccess
        alertText="Alterações salvas com sucesso!"
        buttonText="Fechar"
        visible={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />

      <Form onSubmit={handleEditPermissionLevel}>
        <div>
          <ContainerInputLabel className="name">
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Nome" />
          </ContainerInputLabel>

          <ContainerInputLabel>
            <label htmlFor="accessLevel">Nível de acesso</label>
            <select name="accessLevel" id="accessLevel">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </ContainerInputLabel>

          <ContainerInputLabel>
            <span>Status</span>
            <div>
              <div>
                <input type="radio" id="active" name="status" value="active" defaultChecked />
                <label htmlFor="active">Ativo</label>
              </div>
              <div>
                <input type="radio" id="inactive" name="status" value="inactive" />
                <label htmlFor="inactive">Desativado</label>
              </div>
            </div>
          </ContainerInputLabel>
        </div>

        <button type="submit">Salvar alterações</button>
      </Form>
    </>
  );
}
