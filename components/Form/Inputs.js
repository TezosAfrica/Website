import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
} from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";

export const FormInput = ({ title, helper, ...rest }) => {
  return (
    <FormControl w={{ md: 115 }}>
      <FormLabel>{title}</FormLabel>
      <FormHelperText color="gray.100" mb={2} ml={6}>
        {helper}
      </FormHelperText>
      <HStack align="center" borderWidth={1} rounded="md" p={1}>
        <Input size="lg" _focus={{ outline: "none" }} {...rest} />
        <Button
          px={{ base: 8, md: 16 }}
          h={12}
          color="brand.red"
          bg="brand.yellow"
          rightIcon={<Icon as={HiOutlineArrowRight} />}
        >
          Submit
        </Button>
      </HStack>
    </FormControl>
  );
};

export const FormInputWithoutIcon = ({ ...rest }) => {
  return (
    <FormControl w={{ md: 115 }}>
      <Input size="lg" _focus={{ outline: "none" }} {...rest} />
    </FormControl>
  );
};
