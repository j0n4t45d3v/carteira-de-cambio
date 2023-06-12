import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg');
  background-size: cover;
  background-attachment: scroll;
  color: #001f3f;
`;

export const ContainerConvert = styled.div`
  border-radius: 5px;
  width: 70%;
  padding: 30px;
  background-color: #001f3f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 1px 0 10px 0 rgba(255, 255, 255, 0.9);
`;
export const ContainerList = styled.div`
  position: relative;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
  box-shadow: 2px 0 10px 0 rgba(255, 255, 255, 0.5);
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
  border-collapse: separate;
  border-spacing: 1px;
  font-size: 14px;
  border: none;
  border-radius: 3px;

  background-color: lightblue;
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

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ContainerSeparate = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Inputs = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  /* border-radius: 3px; */
  padding: 5px;
  outline: none;
  color: white;
  &::placeholder {
    color: white;
  }
`;

export const Label = styled.label`
  color: white;
  font-weight: 900;
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid white;
  border-radius: 3px;
  background-color: transparent;
  padding: 1px;
  color: white;
  text-align: center;
  & option {
    background-color: black;
    color: white;
  }
`;
