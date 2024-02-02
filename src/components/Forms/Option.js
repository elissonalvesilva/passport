"use client";

import React from 'react';

function Option({ value, label, ...rest }) {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
}

export default Option;
