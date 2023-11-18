import React from 'react';

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border rounded p-2 m-2 ${
        disabled ? 'bg-gray-300' : 'bg-blue-500 text-white'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;