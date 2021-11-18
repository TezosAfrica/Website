import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { countries } from "@utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const About = ({ translate }) => {
  return (
    <Box as="section" id="about" bg="gray.100" py={{ base: 20, md: 32 }}>
      <Container maxW={{ md: "6xl" }}>
        <Box mb={{ base: 14, md: 0 }}>
          <Heading as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
            {translate.about}
          </Heading>
          <Grid
            templateColumns={{ md: "repeat(3, 1fr)" }}
            gap={6}
            spacing="2rem"
            mt={12}
          >
            {translate.aboutContent.map((item) => (
              <Stack
                spacing="1rem"
                key={item.id}
                bg="#ffc600"
                transitionDuration=" 250ms"
                p={6}
                py={10}
                rounded="lg"
                filter="drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))"
              >
                <Flex
                  align="center"
                  justify="center"
                  w={16}
                  h={16}
                  rounded="full"
                  bg="brand.green"
                >
                  <Image
                    w={10}
                    h={10}
                    src={`/images/about/${item.img}`}
                    alt={item.title}
                  />
                </Flex>
                <Text fontSize={{ md: "xl" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontWeight="medium">{item.text}</Text>
              </Stack>
            ))}
          </Grid>
        </Box>

        <Stack mt={16} spacing="3rem">
          <Box>
            <Heading as="h4" fontSize={{ md: "3xl" }}>
              {translate.chap}
            </Heading>
            <Text>{translate.chapText}</Text>
          </Box>

          <Splide
            options={{
              perPage: 5,
              type: "loop",
              gap: "1rem",
              arrows: false,
              pagination: false,
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 2,
                },
              },
            }}
          >
            {countries.map((item) => (
              <SplideSlide key={item.id}>
                <Link d="block" href={item.link} isExternal mr={6}>
                  <Box
                    bg="white"
                    p={2}
                    w={{ md: 56 }}
                    rounded="lg"
                    _hover={{ bg: "gray.50" }}
                  >
                    <Image
                      h={24}
                      w="full"
                      fit="scale-down"
                      src={`/images/branches/${item.img}`}
                      alt={item.img}
                    />
                  </Box>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
