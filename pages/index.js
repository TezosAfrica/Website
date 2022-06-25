import React from "react";
import { Stack } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Layout from "@container/Layout";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Header from "@components/Header";
import Features from "@components/Features";
import About from "@components/About";
import Bakers from "@components/Bakers";
import Teams from "@components/Teams";
import Partners from "@components/Partners";
import Events from "@components/Events";
import Loader from "@components/Loader";
import Footer from "@container/Footer";
import Hackathon from "@components/Hackathon";
import { useRouter } from "next/router";
import fr from "../locales/fr";
import en from "../locales/en";
// import Grants from "@components/Grants";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const { locale } = useRouter();
  const t = locale === "en" ? en : fr;

  React.useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <Loader setLoading={setLoading} />
          ) : (
            <>
              {!loading && <Header translate={t} />}
              <Stack>
                <About translate={t} />
                <Features translate={t} />
                <Bakers translate={t} />
                {/* <Grants translate={t} /> */}
                <Teams translate={t} />
                <Partners translate={t} />
                <Hackathon translate={t} />
                <Events translate={t} />
              </Stack>
              <Footer translate={t} />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
}
