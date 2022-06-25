import React from "react";
import {
  Container,
  Heading,
  Image,
  Text,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  headerContainer,
  MotionBox,
  MotionHStack,
  MotionStack,
  MotionFlex,
  MotionLink,
  transition,
} from "@utils/constants";

const item = {
  hidden: {
    y: 600,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
};

const Header = ({ translate, locale }) => {
  return (
    <MotionBox
      minH={{ base: "110vh", md: "100vh" }}
      layoutId="large-img"
      transition={{ ...transition }}
      className="transition-image final"
      // bg="white"
      style={{
        background: "url(/images/grants/cool-background.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <MotionBox
        pt={{ base: 20, md: 0 }}
        pos={{ md: "relative" }}
        inset={0}
        zIndex={40}
      >
        <Container maxW="7xl">
          <MotionHStack
            variants={headerContainer}
            initial="hidden"
            animate="show"
            d={{ base: "block", md: "flex" }}
            spacing="3rem"
            align="center"
            minH={{ md: "100vh" }}
          >
            <MotionStack variants={item} w={{ md: "100%" }} spacing="1rem">
              <Box textAlign={"center"}>
                <Stack w="100%" maxW="3xl" textAlign="center" mx="auto">
                  <Heading as="h2" fontSize={{ base: "3xl", md: "6xl" }} mb="3">
                    {translate.grants.header.title}
                  </Heading>
                  <Text color="gray.800" fontSize={{ base: "lg", md: "xl" }}>
                    {translate.grants.header.about}
                  </Text>
                </Stack>

                <Button
                  size="lg"
                  mt="8"
                  mb="8"
                  color="white"
                  bg="brand.red"
                  _hover={{ opacity: 0.8 }}
                >
                  {translate.grants.header.grantApplicationBtnText}
                </Button>

                <MotionFlex
                  align="center"
                  justify="center"
                  style={{ gap: "30px" }}
                >
                  <MotionLink
                    href="#beneficiaries"
                    locale={locale}
                    color="brand.red"
                    textTransform="capitalize"
                  >
                    <Text fontSize="xl" fontWeight={600}>
                      {translate.grants.header.beneficiariesLinkText}
                    </Text>
                  </MotionLink>
                  <MotionLink
                    href="#upcoming-grants"
                    locale={locale}
                    color="brand.red"
                    textTransform="capitalize"
                  >
                    <Text fontSize="xl" fontWeight={600}>
                      {translate.grants.header.upcomingGrantsLinkText}
                    </Text>
                  </MotionLink>
                </MotionFlex>
              </Box>
            </MotionStack>
          </MotionHStack>
        </Container>
      </MotionBox>
    </MotionBox>
  );
};

export default Header;
