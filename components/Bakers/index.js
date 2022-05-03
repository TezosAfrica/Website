import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Stack,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { FcCalendar, FcOk, FcLink, FcKey } from "react-icons/fc";

// util
import numberToPosition from "@utils/numberToPosition";

const Feature = ({ position, data }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"brand.red"}
        mb={1}
      >
        <Heading as={"h5"} fontSize="2xl">
          {position}
        </Heading>
      </Flex>
      <Text fontSize={18} fontWeight={600}>
        {data.name}
      </Text>
      <List spacing={2} color={"gray.500"} fontSize="15" textAlign="left">
        <ListItem>
          <ListIcon as={FcCalendar} color="green.500" />
          <strong>Launched:</strong> {data.launched}
        </ListItem>
        <ListItem>
          <ListIcon as={FcOk} color="green.500" />
          <strong>Status:</strong> {data.status}
        </ListItem>
        {data.address && (
          <ListItem>
            <ListIcon as={FcKey} color="green.500" />
            <strong>Address:</strong> {data.address}
          </ListItem>
        )}
        {data.details && (
          <ListItem>
            <ListIcon as={FcLink} color="green.500" />
            <strong>Details:</strong>{" "}
            <Link
              href={data.details}
              color="brand.red"
              target={"_blank"}
              rel="noreferrer"
            >
              View Explorer
            </Link>
          </ListItem>
        )}
      </List>
    </Stack>
  );
};

const Bakers = ({ translate }) => {
  return (
    <Box as="section" id="bakers" bg="gray.50" py={{ base: 20, md: 32 }}>
      <Container maxW={{ md: "6xl" }}>
        <Box mb={{ base: 14, md: 0 }}>
          <Box mb={{ base: 8 }} textAlign="left">
            <Heading
              as="h3"
              mb={{ base: 3 }}
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              {translate.bakers.title}
            </Heading>
            <Text
              fontSize={{ md: "lg" }}
              dangerouslySetInnerHTML={{ __html: translate.bakers.description }}
            />
          </Box>
          {/* List Of Available bakers section */}
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {translate.bakers.availableBakers.map((item, itemIndex) => (
                <Feature
                  key={item.id}
                  position={numberToPosition(itemIndex + 1)}
                  data={item}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Bakers;
