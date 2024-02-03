"use client";

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Form } from '@/components/Forms';
import Button from '@/components/Button';


export default function Login() {
  const createHolderForm = useForm({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = createHolderForm;

  const createHolder = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className='w-full h-full flex flex-col justify-center px-2'>
        <div className='flex flex-col justify-center items-center py-8 px-5'>
          <h1 className='font-medium text-2xl text-typography-black'>Login</h1>
          <span className='text-typography-gray text-xs mt-2'>Oi! Bem-vindo de volta, você sentiu saudades.</span>
        </div>
        <FormProvider {...createHolderForm}>
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
          <span className='text-primary text-xs font-normal underline ml-1'>Cadastre-se</span>
        </div>
      </div>
    </>
  )
}