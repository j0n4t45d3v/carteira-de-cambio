import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLogin } from '../../components/input-login';
import { UserContext } from '../../context';
import {
  Banner,
  ContainerLogin,
  ContainerLoginInputs,
  DisableButton,
  EnterButton,
  Inputs,
  Title,
} from './style';

export function Login() {
  const navigate = useNavigate();
  const [email, serEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  function disableButton() {
    let status = false;

    if (email == '' || password == '') {
      status = true;
    }

    return status;
  }

  function validateEmail() {
    let regex = /\S+@\S+\.\S+/;

    if (!regex.test(email)) {
      alert('email invalido');
      return false;
    }
    return true;
  }

  function validatePassword() {
    if (password.length < 6) {
      alert('Senha deve ter no mínimo 6 caracteres');
      return false;
    }
    return true;
  }

  function handleLogin() {

    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (!validEmail || !validPassword) {
      return;
    }

    const newUser = {
      email: email,
      password: password,
    };
    setUser(newUser);
    navigate('/carteira');
  }

  return (
    <ContainerLogin>
      <ContainerLoginInputs>
        <Title>Login</Title>
        <Inputs>
          <InputLogin
            placeholder={'Email'}
            type={'email'}
            change={(e) => serEmail(e.target.value)}
          />
          <InputLogin
            placeholder={'Password'}
            type={'password'}
            change={(e) => setPassword(e.target.value)}
          />
        </Inputs>

        {!disableButton() ? (
          <EnterButton onClick={handleLogin}>Entrar</EnterButton>
        ) : (
          <DisableButton>Entrar</DisableButton>
        )}
      </ContainerLoginInputs>
      <Banner />
    </ContainerLogin>
  );
}
