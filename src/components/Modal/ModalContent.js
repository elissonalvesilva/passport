"use client";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useModal } from '@/components/Modal/ModalContext';
import Button from '../Button';

const ModalContent = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();
  const [animation, setAnimation] = useState('active');

  useEffect(() => {
    setAnimation(isModalOpen ? 'shown' : '');
  }, [isModalOpen]);

  const closeAndReset = () => {
    setAnimation('');
    setTimeout(() => {
      closeModal();
      setAnimation('');
    }, 300);
  };

  return (
    <div
      className={`fixed w-full z-50 inset-0 bg-black bg-opacity-50 flex items-end justify-center transition-opacity duration-300 ${
        isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeAndReset}
    >
      <div className={classNames('modal bg-white w-full p-4 rounded-t-md', animation)}>
        { children }
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContent;
