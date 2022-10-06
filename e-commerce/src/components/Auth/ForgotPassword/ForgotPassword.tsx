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
  VStack,
} from "@chakra-ui/react";
import { showToast } from "../../../utils/toastify";
import useAuth from "../../../hooks/useAuth";
import { ResetPasswordAPI } from "../../../utils/api/user";

const ResetPassword = ({ onCloseModal, setShowModalType }) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        const response = await ResetPasswordAPI(values);
        if (response?.ok) {
          showToast({
            type: "success",
            message: "Email de recuperação de senha enviado com sucesso",
          });
          setShowModalType('login');
        } else {
          showToast({
            type: "error",
            message: "Não foi possível atender sua solicitação",
          });
        }
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} p={6} align="flex-start">
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email para recuperação:</FormLabel>
              <Input
                focusBorderColor="orange.500"
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={handleChange}
                value={values.email}
              />
              <FormErrorMessage my={0} mx={1} mb={4}>
                {errors.email}
              </FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type="submit"
              colorScheme="orange"
              width="full"
            >
              Recuperar senha
            </Button>
            <Button
              onClick={() => setShowModalType("login")}
              color="orange.500"
              fontSize="12px"
              width="full"
            >
              Voltar ao login
            </Button>
          </VStack>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={onCloseModal}>Sair</Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
export default ResetPassword;
