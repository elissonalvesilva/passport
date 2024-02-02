import { z } from 'zod';

export const schema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
  password: z.string().min(8, "Senha inválida precisa ter mais de 8 caracteres"),
});