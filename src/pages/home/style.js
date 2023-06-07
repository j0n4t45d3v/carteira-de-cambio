import { FiEdit, FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';

export const MainContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg');
  background-size: cover;
  background-attachment: fixed;
  color: #001f3f;
`;

export const ContainerConvert = styled.div`
  border-radius: 5px;
  height: 400px;
  width: 90%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 3px 0 20px 0 rgba(0, 0, 0, 0.9);
`;
export const ContainerList = styled.div`
  position: relative;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;
  width: 90%;
  background-color: transparent;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px; /* Largura da barra de rolagem */
  }


  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    padding: 2px;
  }


  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }


  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 3px 0 20px 0 rgba(0, 0, 0, 0.9);
  font-size: 14px;
  border: none;

  background-color: lightblue;
`;

export const TableHeader = styled.thead`
  background-color: #001f3f;
  position: sticky;
  top: 0;
  & td {
    font-weight: 900;
    width: 80px;
    color: white;
  }
`;

export const TableBody = styled.tbody`
  & td {
    padding: 10px;
    border: 1.5px solid #001f3f;
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
  transform: scale(1.2);
  padding: 5px;
  background-color: green;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  transition: 0.6s;
  &:hover {
    background-color: darkgreen;
  }
`;

export const ContainerSeparate = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Inputs = styled.input`
  margin: 10px;
  background-color: transparent;
  border: 1px solid blue;
  border-radius: 3px;
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

export const EditIcon = styled(FiEdit)`
  cursor: pointer;
`;
export const ExcludeIcon = styled(FiTrash2)`
  cursor: pointer;
`;
