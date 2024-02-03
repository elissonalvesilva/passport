"use client";

import React from 'react';
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdAirplanemodeInactive } from "react-icons/md";

import { useDialog } from './Context';

const Dialog = ({ children, type = "success" }) => {
  const { isOpen, closeDialog } = useDialog();

  return (
    <>
      {isOpen && (
        <div
        className={`fixed w-full z-50 inset-0 bg-black bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDialog}
        >
          <div className="flex flex-col items-center w-64 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
            <div className='flex mb-5'>
              <div className='icon-type'>
                {
                  type === 'success' ? <GiAirplaneDeparture className='text-4xl text-primary' /> : <MdAirplanemodeInactive className='text-4xl text-red-500' />
                }
              </div>
              <button className="absolute top-2 right-2 text-sm" onClick={closeDialog}>
                &#10005;
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
