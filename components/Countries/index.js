import React from "react";
import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import SectionTitle from "@components/SectionTitle";
import { countries } from "@utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Router from "next/router";

const Countries = () => {
  const [route, setRoute] = React.useState("");

  React.useEffect(() => {
    const hash = Router?.asPath?.match(/#([a-z0-9]+)/gi);
    if (!hash) return;
    setRoute(hash[0]);
  }, [route]);

  console.log("hash", route);

  return (
    <Box
      as="section"
      id="countries"
      bg="gray.50"
      py={{ base: 24, md: 32 }}
      mt={{ md: route === "#countries" && 48 }}
    >
      <Container maxW="7xl">
        <SectionTitle
          title="Countries"
          subtitle="Here are the countries currently represented in the
                        Tezos Africa Foundation."
          color="gray.600"
        />

        <Flex
          align="center"
          justify="space-between"
          mt={16}
          d={{ base: "none", md: "flex" }}
        >
          {countries.map((item) => (
            <Link
              href={item.link}
              isExternal
              key={item.id}
              mr={6}
              _last={{ mr: 0 }}
              borderWidth={1}
              bg="white"
              p={2}
              w={{ md: 64 }}
              rounded="lg"
              _hover={{ bg: "gray.50" }}
              transition="background-color 250ms ease-in"
            >
              <Image
                h={24}
                w="full"
                fit="scale-down"
                src={`/images/branches/${item.img}`}
                alt={item.img}
              />
            </Link>
          ))}
        </Flex>

        <Box mt={10} d={{ base: "block", md: "none" }}>
          <Splide
            options={{
              perPage: 2,
              type: "loop",
              arrows: false,
              pagination: false,
              autoplay: true,
            }}
          >
            {countries.map((item) => (
              <SplideSlide key={item.id}>
                <Link
                  href={item.link}
                  isExternal
                  key={item.id}
                  mr={6}
                  _last={{ mr: 0 }}
                >
                  <Image
                    h={16}
                    fit="scale-down"
                    w="full"
                    src={`/images/branches/${item.img}`}
                    alt={item.img}
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Container>
    </Box>
  );
};

export default Countries;
