import React from "react";
import {
  blogContainer,
  MotionBox,
  MotionStack,
  transition,
} from "@utils/constants";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const FeaturedBlogCard = () => {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <MotionBox
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      animate={{
        height: isShown ? "26rem" : "14rem",
        backgroundColor: isShown ? "black" : "#F9F9F9",
        color: isShown ? "white" : "black",
        transition: { ...transition },
      }}
      p={8}
    >
      {isShown ? (
        <MotionStack
          variants={blogContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          spacing="2rem"
        >
          <Box>
            <Text>Category</Text>
            <Heading as="h4" fontSize={{ md: "3xl" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Heading>
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            error expedita explicabo optio quod reiciendis!
          </Text>

          <NextLink href="/blog/lovely" passHref>
            <Link
              d="block"
              mt={10}
              _hover={{ textDecor: "none" }}
              _focus={{ outline: "none", shadow: "none" }}
            >
              <Button
                bg="white"
                color="black"
                h={12}
                w={32}
                fontWeight="bold"
                rounded="none"
              >
                Learn more
              </Button>
            </Link>
          </NextLink>
        </MotionStack>
      ) : (
        <Stack spacing="3rem">
          <Text fontSize={{ md: "lg" }} fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            laboriosam neque repudiandae!
          </Text>

          <NextLink href="/blog/lovely" passHref>
            <Link
              textDecor="underline"
              _focus={{ outline: "none", shadow: "none" }}
            >
              <HStack align="center" fontWeight="bold" spacing="1.5rem">
                <Text>Learn more</Text>
                <Icon as={IoChevronForwardCircleSharp} boxSize={5} />
              </HStack>
            </Link>
          </NextLink>
        </Stack>
      )}
    </MotionBox>
  );
};

export default FeaturedBlogCard;
