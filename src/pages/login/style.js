import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 70px;
`;

export const ContainerLogin = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoginInputs = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: center;
  width: 80%;
`;

export const EnterButton = styled.button`
  position: relative;
  top: -10px;
  width: 60%;
  padding: 10px 50px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: #001f3f;
  color: white;
  font-weight: 800;
  transition: 0.3s;
  &:hover {
    background-color: #235689;
  }
`;

export const Banner = styled.img`
  height: 100vh;
  width: 50%;
`;
