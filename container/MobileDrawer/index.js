import React from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Select,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoClose } from "react-icons/io5";
import { MotionBox, MotionLink, transition } from "@utils/constants";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";

const MobileDrawer = ({ onClose }) => {
  const router = useRouter();
  const { pathname, locale } = router;

  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ...transition } }}
      exit={{ opacity: 0, transition: { ...transition } }}
      pos="fixed"
      inset={0}
      zIndex={9000}
      h="100vh"
      w="100%"
      bg="rgba(0,0,0,.7)"
      d={{ base: "block", xl: "none" }}
    >
      <MotionBox
        initial={{ x: -400 }}
        animate={{ x: 0, transition: { ...transition, delay: 0.2 } }}
        exit={{ x: -400, transition: { ...transition } }}
        bg="white"
        rounded="xl"
        h="100vh"
        w={80}
        p={6}
      >
        <Flex align="center" justify="space-between">
          <NextLink href="/" passHref>
            <Link>
              <Image src="/images/logo.png" alt="Logo" />
            </Link>
          </NextLink>

          <Box>
            <IconButton
              aria-label="Menu close button"
              variant="ghost"
              icon={<Icon boxSize={6} as={IoClose} />}
              onClick={onClose}
            />
          </Box>
        </Flex>

        <Stack spacing="1.5rem" fontSize="xl" mt={20}>
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: "none" }} d="block">
              {t.navHome}
            </Link>
          </NextLink>

          {t.nav.map((item) => (
            <MotionLink
              key={item.id}
              _hover={{ textDecor: "none" }}
              variants={item}
              href={pathname === "/" ? item.path : "/"}
              locale={locale}
            >
              {item.title}
            </MotionLink>
          ))}
          {/*<NextLink href="/blog" passHref>*/}
          {/*  <Link _hover={{ textDecor: "none" }} d="block">*/}
          {/*    {t.navBlog}*/}
          {/*  </Link>*/}
          {/*</NextLink>*/}

          <Select
            value={locale}
            onChange={changeLanguage}
            _active={{ color: "black" }}
            w={{ md: 28 }}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
          </Select>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
};

export default MobileDrawer;
