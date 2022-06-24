import { motion } from "framer-motion";
import { Box, Flex, Grid, HStack, Image, Link, Stack } from "@chakra-ui/react";

export const MotionGrid = motion(Grid);
export const MotionBox = motion(Box);
export const MotionFlex = motion(Flex);
export const MotionLink = motion(Link);
export const MotionStack = motion(Stack);
export const MotionHStack = motion(HStack);
export const MotionImage = motion(Image);
export const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export const navContainer = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
      delay: 4.5,
    },
  },
};

export const headerContainer = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
      delay: 0.4,
    },
  },
};

export const container = {
  hidden: { height: 0 },
  show: {
    height: [0, global.innerHeight],
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

export const blogContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export const item = {
  hidden: { height: 0 },
  show: {
    height: [0, global.innerHeight, 0],
    bottom: [0, 0, global.innerHeight, 0],
  },
  exit: {
    height: [0, global.innerHeight, 0],
    bottom: [null, 0, 0],
    transition: { ...transition, delay: 0.4 },
  },
};

export const itemMain = {
  hidden: { height: 0 },
  show: {
    height: [0, global.innerHeight],
    transition: {
      ...transition,
      delay: 1.5,
    },
  },
};

export const features = [
  {
    id: 1,
    title: "Self-Amendment Auto-amendement",
    icon: "blockchain.png",
    text: "Self-amendment allows Tezos to upgrade itself without having to split (“fork”) the network into two different blockchains. ",
  },
  {
    id: 2,
    title: "On-Chain Governance",
    icon: "election.png",
    text: " In Tezos, all stakeholders can participate in governing the protocol. The election cycle provides a formal and systematic procedure for stakeholders to reach agreement on proposed protocol amendments. ",
  },
  {
    id: 3,
    title: "Decentralized Innovation",
    icon: "decentralized.png",
    text: " Proposed amendments that are accepted by stakeholders can include payment to individuals or groups that improve the protocol. ",
  },
  {
    id: 4,
    title: "Delegation",
    icon: "delegate.png",
    text: "In PoS, a security deposit is required to participate in the consensus process and avoid being diluted by inflation. Users who do not wish to participate directly in the consensus protocol have the option to delegate their rights to other users to participate on their behalf.",
  },
  {
    id: 5,
    title: "Proof-of-Stake (PoS)",
    icon: "peer-to-peer.png",
    text: "Participants (“nodes”) in decentralized, peer-to-peer networks provide the necessary computational resources that keep a network up and running. ",
  },
  {
    id: 6,
    title: "Smart Contracts & Formal Verification",
    icon: "contract.png",
    text: "Tezos offers a platform to create formally verifiable smart contracts and build decentralized applications that cannot be censored or shut-down by third parties. ",
  },
];

export const aboutContent = [
  {
    id: 1,
    title: "Education",
    img: "education.png",
    text: " We conduct Tezos development training events, where Tezos smart contract development frameworks like SmartPy, Ligo and Truffle are showcased and explored together with the participants.",
  },
  {
    id: 2,
    title: "Events",
    img: "meeting.png",
    text: "The chapters regularly organize meetups and events at schools, vocational training centers and/or universities to educate the participants on blockchain technology & Tezos.",
  },
  {
    id: 3,
    title: "Building bridges with communities",
    img: "unity.png",
    text: "The chapters’ leads participate in local tech events to engage with the local tech communities and hold discussions with them on how the Tezos blockchain can be adopted and used to solve problems in the community.",
  },
  {
    id: 4,
    title: "Setting up bakers",
    img: "blockchain.png",
    text: "The chapters also contribute to securing the Tezos Blockchain and also participate in the network by setting up bakers.",
  },
  {
    id: 5,
    title: "Hackathon / Fellowships",
    img: "hackathon.png",
    text: "We also organise hackathons to spark innovation and enable individuals and teams to build projects on the Tezos blockchain.",
  },
];

export const teams = [
  {
    id: 1,
    img: "1.jpg",
    name: "Nelly Chatue-Diop",
    position: "President, Tezos Africa",
  },
  {
    id: 2,
    img: "7.jpg",
    name: "Vicentia Asilevi",
    position: "Project Manager, Tezos Africa",
  },
  { id: 3, img: "3.jpg", name: "Kevin Obam", position: "Lead, Cameroon" },
  { id: 4, img: "4.jpg", name: "Sami Souihi", position: "Lead, Tunisia" },
  { id: 5, img: "5.jpg", name: "Frank Deya", position: "Lead, Kenya" },
  { id: 6, img: "6.jpg", name: "Bineta Ngom", position: "Lead, Senegal" },
  { id: 7, img: "11.jpg", name: "Seth Baah Kusi", position: "Lead, Ghana" },
  {
    id: 9,
    img: "12.jpg",
    name: "Haïdar Gühan",
    position: "Lead, Burkina Faso",
  },
  { id: 8, img: "8.JPG", name: "Zabo Honorat", position: "Lead, Ivory Coast" },
  { id: 10, img: "9.jpg", name: "Adebayo Adelekan", position: "Lead, Nigeria" },
  { id: 11, img: "10.jpg", name: "Chimezie Chuta", position: "Lead, Nigeria" },
  { id: 12, img: "13.jpg", name: "Brian Ahimbisibwe", position: "Lead, Uganda" },
  { id: 13, img: "14.png", name: "Leonard Mutambanengwe", position: "Lead, Zimbabwe" },
  { id: 14, img: "15.jpg", name: "Kamala Immaculate", position: "Lead, Tanzania" },
  { id: 15, img: "16.jpg", name: "Togo Lead", position: "Lead, Togo" },
];

export const countries = [
  { id: 1, img: "burkina.png", link: "https://twitter.com/TezosBurkina" },
  { id: 2, img: "cameroon.png", link: "https://twitter.com/camerountezos" },
  { id: 3, img: "ghana.png", link: "https://twitter.com/tezos_ghana" },
  { id: 4, img: "nigeria.png", link: "https://tezosnigeria.org/" },
  { id: 5, img: "senegal.png", link: "https://twitter.com/tezossenegal" },
  { id: 6, img: "tunisia.png", link: "https://twitter.com/TezosTNA" },
  { id: 7, img: "ivorycoast.png", link: "#" },
  { id: 8, img: "kenya.jpg", link: "#" },
  { id: 9, img: "uganda.png", link: "#" },
  { id: 10, img: "zimbabwe.jpg", link: "#" },
  { id: 11, img: "tanzania.png", link: "#" },
  { id: 12, img: "togo.jpg", link: "#" },
];

export const events = [
  {
    id: 1,
    img: "1.jpg",
    title: "The Future of Money",
    date: "2021-09-11",
    stat: "Free",
  },
  {
    id: 2,
    img: "2.jpg",
    title: "Introduction aux Smart Contracts",
    date: "2021-29-10",
    stat: "Free",
  },
  {
    id: 3,
    img: "3.jpg",
    title: "Blockchain Training",
    date: "2021-07-08",
    stat: "Free",
  },
  {
    id: 4,
    img: "4.jpg",
    title: "Développement sur la BlockChain Tezos",
    date: "2021-10-17 ",
    stat: "Free",
  },
];

export const logos = [
  { id: 1, img: "1.png" },
  { id: 2, img: "2.png" },
  { id: 3, img: "3.png" },
  { id: 4, img: "4.png" },
];
