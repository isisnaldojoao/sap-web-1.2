import styled from "styled-components";

export const Header = styled.section`
    display: flex;
    background-color: #88A58F;
    height:200px;
    justify-content:center;
    align-items: center;
    gap:20px;
    color:white;
`

export const LogoImage = styled.img`
  width: 150px; 
  height: 80px; 
  margin-right: 20px;
  margin-left:50px; 
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -2px;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #607E67;
  color: white;
`;

export const TableRow = styled.tr`
  text-align: center;
`;

export const TableCellHeader = styled.th`
  padding: 1rem 1.5rem;
`;

export const TableCell = styled.td`
  border: 1px solid #e5e7eb; /* gray-200 */
  padding: 1rem 1.5rem;
`;

export const TableCellBold = styled(TableCell)`
  font-weight: bold;
`;

export const TableCellGreen = styled(TableCell)`
  background-color: #10b981; /* bg-green-500 */
  color: white;
`;

export const TableCellRed = styled(TableCell)`
  background-color: #f87171; /* bg-red-500 */
  color: white;
`;

export const TableCellBlue = styled(TableCell)`
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
`;

export const TableCellOrange = styled(TableCell)`
  background-color: #fb923c; /* bg-orange-500 */
  color: white;
`;

export const TableCellRedLight = styled(TableCell)`
  background-color: #fca5a5; /* bg-red-300 */
  color: white;
`;

export const TableTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1.5rem;
`;

export const TableLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1.5rem;
`;

export const FadeUp = styled.div`
  animation: fadeUp 1s ease-in-out;
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

