import { z } from 'zod';

export const schema = z.object({
  email: z.string().email({
    message: 'Email inválido',
  }),
  first_name: z.string().min(3, "Nome inválido precisa ter mais de 3 caracteres"),
  last_name: z.string().min(3, "Sobrenome inválido precisa ter mais de 3 caracteres"),
  password: z.string().min(8, "Senha inválida precisa ter mais de 8 caracteres"),
  church_id: z.string(),
  birth_date: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message: issue.code === "invalid_date" ? "Data inválida" : "Data inválida",
    }),
  }),
  // image_url: z.string().url().optional(),
});