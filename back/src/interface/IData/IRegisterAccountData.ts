import { z } from 'zod';

export const registerAcountSchema = z.object({
  level: z.enum(['user', 'admin']),
});

export type IRegisterAccountData = z.infer<typeof registerAcountSchema>;
