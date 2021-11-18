import React from "react";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/react";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title || "Home | Tezos Africa"}
        description={
          description ||
          "Tezos is an open-source blockchain cryptocurrency & smart contracts platform for assets and applications backed by a global community of validators, researchers, and builders. It's secure, upgradable and built to last."
        }
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: title || "Home | Tezos Africa",
          description:
            description ||
            "Tezos is an open-source blockchain cryptocurrency & smart contracts platform for assets and applications backed by a global community of validators, researchers, and builders. It's secure, upgradable and built to last.",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          site_name: "Tezos Africa",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Box pos="relative">{children}</Box>
    </>
  );
};

export default Layout;
