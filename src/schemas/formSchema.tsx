import { z } from 'zod';

const formSchema = z.object({
	firstname: z.string(),
	lastname: z.string(),
	email: z.string(),
	querytype: z.string(),
	message: z.string(),
	consent: z.boolean(),
});

export { formSchema };
