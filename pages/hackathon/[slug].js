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
          src="https://images.unsplash.com/photo-1456428746267-a1756408f782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80"
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
              dangerouslySetInnerHTML={{ __html: filterData?.register?.text }}
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
              dangerouslySetInnerHTML={{ __html: filterData?.grand?.text }}
            />
          </Stack>
        </Stack>

        <Box mt={6}>
          <Link href="https://forms.gle/UUrgv8W5i7RrYkGy5" isExternal>
            <Button colorScheme="btnColorScheme">{t.register}</Button>
          </Link>
        </Box>
      </Container>
      <Footer translate={t} />
    </Layout>
  );
};

export default Hackathon;
