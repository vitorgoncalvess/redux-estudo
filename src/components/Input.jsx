import React from 'react';

const Input = ({ name, label, ...props }) => {
  return (
    <div className="mt-2">
      <label className="text-xl" htmlFor={name}>
        {label}
      </label>
      <input
        className="block w-full border-2 border-black rounded h-12 p-2 mt-2"
        id={name}
        name={name}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
