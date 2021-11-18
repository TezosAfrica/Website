import React from "react";
import { Box, Container, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import { MotionImage, transition } from "@utils/constants";

const Teams = ({ translate }) => {
  return (
    <Box as="section" id="team" py={{ base: 24, md: 32 }}>
      <Container maxW="7xl">
        <HStack
          d={{ base: "base", md: "flex" }}
          align="center"
          justify="space-between"
          textAlign={{ base: "center", md: "inherit" }}
        >
          <Box>
            <Heading as="h3" fontSize={{ base: "3xl", md: "6xl" }}>
              {translate.team.title}
            </Heading>
          </Box>
          <Box w={{ md: "60%" }}>
            <Text fontSize={{ md: "2xl" }}>{translate.team.subtitle}</Text>
          </Box>
        </HStack>

        <Grid
          templateColumns={{ md: "repeat(3, 1fr)" }}
          gap={{ base: 10, md: 12 }}
          mt={20}
        >
          {translate.team.people.map((item) => (
            <Box
              key={item.id}
              role="group"
              filter="drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))"
              bg="white"
              borderWidth={1}
              rounded="lg"
              overflow="hidden"
              p={2}
              _hover={{
                overflow: "hidden",
                transitionDuration: " 250ms",
              }}
            >
              <Box h={90} w="full" overflow="hidden">
                <MotionImage
                  whileHover={{ scale: 1.1 }}
                  transition={{ ...transition }}
                  src={`/images/team/${item.img}`}
                  alt={item.name}
                  rounded="lg"
                  h="full"
                  w="full"
                  fit="cover"
                />
              </Box>
              <Box mt={2} _groupHover={{}}>
                <Text fontSize={{ md: "xl" }} fontWeight="bold">
                  {item.name}
                </Text>
                <Text mt={-1} color="gray.600">
                  {item.position}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Teams;
