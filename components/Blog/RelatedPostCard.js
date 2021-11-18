import React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const RelatedPostCard = () => {
  return (
    <Box pos="relative">
      <Image
        src="https://images.pexels.com/photos/8556342/pexels-photo-8556342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="recent post"
      />
      <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />

      <Box pos="absolute" top={10} insetX={4} color="white">
        <Stack spacing="3rem">
          <Heading as="h4" fontSize={{ md: "3xl" }} fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Heading>

          <NextLink href="/blog/lovely" passHref>
            <Link
              textDecor="underline"
              _focus={{ outline: "none", shadow: "none" }}
            >
              <HStack align="center" fontWeight="bold" spacing="1.5rem">
                <Text>Learn more</Text>
                <Icon as={IoChevronForwardCircleSharp} boxSize={5} />
              </HStack>
            </Link>
          </NextLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default RelatedPostCard;
