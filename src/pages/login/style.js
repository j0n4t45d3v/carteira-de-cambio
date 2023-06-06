import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 70px;
  color: #001f3f;
`;

export const ContainerLogin = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoginInputs = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  padding: 40px 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  border-radius: 5px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: center;
  width: 100%;
`;

export const EnterButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: #001f3f;
  color: white;
  font-weight: 800;
  margin: 20px;
  transition: 0.3s;
  &:hover {
    background-color: #235689;
  }
`;

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background: url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
`;
