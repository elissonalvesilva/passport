"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';

function Select(props) {
  const { register } = useFormContext();

  return (
    <select
      id={props.name}
      className="rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.name)}
      {...props}
    />
  );
}

export default Select;
