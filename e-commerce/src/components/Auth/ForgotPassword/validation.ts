import * as yup from "yup";

export const ValidationSchema = yup.object({
  email: yup
  .string()
  .email("enter a valid email")
  .required(),
});