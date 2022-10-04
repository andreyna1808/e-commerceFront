import * as yup from "yup";

export const ValidationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required("password is required")
});