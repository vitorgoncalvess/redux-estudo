import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-black text-white h-12 w-32 rounded text-xl mt-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
