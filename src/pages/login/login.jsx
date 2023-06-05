import { useNavigate } from 'react-router-dom';
import { InputLogin } from '../../components/input-login';
import { Banner, ContainerLoginInputs, ContainerLogin, EnterButton, Title, Inputs } from './style';

export function Login() {
  const navigate = useNavigate();

  return (
    <ContainerLogin>
      <ContainerLoginInputs>
        <Title>Login</Title>
        <Inputs>
        <InputLogin placeholder={'Email'} type={'email'} />
        <InputLogin placeholder={'Password'} type={'password'} />
        </Inputs>
        <EnterButton onClick={() => navigate('/carteira')}>Entrar</EnterButton>
      </ContainerLoginInputs>
      <Banner/>
    </ContainerLogin>
  );
}
