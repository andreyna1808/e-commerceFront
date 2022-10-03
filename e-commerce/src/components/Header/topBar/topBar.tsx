import { HStack, Icon, Img, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { LOGO } from "../../../assets/logo";

const TopBar = () => {
  return (
    <HStack bg="#070d30" height="7vh" justifyContent="space-between" p={4}>
      <Img src={LOGO} />

      <HStack w="25%">
        <Icon as={FaSearch} fill="#9D3B03" fontSize="20px" />
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
