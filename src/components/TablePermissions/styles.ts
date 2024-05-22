import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #86A69340;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  tr {
    border-bottom: 1px solid #86A69340;
    font-size: 13px;
    line-height: 19px;
  }

  th {
    height: 40px;
    padding: 0 20px;
  }

  td {
    height: 50px;
    padding: 0 20px;
  }

  tbody tr:nth-child(even) {
    background-color: #86A69321;
  }

  thead > tr {
    font-weight: 600;
    text-align: left;
  }
`;

export const StatusActive = styled.span`
  background-color: #5CB85C;
  color: white;
  padding: 0px 10px;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 20px;
  border-radius: 30px;
`;

export const StatusInactive = styled.span`
  background-color: #D9534F;
  color: white;
  padding: 0px 10px;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 20px;
  border-radius: 30px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonIcon = styled.button`
  width: 21px;
  height: 21px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 21px;
  height: 21px;
`;