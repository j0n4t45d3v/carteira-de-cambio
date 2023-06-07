import styled from 'styled-components';

export const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 2px solid #235689;
  border-radius: 3px;
  padding: 5px 15px;
  background-color: transparent;
  outline: none;
  color: black;
  &::placeholder {
    color: #235689;
  }
`;
