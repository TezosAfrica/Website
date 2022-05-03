import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Select,
} from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import { MotionHStack, MotionLink } from "@utils/constants";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";

const Navbar = ({ onOpen }) => {
  const router = useRouter();
  const { pathname, locale } = router;

  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      pos="absolute"
      w="100%"
      zIndex={10}
      color="white"
      px={{ base: 4, xl: 20 }}
      h={{ base: 16, xl: 20 }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src="/images/logo.png" alt="Tesoz logo" />
        </Link>
      </NextLink>

      <Box d={{ base: "block", xl: "none" }}>
        <IconButton
          variant="ghost"
          aria-label="Menu Button"
          icon={<Icon as={RiMenu4Line} boxSize={6} />}
          onClick={onOpen}
        />
      </Box>

      <MotionHStack
        spacing="2rem"
        as="nav"
        d={{ base: "none", xl: "flex" }}
        fontWeight="bold"
      >
        <NextLink href="/" passHref locale={locale}>
          <MotionLink _hover={{ textDecor: "none" }}>{t.navHome}</MotionLink>
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

        {/*<NextLink href="/blog" passHref locale={locale}>*/}
        {/*  <MotionLink _hover={{ textDecor: "none" }}>{t.navBlog}</MotionLink>*/}
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
      </MotionHStack>
    </Flex>
  );
};

export default Navbar;
