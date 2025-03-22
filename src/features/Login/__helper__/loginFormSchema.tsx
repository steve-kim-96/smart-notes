import z from "zod";

export const loginFormSchema = z
  .object({
    email: z.string().email().optional(),
    username: z.string().min(3).max(20).optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character"),
  })
  .refine((data) => data.email || data.username, {
    message: "Either email or username is required",
    path: ["email", "username"],
  });
