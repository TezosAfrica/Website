import React from "react";
import {
  Box,
  Container,
  Text,
  Grid,
  Heading,
  // Image,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

import SectionTitle from "@components/SectionTitle";
import { MotionStack } from "@utils/constants";

const Grants = ({ translate }) => {
  return (
    <Box as="section" id="tezos" py={{ base: 24, md: 32 }}>
      <Container maxW="7xl">
        <SectionTitle
          title={translate.grants.title}
        />
        <Box mt={20}>
          <Box mb={10}>
            <Heading as="h4" fontSize={{ md: "3xl" }}>
              {translate.grants.pastGrants.title}
            </Heading>
          </Box>
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={{ base: 8, md: 10 }}
          >
            {translate.grants.pastGrants.grants.map((item) => (
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
                {/* <Image
                  src={`/images/${item.icon}`}
                  alt={item.title}
                  w={10}
                  h={10}
                /> */}
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Box px={5}>
                  <UnorderedList>
                    {item.details.map((detail, index) => (
                      <ListItem key={index + 1}>{detail}</ListItem>
                    ))}

                    {item.link && (
                      <ListItem casing="uppercase">
                        {item.link.linkDesciption}{" "}
                        <Link
                          href={item.link.url}
                          color="brand.red"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {item.link.linkText}
                        </Link>
                      </ListItem>
                    )}
                  </UnorderedList>
                </Box>
              </MotionStack>
            ))}
          </Grid>
        </Box>
        <Box mt={20}>
          <Box mb={10}>
            <Heading as="h4" fontSize={{ md: "3xl" }}>
              {translate.grants.upcomingGrants.title}
            </Heading>
          </Box>
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={{ base: 8, md: 10 }}
          >
            {translate.grants.upcomingGrants.grants.map((item) => (
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
                {/* <Image
                  src={`/images/${item.icon}`}
                  alt={item.title}
                  w={10}
                  h={10}
                /> */}
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Box px={5}>
                  <UnorderedList>
                    {item.details.map((detail, index) => (
                      <ListItem key={index + 1}>{detail}</ListItem>
                    ))}

                    {item.link && (
                      <ListItem casing="uppercase">
                        {item.link.linkDesciption}{" "}
                        <Link
                          href={item.link.url}
                          color="brand.red"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {item.link.linkText}
                        </Link>
                      </ListItem>
                    )}
                  </UnorderedList>
                </Box>
              </MotionStack>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Grants;
