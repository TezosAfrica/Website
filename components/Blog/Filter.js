import React from "react";
import { HStack } from "@chakra-ui/react";
import { MotionBox } from "@utils/constants";
import { AnimateSharedLayout } from "framer-motion";

const data = [
  "All",
  "Tezos Africa",
  "Cameroon",
  "Ghana",
  "Ivory Coast",
  "Kenya",
  "Nigeria",
  "Senegal",
  "Tunisia",
];

const Filter = () => {
  const [selected, setSelected] = React.useState("All");

  return (
    <AnimateSharedLayout>
      <HStack
        align="center"
        spacing="2rem"
        mt={16}
        overflowX={{ base: "scroll", md: "visible" }}
      >
        {data.map((item) => (
          <MotionBox
            as="button"
            role="button"
            key={item}
            fontWeight="700"
            pos="relative"
            textTransform="uppercase"
            fontSize="sm"
            onClick={() => setSelected(item)}
            minW={{ base: 28, md: "inherit" }}
          >
            {item}

            {selected === item && (
              <MotionBox
                pos="absolute"
                className="selected"
                layoutId="selected"
              />
            )}
          </MotionBox>
        ))}
      </HStack>
    </AnimateSharedLayout>
  );
};

export default Filter;
