import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";
import SectionTitle from "@components/SectionTitle";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { logos } from "@utils/constants";

const Partners = ({ translate }) => {
  return (
    <Box as="section" id="partners" py={{ base: 24, md: 32 }} bg="gray.50">
      <Container maxW="7xl">
        <SectionTitle
          title={translate.partners.title}
          subtitle={translate.partners.subtitle}
        />

        <Box mt={20} w={{ md: 130 }} mx="auto">
          <Splide
            options={{
              perPage: 3,
              type: "loop",
              arrows: false,
              pagination: false,
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 3,
                },
              },
            }}
          >
            {logos.map((item) => (
              <SplideSlide key={item.id}>
                <Image
                  h={{ base: 16, md: 20 }}
                  w={{ base: 24, md: 32 }}
                  fit="contain"
                  src={`/images/logos/${item.img}`}
                  alt="Logos"
                />
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
