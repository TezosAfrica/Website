import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

const SectionTitle = ({ title, subtitle, color }) => {
  return (
    <Stack w={{ md: 120 }} textAlign="center" mx="auto">
      <Heading as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
        {title}
      </Heading>
      <Text color={color} fontSize={{ base: "lg", md: "2xl" }}>
        {subtitle}
      </Text>
    </Stack>
  );
};

export default SectionTitle;
