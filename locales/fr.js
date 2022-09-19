const FrenchLocale = {
  nav: [
    { id: 1, title: "A Propos", path: "#about" },
    { id: 2, title: "Tezos", path: "#tezos" },
    { id: 3, title: "Boulangers", path: "#bakers" },
    { id: 4, title: "Subventions", path: "/grants" },
    { id: 5, title: "Equipe", path: "#team" },
    { id: 6, title: "Partenaires", path: "#partners" },
    { id: 7, title: "Hackathon", path: "#hackathon" },
    { id: 8, title: "Evénements", path: "#events" },
  ],
  navHome: "Accueil",
  navBlog: "Blog",
  title:
    "Bienvenue à la Fondation Tezos pour <span style='color: rgb(253, 209, 22);'>l'Afrique</span>",
  headerText:
    "Formé par un groupe de passionnés, d'innovateurs et de développeurs de logiciels, l'objectif principal de Tezos Africa (TA) est de populariser la plateforme Tezos dans la région par le biais de l'éducation, d'événements, de la création de ponts avec les communautés, de la mise en place de bakers et de hackathon/fellowships dispensés en anglais ou en français.",
  email: "Soumettez votre e-mail pour rester à jour.",
  placeholder: "Entrez votre courriel",
  submit: "Soumettre",
  register: "S'inscrire",
  learn: "apprendre encore plus",
  about: "Propos De Nous",
  aboutContent: [
    {
      id: 1,
      title: "Éducation",
      img: "education.png",
      text: " Nous organisons des événements de formation au développement de Tezos, où les cadres de développement de contrats intelligents Tezos tels que SmartPy, Ligo et Truffle sont présentés et explorés avec les participants",
    },
    {
      id: 2,
      title: "Événements",
      img: "meeting.png",
      text: "Les chapitres organisent régulièrement des rencontres et des événements dans les écoles, les centres de formation professionnelle et/ou les universités afin de sensibiliser les participants à la technologie blockchain et à Tezos.",
    },
    {
      id: 3,
      title: "Construire des ponts avec les communautés",
      img: "unity.png",
      text: "Les responsables des chapitres participent à des événements technologiques locaux afin de s'engager auprès des communautés technologiques locales et de discuter avec elles de la manière dont la blockchain Tezos peut être adoptée et utilisée pour résoudre les problèmes de la communauté.",
    },
    {
      id: 4,
      title: "Mise en place des boulangers",
      img: "blockchain.png",
      text: "Les chapitres contribuent également à sécuriser la Blockchain Tezos et participent également au réseau en mettant en place des bakers.",
    },
    {
      id: 5,
      title: "Hackathon / Bourses d'études",
      img: "hackathon.png",
      text: "Nous organisons également des hackathons pour stimuler l'innovation et permettre aux individus et aux équipes de construire des projets sur la blockchain Tezos.",
    },
  ],
  chap: "Chapitres",
  chapText:
    "Voici les pays actuellement représentés dans la Fondation Tezos Africa.",
  tezos: {
    title: "Caractéristiques de la blockchain Tezos.",
    subtitle:
      "Tezos est une plateforme blockchain open-source pour les actifs et les applications, soutenue par une communauté mondiale de validateurs, de chercheurs et de constructeurs. Voici quelques caractéristiques qui rendent la plateforme Tezos exceptionnelle par rapport aux autres.",
    features: [
      {
        id: 1,
        title: "Auto-amendement",
        icon: "blockchain.png",
        text: "L'auto-amendement permet à Tezos de se mettre à niveau sans devoir diviser ('fork') le réseau en deux blockchains différentes.",
      },
      {
        id: 2,
        title: "Gouvernance sur la chaîne",
        icon: "election.png",
        text: "Dans Tezos, toutes les parties prenantes peuvent participer à la gouvernance du protocole. Le cycle d'élection fournit une procédure formelle et systématique permettant aux parties prenantes de se mettre d'accord sur les propositions de modifications du protocole.",
      },
      {
        id: 3,
        title: "Innovation décentralisée",
        icon: "decentralized.png",
        text: "Les amendements proposés qui sont acceptés par les parties prenantes peuvent inclure un paiement aux individus ou aux groupes qui améliorent le protocole.\n",
      },
      {
        id: 4,
        title: "Délégation",
        icon: "delegate.png",
        text: "Dans le PoS, un dépôt de garantie est nécessaire pour participer au processus de consensus et éviter d'être dilué par l'inflation. Les utilisateurs qui ne souhaitent pas participer directement au protocole de consensus ont la possibilité de déléguer leurs droits à d'autres utilisateurs pour qu'ils participent en leur nom.",
      },
      {
        id: 5,
        title: "Preuve d'Enjeu(PoS)",
        icon: "peer-to-peer.png",
        text: "Les participants ('nœuds') des réseaux décentralisés de type 'pair à pair' fournissent les ressources informatiques nécessaires au fonctionnement du réseau.",
      },
      {
        id: 6,
        title: "Contrats intelligents et vérification formelle",
        icon: "contract.png",
        text: "Tezos offre une plateforme permettant de créer des contrats intelligents formellement vérifiables et de construire des applications décentralisées qui ne peuvent être censurées ou arrêtées par des tiers.",
      },
    ],
  },
  bakers: {
    locale: "fr",
    title: "Bakers",
    description:
      "En 2021, la communauté et les amis de Tezos Africa ont décidé de participer à la décentralisation du protocole Tezos en lançant autant de bakers que possible sur le continent. Nous savions que cela ajouterait des voix africaines lors des votes sur les propositions de gouvernance et permettrait une décentralisation géographique. Nous pensons que cela donne également à Tezos une place unique dans l'écosystème Blockchain, car peu d'autres peuvent prétendre avoir des activités minières en Afrique. Nous sommes des rêveurs qui souhaitent que l'Afrique soit à l'avant-garde de cette révolution. Le nom de code de notre projet est <strong>“The Kuoku Project”</strong>.",
    availableBakers: [
      {
        id: 1,
        name: "Tezos Nigéria",
        launched: "Février 2021",
        status: "Actif",
        address: "tz1QGtMpkbdSM8Y1eHTru3WY51sXhFikbaAC",
        details: "https://tzstats.com/tz1QGtMpkbdSM8Y1eHTru3WY51sXhFikbaAC",
      },
      {
        id: 2,
        name: "Tezos Cameroun",
        launched: "Avril 2021",
        status: "Actif",
        address: "tz1hWB6QV5GBQKdEJN8EowHhLJyCMPhH18sA",
        details: "https://tzstats.com/tz1hWB6QV5GBQKdEJN8EowHhLJyCMPhH18sA",
      },
      {
        id: 3,
        name: "Tezos Ghana",
        launched: "Octobre 2021",
        status: "Actif",
        address: "tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
        details: "https://tzstats.com/tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
      },
      {
        id: 4,
        name: "Tezos Senegal",
        launched: "Janvier 2022",
        status: "Actif",
        address: "tz1VJQr7EtCH8KWtd5etEq6vw1oyAtJmMVd3",
        details: "https://tzstats,com/tz1VJQr7EtCH8KWtd5etEq6vw1oyAtJmMVd3",
      },
      {
        id: 5,
        name: "Tezos Tunisia",
        launched: "Avril 2021",
        status: "Actif",
        address: "tz1LCTAwdwSrRmisS8Mxwz6oj378PSeLzxMf",
        details: "https://tzstats.com/tz1LCTAwdwSrRmisS8Mxwz6oj378PSeLzxMf",
      },
    ],
  },
  grants: {
    header: {
      title: 'Programme de petites subventions',
      about: "Le programme de petites subventions est un effort régional expérimental axé sur le financement de projets à faible coût, intermittents ou expérimentaux dans l'écosystème Tezos. Bien que de petite taille, ces projets constituent une étape importante vers le maintien de la santé de l'écosystème et la poursuite du progrès au fur et à mesure que nos communautés se développent.",
      grantApplicationBtnText: 'Demande de subvention',
      beneficiariesLinkText: 'Bénéficiaires',
      upcomingGrantsLinkText: 'Subventions à venir',
    },
    title: "Mises à jour des subventions",
    pastGrants: {
      title: "Bénéficiaires à ce jour",
      grants: [
        {
          id: 1,
          icon: 'grants/logos/ghana.png',
          title: "Subvention 1",
          details: [
            "Notre toute première petite subvention Tezos Africa a été accordée à Tezos Ghana pour leur projet de boulangerie.",
            "Un montant total de 800 tez d'une valeur de 2 936,00 $ a été envoyé à leur boulanger le 6 décembre 2021.",
          ],
          link: {
            linkDesciption: "Lien vers l'adresse de Baker :",
            url: "https://tzstats.com/tz3cF8X5V6DGBdZCC1hoqLzjtq95BcDvDKqe",
            linkText: "Visitez Baker",
          },
        },
        {
          id: 2,
          icon: 'grants/logos/senegal.png',
          title: "Subvention 2",
          details: [
            "La prochaine petite subvention a été accordée à Tezos Sénégal pour leur projet de boulangerie.",
            "Un montant total de 800 tez d'une valeur de 3 175,57 $ a été envoyé à leur boulanger le 6 décembre 2021.",
          ],
          link: {
            linkDesciption: "Lien vers l'adresse de Baker :",
            url: "https://tzstats.com/tz1VJQr7EtCH8KWtd5etEq6vw1oyAtJmMVd3",
            linkText: "Visitez Baker",
          },
        },
        {
          id: 3,
          icon: 'grants/logos/paperlesslogo.png',
          title: "Subvention 3",
          details: [
            "La troisième subvention a été accordée à Paperless Softwares du Ghana.",
            "La subvention doit les aider à atteindre leur objectif de construire une application web simple qui permet aux utilisateurs de voter ou d'organiser des élections sur la blockchain Tezos.",
            "Un montant total de 5 000 dollars a été attribué et un versement de 948 tez d'une valeur de 3 000 dollars a été envoyé dans leur portefeuille le 20 avril 2022.",
          ],
          link: {
            linkDesciption: "Lien vers le site web :",
            url: "https://voted.web.app/",
            linkText: "Voir l'application",
          },
        },
        {
          id: 4,
          icon: 'grants/logos/surveychainlogo.svg',
          title: "Subvention 4",
          details: [
            "La quatrième subvention a été accordée à l'équipe Heisenberg de Tezos Tuinisia.",
            "La subvention doit les aider à atteindre leur objectif de construire une application web qui permet aux utilisateurs de créer et de répondre à des enquêtes sur la blockchain Tezos.",
            "Un montant total de 5 000 dollars a été attribué et un versement de 948 tez d'une valeur de 3 000 dollars a été envoyé dans leur portefeuille le 20 avril 2022.",
          ],
          link: {
            linkDesciption: "Lien vers le site web :",
            url: "https://survey.texpect.fr",
            linkText: "Voir l'application",
          },
        },
      ],
    },
    upcomingGrants: {
      title: "Subventions à venir",
      grants: [
        {
          id: 5,
          icon: 'grants/logos/cameroon.png',
          title: "Subvention 5",
          details: [
            "La subvention sera accordée à Smartland de Tezos Cameroun. Elle permettra de construire une plateforme de répertoire de titres fonciers en ligne sur la blockchain Tezos.",
          ],
          link: null,
        },
        {
          id: 6,
          icon: 'grants/logos/tunisia.png',
          title: "Subvention 6",
          details: [
            "La subvention sera accordée à Tezos Tunisie pour leur projet de boulangerie.",
          ],
          link: null,
        },
      ],
    },
  },
  team: {
    title: "Notre équipe",
    subtitle:
      "La formidable équipe africaine est composée de nos fondateurs ainsi que de responsables et de co-responsables des différents pays africains.\n",
    people: [
      {
        id: 1,
        img: "1.jpg",
        name: "Nelly Chatue-Diop",
        position: "Présidente de Tezos Afrique",
      },
      {
        id: 2,
        img: "7.jpg",
        name: "Vicentia Asilevi",
        position: "Directeur des opérations, Tezos Afrique",
      },
      {
        id: 3,
        img: "3.jpg",
        name: "Kevin Obam",
        position: "Chef de file, Cameroun",
      },
      {
        id: 4,
        img: "4.jpg",
        name: "Sami Souihi",
        position: "Chef de file, Tunisia",
      },
      {
        id: 5,
        img: "5.jpg",
        name: "Frank Deya",
        position: "Chef de file, Kenya",
      },
      {
        id: 6,
        img: "6.jpg",
        name: "Bineta Ngom",
        position: "Chef de file, Senegal",
      },
      {
        id: 7,
        img: "11.jpg",
        name: "Emmanuel Kusi",
        position: "Chef de file, Ghana",
      },
      {
        id: 9,
        img: "12.jpg",
        name: "Haïdar Gühan",
        position: "Chef de file, Burkina Faso",
      },
      {
        id: 8,
        img: "8.JPG",
        name: "Zabo Honorat",
        position: "Chef de file, Ivory Coast",
      },
      {
        id: 10,
        img: "9.jpg",
        name: "Adebayo Adelekan",
        position: "Chef de file, Nigeria",
      },
      {
        id: 11,
        img: "10.jpg",
        name: "Chimezie Chuta",
        position: "Chef de file, Nigeria",
      },
      {
        id: 12,
        img: "13.jpg",
        name: "Brian Ahimbisibwe",
        position: "Chef de file, Uganda",
      },
      {
        id: 13,
        img: "14.png",
        name: "Leonard Mutambanengwe",
        position: "Chef de file, Zimbabwe",
      },
      {
        id: 14,
        img: "15.jpg",
        name: "Kamala Immaculate",
        position: "Chef de file, Tanzania",
      },
      {
        id: 15,
        img: "16.jpg",
        name: "Sebastien Akparo",
        position: "Chef de file, Togo",
      },
    ],
  },
  partners: {
    title: "Partenaires",
    subtitle:
      "Nous nous concentrons sur l'ergonomie et nous vous rencontrons là où vous travaillez. Vous n'êtes qu'à une touche de votre clavier.",
  },
  hackathon: {
    title: "Vergangener Hackathon",
    hacky: [
      {
        id: 1,
        title: "Afrikathon Tezos 2021",
        coverImage:
          "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
        excerpt:
          "Le Tezos Afrikathon est un événement de deux semaines au cours duquel les participants auront l'occasion d'enflammer leur créativité et de créer des produits et des solutions géniales sur la blockchain Tezos.",
        hasAbout: true,
        about: {
          title: "À propos de l'événement",
          text: "Le Tezos Afrikathon est un événement de deux semaines au cours duquel les participants auront l'occasion d'enflammer leur créativité et de créer des produits et des solutions géniales sur la blockchain Tezos. Il sera virtuel et commencera le 29 novembre pour se terminer le 13 décembre 2021. Il est absolument gratuit de participer à ce Hackathon et une pléthore de ressources sera également fournie pour équiper tous les participants. ",
        },
        register: {
          title: "Processus d'inscription et présélection",
          text:
            "La période d'inscription s'étend du 19 au 26 novembre 2021. Durant cette période, toutes les équipes et personnes intéressées devront remplir le formulaire afin de participer au hackathon.\n" +
            "<br /><span style='text-decoration: underline'>Ouverture des candidatures</span> : 19 novembre 20121 à 12h00 GMT\n" +
            "<br /><span style='text-decoration: underline'>Clôture des candidatures</span> : 26 novembre 2021 à 23h59 GMT.\n" +
            "\n" +
            "<br /> <br /> Après la clôture des inscriptions, les différents responsables des chapitres examineront les candidatures soumises et les équipes participantes seront annoncées le 27 novembre 2021. <span style='font-weight: bold'>Veuillez noter qu'il n'y a pas de sélection, toutes les équipes qui s'inscrivent sont automatiquement qualifiées pour participer au Hackathon.</span>",
        },
        kicks: {
          title: "Le hackathon démarre au niveau du chapitre",
          text: "Le hackathon débutera officiellement le 29 novembre 2021. Le hackathon durera deux semaines, du 29 novembre au 13 décembre. Au cours de ces deux semaines, il y aura une présentation intermédiaire le 6 décembre et le hackathon se terminera par une présentation finale et une démo le 13 décembre. Un jury sélectionnera les gagnants lors de la présentation finale. Le jury sera composé des chefs de chapitre et d'autres experts. La décision du jury sera finale et irrévocable.",
        },
        rules: {
          title: "RÈGLES du Hackathon",
          list: [
            "Une équipe doit être composée d'un minimum de 2 membres et d'un maximum de 4 membres.",
            "Les projets seront construits à partir de zéro uniquement et pendant la période donnée de deux semaines. Aucun projet préétabli ne sera accepté.",
            "Les responsables de chapitre serviront de mentors et fourniront des ressources sous forme de guide ou d'assistance.",
            "Maintenir une attitude positive et respectueuse envers les autres participants et les mentors tout au long de l'événement.",
            "Toute décision prise par les juges sera définitive.",
          ],
        },
        users: {
          title:
            "Les applications de l'utilisateur final peuvent être construites autour:",
          list: [
            "Pièces de collection",
            "Applications de communication",
            "Tokenisation du créateur",
            "Crowdfunding",
            "Finance décentralisée",
            "Gaming & Metaverse",
            "NFTS",
            "Solutions de paiement",
            "Modèles de contrats intelligents",
            "Autres (santé, agriculture, éducation, etc.)",
          ],
        },
        prizes: {
          title: "Prix",
          list: [
            "Premier prix : 200 $ de produits XTZ",
            "Deuxième prix : 100 $ de produits XTZ",
            "Troisième prix : 50 $ de produits XTZ",
          ],
        },
        grand: {
          title: "Grand Prix",
          text: "Toutes les équipes participantes peuvent prétendre à une subvention de <span style='font-weight: bold;'>3000 dollars</span> dès lors qu'elles sont en mesure de présenter de très bons projets, qu'elles fassent partie des trois premiers gagnants ou non. Les équipes participantes devront soumettre à nouveau de meilleures applications du même projet ou peuvent choisir de soumettre un projet totalement nouveau entre le 10 et le 23 janvier pour se qualifier pour la subvention. Les gagnants du grand prix seront annoncés le 31 janvier 2022.",
        },
        participating: {
          registered: {
            title: "Équipes enregistrées",
            summary:
              "Sur les 16 équipes qui ont postulé pour l'Afrikathon Tezos, 7 équipes se sont présentées à la journée de démonstration et c'était vraiment excitant de voir des projets construits sur la blockchain Tezos !",
          },
          groups: {
            title: "Équipes participantes",
            countries: [
              {
                country: "Tezos Tunisie Nord Afrique",
                logo: "/images/branches/tunisia.png",
                teams: ["L'équipe Heisenberg", "L'équipe Wonderbake"],
              },
              {
                country: "Tezos Kenya",
                logo: "/images/branches/kenya.jpg",
                teams: ["L'équipe Sauna"],
              },
              {
                country: "Tezos Cameroon",
                logo: "/images/branches/cameroon.png",
                teams: ["Kutaba", "CryptoLions"],
              },
              {
                country: "Tezos Nigeria",
                logo: "/images/branches/nigeria.png",
                teams: [
                  "L'équipe PiSquare",
                  "L'équipe Phoenix",
                  "Brickx",
                  "L'équipe Pandora",
                ],
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
            title: "Gagnants",
            imageUrl: "/images/hackathon/tezos-africathon-2021/winners.jpg",
          },
        },
      },
      // {
      //   id: 2,
      //   title: "Hackathon Tezos Cameroun 2022",
      //   coverImage:
      //     "/images/hackathon/tezos-cameroon-hackathon-2022/hack-cover.jpg",
      //   excerpt:
      //     "Le Tezos Afrikathon est un événement de deux semaines au cours duquel les participants auront l'occasion d'enflammer leur créativité et de créer des produits et des solutions géniales sur la blockchain Tezos.",
      //   hasAbout: false,
      //   participating: {
      //     groupsTable: {
      //       title: "Équipes participantes",
      //       groups: [
      //         {
      //           teamName: "CIIA",
      //           projectDomain: "Industrie alimentaire",
      //         },
      //         {
      //           teamName: "Crypto Investments",
      //           projectDomain: "Monnaies cryptées",
      //         },
      //         {
      //           teamName: "DPRM",
      //           projectDomain: "Santé",
      //         },
      //         {
      //           teamName: "KOVAMI",
      //           projectDomain: "Assurance",
      //         },
      //         {
      //           teamName: "SMARTLAND",
      //           projectDomain: "Immobilier",
      //         },
      //         {
      //           teamName: "PHOENIX",
      //           projectDomain: "Agriculture",
      //         },
      //         {
      //           teamName: "TRUST SUPPLY",
      //           projectDomain: "Contrôle de la qualité de la chaîne d'approvisionnement",
      //         },
      //       ],
      //     },
      //     winners: {
      //       title: "Gagnants",
      //       text: "Une subvention sera accordée à SMARTLAND par Tezos Cameroun. Elle permettra de construire une plateforme de répertoire de titres fonciers en ligne sur la blockchain Tezos.",
      //       imageUrl:
      //         "/images/hackathon/tezos-cameroon-hackathon-2022/winners.jpg",
      //     },
      //   },
      // },
    ],
  },
  events: {
    title: "Événements",
    subtitle:
      "Photos d'événements passés et de rencontres dans les différents pays.",
  },
  footerText:
    "Tezos est une plateforme open source de crypto-monnaie blockchain et de contrats intelligents pour les actifs et les applications soutenue par une communauté mondiale de validateurs, de chercheurs et de constructeurs. Il est sécurisé, évolutif et conçu pour durer.",
  copyright: "2021 Tezos Afrique. Tous les droits sont réservés.",
};

export default FrenchLocale;
