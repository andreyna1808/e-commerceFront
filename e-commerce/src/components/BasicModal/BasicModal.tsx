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
import React from "react";

import { CgProfile } from "react-icons/cg";
import Auth from "../Auth";

const BasicModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        color="whiteAlpha.700"
        variant="inline"
        leftIcon={<Icon as={CgProfile} fontSize="20px" mb="0.5" />}
        _hover={{ color: "orange.400" }}
      >
        My account
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
            Iniciar sessão
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <Auth />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicModal;
