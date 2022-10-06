import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import { getToken, getUser, HasExpiredToken } from "../../utils/api/token";
import Auth from "../Auth";

const BasicModal = () => {
  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [localStorage, setLocalStorage] = useState(null);

  const dataUser = localStorage?.user ? getUser() : null
  const token = localStorage?.token ? getToken() : null

  const hasExpiredToken = () => {
    if(token !== null && HasExpiredToken(token)){
      logout()
    } else {
      return token
    }
  }

  const initialRef = React.useRef(null);

  useEffect(() => {
    setLocalStorage(window?.localStorage);
  }, [localStorage]);

  return (
    <>
      <Button
        onClick={onOpen}
        color="whiteAlpha.700"
        variant="inline"
        leftIcon={<Icon as={CgProfile} fontSize="20px" mb="0.5" />}
        _hover={{ color: "orange.400" }}
      >
        {dataUser?.username || "Fazer login/registro"}
      </Button>

      <Modal
        size="xl"
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="4px" />
        <ModalContent>
          <ModalHeader p="3" bg="orange.600" color="white">
            {hasExpiredToken() ? "Meus Dados" : "Iniciar sessão"}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <Auth onCloseModal={onClose} token={hasExpiredToken()}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
