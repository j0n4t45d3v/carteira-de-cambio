import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';

export function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login/>} />
      <Route path={"/carteira"} element={<h2>carteira</h2>} />
    </Routes>
  );
}
