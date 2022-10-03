import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";

const RegisterForm = ({ showRegisterForm }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("aq", values);
        setSubmitting(false);
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
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.name}>
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
                <FormErrorMessage my={0} mx={1}>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastName}>
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
                <FormErrorMessage my={0} mx={1}>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.username}>
                <FormLabel htmlFor="username">username:</FormLabel>
                <Input
                  focusBorderColor="orange.500"
                  id="username"
                  name="username"
                  variant="filled"
                  onChange={handleChange}
                  value={values.username}
                />
                <FormErrorMessage my={0} mx={1}>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
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
                <FormErrorMessage my={0} mx={1}>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
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
                <FormErrorMessage my={0} mx={1} mb={4}>{errors.password}</FormErrorMessage>
                <Link color="orange.500" href="#" fontSize="12px">
                  Já tem conta? Faça login
                </Link>
              </FormControl>
              <Button type="submit" colorScheme="orange" width="full">
                Fazer Registro
              </Button>
            </VStack>
          </form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
