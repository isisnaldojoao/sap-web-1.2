import { Container, Title, Form, Input, TextArea, Select, Button } from "./styles";
import { CardApps } from "../../components/CardApps";
import { useState } from "react";

export const AberturaDeChamados = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      setor: "",
      ccusto: "",
      equipamento: "",
      message: "",
      possui: "",
      temProblema: "",
      problemas: "",
      file: null as File | null,
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFormData((prevData) => ({ ...prevData, file: e.target.files[0] }));
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic
    };
  
    return (
      <Container>
        <Title>Abertura de Chamados</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            type="text"
            name="setor"
            value={formData.setor}
            onChange={handleChange}
            placeholder="Setor"
            required
          />
          <Input
            type="text"
            name="ccusto"
            value={formData.ccusto}
            onChange={handleChange}
            placeholder="Centro de Custo"
            required
          />
          <TextArea
            name="equipamento"
            value={formData.equipamento}
            onChange={handleChange}
            placeholder="Equipamento(s) solicitado(s)"
            rows={3}
            required
          />
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Descreva a necessidade do(s) item(s)"
            rows={3}
            required
          />
          <Select name="possui" value={formData.possui} onChange={handleChange} required>
            <option value="">Já possui algum equipamento solicitado?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </Select>
          {formData.possui === "Sim" && (
            <>
              <Select name="temProblema" value={formData.temProblema} onChange={handleChange} required>
                <option value="">O equipamento tem problemas?</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </Select>
              {formData.temProblema === "Sim" && (
                <>
                  <TextArea
                    name="problemas"
                    value={formData.problemas}
                    onChange={handleChange}
                    placeholder="Descreva o(s) problema(s)"
                    rows={3}
                    required
                  />
                  <Input type="file" name="file" onChange={handleFileChange} required />
                </>
              )}
            </>
          )}
          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    );
  };