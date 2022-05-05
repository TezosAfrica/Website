const EnglishLocale = {
  nav: [
    { id: 1, title: "About us", path: "#about" },
    { id: 2, title: "What's Tezos", path: "#tezos" },
    { id: 3, title: "Bakers", path: "#bakers" },
    { id: 4, title: "Grants", path: "#grants" },
    { id: 5, title: "Our Team", path: "#team" },
    { id: 6, title: "Partners", path: "#partners" },
    { id: 7, title: "Hackathon", path: "#hackathon" },
    { id: 8, title: "Events", path: "#events" },
  ],
  navHome: "Home",
  navBlog: "Blog",
  title:
    "Welcome to <span style='color: rgb(253, 209, 22);'>Tezos Africa</span> Foundation",
  headerText:
    "Formed by a group of enthusiasts, innovators and software developers, the main objective of Tezos Africa (TA) is to popularize the Tezos platform in the region through education, events, building bridges with communities, setting up bakers and hackathon/fellowships delivered in either English or French.",
  email: "Submit your email to stay updated.",
  placeholder: "Enter your email",
  submit: "Submit",
  register: "Register",
  learn: "learn more",
  about: "About us",
  aboutContent: [
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
  ],
  chap: "Chapters",
  chapText:
    "Here are the countries currently represented in the Tezos Africa Foundation.",
  tezos: {
    title: "Tezos Blockchain Features.",
    subtitle:
      "Tezos is an open-source blockchain platform for assets and applications backed by a global community of validators, researchers, and builders. Here are some features that makes the Tezos platform great compared to others.",
    features: [
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
    ],
  },
  bakers: {
    locale: "en",
    title: "Bakers",
    description:
      "In 2021, the Tezos Africa community & friends set out to participate in the Tezos protocol decentralization by launching as many bakers as possible throughout the continent. We knew this would add African voices when voting happened on governance proposals as well as provide geographical decentralisation. We believe it also gives Tezos a unique place in the Blockchain ecosystem as not many others can claim to have mining activities in Africa. We are dreamers aiming to have Africa at the forefront of this revolution. The code name of our project is <strong>“The Kuoka project”</strong>",
    availableBakers: [
      {
        id: 1,
        name: "Tezos Nigeria",
        launched: "February 2021",
        status: "Active",
        address: "tz1QGtMpkbdSM8Y1eHTru3WY51sXhFikbaAC",
        details: "https://tzstats.com/tz1QGtMpkbdSM8Y1eHTru3WY51sXhFikbaAC",
      },
      {
        id: 2,
        name: "Tezos Cameroon",
        launched: "April 2021",
        status: "Active",
        address: "tz1hWB6QV5GBQKdEJN8EowHhLJyCMPhH18sA",
        details: "https://tzstats.com/tz1hWB6QV5GBQKdEJN8EowHhLJyCMPhH18sA",
      },
      {
        id: 3,
        name: "Tezos Ghana",
        launched: "October 2021",
        status: "Active",
        address: "tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
        details: "https://tzstats.com/tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
      },
      {
        id: 4,
        name: "Tezos Senegal",
        launched: "January 2022",
        status: "In progress",
        address: null,
        details: null,
      },
      {
        id: 5,
        name: "Tezos Tunisia",
        launched: "April 2022",
        status: "Active",
        address: "tz1LCTAwdwSrRmisS8Mxwz6oj378PSeLzxMf",
        details: "https://tzstats.com/tz1LCTAwdwSrRmisS8Mxwz6oj378PSeLzxMf",
      },
    ],
  },
  grants: {
    title: "Tezos Africa Grants",
    pastGrants: {
      title: "Beneficiaries So Far",
      grants: [
        {
          id: 1,
          title: "Grant 1",
          details: [
            "Our first ever Tezos Africa small grant was given to Tezos Ghana for their baker project.",
            "A total amount of 800 tez valued $2,936.00 was sent to their baker on the 6th of December, 2021.",
          ],
          link: {
            linkDesciption: "Link To Baker Address:",
            url: "https://tzstats.com/tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
            linkText: "Visit Baker",
          },
        },
        {
          id: 2,
          title: "Grant 2",
          details: [
            "The next small grant was given to Tezos Senegal for their baker project.",
            "A total amount of 800 tez valued at $3,175.57 was sent to their baker on the 6th of December, 2021.",
          ],
          link: {
            linkDesciption: "Link To Baker Address:",
            url: "https://tzstats.com/tz1VJQr7EtCH8KWtd5etEq6vw1oyAtJmMVd3",
            linkText: "Visit Baker",
          },
        },
        {
          id: 3,
          title: "Grant 3",
          details: [
            "The third grant was given to Paperless Softwares from Ghana.",
            "The grant is to help achieve their objective of building a simple web application which allows users to vote or organise elections on the Tezos Blockchain.",
            "A total amount of $5000 was awarded and an installment of 948 tez valued at $3,000 was sent to their wallet on the 20th of april,2022.",
          ],
          link: {
            linkDesciption: "Website Link:",
            url: "https://voted-ui.vercel.app",
            linkText: "View Application",
          },
        },
        {
          id: 4,
          title: "Grant 4",
          details: [
            "The fourth grant was given to Team Heisenberg from Tezos Tuinisia.",
            "The grant is to help achieve their objective of building a web application which allows users to create and answer surveys on the Tezos Blockchain.",
            "A total amount of $5000 was awarded and an installment of 948 tez valued at $3,000 was sent to their wallet on the 20th of april,2022.",
          ],
          link: {
            linkDesciption: "Website Link:",
            url: "https://survey.texpect.fr",
            linkText: "View Application",
          },
        },
      ],
    },
    upcomingGrants: {
      title: "Upcoming Grants",
      grants: [
        {
          id: 5,
          title: "Grant 5",
          details: [
            "The grant will be given to Smartland from Tezos Cameroon. This will help in building an online land title directory platform on the Tezos Blockchain.",
          ],
          link: null,
        },
        {
          id: 6,
          title: "Grant 6",
          details: [
            "The grant will be given to Tezos Tunisia for their baker project.",
          ],
          link: null,
        },
      ],
    },
  },
  team: {
    title: "Our Team",
    subtitle:
      "The amazing Africa team is made of our founders as well as country leads and co-leads from the various African Countries.",
    people: [
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
      {
        id: 8,
        img: "8.JPG",
        name: "Zabo Honorat",
        position: "Lead, Ivory Coast",
      },
      {
        id: 10,
        img: "9.jpg",
        name: "Adebayo Adelekan",
        position: "Lead, Nigeria",
      },
      {
        id: 11,
        img: "10.jpg",
        name: "Chimezie Chuta",
        position: "Lead, Nigeria",
      },
      {
        id: 12,
        img: "13.jpg",
        name: "Brian Ahimbisibwe",
        position: "Lead, Uganda",
      },
      {
        id: 13,
        img: "14.png",
        name: "Leonard Mutambanengwe",
        position: "Lead, Zimbabwe",
      },
      {
        id: 14,
        img: "15.jpg",
        name: "Kamala Immaculate",
        position: "Lead, Tanzania",
      },
    ],
  },
  partners: {
    title: "Partners",
    subtitle:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  hackathon: {
    title: "Past hackathons",
    hacky: [
      {
        id: 1,
        title: "Tezos Afrikathon 2021",
        coverImage:
          "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
        excerpt:
          "Tezos Afrikathon is a two-week event where participants will have the opportunity to ignite their creativity and build awesome products and solutions on the Tezos Blockchain.",
        about: {
          title: "About the event",
          text: "Tezos Afrikathon is a two-week event where participants will have the opportunity to ignite their creativity and build awesome products and solutions on the Tezos Blockchain. It will be virtual and begin from 29th November and end on the 13th of December, 2021. It is absolutely free to participate in this Hackathon and a plethora of resources will also be provided to equip all participants.",
        },
        register: {
          title: "Registration process & shortlisting",
          text: "Registration period spans from 19th to 26th of November, 2021. During this period all interested teams and individuals will have to fill the form in order to participate in the hackathon. <br /> <span style='text-decoration: underline;'>Applications open</span>: 19th November, 20121 at 12am GMT <br /> <span style='text-decoration: underline;'>Applications close</span>: 26th November, 2021 at 11:59pm GMT <br> <br> After registrations close, the various leads of the chapters will go through the applications submitted and the participating teams will be announced on the 27th of November, 2021. <span style='font-weight: bold;'>Kindly note that there is no selection, all the teams who apply are automatically qualified to participate in the Hackathon.</span>",
        },
        kicks: {
          title: "Hackathon kicks off on Chapter level",
          text: "The hackathon will kick off officially on the 29th of November, 2021. The hackathon will last for a two week period spanning from the 29th of November and it will end on the 13th of December. During the two week period, there will be a mid-review presentation on the 6th of December and the hackathon will end with a final presentation plus a demo on the 13th of December. A jury will select the winners during the final presentation. The jury will consist of the Chapter leads and other experts. The decision of the jury would be final and abiding.",
        },
        rules: {
          title: "RULES of the Hackathon",
          list: [
            "A team should have a minimum of 2 members and maximum of 4 members.",
            "Projects will be built from the scratch only and during the given two-week period hence no pre-built project will be accepted.",
            "Chapter leads will serve as mentors and provide resources as a form of guide or assistance.",
            "Maintain a positive and respectful attitude towards fellow participants and mentors throughout the event.",
            "Any decision made by the judges will be final.",
          ],
        },
        users: {
          title: "End User Applications can be built around:",
          list: [
            "Collectibles",
            "Communication applications",
            "Creator tokenization",
            "Crowdfunding",
            "Decentralized Finance",
            "Gaming & Metaverse",
            "NFTS",
            "Payment solutions",
            "Smart contract templates ",
            "Others (health, agriculture, education, etc.) ",
          ],
        },
        prizes: {
          title: "Prizes",
          list: [
            "First Prize: $200 worth of XTZ",
            "Second Prize: $100 worth of XTZ",
            "Third Prize: $50 worth of XTZ",
          ],
        },
        grand: {
          title: "Grand Prize",
          text: "All participating teams are eligible for a grant of <span style='font-weight: bold;'>$3000</span> once they are able to present very good projects whether they are part of the top three winners or not. The participating teams will need to resubmit better applications of the same project or can choose to submit a totally new project between Jan 10th and Jan 23rd, 2022 to qualify for the grant. The Grand prize winners will be announced on the 31st of January, 2022.",
        },
        participating: {
          registered: {
            title: "Registered Teams",
            summary:
              "Out of the 16 teams which applied for the Tezos Afrikathon, we had 7 teams turning up for the demo day and it was really exciting seeing projects built on the Tezos blockchain!",
          },
          groups: {
            title: "Participating Teams",
            countries: [
              {
                country: "Tezos Tunisie Nord Afrique",
                logo: "/images/branches/tunisia.png",
                teams: ["Team Heisenberg", "Tea Wonderbake"],
              },
              {
                country: "Tezos Kenya",
                logo: "/images/branches/kenya.jpg",
                teams: ["Team Sauna"],
              },
              {
                country: "Tezos Cameroon",
                logo: "/images/branches/cameroon.png",
                teams: ["Kutaba", "CryptoLions"],
              },
              {
                country: "Tezos Nigeria",
                logo: "/images/branches/nigeria.png",
                teams: ["Team PiSquare", "Team Phoenix", "Brickx", "Team Pandora"],
              },
              {
                country: "Tezos Cote D'Ivoire",
                logo: "/images/branches/burkina.png",
                teams: ["Tezos CI"],
              },
              {
                country: "Tezos Senegal",
                logo: "/images/branches/senegal.png",
                teams: ["Diwanu Xarala", "BDCrypto", "The Blockers"],
              },
              {
                country: "Tezos Ghana",
                logo: "/images/branches/ghana.png",
                teams: ["Ingenious Game", "BlackStar", "Trace101Africa"],
              },
            ],
          },
          winners: {
            title: "Winners",
            imageUrl: "/images/hackathon/tezos-africathon-2021/winners.jpg",
          }
        },
      },
      {
        id: 2,
        title: "Tezos Cameroon Hackathon 2022",
        coverImage:
          "/images/hackathon/tezos-cameroon-hackathon-2022/hack-cover.jpg",
        excerpt:
          "Tezos Afrikathon is a two-week event where participants will have the opportunity to ignite their creativity and build awesome products and solutions on the Tezos Blockchain.",
        about: {
          title: "About the event",
          text: "Tezos Afrikathon is a two-week event where participants will have the opportunity to ignite their creativity and build awesome products and solutions on the Tezos Blockchain. It will be virtual and begin from 29th November and end on the 13th of December, 2021. It is absolutely free to participate in this Hackathon and a plethora of resources will also be provided to equip all participants.",
        },
        register: {
          title: "Registration process & shortlisting",
          text: "Registration period spans from 19th to 26th of November, 2021. During this period all interested teams and individuals will have to fill the form in order to participate in the hackathon. <br /> <span style='text-decoration: underline;'>Applications open</span>: 19th November, 20121 at 12am GMT <br /> <span style='text-decoration: underline;'>Applications close</span>: 26th November, 2021 at 11:59pm GMT <br> <br> After registrations close, the various leads of the chapters will go through the applications submitted and the participating teams will be announced on the 27th of November, 2021. <span style='font-weight: bold;'>Kindly note that there is no selection, all the teams who apply are automatically qualified to participate in the Hackathon.</span>",
        },
        kicks: {
          title: "Hackathon kicks off on Chapter level",
          text: "The hackathon will kick off officially on the 29th of November, 2021. The hackathon will last for a two week period spanning from the 29th of November and it will end on the 13th of December. During the two week period, there will be a mid-review presentation on the 6th of December and the hackathon will end with a final presentation plus a demo on the 13th of December. A jury will select the winners during the final presentation. The jury will consist of the Chapter leads and other experts. The decision of the jury would be final and abiding.",
        },
        rules: {
          title: "RULES of the Hackathon",
          list: [
            "A team should have a minimum of 2 members and maximum of 4 members.",
            "Projects will be built from the scratch only and during the given two-week period hence no pre-built project will be accepted.",
            "Chapter leads will serve as mentors and provide resources as a form of guide or assistance.",
            "Maintain a positive and respectful attitude towards fellow participants and mentors throughout the event.",
            "Any decision made by the judges will be final.",
          ],
        },
        users: {
          title: "End User Applications can be built around:",
          list: [
            "Collectibles",
            "Communication applications",
            "Creator tokenization",
            "Crowdfunding",
            "Decentralized Finance",
            "Gaming & Metaverse",
            "NFTS",
            "Payment solutions",
            "Smart contract templates ",
            "Others (health, agriculture, education, etc.) ",
          ],
        },
        prizes: {
          title: "Prizes",
          list: [
            "First Prize: $200 worth of XTZ",
            "Second Prize: $100 worth of XTZ",
            "Third Prize: $50 worth of XTZ",
          ],
        },
        grand: {
          title: "Grand Prize",
          text: "All participating teams are eligible for a grant of <span style='font-weight: bold;'>$3000</span> once they are able to present very good projects whether they are part of the top three winners or not. The participating teams will need to resubmit better applications of the same project or can choose to submit a totally new project between Jan 10th and Jan 23rd, 2022 to qualify for the grant. The Grand prize winners will be announced on the 31st of January, 2022.",
        },
      },
    ],
  },
  events: {
    title: "Events",
    subtitle: "Photos from past events and meet ups in the various countries.",
  },
  footerText:
    "Tezos is an open-source blockchain cryptocurrency & smart contracts platform for assets and applications backed by a global community of validators, researchers, and builders. It's secure, upgradable and built to last.",
  copyright: "2021 Tezos Africa. All rights reserved.",
};

export default EnglishLocale;
