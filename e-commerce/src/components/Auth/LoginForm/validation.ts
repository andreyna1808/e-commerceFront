import * as yup from "yup";

export const ValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password minimum 8 characters")
    .required("Password is required")
});