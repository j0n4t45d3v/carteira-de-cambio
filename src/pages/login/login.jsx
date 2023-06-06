import { useNavigate } from 'react-router-dom';
import { InputLogin } from '../../components/input-login';
import { Banner, ContainerLoginInputs, ContainerLogin, EnterButton, Title, Inputs } from './style';
import { useRef } from 'react';

export function Login() {
  const navigate = useNavigate();
  const email = useRef('')
  const password = useRef('')

  function handleLogin() {
    console.log(email.current.value, password.current.value);
  }

  return (
    <ContainerLogin>
      <ContainerLoginInputs>
        <Title>Login</Title>
        <Inputs>
        <InputLogin refProps={email} placeholder={'Email'} type={'email'} />
        <InputLogin refProps={password} placeholder={'Password'} type={'password'} />
        </Inputs>
        <EnterButton onClick={handleLogin}>Entrar</EnterButton>
      </ContainerLoginInputs>
      <Banner/>
    </ContainerLogin>
  );
}
