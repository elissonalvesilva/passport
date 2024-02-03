"use client";

import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Form } from '@/components/Forms';
import Button from '@/components/Button';
import { useDialog } from '@/components/Dialog/Context';
import Dialog from '@/components/Dialog';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Config } from '@/config';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const { isOpen, openDialog, closeDialog } = useDialog();
  const [dialogState, setDialogState] = useState({
    type: '',
    message: '',
  });
  const loginHolderForm = useForm({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = loginHolderForm;

  useEffect(() => {
    setTimeout(() => closeDialog(), 3000);
  }, [dialogState]);

  const createHolder = async (data) => {
    try {
      const response = await fetch(`${Config.API_URL}/holders/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if(response.ok) {
        const { data } = await response.json();
        login(data?.user, data?.token);
        router.push('/home');
      }else {
        setDialogState({
          type: 'error',
          message: 'Usuário e senha inválidos',
        });
        openDialog();
      }

    }catch(error) {
      setDialogState({
        type: 'error',
        message: 'Usuário e senha inválidos',
      });
      openDialog();
    }
  }

  return (
    <>
      {
        isOpen && (
          <Dialog
            type={dialogState.type}
          >
            <p className='text-typography-black text-center mb-2 text-sm'>{dialogState.message}</p>
          </Dialog>
        )
      }
      {
      }
      <div className='w-full h-full flex flex-col justify-center px-2'>
        <div className='flex flex-col justify-center items-center py-8 px-5'>
          <h1 className='font-medium text-2xl text-typography-black'>Login</h1>
          <span className='text-typography-gray text-xs mt-2'>Oi! Bem-vindo de volta, você sentiu saudades.</span>
        </div>
        <FormProvider {...loginHolderForm}>
          <form onSubmit={handleSubmit(createHolder)}>
            <Form.Field>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Input id="email" name="email" type="text" />
              <Form.ErrorMessage field="email"/>
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='password'>Senha</Form.Label>
              <Form.Input id="password" name="password" type="password" />
              <Form.ErrorMessage field="password"/>
            </Form.Field>
            <div className="w-full text-right">
              <span className="text-primary text-xs font-light underline">Esqueceu sua Senha?</span>
            </div>
            <Button type="submit" className='bg-primary text-white mt-10 font-light'>Entrar</Button>
          </form>
        </FormProvider>

        <div className='w-full text-center mt-14'>
          <span className='text-typography-gray text-xs'>Não tem uma conta ?</span>
          <Link href="/signup" className='text-primary text-xs font-normal underline ml-1'>Cadastre-se</Link>
        </div>
      </div>
    </>
  )
}