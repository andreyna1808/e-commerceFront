import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "../LoginForm/validation";

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const LoginForm = ({ showLoginForm }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
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
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={handleChange}
              isChecked={values.rememberMe}
              colorScheme="orange"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="orange" width="full">
              Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
export default LoginForm;
