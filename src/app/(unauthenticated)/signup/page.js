"use client";

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Form } from '@/components/Forms';
import Button from '@/components/Button';

export default function SignUp() {

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
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center py-8 px-5'>
          <h1 className='font-medium text-2xl text-typography-black'>Crie sua conta</h1>
          <span className='text-typography-gray text-xs mt-2'>Informe corretamente os dados abaixo</span>
        </div>
        <FormProvider {...createHolderForm}>
          <form onSubmit={handleSubmit(createHolder)}>
            <Form.Field>
              <Form.Label htmlFor='name'>Nome</Form.Label>
              <Form.Input id="name" name="name" type="text" />
              <Form.ErrorMessage field="name"/>
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='last_name'>Sobrenome</Form.Label>
              <Form.Input id="last_name" name="last_name" type="text" />
              <Form.ErrorMessage field="last_name"/>
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='birth_date'>Data de Nascimento</Form.Label>
              <Form.Input id="birth_date" name="birth_date" type="date" />
              <Form.ErrorMessage field="birth_date"/>
            </Form.Field>
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
            <Form.Field>
              <Form.Label htmlFor='church_id'>Igreja</Form.Label>
              <Form.Select id="church_id" name="church_id">
                <Form.Option value="" label="Selecione" default/>
                <Form.Option value="1" label="Ingleses"/>
                <Form.Option value="2" label="Moçambique"/>
                <Form.Option value="3" label="Rio Vermelho"/>
              </Form.Select>
              <Form.ErrorMessage field="church_id"/>
            </Form.Field>
            <Button type="submit" className='bg-primary text-white mt-10'>Criar conta</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}