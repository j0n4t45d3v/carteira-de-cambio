import { Route, Routes } from 'react-router-dom';
import { WalletProvider } from './context/wallet';
import { Home } from './pages/home';
import { Login } from './pages/login/login';

export function App() {
  return (
    <WalletProvider>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/carteira'} element={<Home />} />
      </Routes>
    </WalletProvider>
  );
}
