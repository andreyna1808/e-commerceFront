import * as yup from "yup";

export const ValidationSchema = yup.object({
  name: yup.string().required().min(1),
  lastName: yup.string().required('last name is required').min(1),
  username: yup.string().required().min(3),
  email: yup
    .string()
    .email("enter a valid email")
    .required(),
  password: yup
    .string()
    .min(8, "password MIN 8 characters")
    .required()
});