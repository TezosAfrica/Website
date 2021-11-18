import React from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MotionStack } from "@utils/constants";

const Features = ({ translate }) => {
  return (
    <Box as="section" id="tezos" py={{ base: 24, md: 32 }}>
      <Container maxW="7xl">
        <Stack spacing="5rem">
          <Stack spacing="1rem" w={{ md: 123 }} mx="auto" textAlign="center">
            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
              {translate.tezos.title}
            </Heading>
            <Text>{translate.tezos.subtitle}</Text>
          </Stack>

          <Grid
            templateColumns={{ md: "repeat(3, 1fr)" }}
            gap={{ base: 8, md: 10 }}
          >
            {translate.tezos.features.map((item) => (
              <MotionStack
                d={"block"}
                spacing="1rem"
                key={item.id}
                p={8}
                borderWidth={1}
                rounded="md"
                _hover={{ bg: "#f8f9fa" }}
                transition="background-color 250ms ease-in"
              >
                <Image
                  src={`/images/${item.icon}`}
                  alt={item.title}
                  w={10}
                  h={10}
                />
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Text>{item.text}</Text>
              </MotionStack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
