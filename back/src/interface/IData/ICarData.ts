import { z } from 'zod';

export const carSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  marca: z.string({
    required_error: 'marca is required',
    invalid_type_error: 'marca must be a string',
  }),
  value: z.string({
    required_error: 'value is required',
    invalid_type_error: 'value must be a number',
  }),
  modelo: z.string({
    required_error: 'modelo is required',
    invalid_type_error: 'modelo must be a string',
  }),
  foto: z.string({
    required_error: 'foto is required',
    invalid_type_error: 'foto must be a string',
  }).optional(),
});

export type ICarData = z.infer<typeof carSchema>;
