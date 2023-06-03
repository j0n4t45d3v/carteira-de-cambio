import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Home } from './pages/home';

export function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login/>} />
      <Route path={"/carteira"} element={<Home/>} />
    </Routes>
  );
}
