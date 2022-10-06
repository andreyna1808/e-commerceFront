import React from "react";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";

import {
  Box,
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
import { showToast } from "../../../utils/toastify";
import useAuth from "../../../hooks/useAuth";

const LoginForm = ({ onCloseModal, setShowModalType }) => {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        const response = await LoginAPI(values);
        if (response?.jwt) {
          showToast({
            type: "success",
            message: "Usuário logado com sucesso!!",
          });
          login(response.jwt);
          onCloseModal();
        } else {
          showToast({
            type: "error",
            message: "Nome de usuário ou senha não correspondem",
          });
        }
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
              <Button
                onClick={() => setShowModalType('forgotPassword')}
                color="orange.500"
                fontSize="12px"
                variant='link'
              >
                Esqueceu sua senha? Recupere
              </Button>
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="orange"
              width="full"
            >
              Fazer Login
            </Button>
            <Button
              onClick={() => setShowModalType('register')}
              color="orange.500"
              fontSize="12px"
              width="full"
            >
              Não tem conta? Cadastre-se!
            </Button>
          </VStack>
          <Box mt="4" display="flex" justifyContent="flex-end">
            <Button onClick={onCloseModal}>Sair</Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
export default LoginForm;
