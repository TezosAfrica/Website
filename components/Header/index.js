import React from "react";
import { Container, Heading, Image, Text } from "@chakra-ui/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  headerContainer,
  MotionBox,
  MotionFlex,
  MotionHStack,
  MotionImage,
  MotionStack,
  transition,
} from "@utils/constants";
import NewsletterForm from "@components/Form/NewsletterForm";

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

const Header = ({ translate }) => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MotionBox
      minH={{ base: "110vh", md: "100vh" }}
      layoutId="large-img"
      transition={{ ...transition }}
      className="transition-image final"
      bg="brand.red"
      // w="100vw"
    >
      <MotionBox
        pt={{ base: 20, md: 0 }}
        pos={{ md: "relative" }}
        inset={0}
        zIndex={40}
        color="white"
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
            <MotionStack variants={item} w={{ md: "50%" }} spacing="1rem">
              <MotionFlex
                align="center"
                justify="center"
                w="100%"
                mx="auto"
                d={{ base: "flex", md: "none" }}
              >
                <Image h={56} src="/images/header.svg" alt="illustration" />
              </MotionFlex>

              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "6xl" }}
                dangerouslySetInnerHTML={{ __html: translate.title }}
              />

              <Text>{translate.headerText}</Text>

              <MailchimpSubscribe
                url={MAILCHIMP_URL}
                render={(props) => {
                  const { subscribe, status, message } = props || {};
                  return (
                    <NewsletterForm
                      translate={translate}
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  );
                }}
              />
            </MotionStack>
            <MotionBox
              variants={item}
              d={{ base: "none", md: "block" }}
              bg="rgba(255,255,255,.1)"
              px={8}
              py={28}
              rounded="lg"
            >
              <MotionImage
                variants={item}
                transition={{ delay: 2 }}
                h={{ md: 120 }}
                src="/images/header.svg"
                alt="illustration"
              />
            </MotionBox>
          </MotionHStack>
        </Container>
      </MotionBox>
    </MotionBox>
  );
};

export default Header;
