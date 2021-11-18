import React from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import NextLink from "next/link";
import slugify from "@utils/slugify";

const Hackathon = ({ translate }) => {
  return (
    <Box as="section" id="hackathon" py={{ base: 24, md: 32 }}>
      <Container maxW="8xl">
        <Stack spacing="3rem">
          <Box>
            <Heading as="h4" fontSize={{ md: "3xl" }}>
              {translate.hackathon.title}
            </Heading>
          </Box>
          <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap={10}>
            {translate.hackathon.hacky.map((item) => (
              <Box
                key={item.id}
                h={{ base: 70, md: 64 }}
                pos="relative"
                overflow="hidden"
                rounded="lg"
              >
                <Image
                  h="full"
                  w="full"
                  fit="cover"
                  src="https://images.unsplash.com/photo-1456428746267-a1756408f782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80"
                  alt="blockchain"
                />
                <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />
                <Stack
                  spacing="2rem"
                  pos="absolute"
                  color="white"
                  top={10}
                  left={{ base: 4, md: 10 }}
                >
                  <Stack>
                    <Heading as="h4" fontSize={{ base: "2xl", md: "4xl" }}>
                      {item.title}
                    </Heading>
                    <Text>{item.excerpt}</Text>
                  </Stack>

                  <NextLink href={`/hackathon/${slugify(item.title)}`} passHref>
                    <Link
                      textDecor="underline"
                      _focus={{ outline: "none", shadow: "none" }}
                      w={56}
                    >
                      <HStack align="center" fontWeight="bold" spacing="1.5rem">
                        <Text>{translate.learn}</Text>
                        <Icon as={IoChevronForwardCircleSharp} boxSize={5} />
                      </HStack>
                    </Link>
                  </NextLink>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hackathon;
