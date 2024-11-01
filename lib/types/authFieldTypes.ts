import z, { object, string } from "zod";

export const authFieldBody = object({
  email: string({ message: "This field is required" }).email(
    "Please enter a valid email address",
  ),
  password: string({ message: "This field is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(
      RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    ),
});

export type AuthFieldType = z.infer<typeof authFieldBody>;
