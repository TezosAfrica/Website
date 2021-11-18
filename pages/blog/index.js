import React from "react";
import Layout from "@container/Layout";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import { FormInputWithoutIcon } from "@components/Form/Inputs";
import { BiSearch } from "react-icons/bi";
import FeaturedBlogCard from "@components/Blog/FeaturedBlogCard";
import Filter from "@components/Blog/Filter";
import BlogCard from "@components/Blog/BlogCard";
import { RadioGroup } from "@components/RadioGroup";
import Footer from "@container/Footer";

const options = ["1", "2", "3", "4", "5", "6", "7"];

const Blogs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Blogs">
      <Flex
        align="center"
        justify="center"
        w="100vw"
        h="60vh"
        pos="relative"
        direction="column"
      >
        <Image
          h="100%"
          w="100%"
          fit="cover"
          src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="blog header"
        />
        <Box pos="absolute" inset={0} bg="rgba(0,0,0,.3)" />

        <Box
          pos="absolute"
          bottom={48}
          left={{ md: 20 }}
          color="white"
          px={{ base: 4, md: 0 }}
        >
          <Heading as="h2" fontSize={{ base: "5xl", md: "7xl" }}>
            Blog
          </Heading>
        </Box>

        <Box
          pos="absolute"
          bottom={20}
          left={{ md: 20 }}
          px={{ base: 4, md: 0 }}
        >
          <HStack bg="white" p={2} rounded="md">
            <FormInputWithoutIcon placeholder="Search post..." />
            <IconButton
              aria-label="Search button"
              icon={<Icon as={BiSearch} />}
              bg="black"
              color="white"
              _hover={{ bg: "black" }}
              _active={{ bg: "black" }}
              size="lg"
            />
          </HStack>
        </Box>
      </Flex>

      <Container maxW="7xl" mt={12}>
        <Grid
          templateColumns={{ md: "repeat(3, 1fr)" }}
          gap={10}
          pos="relative"
        >
          <FeaturedBlogCard />
          <FeaturedBlogCard />
          <FeaturedBlogCard />
        </Grid>

        <Filter />

        <Box my={20}>
          <Stack spacing="4rem">
            <Box>
              <Heading>Recent posts</Heading>
            </Box>

            <Stack spacing="3rem">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </Stack>
          </Stack>
        </Box>

        <Box mb={10}>
          <RadioGroup name="rating" options={options} onChange={console.log} />
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Blogs;
