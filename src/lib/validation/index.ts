import * as z from "zod";
export const SignupValidation = z.object({
  name: z.string().min(2,{message: 'Too short'}),
  username: z.string().email(),
  email: z.string().min(8,{message: 'Password must be atleast 8 characters.'})
})