import { Button, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const Menu = () => {
  return (
    <HStack
      bgGradient="linear(to-br, blue.900, blue.500)"
      height="5vh"
      p={3}
      justifyContent="space-between"
    >
      <HStack>
        <Button color="whiteAlpha.700" variant="link">
          Computadores
        </Button>
        <Button color="whiteAlpha.700" variant="link">
          Notebooks
        </Button>
        <Button color="whiteAlpha.700" variant="link">
          Monitores
        </Button>
        <Button color="whiteAlpha.700" variant="link">
          Periféricos
        </Button>
        <Button color="whiteAlpha.700" variant="link">
          Demais Eletrônicos
        </Button>
      </HStack>
      <Button color="whiteAlpha.700" variant='inline' leftIcon={<Icon as={CgProfile} fontSize="20px" mb="0.5"/>}>
        Minha conta
      </Button>
    </HStack>
  );
};

export default Menu;
