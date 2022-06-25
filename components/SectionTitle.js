import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

const SectionTitle = ({
  title,
  subtitle,
  color,
  width = { md: 120 },
  headingFontSize = { base: "3xl", md: "6xl" },
  subtitleFontSize = { base: "lg", md: "2xl" },
}) => {
  return (
    <Stack w={width} textAlign="center" mx="auto">
      <Heading as="h3" fontSize={headingFontSize}>
        {title}
      </Heading>
      <Text color={color} fontSize={subtitleFontSize}>
        {subtitle}
      </Text>
    </Stack>
  );
};

export default SectionTitle;
