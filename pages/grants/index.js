import React from "react";
import { useRouter } from "next/router";
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

// components
import Header from "@components/Grants/Header";
import Footer from "@container/Footer";
import Grants from "@components/Grants";

// utils
import slugify from "@utils/slugify";

// locales
import en from "../../locales/en";
import fr from "../../locales/fr";

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
      <Header translate={t} locale={locale} />
      <Grants translate={t} />
      <Footer translate={t} />
    </Layout>
  );
};

export default Hackathon;
