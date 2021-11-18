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

const BlogCard = () => {
  return (
    <HStack
      align="center"
      spacing={{ md: "3rem" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box w={{ md: "50%" }}>
        <Image
          h={{ base: 56, md: 64 }}
          rounded="md"
          w="100%"
          fit="cover"
          src="https://images.pexels.com/photos/1191503/pexels-photo-1191503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="img"
        />
      </Box>
      <Stack spacing="1rem" w={{ md: "40%" }}>
        <Heading as="h4" fontSize={{ md: "2xl" }} mt={{ base: 4, md: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          vitae.
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          animi commodi id incidunt ipsum perspiciatis, quis ratione voluptate
          voluptatem.
        </Text>

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
    </HStack>
  );
};

export default BlogCard;
