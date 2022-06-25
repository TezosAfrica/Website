import "../styles/globals.css";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { theme } from "../config/theme";
import Nav from "@components/Nav";
import React from "react";
import MobileDrawer from "@container/MobileDrawer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@components/Nav/Navbar";

function MyApp({ Component, pageProps }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { pathname } = useRouter();

  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <ChakraProvider theme={theme}>
      {(pathname === "/" || pathname === '/grants') && <Nav scrollTop={scrollTop} onOpen={onOpen} />}
      {(pathname === "/blog" ||
        pathname === "/blog/[slug]" ||
        pathname === "/hackathon/[slug]") && <Navbar onOpen={onOpen} />}
      <AnimatePresence>
        {isOpen && <MobileDrawer onClose={onClose} />}
      </AnimatePresence>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
