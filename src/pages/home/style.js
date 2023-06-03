import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
`;

export const ContainerConvert = styled.div`
  position: relative;
  border-radius: 5px;
  top: 20px;
  height: 50%;
  width: 90%;
  background-color: gray;
`;
export const ContainerList = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: lightgray;
`;

export const Table = styled.table`
  margin-top: 40px;
  width: 90%;
  text-align: center;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
  & td {
    font-weight: bold;
    width: 80px;
  }
`;

export const TableBody = styled.tbody`
  & td {
    background-color: gray;
  }
`;

// export const Name = styled.p``

export const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: 200px;
  padding: 5px;
  background-color: green;
  border: none;
  border-radius: 3px;
  color: white;
`;

export const Inputs = styled.input`
  margin: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid blue;
  padding: 5px;
  outline: none;
  color: black;
  &::placeholder {
    color: blue;
  }
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid blue;
  border-radius: 3px;
  background-color: transparent;
  padding: 1px;
  color: blue;

  & option {
    background-color: black;
    color: white;
  }
`;
