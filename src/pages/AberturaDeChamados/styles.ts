import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 182px 32px 24px;

  @media (min-width: 640px) {
    padding: 88px 32px 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 48px;
  margin-bottom: 49px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #273867;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1a285a;
  }
`;
