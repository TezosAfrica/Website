import React from "react";
import { Box, Icon, IconButton, Image, Link, Select } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  MotionFlex,
  MotionHStack,
  MotionLink,
  navContainer,
  transition,
} from "@utils/constants";
import { RiMenu4Line } from "react-icons/ri";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";

const item = {
  hidden: { opacity: 0, y: -60 },
  show: { opacity: 1, y: 0, transition: { ...transition, delay: 0.3 } },
};

const Nav = ({ onOpen }) => {
  const router = useRouter();

  const { pathname, locale } = router;

  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <MotionFlex
      bg="brand.red"
      variants={navContainer}
      initial="hidden"
      animate="show"
      align="center"
      justify="space-between"
      pos="fixed"
      top={0}
      h={{ base: 16, md: 20 }}
      zIndex={100}
      color="white"
      fontWeight="semibold"
      w="100%"
      px={{ base: 4, md: 20 }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src="/images/logo.png" alt="Tesoz logo" />
        </Link>
      </NextLink>

      <Box d={{ base: "block", md: "none" }}>
        <IconButton
          variant="ghost"
          aria-label="Menu Button"
          icon={<Icon as={RiMenu4Line} boxSize={6} />}
          onClick={onOpen}
        />
      </Box>

      <MotionHStack
        variants={navContainer}
        initial="hidden"
        animate="show"
        spacing="2rem"
        as="nav"
        d={{ base: "none", md: "flex" }}
      >
        <NextLink href="/" passHref locale={locale}>
          <MotionLink _hover={{ textDecor: "none" }} variants={item}>
            {t.navHome}
          </MotionLink>
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
        {/*  <MotionLink variants={item} _hover={{ textDecor: "none" }}>*/}
        {/*    {t.navBlog}*/}
        {/*  </MotionLink>*/}
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
    </MotionFlex>
  );
};

export default Nav;
