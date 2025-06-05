import { z } from 'zod';

export const esquemaUsuario = z.object({
  nombre: z.string().min(1),
  edad: z.number().int().positive(),
});
