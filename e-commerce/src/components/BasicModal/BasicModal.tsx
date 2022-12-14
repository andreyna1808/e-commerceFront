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
import { GetMeAPI } from "../../utils/api/user";
import Auth from "../Auth";

const BasicModal = () => {
  const initialRef = React.useRef(null);

  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await GetMeAPI(logout);
      setDataUser(response);
    })();
  }, [logout]);

  return (
    <React.Fragment>
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
            {dataUser ? "Meus Dados" : "Iniciar sessão"}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <Auth onCloseModal={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default BasicModal;
