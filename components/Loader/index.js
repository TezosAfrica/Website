import React from "react";
import {
  container,
  item,
  itemMain,
  MotionBox,
  MotionGrid,
  transition,
} from "@utils/constants";

const Loader = ({ setLoading }) => {
  return (
    <MotionGrid
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      minH="100vh"
      templateColumns={{ md: "repeat(3, 1fr)" }}
      pos="absolute"
      inset={0}
      zIndex={30}
      onAnimationComplete={() => setLoading(false)}
    >
      <MotionBox
        layoutId="large-img"
        variants={itemMain}
        bg="brand.red"
        className="transition-image"
      />
      <MotionBox
        variants={item}
        transition={{
          ...transition,
          times: [0, 0.1, 0.9, 1],
        }}
        bg="brand.yellow"
      />
      <MotionBox
        variants={item}
        transition={{
          ...transition,
          times: [0, 0.1, 0.9, 1],
        }}
        bg="brand.green"
      />
    </MotionGrid>
  );
};

export default Loader;
