import React from "react";
import { LogoImage,Header ,Container, Table, TableHeader, TableRow, TableCellHeader, TableCell, TableCellBold, TableCellGreen, TableCellRed, TableCellBlue, TableCellOrange, TableCellRedLight, FadeUp } from "./styles"; // importando os estilos

export const DashboardProduction = () => {

  // Objeto que referência os meus materiais, usado para simular a API
  const Material = [
    { id: 1, Tipo: "Produção", Material: "80-000338", Descrição: "AVB Vergalhão CA50 Barra 12 M ⌀ 10 mm EN", OP: 1955452, Produzida: 27111, Progamada: 27111, Máquina: "TREF-02", Porcentagem: 100, Corrida: "J001828EN" },
    { id: 2, Tipo: "Consumo", Material: "80-000694", Descrição: "AVB Vergalhão CA50 Rolo ⌀ 10 mm", OP: 1955452, Produzida: 22000, Progamada: 27111, Máquina: "TREF-02", Porcentagem: 75, Corrida: "J001828EN" },
    { id: 3, Tipo: "Produção", Material: "80-000495", Descrição: "AVB Vergalhão CA60 Carretel ⌀ 6,0 mm", OP: 195486, Produzida: 17000, Progamada: 25000, Máquina: "TREF-04", Porcentagem: 50, Corrida: "J001048TF" },
    { id: 4, Tipo: "Consumo", Material: "80-000589", Descrição: "FIO MÁQUINA AVB 1010 L05 Rolo ⌀ 8mm ", OP: 1955452, Produzida: 20000, Progamada: 25000, Máquina: "TREF-04", Porcentagem: 25, Corrida: "J007530" }
  ];

  // Lógica para mudar o background conforme a porcentagem de produção
  function getBackgroundColor(percentage: number): string {
    if (percentage >= 100) {
      return "#88A58F"; // Verde
    } else if (percentage >= 75) {
      return "#3b82f6"; // Azul
    } else if (percentage >= 50) {
      return "#fb923c"; // Laranja
    } else if (percentage >= 25) {
      return "#fca5a5"; // Vermelho Claro
    } else {
      return "#f87171"; // Vermelho
    }
  }

  // Lógica para mudar o background caso a produção seja igual ao volume programado
  function getBackgroundProduction(production: number, programate: number): string {
    if (production >= programate) {
      return "#88A58F";  
    }else {
      return "#f87171"; 
    }
  }

  // Lógica para mudar o background, para realizar a diferenciação entre Produção e Consumo
  function getBackgroundType(type: string){
        if(type === "Produção"){
            return "#88A58F";
        }else{
            return "#f87171";
        }
  }
  
  

  return (
    <>
      <main>
        <Header>
          <LogoImage src="/src/assets/logo-avb-black.png" alt="Logo AVB" />
          <h1>Painel de Produção - Laminador a Frio</h1>
        </Header>

        <Container>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCellHeader>TIPO</TableCellHeader>
                <TableCellHeader>MATERIAL</TableCellHeader>
                <TableCellHeader>DESCRIÇÃO</TableCellHeader>
                <TableCellHeader>O.P</TableCellHeader>
                <TableCellHeader>Qtd. Produzida/Consumida</TableCellHeader>
                <TableCellHeader>Qtd. Programada</TableCellHeader>
                <TableCellHeader>Máquina</TableCellHeader>
                <TableCellHeader>%</TableCellHeader>
                <TableCellHeader>Corrida</TableCellHeader>
              </TableRow>
            </TableHeader>
            <tbody>
              {Material.map((item) => {
                const percentageInt = (item.Produzida * 100) / item.Progamada;
                const backgroundColor = getBackgroundColor(percentageInt);
                
                const backgroundProduction = getBackgroundProduction(item.Produzida, item.Progamada)

                const backgroundType = getBackgroundType(item.Tipo);

                return (
                    <TableRow key={item.id}>
                    <TableCell
                      style={{ backgroundColor: backgroundType }}
                    >
                      <FadeUp>{item.Tipo}</FadeUp>
                    </TableCell>
                    <TableCell><FadeUp>{item.Material}</FadeUp></TableCell>
                    <TableCell><FadeUp>{item.Descrição}</FadeUp></TableCell>
                    <TableCell><FadeUp>{item.OP}</FadeUp></TableCell>
                    <TableCellBold style={{ backgroundColor: backgroundProduction }}>
                      <FadeUp>{item.Produzida.toLocaleString()}</FadeUp>
                    </TableCellBold>
                    <TableCell><FadeUp>{item.Progamada.toLocaleString()}</FadeUp></TableCell>
                    <TableCell><FadeUp>{item.Máquina}</FadeUp></TableCell>
                    <TableCellBold style={{ backgroundColor: backgroundColor }}>
                      <FadeUp>{percentageInt.toString().slice(0, 4)}%</FadeUp>
                    </TableCellBold>
                    <TableCell><FadeUp>{item.Corrida}</FadeUp></TableCell>
                  </TableRow>
                  
                );
              })}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  );
};
