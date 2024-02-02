"use client";

import { useFormContext } from 'react-hook-form';

function Input(props) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="input flex-1 text-typography-black rounded border border-zinc-300 shadow-sm px-3 py-2 focus:outline-none"
      {...register(props.name)}
      {...props}
    />
  );
}

export default Input;
