import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { deleteToken, deleteUser, getUser } from "../../../utils/api/token";
import { format } from "date-fns";

const UserAccount = ({ setShowModalType, onCloseModal }) => {
  const dataUser = getUser();

  const dateFormated = format(new Date(dataUser?.createdAt), "dd/MM/yyyy");

  const onLogout = () => {
    deleteUser()
    deleteToken()
    setShowModalType('login');
    onCloseModal
  }

  return (
    <VStack mt="4">
      <Avatar size="2xl" name={dataUser?.username} src={dataUser?.img} />
      <Text>{dataUser?.username}</Text>

      <Box w="100%">
        <Text>
          Nome: {dataUser?.name} {dataUser?.lastName}
        </Text>

        <Text>Email: {dataUser?.email}</Text>
        <Text>Criado em: {dateFormated}</Text>
      </Box>

      <Box w="100%" mt="4" display="flex" justifyContent="flex-end">
        <Button color="white" mr="2" bg="orange.500" onClick={onLogout}>Logout</Button>
        <Button onClick={onCloseModal}>Sair</Button>
      </Box>
    </VStack>
  );
};
export default UserAccount;
