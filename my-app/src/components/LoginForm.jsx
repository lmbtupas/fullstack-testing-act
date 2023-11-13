import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'root' && password === 'root') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col w-64 p-4 space-y-4 bg-white rounded shadow">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={username === '' || password === ''}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;