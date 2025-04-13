import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});
// USE REFINEMENT TO DO EMAIL CHECK LATER WHEN LOGIN IS IMPLEMENTED
// .refine((data) => data.email || data.username, {
//   message: "Either email or username is required",
//   path: ["email", "username"],
// });
