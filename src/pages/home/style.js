import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi'

export const MainContainer = styled.div`
  height: 100vh;
  /* max-height: 100%; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg");
  background-size: cover;
  background-attachment: fixed;
`;

export const ContainerConvert = styled.div`
  position: relative;
  border-radius: 5px;
  top: 20px;
  height: 50%;
  width: 90%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 3px 0 20px 0 rgba(0, 0, 0, 0.9);
`;
export const ContainerList = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  background-color: transparent;
`;

export const Table = styled.table`
  width: 90%;
  margin-top: 60px;
  text-align: center;
  background-color: purple;
  box-shadow: 3px 0 20px 0 rgba(0, 0, 0, 0.9);
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
    background-color: lightblue;
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
  position: relative;
  top: 40px;
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
`
export const ExcludeIcon = styled(FiTrash2)`
cursor: pointer;
`