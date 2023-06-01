import { Button } from '../../components/button';
import { InputLogin } from '../../components/input-login';
import { Banner, ContainerInputs, ContainerLogin, Title } from './style';
var img =
  'https://images.pexels.com/photos/6347724/pexels-photo-6347724.jpeg?auto=compress&cs=tinysrgb&w=400';

export function Login() {
  return (
    <ContainerLogin>
      <ContainerInputs>
        <Title>Login</Title>
        <InputLogin placeholder={'email'} type={'email'} />
        <InputLogin placeholder={'password'} type={'password'} />
        <Button text={'Login'} />
      </ContainerInputs>
      <Banner src={img} alt="img" />
    </ContainerLogin>
  );
}
