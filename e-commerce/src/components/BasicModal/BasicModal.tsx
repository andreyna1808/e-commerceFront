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
import { getToken, getUser } from "../../utils/api/token";
import Auth from "../Auth";

const BasicModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [localStorage, setLocalStorage] = useState(null);
  const dataUser = localStorage?.user ? getUser() : null
  const token = localStorage?.token ? getToken() : null

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
            {token ? "Meus Dados" : "Iniciar sessão"}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <Auth onCloseModal={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
