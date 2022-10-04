import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";

import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import { LoginAPI } from "../../../utils/api/user";

const LoginForm = ({ setShowLogin }) => {
  return (
    <Formik
      initialValues={{ username: '', email: "", password: "" }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        const response = await LoginAPI(values);
        console.log(response);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="username">Username:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="username"
                name="username"
                type="username"
                variant="filled"
                onChange={handleChange}
                value={values.username}
              />
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
              <FormErrorMessage my={0} mx={1}>
                {errors.email}
              </FormErrorMessage>
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
              <FormErrorMessage my={0} mx={1} mb={4}>
                {errors.password}
              </FormErrorMessage>
              <Link
                onClick={() => setShowLogin(false)}
                color="orange.500"
                href="#"
                fontSize="12px"
              >
                Não tem conta? Cadastre-se!
              </Link>
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="orange"
              width="full"
            >
              Fazer Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
export default LoginForm;
