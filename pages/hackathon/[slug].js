import React from "react";
import Layout from "@container/Layout";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  UnorderedList,
  VStack,
  StackDivider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "@container/Footer";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import slugify from "@utils/slugify";

const Hackathon = () => {
  const router = useRouter();
  const { locale } = router;
  const { slug } = router.query;

  const t = locale === "en" ? en : fr;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterData = t.hackathon.hacky.find(
    (item) => slugify(item.title) === slug
  );

  return (
    <Layout title="Hackathon">
      <Flex h="50vh" w="100vw" align="center" justify="center" pos="relative">
        <Image
          h="full"
          w="full"
          fit="cover"
          src={filterData?.coverImage}
          alt="hackathon"
        />
        <Box pos="absolute" inset={0} bg="rgba(0,0,0,.4)" />
        <Box
          spacing="2rem"
          pos="absolute"
          color="white"
          bottom={{ base: 16, md: 32 }}
          left={{ base: 6, md: 20 }}
        >
          <Heading as="h3" fontSize={{ base: "4xl", md: "6xl" }}>
            {filterData?.title}
          </Heading>
        </Box>
      </Flex>

      <Container maxW="3xl" my={20}>
        <Tabs>
          <TabList>
            {filterData?.hasAbout && (
              <Tab fontSize={"xl"} fontWeight={500}>
                Hackathon
              </Tab>
            )}
            <Tab fontSize={"xl"} fontWeight={500}>
              Teams
            </Tab>
          </TabList>

          <TabPanels>
            {filterData?.hasAbout && (
              <TabPanel>
                <Stack spacing="3rem" divider={<Divider />}>
                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.about?.title}
                    </Text>
                    <Text>{filterData?.about?.text}</Text>
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.register?.title}
                    </Text>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: filterData?.register?.text,
                      }}
                    />
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.kicks?.title}
                    </Text>
                    <Text>{filterData?.kicks?.text}</Text>
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.rules?.title}
                    </Text>
                    <OrderedList lineHeight="taller" pl={4}>
                      {filterData?.rules?.list?.map((item) => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </OrderedList>
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.users?.title}
                    </Text>

                    <OrderedList lineHeight="taller" pl={4}>
                      {filterData?.users?.list?.map((item) => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </OrderedList>
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.prizes?.title}
                    </Text>

                    <OrderedList lineHeight="taller" pl={4}>
                      {filterData?.prizes?.list?.map((item) => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </OrderedList>
                  </Stack>

                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.grand?.title}
                    </Text>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: filterData?.grand?.text,
                      }}
                    />
                  </Stack>
                </Stack>

                <Box mt={6}>
                  <Link href="https://forms.gle/UUrgv8W5i7RrYkGy5" isExternal>
                    <Button colorScheme="btnColorScheme">{t.register}</Button>
                  </Link>
                </Box>
              </TabPanel>
            )}
            <TabPanel>
              <Stack spacing="3rem" divider={<Divider />}>
                {filterData?.participating?.registered && (
                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.participating?.registered?.title}
                    </Text>
                    <Text>
                      {filterData?.participating?.registered?.summary}
                    </Text>
                  </Stack>
                )}

                {filterData?.participating?.groups && (
                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.participating?.groups?.title}
                    </Text>
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      px={5}
                      align="stretch"
                      spacing={4}
                    >
                      {filterData?.participating?.groups?.countries.map(
                        (item, index) => (
                          <Grid
                            key={index + 1}
                            templateColumns="repeat(12, 1fr)"
                            gap={6}
                          >
                            <GridItem colSpan={{ base: 12, md: 6, lg: 5 }}>
                              <Link
                                href={"https://google.com"}
                                isExternal
                                key={"1"}
                                mr={6}
                                _last={{ mr: 0 }}
                                w={{ md: 64 }}
                                rounded="lg"
                                _hover={{ bg: "gray.50" }}
                                transition="background-color 250ms ease-in"
                              >
                                <Box
                                  bg="gray.50"
                                  p={4}
                                  borderWidth={1}
                                  rounded="lg"
                                >
                                  <Image
                                    h={24}
                                    w="full"
                                    fit="scale-down"
                                    src={item.logo}
                                    alt={"image alt"}
                                  />
                                </Box>
                              </Link>
                              <Text textAlign="center" mt={2} fontWeight={600}>
                                {item.country}
                              </Text>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, md: 6, lg: 7 }}>
                              <UnorderedList lineHeight="taller" pl={4}>
                                {item.teams.map((team) => (
                                  <ListItem key={team} fontSize="lg">
                                    {team}
                                  </ListItem>
                                ))}
                              </UnorderedList>
                            </GridItem>
                          </Grid>
                        )
                      )}
                    </VStack>
                  </Stack>
                )}

                {filterData?.participating?.groupsTable && (
                  <Stack spacing="1rem">
                    <Text fontSize={{ md: "xl" }} fontWeight="bold">
                      {filterData?.participating?.groupsTable?.title}
                    </Text>

                    <TableContainer>
                      <Table variant="simple" border={1}>
                        <TableCaption>
                          {t == "en" ? "Table of list of participating teams in the hackathon" : "Tableau de la liste des équipes participantes au hackathon"}
                        </TableCaption>
                        <Thead backgroundColor={"#1c468d"}>
                          <Tr>
                            <Th color="white" py={5}>
                              {t == "en" ? "Team Name" : "Nom de l'équipe"}
                            </Th>
                            <Th color="white" py={5}>
                              {t == "en"
                                ? "Application Domain"
                                : "Domaine d'application"}
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {filterData?.participating?.groupsTable?.groups.map(
                            (item, index) => (
                              <Tr key={index + 1}>
                                <Td>{item.teamName}</Td>
                                <Td>{item.projectDomain}</Td>
                              </Tr>
                            )
                          )}
                        </Tbody>
                        <Tfoot>
                          <Tr>
                            <Th color="white" py={5}>
                              {t == "en" ? "Team Name" : "Nom de l'équipe"}
                            </Th>
                            <Th color="white" py={5}>
                              {t == "en"
                                ? "Application Domain"
                                : "Domaine d'application"}
                            </Th>
                          </Tr>
                        </Tfoot>
                      </Table>
                    </TableContainer>
                  </Stack>
                )}

                <Stack spacing="1rem">
                  <Text fontSize={{ md: "xl" }} fontWeight="bold">
                    {filterData?.participating?.winners?.title}
                  </Text>
                  {filterData?.participating?.winners?.imageUrl && (
                    <Image
                      h={800}
                      w="full"
                      fit="scale-down"
                      src={filterData?.participating?.winners?.imageUrl}
                      alt={"image alt"}
                    />
                  )}
                  {filterData?.participating?.winners?.text && (
                    <Text fontSize={{ md: "lg" }}>
                      {filterData?.participating?.winners?.text}
                    </Text>
                  )}
                </Stack>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer translate={t} />
    </Layout>
  );
};

export default Hackathon;
