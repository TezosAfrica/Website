import React from "react";
import {
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { MotionLink } from "@utils/constants";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = ({ translate }) => {
  const { pathname } = useRouter();

  return (
    <Flex
      as="footer"
      bg="brand.gray"
      p={{ base: 4, md: 10 }}
      textAlign="center"
      color="white"
      direction="column"
    >
      <Container maxW="5xl" textAlign="center">
        <Flex align="center" justify="center" direction="column" spacing="2rem">
          <Image src="/images/logo.png" alt="Logo" />
          <Text color="gray.400" my={10}>
            {translate?.footerText}
          </Text>

          <HStack align="center" mb={8} spacing="1rem">
            <Link href="#">
              <Icon boxSize={6} as={FaFacebookSquare} />
            </Link>
            <Link href="#">
              <Icon boxSize={6} as={FaTwitter} />
            </Link>
          </HStack>

          <HStack
            spacing={{ base: "1rem", md: "2rem" }}
            as="nav"
            fontWeight="semibold"
            wrap="wrap"
            textAlign={{ base: "center", md: "inherit" }}
          >
            <MotionLink _hover={{ textDecor: "none" }} href="/">
              Home
            </MotionLink>
            {translate?.nav?.map((item) => (
              <MotionLink
                key={item.id}
                _hover={{ textDecor: "none" }}
                variants={item}
                href={pathname === "/" ? item.path : "/"}
              >
                {item.title}
              </MotionLink>
            ))}
            {/*<MotionLink _hover={{ textDecor: "none" }} href="#blog">*/}
            {/*  Blog*/}
            {/*</MotionLink>*/}
          </HStack>
        </Flex>
      </Container>

      <Divider orientation="horizontal" my={8} />

      <Center mb={6}>
        <Text color="gray.300">&copy; {translate?.copyright}</Text>
      </Center>
    </Flex>
  );
};

export default Footer;
