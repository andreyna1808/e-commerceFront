import { Box, Button, HStack } from "@chakra-ui/react";
import BasicModal from "../../BasicModal";

const Menu = () => {
  return (
    <HStack
      bgGradient="linear(to-br, blue.900, blue.500)"
      height="5vh"
      p={3}
      justifyContent="space-between"
    >
      <Box w="full" display="flex" justifyContent="space-between" mr={6}>
        <Button color="whiteAlpha.700" variant="link">
          Computadores
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
      </Box>

      <BasicModal />
    </HStack>
  );
};

export default Menu;
