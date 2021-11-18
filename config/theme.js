import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "85.375em", // 1366
  "3xl": "90em", // 1440
  "4xl": "96em", // 1536
  "5xl": "108rem", // 1728
  "6xl": "120em", // 1920
});

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: "md",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        lineHeight: "tall",
        fontWeight: 400,
        bg: "#FFFFFF",
        color: "#141414",
      },
    }),
  },
  ...breakpoints,
  // fonts: {
  //   heading: '"Inter" ,sans-serif',
  //   body: '"ui-sans-serif", sans-serif',
  // },
  fontSizes: {
    xx: ".55rem",
    tiny: ".68rem",
    "7xl": "5rem",
    "8xl": "6rem",
  },
  colors: {
    brand: {
      yellow: "rgb(253, 209, 22)",
      red: "rgb(193, 9, 63)",
      green: "rgb(5, 150, 105)",
      gray: "rgb(17, 24, 39)",
    },
    btnColorScheme: {
      500: "rgb(193, 9, 63)",
      600: "rgb(193, 9, 63)",
    },
    newBtnColorScheme: {
      500: "#0c4484",
      600: "#0e4d95",
    },
  },
  space: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21.5rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    110: "30rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    121: "36rem",
    122: "37rem",
    122.5: "39rem",
    123: "40rem",
    124: "41.5rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    135: "60rem",
    137: "65rem",
    140: "70rem",
    143: "72rem",
    145: "76rem",
  },
  sizes: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    110: "30rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    121: "36rem",
    122: "37rem",
    122.5: "39rem",
    124: "41.5rem",
    123: "40rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    135: "60rem",
    137: "65rem",
    140: "70rem",
    143: "72rem",
    145: "76rem",
  },
});
