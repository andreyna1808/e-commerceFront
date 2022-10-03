import * as yup from "yup";

export const ValidationSchema = yup.object({
  email: yup
    .string()
    .email("invalid email")
    .required(),
  password: yup
    .string()
    .required("password is required")
});