"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';

function get(obj, path) {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  
  return result;
}

function ErrorMessage({ field }) {
  const { formState: { errors } } = useFormContext();

  const fieldError = get(errors, field);
    
  if (!fieldError) {
    return null;
  }

  return (
    <span className="text-xs text-red-500 mt-1">{fieldError.message?.toString()}</span>
  );
}

export default ErrorMessage;
