import { Avatar, Box, Button, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { GetMeAPI } from "../../../utils/api/user";

const UserAccount = ({ setShowModalType, onCloseModal }) => {
  const { logout } = useAuth();

  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await GetMeAPI(logout);
      setDataUser(response);
    })();
  }, [logout]);

  const dateFormated = dataUser
    ? format(new Date(dataUser?.createdAt), "dd/MM/yyyy")
    : null;

  const onLogout = () => {
    logout();
    setShowModalType("login");
  };

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
        <Button color="white" mr="2" bg="orange.500" onClick={onLogout}>
          Logout
        </Button>
        <Button onClick={onCloseModal}>Sair</Button>
      </Box>
    </VStack>
  );
};
export default UserAccount;
