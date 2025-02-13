import { z } from "zod"

export const signUpSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({ message: 'Must be a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string(),
})
.refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords must match',
      path: ['confirmPassword'], 
    }
)

export type TSignUpSchema = z.infer<typeof signUpSchema>

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export type TSignInSchema = z.infer<typeof signInSchema>