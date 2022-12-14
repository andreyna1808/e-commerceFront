import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import { RegisterAPI } from "../../../utils/api/user";
import { showToast } from "../../../utils/toastify";

const RegisterForm = ({ setShowModalType, onCloseModal }) => {
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
      onSubmit={async (values) => {
        const response = await RegisterAPI(values);
        if (response?.jwt) {
          showToast({
            type: "success",
            message: "Usuário criado com sucesso!!",
          });
          setShowModalType("login");
        } else {
          showToast({
            type: "error",
            message: "Problemas no servidor tente novamente mais tarde",
          });
        }
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
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
                <FormErrorMessage my={0} mx={1}>
                  {errors.name}
                </FormErrorMessage>
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
                <FormErrorMessage my={0} mx={1}>
                  {errors.lastName}
                </FormErrorMessage>
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
                <FormErrorMessage my={0} mx={1}>
                  {errors.username}
                </FormErrorMessage>
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
              </FormControl>
              <Button
                isLoading={isSubmitting}
                type="submit"
                colorScheme="orange"
                width="full"
              >
                Fazer Registro
              </Button>
              <Button
                onClick={() => setShowModalType("login")}
                color="orange.500"
                fontSize="12px"
                width="full"
              >
                Já tem conta? Faça login
              </Button>
            </VStack>
            <Box mt="4" display="flex" justifyContent="flex-end">
              <Button onClick={onCloseModal}>Sair</Button>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
