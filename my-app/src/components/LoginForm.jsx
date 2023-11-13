import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

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

  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,-50px,0)' },
    from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    delay: 500,
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <animated.form 
        onSubmit={handleSubmit} 
        style={props}
        className="flex flex-col w-64 p-4 space-y-4 bg-white rounded shadow"
      >
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
      </animated.form>
    </div>
  );
};

export default LoginForm;