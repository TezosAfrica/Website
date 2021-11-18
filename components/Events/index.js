import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import SectionTitle from "@components/SectionTitle";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { events } from "@utils/constants";

const Events = ({ translate }) => {
  return (
    <Box
      as="section"
      id="events"
      bg="brand.red"
      color="white"
      py={{ base: 24, md: 32 }}
    >
      <Container maxW="7xl">
        <SectionTitle
          title={translate.events.title}
          subtitle={translate.events.subtitle}
        />

        <Box mt={16}>
          <Splide
            options={{
              perPage: 2,
              type: "loop",
              height: "27rem",
              gap: "1rem",
              arrows: false,
              pagination: false,
              autoplay: true,
              breakpoints: {
                640: {
                  perPage: 1,
                  height: "22rem",
                },
              },
            }}
          >
            {events.map((item) => (
              <SplideSlide key={item.id}>
                <Box
                  rounded="md"
                  overflow="hidden"
                  filter="drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))"
                >
                  <Image
                    h={{ base: 48, md: 80 }}
                    w="100%"
                    fit={{ base: "scale-down", md: "initial" }}
                    src={`/images/events/${item.img}`}
                    alt={item.title}
                  />
                  <Box bg="white" color="brand.red" p={{ md: 3 }}>
                    <Text fontSize="xl" fontWeight="bold">
                      {item.title}
                    </Text>
                    <Text fontWeight="medium">{item.date}</Text>
                    <Text>{item.stat}</Text>
                  </Box>
                </Box>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Container>
    </Box>
  );
};

export default Events;
