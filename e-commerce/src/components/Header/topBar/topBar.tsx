import { Box, HStack, Icon, Input } from "@chakra-ui/react";
import PoraoDev from "../../../assets/logoDev";
import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <HStack bg="#03071f" height="7vh" justifyContent="space-between" p={4}>
      <PoraoDev />

      <HStack w="25%">
        <Icon as={FaSearch} fill="#9D3B03" fontSize="20px"/>
        <Input
          height="3vh"
          placeholder="Search your product here"
          size="lg"
          variant="flushed"
          focusBorderColor="orange.500"
          color="#718096"
        />
      </HStack>
    </HStack>
  );
};

export default TopBar;
