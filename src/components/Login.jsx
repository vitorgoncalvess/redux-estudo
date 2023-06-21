import React from 'react';
import Input from './Input';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useSelector((state) => state.login.user);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }
  return (
    <form onSubmit={handleSubmit} className="mt-12 animeLeft">
      <Input
        label="Usuário"
        name="usuario"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        label="Senha"
        name="senha"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button>Entrar</Button>
    </form>
  );
};

export default Login;
