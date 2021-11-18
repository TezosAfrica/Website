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
  Text,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import RelatedPostCard from "@components/Blog/RelatedPostCard";
import Footer from "@container/Footer";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";

const Blog = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : fr;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="blog">
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
          src="https://images.pexels.com/photos/1191503/pexels-photo-1191503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="blog header"
        />
        <Box pos="absolute" inset={0} bg="rgba(0,0,0,.3)" />

        <Box
          pos="absolute"
          bottom={{ base: 12, md: 20 }}
          left={{ md: 20 }}
          color="white"
          px={{ base: 4, md: 0 }}
          w={{ md: 130 }}
        >
          <Heading as="h2" fontSize={{ base: "5xl", md: "7xl" }}>
            Lorem ipsum dolor sit amet.
          </Heading>
          <Text fontSize={{ md: "xl" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi assumenda blanditiis ducimus eligendi eveniet
            magnam quibusdam similique vero voluptatum.
          </Text>
        </Box>
      </Flex>

      <Container maxW="3xl" my={20}>
        <HStack align="start" spacing="2rem">
          <Box w={{ md: "7%" }}>
            <Text>Share</Text>

            <Stack spacing="1rem" mt={4}>
              <IconButton
                aria-label="Facebook"
                icon={<Icon as={FaFacebookSquare} boxSize={5} />}
                variant="ghost"
              />
              <IconButton
                aria-label="Twitter"
                icon={<Icon as={FaTwitter} boxSize={5} />}
                variant="ghost"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedinIn} boxSize={5} />}
                variant="ghost"
              />
            </Stack>
          </Box>
          <Box w={{ md: "93%" }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              accusantium amet, atque consectetur error eum nam nemo nesciunt
              odit, quae reiciendis saepe sequi sunt tempore ut? Ad adipisci
              aspernatur atque culpa cumque doloribus dolorum eaque error est
              exercitationem incidunt laudantium mollitia natus non optio
              provident quod repudiandae sint sit, voluptas? Consectetur in
              ipsum nam nemo quae, quas recusandae tempora vitae. Accusantium ad
              aliquam aliquid amet animi architecto aspernatur cumque delectus
              deserunt doloremque eligendi fuga fugit hic id impedit incidunt
              itaque laudantium maiores mollitia nemo nihil, numquam omnis quia
              quo rem rerum sunt tempora tenetur veniam voluptate! Ad alias
              aliquid aperiam architecto atque autem beatae deleniti dignissimos
              doloribus eaque earum expedita in modi molestiae molestias nam
              neque, possimus quaerat quia sapiente sed tempore voluptate
              voluptatum. Ab beatae consequuntur, eius illo necessitatibus nobis
              qui quia repudiandae voluptatum. Architecto cumque dolore
              inventore optio quasi sunt, totam voluptates! A alias atque
              commodi dolorem doloremque, doloribus eaque earum et eum harum
              ipsa ipsam nemo quas quibusdam ratione rem repellendus velit
              vitae. Ab aspernatur blanditiis culpa, error esse eum
              exercitationem fuga, fugiat ipsa ipsam laboriosam, molestias neque
              numquam praesentium quaerat quam quasi quod sapiente sed
              temporibus unde voluptas voluptate? Alias, aliquid aperiam
              asperiores dolor dolorem est explicabo facere harum id, incidunt
              inventore, iusto laboriosam laborum magni maiores minima molestiae
              nobis numquam praesentium provident quidem quo unde vel! Amet
              corporis debitis delectus doloremque ea error et facere fuga id
              illo, incidunt inventore ipsa ipsam itaque laboriosam laborum,
              modi molestiae mollitia necessitatibus nesciunt nisi numquam
              perspiciatis porro possimus quam quasi quos ratione reiciendis rem
              rerum saepe sapiente soluta sunt tempora tempore vitae voluptates.
              Dolorum eius esse iusto qui unde! Blanditiis cum ipsa quibusdam
              tempora? Asperiores corporis cum, debitis dignissimos, dolores ea
              eos hic iure magnam quos repellat sequi sit velit veritatis
              voluptatem! Aperiam, magni, nobis! Adipisci, assumenda, dolore
              doloribus eligendi est harum hic iure neque nesciunt nulla
              pariatur quidem sequi velit vitae, voluptatum. Error nihil
              officiis sit! Ab adipisci autem corporis cumque cupiditate
              distinctio dolore, enim eveniet modi molestiae, officiis
              perspiciatis quam quidem quisquam repudiandae similique soluta
              voluptate. Aspernatur, autem culpa eligendi error itaque iure
              laboriosam, nemo neque quasi qui quia sed soluta, veritatis. Alias
              at dicta dolore eligendi esse hic illo iste officiis, perferendis
              quaerat quos tempore totam voluptatum? Accusamus aliquid animi
              architecto, autem consequatur cupiditate debitis dolores dolorum
              enim eos esse eum excepturi exercitationem explicabo fuga in ipsam
              itaque iusto maxime minus mollitia, nemo nobis nostrum nulla
              numquam pariatur quis rerum sequi similique temporibus ullam vel
              voluptate voluptatem. Amet inventore, quia. Autem culpa cum, dicta
              laborum magni minima molestiae nostrum quis sed similique? Aperiam
              aspernatur, dolorum eligendi et impedit, inventore ipsam magni,
              minus numquam perspiciatis quas vitae! Aperiam autem, consectetur
              cum cumque cupiditate, debitis dolore doloremque dolores ea, eaque
              earum eius eligendi est eum ex exercitationem expedita facere fuga
              harum ipsa maiores mollitia nesciunt numquam obcaecati perferendis
              porro possimus quas qui quisquam recusandae sequi sint tempore
              unde. Amet doloribus, eius excepturi modi nesciunt repellendus
              tempore? Dolore in incidunt modi pariatur qui. Dolorem quo, vel?
              Repellendus, tempore?
            </Text>
          </Box>
        </HStack>
      </Container>

      <Box bg="brand.red" color="white" py={{ base: 20, md: 32 }}>
        <Container maxW="7xl">
          <Box>
            <Heading>Related Posts</Heading>
          </Box>
          <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={10} mt={10}>
            <RelatedPostCard />
            <RelatedPostCard />
            <RelatedPostCard />
          </Grid>
        </Container>
      </Box>
      <Footer translate={t} />
    </Layout>
  );
};

export default Blog;
