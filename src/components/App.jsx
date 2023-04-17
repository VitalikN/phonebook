import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register/Register';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
