type MeetupLink = {
  url: string;
  title: string;
  description: string;
};

export const meetupLinks: Record<number, MeetupLink> = {
  4: {
    url: 'https://youtu.be/WcCUyn9RUqw',
    title: 'Meetup 4 - Delegated Authentication and Authorization in NAMIB Project',
    description:
      'Jan Romann presents an approach that allows constrained IoT devices to delegate authentication and authorization using the Web of Things, demonstrated through the NAMIB project smart-environment access use case.',
  },
  5: {
    url: 'https://youtu.be/SIKMbxLJXow',
    title: 'Meetup 5 - Empowering Industrial Automation with WoT - SICK',
    description:
      'Matthias Held from SICK AG presents how SICK implemented a full WoT stack using Thing Models, Thing Description Directories, Edge Gateways, and related technologies for their Digital Twin solution.',
  },
  6: {
    url: 'https://youtu.be/xFnrWOeh3pc',
    title: 'Meetup 6 - Automated Industrial Asset Onboarding Using Open Standards - Microsoft, Siemens, evosoft',
    description:
      'Microsoft, Siemens, and evosoft show how the same Thing Description can onboard an industrial asset into the cloud systems of two different organizations, demonstrating vendor-neutral interoperability.',
  },
  7: {
    url: 'https://www.youtube.com/watch?v=iqNX9DgFaBM',
    title: 'Meetup 7 - Web Scale Agents with WoT and No-Code Applications',
    description:
      'Simon Mayer from the University of St. Gallen discusses web-scale agents and shows a Web-based Agent IDE where domain experts can develop no-code applications.',
  },
  8: {
    url: 'https://www.youtube.com/watch?v=kPfdqGYvBVM',
    title: 'Meetup 8 - Advantages and Challenges of Web of Things for Digital Twins',
    description:
      'Schaeffler Group presents how they use Web of Things standards as a data model for Digital Twin product APIs, highlighting both advantages and challenges.',
  },
  10: {
    url: 'https://www.youtube.com/watch?v=LHybkrb3Xek',
    title: 'Meetup 10 - Designing an API for the Physical World - Seam',
    description:
      'Sy Bohy, CEO and co-founder of Seam, talks about Seam’s unified API for IoT devices, inspired by API design for the physical world.',
  },
  11: {
    url: 'https://youtu.be/VYHjMU5a9FI',
    title: 'Meetup 11 - ISO Industrial Data Ontology and WoT',
    description:
      'Mikkel Haggren Brynildsen presents the ISO Industrial Data Ontology, its relation to Web of Things, its motivation, and future development.',
  },
  12: {
    url: 'https://youtu.be/A0PGtoXwPO4',
    title: 'Meetup 12 - Interactable Digital Twins for Robots via WoT',
    description:
      'Ege Korkan and Fady Salama demonstrate an open-source project that bridges CoppeliaSim, a robotics simulator, with Eclipse Thingweb node-wot to build interactable digital twins.',
  },
  13: {
    url: 'https://www.youtube.com/watch?v=TI6HUOw6lhU',
    title: 'Meetup 13 - Smart microscopy for everyone with OpenFlexure',
    description: 'Richard Bowman explores open-source software, hardware, and smart microscopy through OpenFlexure.',
  },
  14: {
    url: 'https://www.youtube.com/watch?v=7FGS10G-YIc',
    title: 'Meetup 14 - Smart Building Solutions built on WebThings',
    description:
      'Ben Francis from Krellian presents smart building solutions built on WebThings for commercial building management.',
  },
  15: {
    url: 'https://www.youtube.com/watch?v=upUN9-0so2s',
    title: 'Meetup 15 - Beyond Local Connectivity: Bridging Web of Things and Matter',
    description:
      'Till Langen from Deutsche Telekom discusses Matter, standardized smart home systems, and mapping Matter data models to Web of Things.',
  },
  16: {
    url: 'https://www.youtube.com/watch?v=uPhKn-q-ZkA',
    title: 'Meetup 16 - Extending the WoT Thing Description Ontology for Digital Twins in the Construction Domain',
    description:
      'Salvador González Gerpe introduces WoTDT, an ontology for describing the five-dimensional architecture of a Digital Twin and locating metadata with the help of WoT.',
  },
  17: {
    url: 'https://www.youtube.com/watch?v=x6vnqo4j1tA',
    title: 'Meetup 17 - Integrating the WoT with Solid: Architecture, Benefits, and Real-World Application',
    description:
      'A session about integrating the Web of Things with Solid, covering architecture, benefits, and real-world application.',
  },
  18: {
    url: 'https://www.youtube.com/watch?v=XtJ260RuiWY',
    title: 'Meetup 18 - Digital Twins in Monitoring Applications Using the Web of Things',
    description:
      'Marco Di Felice and Luca Sciullo from the IoT Prism lab at the University of Bologna discuss Digital Twins in monitoring applications using WoT.',
  },
  19: {
    url: 'https://youtu.be/dUb_oP2kCBQ',
    title: 'Meetup 19 - Using WoT Thing Models as a Basis to Make the Housing Sector Smart',
    description:
      'Thomas Jaeckle from Beyonnex.io presents how WoT Thing Models can support smart and energy-efficient properties.',
  },
  20: {
    url: 'https://youtu.be/vRdX5ItQHX0',
    title: 'Meetup 20 - How Siemens Technology Streamlines Building Onboarding',
    description:
      'Ondrej Tomcik from Siemens discusses how Siemens technology streamlines building onboarding, especially for buildings with unique provisioning challenges.',
  },
  21: {
    url: 'https://youtu.be/PpY2TsSIRG4',
    title: 'Meetup 21 - Web of Things for Every Thing',
    description: 'Christian Paul shows how easy it is to build, test, and prototype with the Web of Things paradigm.',
  },
  22: {
    url: 'https://youtu.be/k2KMKd2ZVq0',
    title: 'Meetup 22 - Scientific Instrumentation and Control with WoT',
    description:
      'Vignesh Vaidyanathan discusses potential applications of Web of Things in scientific instrumentation and control.',
  },
  23: {
    url: 'https://youtu.be/p17C3mrY720',
    title: 'Meetup 23 - Generic and Extensible WoT Manager Using JSON Schema and AI',
    description:
      'Andreas Eberhart from Dashjoin introduces Dashjoin’s low-code platform and explains how WoT can be used to build a generic and extensible WoT manager.',
  },
  24: {
    url: 'https://youtu.be/ARffaQ543Lo',
    title: 'Meetup 24 - Immersive WoT Applications in Mixed Reality',
    description:
      'Fady Salama and Roman Binkert from the Technical University of Munich discuss how WoT simplifies interacting with mixed-reality applications.',
  },
  25: {
    url: 'https://youtu.be/gcpHYtqTBbA',
    title: 'Meetup 25 - An Introduction to Eclipse LMOS',
    description:
      'A joint WebAgents, WoT CG, and WebThing Protocol CG session introducing Eclipse LMOS and discussing how WoT can model agents and tools.',
  },
  26: {
    url: 'https://youtu.be/JxGcW70tqfk',
    title: 'Meetup 26 - How the Hive of Things - HiveOT - Embraces WoT',
    description:
      'A session about the use of WoT standards in building the HiveOT Hub, including its objectives, history, and architecture.',
  },
  27: {
    url: 'https://youtu.be/p-iU_B6MQFo',
    title: 'Meetup 27 - Visual Programming with WoT',
    description: 'A session about visual programming approaches with Web of Things.',
  },
  28: {
    url: 'https://youtu.be/EkeoQLWIhlI',
    title: 'Meetup 28 - An OSS Stack for IoT Virtualization and Convergence with Edge Computing Technologies',
    description:
      'Dimitris Spatharakis and Nikos Filinis from NETMODE Lab discuss an open-source stack for IoT virtualization and convergence with edge computing technologies.',
  },
  29: {
    url: 'https://youtu.be/PlY-ixquyZc',
    title: 'Meetup 29 - OPC UA and Web of Things',
    description:
      'Erich Barnstedt from Microsoft and Sebastian Käbisch from Siemens show how Web of Things is becoming a bridge with OPC UA.',
  },
  30: {
    url: 'https://youtu.be/VSZA8wjjUIo',
    title: 'Meetup 30 - Enabling IoT in Buildings with BACnet and Web of Things',
    description: 'A session about enabling IoT in buildings by combining BACnet and Web of Things.',
  },
  31: {
    url: 'https://youtu.be/CuZo1NGshiI',
    title: 'Meetup 31 - Managing Device Descriptions with the Thing Model Catalog',
    description: 'A session about managing device descriptions using the Thing Model Catalog.',
  },
  32: {
    url: 'https://youtu.be/-ZJ3A0txXD8',
    title: 'Meetup 32 - From WoT to Chain: Enabling Zero-Trust Oracles for Blockchain IoT Applications',
    description:
      'Ivan Dimitry Ribeiro Zyrianoff from the University of Bologna presents ZONIA, a zero-trust decentralized oracle network for Blockchain IoT applications.',
  },
  33: {
    url: 'https://youtu.be/xMIHykB_ebg',
    title: 'Meetup 33 - Interoperable Cyber-Physical Multi-Agent Systems Through WoT',
    description: 'Roman Binkert discusses interoperable cyber-physical multi-agent systems through W3C Web of Things.',
  },
  34: {
    url: 'https://youtu.be/l-suLrJDjd0',
    title: 'Meetup 34 - Quick Onboarding of Devices to Prosys Forge Using OPC UA WoT Connectivity',
    description:
      'Jouni Aro and Iivo Yrjölä from Prosys OPC show how OPC UA WoT Connectivity enables quick and reliable onboarding of devices to Prosys Forge without manual configuration.',
  },
};
