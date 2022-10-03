import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "../LoginForm/validation";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";

const RegisterForm = ({ showRegisterForm }) => {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", password: "" }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="name"
                name="name"
                type="text"
                variant="filled"
                onChange={handleChange}
                value={values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="lastName"
                name="lastName"
                type="text"
                variant="filled"
                onChange={handleChange}
                value={values.lastName}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="nickname">Nickname:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="nickname"
                name="nickname"
                variant="filled"
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={handleChange}
                value={values.password}
              />
              <Link color="orange.500" href="#" fontSize="12px">
                Já tem conta? Faça login
              </Link>
            </FormControl>
            <Button type="submit" colorScheme="orange" width="full">
              Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
export default RegisterForm;
