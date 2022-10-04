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
import { showToast } from "../../../utils/toastify";

const LoginForm = ({ onCloseModal, setShowLogin }) => {
  return (
    <Formik
      initialValues={{ username: '', password: "" }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        const response = await LoginAPI(values);
        if(response?.jwt){
          showToast({ type: "success", message: "Usuário logado com sucesso!!" });
          onCloseModal()
        } else {
          showToast({ type: "error", message: "Nome de usuário ou senha não correspondem" });
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
