"use client";

import classNames from 'classnames';
import React from 'react';

function Field(props, { className }) {
  return (
    <div className={classNames("flex flex-col gap-1 mb-2", className)} {...props} />
  );
}

export default Field;
