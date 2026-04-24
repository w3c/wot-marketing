import { ReactNode } from 'react';
import youtubeIcon from '@/public/youtube.png';
import Image from 'next/image';
import {
  FileText,
  Network,
  Factory,
  Zap,
  Building,
  Landmark,
  Activity,
  Tractor,
  Truck,
  Home,
  Leaf,
  Copy,
  ShieldCheck,
  QrCode,
  Bot,
  Brain,
  Lock,
  Workflow,
  Sun,
} from 'lucide-react';
import { Stack } from '@mui/joy';

export interface Resource {
  title: string;
  description: ReactNode;
  url: string;
  urlLabel: string;
  icon: ReactNode;
}

export interface Domain {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  content?: string;
  author?: string;
  isJoint?: boolean;
  quotes?: { quote: string; author: string }[];
}

export const RESOURCES: Resource[] = [
  {
    title: 'WoT Community Group Case Studies',
    description: (
      <Stack justifyContent="space-between">
        Presentations of WoT adopters in the WoT Community Group are case studies of WoT is used in the industry,
        academia and enthusiasts.
      </Stack>
    ),
    url: 'https://www.youtube.com/playlist?list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ',
    urlLabel: 'youtube.com',
    icon: <Image src={youtubeIcon} alt="Youtube" height={24} />,
  },
  {
    title: 'WoT Use Cases & Requirements',
    description:
      'The official W3C document detailing use cases gathered from WoT stakeholders, including functional and technical requirements.',
    url: 'https://w3c.github.io/wot-usecases/',
    urlLabel: 'w3c.github.io/wot-usecases',
    icon: <FileText size={24} />,
  },
  {
    title: 'WoT Architecture: Application Domains',
    description:
      'Section of the WoT Architecture 1.1 specification describing the key application domains where WoT technologies are applied.',
    url: 'https://www.w3.org/TR/wot-architecture11/#sec-application-domains',
    urlLabel: 'w3.org/TR/wot-architecture11',
    icon: <Network size={24} />,
  },
];

export const DOMAINS: Domain[] = [
  {
    title: 'Smart Manufacturing',
    description:
      'Connecting diverse industrial assets such as PLCs, robots, and sensors across factory floors using standardized Thing Descriptions for seamless integration.',
    icon: <Factory size={32} />,
  },
  {
    title: 'Energy & Utilities',
    description:
      'Enabling smart grid management, renewable energy integration, and consumption optimization through interoperable device interfaces.',
    icon: <Zap size={32} />,
  },
  {
    title: 'Smart Buildings',
    description:
      'Unified control of HVAC, lighting, access, and monitoring systems from multiple vendors within commercial and residential buildings.',
    icon: <Building size={32} />,
  },
  {
    title: 'Smart Cities',
    description:
      'Integrating urban infrastructure including traffic, waste, and environment monitoring into cohesive city-wide platforms using open standards.',
    icon: <Landmark size={32} />,
  },
  {
    title: 'Healthcare & Well-being',
    description:
      'Connecting medical devices, wearables, and facility systems to improve patient care, remote monitoring, and clinical workflows.',
    icon: <Activity size={32} />,
  },
  {
    title: 'Agriculture',
    description:
      'Precision farming with interoperable soil sensors, weather stations, and irrigation controllers for data-driven crop management.',
    icon: <Tractor size={32} />,
  },
  {
    title: 'Transportation & Logistics',
    description:
      'Fleet tracking, supply chain visibility, and connected vehicle systems through standardized IoT descriptions and discovery.',
    icon: <Truck size={32} />,
  },
  {
    title: 'Consumer & Smart Home',
    description:
      'Cross-vendor smart home device integration, bridging ecosystems like Matter, Zigbee, and Z-Wave via WoT abstractions.',
    icon: <Home size={32} />,
  },
  {
    title: 'Environment Monitoring',
    description:
      'Air quality, water quality, and ecological monitoring through standardized sensor networks accessible via web protocols.',
    icon: <Leaf size={32} />,
  },
];

export const TECH_TRENDS: Domain[] = [
  {
    title: 'Digital Twins',
    description:
      'WoT Thing Descriptions provide a standardized way to describe and interact with digital representations of physical assets, enabling interoperable digital twin ecosystems.',
    icon: <Copy size={32} />,
  },
  {
    title: 'EU Cyber Resiliency Act',
    description:
      "WoT's machine-readable security metadata and standardized vulnerability reporting align with the CRA's requirements for transparent, secure-by-design connected products.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: 'Digital Product Passport',
    description:
      'Thing Descriptions can serve as machine-readable product passports, carrying lifecycle data, material composition, and sustainability information for connected products.',
    icon: <QrCode size={32} />,
  },
  {
    title: 'Agentic Systems',
    description:
      "Autonomous AI agents can leverage WoT's standardized affordances and discovery mechanisms to find, understand, and orchestrate IoT devices without human intervention.",
    icon: <Bot size={32} />,
  },
  {
    title: 'Neurosymbolic AI',
    description:
      "Combining neural networks with WoT's semantic, knowledge-graph-compatible Thing Descriptions enables AI systems that can both reason symbolically about devices and learn from sensor data.",
    icon: <Brain size={32} />,
  },
  {
    title: 'Edge Computing',
    description:
      'WoT enables discovery and interaction with computing resources at the network edge, bringing standardized interfaces to latency-sensitive and bandwidth-constrained IoT deployments.',
    icon: <Network size={32} />,
  },
  {
    title: 'Zero Trust Architecture',
    description:
      "WoT's fine-grained security descriptions support zero-trust models by making device authentication, authorization, and access policies explicit and machine-verifiable.",
    icon: <Lock size={32} />,
  },
  {
    title: 'Semantic Interoperability',
    description:
      "WoT's use of linked data and semantic annotations enables cross-domain data integration, making IoT data FAIR (Findable, Accessible, Interoperable, Reusable) by design.",
    icon: <Workflow size={32} />,
  },
  {
    title: 'Sustainability & Green IoT',
    description:
      'Standardized device descriptions enable energy-aware orchestration, carbon footprint tracking, and optimized resource usage across connected infrastructure.',
    icon: <Sun size={32} />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'fujitsu',
    name: 'Fujitsu',
    content:
      '"We are pleased to endorse the updated Web of Things (WoT) standard. This update has made the specifications more practical and applicable, and we committed to continuing our support. As an integrator, we aim to build out digital transformation (DX) solutions based on the global standards, driven by 5G and IoT technologies. Fujitsu believes that this approach will enable us to seamlessly connect to AI-powered solutions, thereby enhancing our ability to deliver innovative and efficient services to our clients."',
    author:
      'Bun Kimura, Head of Strategic Planning Department, Product Planning Div., Mobile System Business Unit, Fujitsu Limited',
  },
  {
    id: 'hitachi',
    name: 'Hitachi',
    content:
      '"To feedback effective solutions from digital twins to real-world systems, it is essential that we are able to quickly find devices in the physical environment and understand their roles and the context of the data which they provide. The updated recommendations to which we contributed in part, include enhanced capabilities such as Thing Discovery that will facilitate this link between the physical and cyberspace. We\'re enthusiastic that these leaps in cyber-physical systems will stimulate progress across diverse sectors and contribute to the realization of a better society."',
    author: 'Itaru Nishizawa, Vice President and Executive Officer, Chief Technology Officer, Hitachi, Ltd.',
  },
  {
    id: 'intel',
    name: 'Intel',
    content:
      '"Intel congratulates the WoT WG for the updated WoT standard. This update solidifies support for the descriptive approach to IoT interoperability. IoT fragmentation remains a major barrier to greater IoT adoption. The WoT standard addresses a key challenge in the integration of IoT devices and services from different IoT ecosystems by providing a common format for describing data and interaction. This descriptive approach strongly differentiates it from other prescriptive approaches to IoT interoperability, and is designed to work with and enhance other standards, not compete with them."',
    author: 'Eric Siow, Director, Web Standards and Ecosystem Strategies, Intel Corporation',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    content:
      '"We built a reference implementation that uses the new Web of Things (WoT) release with our Azure OpenAI service to demonstrate how to automatically onboard industrial assets and were pleased with how easy it was to generate WoT Thing Descriptions automatically. In addition, the open-source WoT tools available from the Eclipse Foundation made automatic validation of the generated Thing Description an easy value add."',
    author:
      'Erich Barnstedt, Chief Architect Standards, Consortia and Industrial IoT, Azure Edge + Platform Team, Microsoft Corporation',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    content:
      '"The Web of Things set of specifications, including the updated version 1.1, serves as a unifying framework to address complex IoT use cases requiring interoperability across diverse ecosystems at massive scale. Oracle is pleased with the progression of this set of specifications to the Recommendation status and is proud to have been an active contributor, leader, and co-editor of this effort. We believe that this will benefit customers and users by enabling much-needed interoperability between different vendor solutions for IoT."',
    author: 'Jai Suri, Vice President, IoT and Blockchain Applications Development, Oracle',
  },
  {
    id: 'siemens',
    name: 'Siemens',
    content:
      '"Addressing today\'s market challenges, such as energy optimization, requires technologies that facilitate easy heterogeneous system integration and optimization implementation. The Web of Things, which is one of the key technology building blocks, facilitates addressing such challenges by integrating efficient diverse data sources from a variety of device systems. Our in-house solution sayWoT! implements the latest WoT Thing Description 1.1 and is successfully used in various IoT projects by customers. One of the highlights is the usage of sayWoT! in the Wunsiedel Energy Park, Germany, to enable smart control to ensure green hydrogen production."',
    author: 'Thomas Kiessling, Chief Technology Officer at Smart Infrastructure, Siemens AG',
  },
  {
    id: 've3',
    name: 'VE3 (formerly "Banksly")',
    content:
      '"The W3C\'s enhanced Web of Things (WoT) standards, including WoT Architecture 1.1, WoT Thing Description 1.1, and WoT Discovery, represent a significant leap in addressing the challenges of IoT interoperability and system fragmentation. The harmonization of IoT devices and services brought about by these standards resonates with our pursuit of seamless and integrated digital solutions. We particularly appreciate the advancements in Thing Models and Discovery, which align with our focus on scalable, modular, and privacy-conscious digital infrastructure. Through the implementation of these WoT standards, we envision an accelerated progression in developing intelligent, interconnected systems that are not only efficient but also accessible and secure. This aligns perfectly with our mission at VE3 to drive technological advancements that are both innovative and sustainable."',
    author: 'Manish Garg, Director, VE3',
  },
  {
    id: 'siemens-microsoft',
    name: 'Siemens & Microsoft Joint Statement',
    isJoint: true,
    quotes: [
      {
        quote:
          '"This collaboration with Microsoft reflects our shared vision of enabling customers to harness the full potential of IoT through open standards and interoperability. The improved data access will provide portfolio managers with granular visibility into critical metrics such as energy efficiency and consumption. With IoT data often being siloed, this level of transparency is a game-changer for an industry seeking to optimize building operations and meet sustainability targets."',
        author: 'Susanne Seitz, CEO, Siemens Smart Infrastructure Buildings',
      },
      {
        quote:
          '"Siemens shares Microsoft\'s focus on interoperability and open IoT standards. This collaboration is a significant step forward in making IoT data more actionable. Microsoft\'s strategy underscores our commitment to partnering with industry leaders to empower customers with greater choice and control over their IoT solutions."',
        author: 'Erich Barnstedt, Senior Director & Architect, Corporate Standards Group, Microsoft',
      },
    ],
  },
  {
    id: 'opc-foundation',
    name: 'OPC Foundation',
    content:
      '"The OPC Foundation welcomes the new releases of the W3C Web of Things. Current OPC Foundation group activities are working on a solution how WoT Thing Descriptions can be used as a data model mapping service from non-OPC UA asset interfaces to OPC UA systems. This reduces the onboarding effort (e.g. of Modbus-based assets) and enables smooth use of asset data interfaces in the OPC UA address space. We see this as a big win for the manufacturing industry and another important step towards improving the interoperability of heterogeneous asset landscapes."',
    author: 'Stefan Hoppe, President, OPC Foundation',
  },
  {
    id: 'sifis-home',
    name: 'SIFIS-Home Consortium',
    content:
      '"The SIFIS-Home consortium is looking forward to the new W3C Web of Things standards. The SIFIS-Home project focused on proving that it is possible to have more awareness on the risks and hazards related to the deployment of connected devices in the Home environment. The Thing Description model proved to be the ideal match to deliver the additional information."',
    author: 'Luca Barbato, SIFIS-Home Consortium Member and Andrea Saracino, SIFIS-Home Project Coordinator',
  },
];
