import Image from "next/image";
import logo from "@/assets/images/logo.png";

import React from 'react';
import { useState } from 'react';


export default function Loading () {
  return (
    <>
      <div className="loading">
        <div className="loading-overlay"></div>
        <div className="loading-image bounce-top">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
      </div>
    </>
  );
}