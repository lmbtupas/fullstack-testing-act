import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

const LoginForm = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (Username === 'root' && Password === 'root') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TextInput
        value={Username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <TextInput
        value={Password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <Button disabled={!Username || !Password} onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;