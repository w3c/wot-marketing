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
import meetupLinks from './meetup_youtube_links.json';

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

/** A single clickable moment inside a referenced meetup recording. */
export interface UseCaseFragment {
  /** Start offset in whole seconds. */
  start: number;
  /** Human readable timestamp label, e.g. "2:39". */
  timestamp: string;
  /** Description of what is shown in this fragment. */
  label: string;
}

/** A referenced WoT community-group meetup recording with relevant fragments. */
export interface UseCaseVideo {
  meetupNumber: number;
  title: string;
  fragments: UseCaseFragment[];
}

/** Extended content used to render a dedicated page for a domain or trend. */
export interface UseCaseEntry extends Domain {
  /** URL slug and lookup id. */
  slug: string;
  category: 'domain' | 'trend';
  /** How WoT can (theoretically) be used in this area. */
  howWoT: string;
  /** Key benefits WoT brings to this area. */
  benefits: string[];
  /** Real-life use cases drawn from the meetup recordings. */
  realWorldUseCases: { title: string; description: string }[];
  /** Referenced meetup recordings with timestamped fragments. */
  videos: UseCaseVideo[];
}

/** Resolve the YouTube video id for a meetup number (undefined if unpublished). */
export function getMeetupVideoId(meetupNumber: number): string | undefined {
  const entry = meetupLinks.find((m) => m.meetupNumber === meetupNumber);
  if (!entry) return undefined;
  const match = entry.youtubeUrl.match(/(?:youtu\.be\/|[?&]v=)([\w-]+)/);
  return match?.[1];
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

/**
 * Merged catalogue of application domains and technology trends. Each entry is
 * keyed by its slug so a dedicated page can be rendered by id. The two top-level
 * keys keep their original meaning: DOMAINS and TECH_TRENDS.
 */
export const USE_CASES: {
  DOMAINS: Record<string, UseCaseEntry>;
  TECH_TRENDS: Record<string, UseCaseEntry>;
} = {
  DOMAINS: {
    'smart-manufacturing': {
      slug: 'smart-manufacturing',
      category: 'domain',
      title: 'Smart Manufacturing',
      description:
        'Connecting diverse industrial assets such as PLCs, robots, and sensors across factory floors using standardized Thing Descriptions for seamless integration.',
      icon: <Factory size={32} />,
      howWoT:
        'Factory floors combine PLCs, robots, sensors and energy meters from many vendors, each speaking a different protocol. WoT Thing Descriptions give every asset a single, machine-readable contract describing its properties, actions and events, so the same integration works across OPC UA, Modbus and proprietary stacks — bridging operational technology (OT) and IT without hand-written glue code for each device.',
      benefits: [
        'One protocol-agnostic Thing Description works across different integration stacks, tools and cloud platforms.',
        'Contract-first thing models let teams design device interfaces before hardware exists and reuse them across product lines.',
        'Automated onboarding replaces manual reverse-engineering of Modbus registers and vendor documentation.',
        'Robots and cells can be simulated and controlled through the same TD as the real equipment, enabling safe dry-runs.',
      ],
      realWorldUseCases: [
        {
          title: 'OT/IT convergence at SICK',
          description:
            'SICK exposes sensors and controllers through thing models, mapping edge data into cloud digital twins while preserving product relationships.',
        },
        {
          title: 'Cross-stack asset onboarding (Siemens & Microsoft)',
          description:
            'A Siemens PAC energy meter is described once and consumed unchanged across different vendor integration stacks and mapped to the OPC UA information model.',
        },
        {
          title: 'Simulated robot cells (SimIS)',
          description:
            'A virtual robot in CoppeliaSim moves in sync with the real robot through identical TDs, so control logic is tested in simulation and deployed without code changes.',
        },
      ],
      videos: [
        {
          meetupNumber: 5,
          title: 'Empowering Industrial Automation with WoT (SICK)',
          fragments: [
            {
              start: 159,
              timestamp: '2:39',
              label: 'Connecting controllers and sensors to the cloud while preserving product data.',
            },
            {
              start: 286,
              timestamp: '4:46',
              label: 'Contract-first thing models defining product interactions before implementation.',
            },
          ],
        },
        {
          meetupNumber: 6,
          title: 'Automated Industry Asset Onboarding (Siemens & Microsoft)',
          fragments: [
            {
              start: 233,
              timestamp: '3:53',
              label: 'Field-level heterogeneity: many vendors, protocols and security requirements.',
            },
            {
              start: 1296,
              timestamp: '21:36',
              label: 'Mapping a Siemens PAC 4200 energy meter to the OPC UA model via a TD.',
            },
          ],
        },
        {
          meetupNumber: 12,
          title: 'Interactable Digital Twins Using WoT and Simulation (SimIS)',
          fragments: [
            {
              start: 510,
              timestamp: '8:30',
              label: 'A virtual robot moves in sync with the real robot through identical TDs.',
            },
            {
              start: 800,
              timestamp: '13:20',
              label: 'Framework: URDF import to TD enhancement to simulation interaction.',
            },
          ],
        },
        {
          meetupNumber: 20,
          title: 'Siemens Smart Connector & Thing Model Catalog',
          fragments: [
            {
              start: 45,
              timestamp: '0:45',
              label: 'Electrical, building and substation devices unified via thing models.',
            },
          ],
        },
        {
          meetupNumber: 29,
          title: 'OPC UA and Web of Things Binding',
          fragments: [
            {
              start: 239,
              timestamp: '3:59',
              label: 'OPC UA client-server interface as the manufacturing interoperability standard.',
            },
            {
              start: 606,
              timestamp: '10:06',
              label: 'Mapping proprietary manufacturing assets to OPC UA using WoT descriptions.',
            },
          ],
        },
        {
          meetupNumber: 34,
          title: 'Process OPC — WoT Device Onboarding',
          fragments: [
            {
              start: 374,
              timestamp: '6:14',
              label: 'Thing descriptions eliminate manual Modbus register mapping from Excel docs.',
            },
          ],
        },
      ],
    },
    'energy-utilities': {
      slug: 'energy-utilities',
      category: 'domain',
      title: 'Energy & Utilities',
      description:
        'Enabling smart grid management, renewable energy integration, and consumption optimization through interoperable device interfaces.',
      icon: <Zap size={32} />,
      howWoT:
        'Energy systems mix smart meters, substations, renewable assets and building loads that rarely share a protocol. WoT Thing Descriptions provide interoperable interfaces to non-discoverable devices — even simple Modbus meters — and can be enriched with OPC UA energy-management semantics, so consumption and power-quality data flow into monitoring and optimization tools without bespoke integration.',
      benefits: [
        'Interoperable access to non-discoverable meters and controllers over simple protocols like Modbus.',
        'TDs enriched with OPC UA energy-management models give raw registers semantic meaning (e.g. phases L1/L2/L3).',
        'A device database built on WoT lets cloud teams understand equipment without contacting embedded developers.',
        'Standard interfaces support consumption dashboards and smart-grid optimization across vendors.',
      ],
      realWorldUseCases: [
        {
          title: 'Power-meter onboarding (Process OPC)',
          description:
            "A power meter's TD is enriched with the OPC UA energy-management specification, streaming live measurements into unified monitoring in minutes.",
        },
        {
          title: 'Groundwater pump handover (GridForce)',
          description:
            'A WoT device database lets cloud teams understand pump capabilities and data resolution without direct communication with the embedded team.',
        },
        {
          title: 'Non-discoverable device connectivity (OPC UA binding)',
          description:
            'WoT thing descriptions solve interoperability for simple energy meters that cannot be auto-discovered.',
        },
      ],
      videos: [
        {
          meetupNumber: 34,
          title: 'Process OPC — WoT Device Onboarding',
          fragments: [
            {
              start: 482,
              timestamp: '8:02',
              label: 'TD enriched with an OPC UA energy model for rapid power-meter integration.',
            },
          ],
        },
        {
          meetupNumber: 29,
          title: 'OPC UA and Web of Things Binding',
          fragments: [
            {
              start: 300,
              timestamp: '5:00',
              label: 'TDs give interoperability to non-discoverable energy meters using Modbus.',
            },
          ],
        },
        {
          meetupNumber: 11,
          title: 'Industrial Data Ontology for IoT Operating Instructions (GridForce)',
          fragments: [
            {
              start: 415,
              timestamp: '6:55',
              label: 'WoT as an information-handover mechanism between embedded and cloud teams.',
            },
          ],
        },
        {
          meetupNumber: 31,
          title: 'Thing Model Catalog',
          fragments: [
            {
              start: 364,
              timestamp: '6:04',
              label: 'Standardized thing models avoid duplicating energy-device onboarding work.',
            },
          ],
        },
      ],
    },
    'smart-buildings': {
      slug: 'smart-buildings',
      category: 'domain',
      title: 'Smart Buildings',
      description:
        'Unified control of HVAC, lighting, access, and monitoring systems from multiple vendors within commercial and residential buildings.',
      icon: <Building size={32} />,
      howWoT:
        'Buildings run HVAC, lighting, access, fire detection and metering from different vendors over BACnet, Modbus, KNX and Z-Wave. WoT consolidates these multivendor systems into a single standardized interface and building digital twin, enabling unified control, energy optimization and fine-grained, role-based access for residents, installers and operators.',
      benefits: [
        'Multivendor building management systems consolidated into one standardized WoT interface and digital twin.',
        'BACnet/Modbus device configuration is automated by thing models instead of manual integration.',
        'Fine-grained access control gives residents, installers and operators different permissions.',
        'Higher-order twins model rooms, apartments and whole buildings for energy analytics.',
      ],
      realWorldUseCases: [
        {
          title: 'Net-Zero building optimization',
          description:
            'A gateway streams WoT data to a cloud building digital twin for energy modelling and space-utilization analytics against Net-Zero targets.',
        },
        {
          title: 'BACnet binding',
          description:
            'A WoT binding automates configuration of BACnet field devices, bridging the dominant building-automation protocol to modern web apps.',
        },
        {
          title: 'Smart-lock capabilities (Seam)',
          description:
            'The same API code programs access codes and reads battery status across Salto, Yale and Schlage locks.',
        },
      ],
      videos: [
        {
          meetupNumber: 14,
          title: 'Smart Buildings & Digital Twins with WoT',
          fragments: [
            {
              start: 77,
              timestamp: '1:17',
              label: 'Net-Zero targets could save UK businesses £6 billion a year, motivating digitalization.',
            },
            {
              start: 409,
              timestamp: '6:49',
              label: 'Cloud service streams WoT data into a building digital twin for long-term analytics.',
            },
          ],
        },
        {
          meetupNumber: 30,
          title: 'BACnet and Web of Things Binding',
          fragments: [
            {
              start: 414,
              timestamp: '6:54',
              label: 'WoT chosen as a neutral, lightweight standard for building automation.',
            },
            { start: 587, timestamp: '9:47', label: 'Thing descriptions automate BACnet device configuration.' },
          ],
        },
        {
          meetupNumber: 10,
          title: 'Designing an API for the Physical World (Seam)',
          fragments: [
            {
              start: 904,
              timestamp: '15:04',
              label: 'Standard smart-lock capabilities across Salto, Yale and Schlage brands.',
            },
          ],
        },
        {
          meetupNumber: 19,
          title: 'WoT Thing Models in Real Estate',
          fragments: [
            {
              start: 487,
              timestamp: '8:07',
              label: 'Digital-twin APIs with access control for residents, installers and operators.',
            },
          ],
        },
        {
          meetupNumber: 23,
          title: 'Web of Things Manager (Dashjoin)',
          fragments: [
            { start: 952, timestamp: '15:52', label: 'An LLM agent turns off unused lights in occupied offices.' },
          ],
        },
      ],
    },
    'smart-cities': {
      slug: 'smart-cities',
      category: 'domain',
      title: 'Smart Cities',
      description:
        'Integrating urban infrastructure including traffic, waste, and environment monitoring into cohesive city-wide platforms using open standards.',
      icon: <Landmark size={32} />,
      howWoT:
        'City infrastructure — libraries, bike-sharing, traffic, environment sensors and construction sites — is fragmented across departments and vendors. WoT turns municipal data sources and public APIs into discoverable Things with uniform property, action and event access, letting cities integrate services into cohesive, open, standards-based platforms.',
      benefits: [
        'Public data sources such as opening hours and bike stations exposed as standard WoT Things.',
        'Uniform interaction patterns over diverse backend APIs (OpenStreetMap, city-bike, ArtNet).',
        'Construction-site and infrastructure digital twins built from sensor, scan and satellite data.',
        'Open standards avoid per-department vendor lock-in.',
      ],
      realWorldUseCases: [
        {
          title: 'Public infrastructure as Things (Christian Paul)',
          description:
            'Library opening hours from OpenStreetMap and city bike-station availability are exposed as WoT Things with time-zone-aware properties.',
        },
        {
          title: 'Construction digital twins (KOGITO)',
          description:
            'The WoT Digital Twin Ontology represents construction-site twins built from satellite images, 3D scans and sensors across pilots in Austria, Denmark and Spain.',
        },
        {
          title: 'Trustless climate data (ZoNa)',
          description:
            'Decentralized oracle networks aggregate city weather and climate sensors for parametric applications without trusting a single source.',
        },
      ],
      videos: [
        {
          meetupNumber: 21,
          title: 'Web of Things for Everyone (Christian Paul)',
          fragments: [
            {
              start: 258,
              timestamp: '4:18',
              label: 'Library opening hours from OpenStreetMap exposed as a WoT Thing.',
            },
            {
              start: 488,
              timestamp: '8:08',
              label: 'City bike-sharing stations with live bike and slot availability.',
            },
          ],
        },
        {
          meetupNumber: 16,
          title: 'WoT Digital Twin Ontology for Construction',
          fragments: [
            {
              start: 221,
              timestamp: '3:41',
              label: 'Construction-site digital twins from satellite images, 3D scans and sensors.',
            },
          ],
        },
        {
          meetupNumber: 32,
          title: 'ZoNa — Zero Trust Oracle Networks for IoT',
          fragments: [
            {
              start: 1009,
              timestamp: '16:49',
              label: 'Decentralized oracle networks aggregate sensors to prevent data manipulation.',
            },
          ],
        },
      ],
    },
    healthcare: {
      slug: 'healthcare',
      category: 'domain',
      title: 'Healthcare & Well-being',
      description:
        'Connecting medical devices, wearables, and facility systems to improve patient care, remote monitoring, and clinical workflows.',
      icon: <Activity size={32} />,
      howWoT:
        'Medical instruments, wearables and lab equipment often ship with proprietary interfaces that block automation and remote use. WoT gives instruments a standardized HTTP API and machine-readable description, enabling automated experimentation, remote diagnosis and integration of devices from different makers into clinical and research workflows.',
      benefits: [
        'Standardized HTTP API enables cross-platform, cross-language instrument control.',
        'Automated, long-running experiments run headless without client disconnection.',
        'Remote pathology and diagnosis without shipping physical samples.',
        'Low-cost, 3D-printed instruments become interoperable lab building blocks.',
      ],
      realWorldUseCases: [
        {
          title: 'Malaria diagnostics (OpenFlexure)',
          description:
            'An automated 3D-printed microscope supports quality assurance and technician training for malaria diagnosis in sub-Saharan Africa.',
        },
        {
          title: 'Remote pathology',
          description:
            'The microscope acts as a whole-slide imager so experts in different locations provide diagnoses without transporting samples.',
        },
      ],
      videos: [
        {
          meetupNumber: 13,
          title: 'Open Flexure Microscope & Web of Things',
          fragments: [
            {
              start: 149,
              timestamp: '2:29',
              label: 'Automated microscope for malaria-diagnosis quality assurance and training.',
            },
            { start: 406, timestamp: '6:46', label: 'Whole-slide imaging for medical training and remote pathology.' },
          ],
        },
      ],
    },
    agriculture: {
      slug: 'agriculture',
      category: 'domain',
      title: 'Agriculture',
      description:
        'Precision farming with interoperable soil sensors, weather stations, and irrigation controllers for data-driven crop management.',
      icon: <Tractor size={32} />,
      howWoT:
        'Precision agriculture relies on tractors, pumps, soil sensors and weather stations that must coordinate autonomously. WoT Thing Descriptions expose these assets so autonomous agents can discover and orchestrate them, and so field data can feed irrigation, livestock and crop-management decisions — even trustless, insurance-grade weather feeds.',
      benefits: [
        'Autonomous agents discover and control field equipment via Thing Descriptions.',
        'Operating instructions for pumps and controllers hand over cleanly from embedded to cloud teams.',
        'Soil and microbiome analysis becomes accessible with low-cost interoperable instruments.',
        'Independent weather stations feed trustless parametric-insurance contracts.',
      ],
      realWorldUseCases: [
        {
          title: 'Autonomous tractor (SERIA)',
          description:
            'A tractor follows GPS waypoints to harvest fields, controlled through TDs exposing its controller, waypoint service, AI obstacle avoidance and human-in-the-loop service.',
        },
        {
          title: 'Groundwater pumps (GridForce)',
          description:
            'Firmware-driven pumps in an Arizona facility irrigate crops and supply livestock, with operating instructions handed over via WoT.',
        },
        {
          title: 'Parametric crop insurance (ZoNa)',
          description:
            'Multiple independent weather stations trigger blockchain smart-contract payouts automatically when rainfall thresholds are missed.',
        },
      ],
      videos: [
        {
          meetupNumber: 7,
          title: 'Autonomous Agents on the Web of Things (SERIA)',
          fragments: [
            {
              start: 324,
              timestamp: '5:24',
              label: 'Autonomous tractor following GPS waypoints to harvest fields via TDs.',
            },
          ],
        },
        {
          meetupNumber: 11,
          title: 'Industrial Data Ontology for IoT Operating Instructions (GridForce)',
          fragments: [
            {
              start: 240,
              timestamp: '4:00',
              label: 'Groundwater pumps for livestock and irrigation handed over via WoT.',
            },
          ],
        },
        {
          meetupNumber: 13,
          title: 'Open Flexure Microscope & Web of Things',
          fragments: [
            {
              start: 460,
              timestamp: '7:40',
              label: 'Soil-microbiome analysis to educate farmers about agrochemical effects.',
            },
          ],
        },
        {
          meetupNumber: 32,
          title: 'ZoNa — Zero Trust Oracle Networks for IoT',
          fragments: [
            {
              start: 788,
              timestamp: '13:08',
              label: 'Parametric insurance triggers payouts from independent weather stations.',
            },
          ],
        },
      ],
    },
    'transportation-logistics': {
      slug: 'transportation-logistics',
      category: 'domain',
      title: 'Transportation & Logistics',
      description:
        'Fleet tracking, supply chain visibility, and connected vehicle systems through standardized IoT descriptions and discovery.',
      icon: <Truck size={32} />,
      howWoT:
        'Fleets, supply chains and baggage systems combine cameras, sensors and controllers from many suppliers. WoT provides uniform interfaces and discovery so logistics data — dimensions, location, availability — can be captured and shared through standard property and event access, from airport baggage handling to city bike fleets.',
      benefits: [
        'Uniform property and event access abstracts diverse sensor and camera APIs.',
        'Real-time fleet and asset availability exposed through standard Things.',
        'Feature extraction such as size and colour integrated into optimization pipelines.',
        'Edge mediators map device protocols to a uniform API across edge and cloud.',
      ],
      realWorldUseCases: [
        {
          title: 'Munich Airport baggage handling',
          description:
            'Three RGBD cameras and a photo-electric sensor capture luggage images to extract dimensions and colour, optimizing aircraft loading, with WoT+Solid storage.',
        },
        {
          title: 'City bike fleet (Christian Paul)',
          description:
            'Bike-sharing stations expose available bikes and free slots as standard WoT properties for real-time fleet visibility.',
        },
      ],
      videos: [
        {
          meetupNumber: 17,
          title: 'Web of Things + Solid at Munich Airport',
          fragments: [
            {
              start: 1468,
              timestamp: '24:28',
              label: 'Cameras and sensors extract luggage dimensions and colour to optimize loading.',
            },
          ],
        },
        {
          meetupNumber: 21,
          title: 'Web of Things for Everyone (Christian Paul)',
          fragments: [
            {
              start: 488,
              timestamp: '8:08',
              label: 'City bike-sharing stations with live bike and parking-slot availability.',
            },
          ],
        },
      ],
    },
    'consumer-smart-home': {
      slug: 'consumer-smart-home',
      category: 'domain',
      title: 'Consumer & Smart Home',
      description:
        'Cross-vendor smart home device integration, bridging ecosystems like Matter, Zigbee, and Z-Wave via WoT abstractions.',
      icon: <Home size={32} />,
      howWoT:
        'Smart homes are split across Matter, Zigbee, Z-Wave, Bluetooth and countless vendor clouds. WoT abstracts these ecosystems behind standard Thing Descriptions, so a single app, agent or visual tool can control locks, thermostats, bulbs and hubs regardless of the underlying protocol — and new devices work without new code.',
      benefits: [
        'One abstraction bridges Matter, Zigbee, Z-Wave, Bluetooth and legacy protocols.',
        'Developers avoid device-specific APIs, dated SOAP interfaces and 900-page PDFs.',
        'Visual and no-code tools generate device blocks straight from Thing Descriptions.',
        'LLM assistants auto-discover home devices and expose them as callable tools.',
      ],
      realWorldUseCases: [
        {
          title: 'Universal device API (Seam)',
          description:
            'Standard capabilities program Airbnb guest access codes across brands, handling per-device quirks through capability-aware assist functions.',
        },
        {
          title: 'Matter bridge',
          description:
            "Matter's hierarchical device model is mapped to WoT properties, actions and events for a unified smart-home abstraction.",
        },
        {
          title: 'Smart radiator thermostats (Bonix)',
          description:
            'Millions of residential thermostats let residents control heating schedules remotely through a model-based digital twin.',
        },
        {
          title: 'Visual automation (BLAST)',
          description:
            "Non-programmers snap together blocks generated from TDs to make a button change a Bluetooth bulb's colour.",
        },
      ],
      videos: [
        {
          meetupNumber: 10,
          title: 'Designing an API for the Physical World (Seam)',
          fragments: [
            {
              start: 293,
              timestamp: '4:53',
              label: 'Difficult manufacturer APIs: dated SOAP interfaces and 900-page PDFs.',
            },
            {
              start: 1442,
              timestamp: '24:02',
              label: 'Programming Airbnb guest access codes via capability-aware assist functions.',
            },
          ],
        },
        {
          meetupNumber: 15,
          title: 'Bridging Matter & Web of Things',
          fragments: [
            {
              start: 63,
              timestamp: '1:03',
              label: 'Matter as an open local-connectivity standard abstracted through WoT.',
            },
          ],
        },
        {
          meetupNumber: 19,
          title: 'WoT Thing Models in Real Estate',
          fragments: [
            {
              start: 170,
              timestamp: '2:50',
              label: 'Smart radiator thermostats let residents control heating remotely.',
            },
          ],
        },
        {
          meetupNumber: 27,
          title: 'BLAST Visual Programming',
          fragments: [
            { start: 1145, timestamp: '19:05', label: 'Button-triggered colour changes on a Bluetooth smart bulb.' },
          ],
        },
        {
          meetupNumber: 25,
          title: 'Agentic Systems (Deutsche Telekom)',
          fragments: [
            {
              start: 1246,
              timestamp: '20:46',
              label: 'An LLM discovers WoT smart-home devices and converts them into agent tools.',
            },
          ],
        },
      ],
    },
    'environment-monitoring': {
      slug: 'environment-monitoring',
      category: 'domain',
      title: 'Environment Monitoring',
      description:
        'Air quality, water quality, and ecological monitoring through standardized sensor networks accessible via web protocols.',
      icon: <Leaf size={32} />,
      howWoT:
        'Air, water, soil and climate monitoring depend on distributed sensor networks that are hard to integrate and trust. WoT gives sensors standardized, web-accessible interfaces and semantic metadata, and — combined with decentralized oracle networks — lets independent measurements be aggregated into trustworthy environmental data feeds.',
      benefits: [
        'Distributed sensors exposed through standard, web-accessible interfaces.',
        'Semantic metadata such as resolution and calibration travels with the data.',
        'Low-cost instruments make ecological monitoring widely accessible.',
        'Reputation-based aggregation of independent sensors resists manipulation.',
      ],
      realWorldUseCases: [
        {
          title: 'Soil microbiome analysis (OpenFlexure)',
          description:
            'A community group in Argentina uses the automated microscope to analyse soil microbiome and educate farmers about agrochemical effects.',
        },
        {
          title: 'Trustless weather networks (ZoNa)',
          description:
            'Independent weather stations feed decentralized oracle networks with reputation-based selection to prevent data manipulation.',
        },
        {
          title: 'Sensor data integrity (GridForce)',
          description:
            "Ontology-backed TDs and SPARQL validation ensure processing pipelines never inflate a sensor's real resolution.",
        },
      ],
      videos: [
        {
          meetupNumber: 13,
          title: 'Open Flexure Microscope & Web of Things',
          fragments: [
            { start: 460, timestamp: '7:40', label: 'Soil-microbiome analysis and farmer education in Argentina.' },
          ],
        },
        {
          meetupNumber: 32,
          title: 'ZoNa — Zero Trust Oracle Networks for IoT',
          fragments: [
            {
              start: 1009,
              timestamp: '16:49',
              label: 'Reputation-based aggregation of independent sensors resists manipulation.',
            },
          ],
        },
        {
          meetupNumber: 11,
          title: 'Industrial Data Ontology for IoT Operating Instructions (GridForce)',
          fragments: [
            {
              start: 631,
              timestamp: '10:31',
              label: 'Modelling sensor data lifecycle with resolution metadata in the TD.',
            },
          ],
        },
      ],
    },
  },
  TECH_TRENDS: {
    'digital-twins': {
      slug: 'digital-twins',
      category: 'trend',
      title: 'Digital Twins',
      description:
        'WoT Thing Descriptions provide a standardized way to describe and interact with digital representations of physical assets, enabling interoperable digital twin ecosystems.',
      icon: <Copy size={32} />,
      howWoT:
        'A digital twin needs a standardized, machine-readable description of the physical asset it mirrors. WoT Thing Descriptions and Thing Models provide exactly that contract — properties, actions, events and semantic annotations — so twins from different vendors interoperate, stay synchronized with their physical counterparts, and can even be generated or simulated automatically.',
      benefits: [
        'TDs give twins a vendor-neutral, machine-readable contract.',
        'Thing Models with inheritance and composition keep twin data consistent and validated.',
        'Twins can be simulated to test control logic before touching real hardware.',
        'Twins can be generated semi-automatically from observed device behaviour.',
      ],
      realWorldUseCases: [
        {
          title: 'Cloud twins at SICK',
          description:
            'Edge-side TDs are synchronized into cloud digital twins with lifecycle traceability in the SICK Asset Hub.',
        },
        {
          title: 'Five-dimensional twin ontology',
          description:
            'The WoT Digital Twin Ontology represents entity, virtual entity, data, services and connections for construction-domain twins.',
        },
        {
          title: 'Simulated twins (SimIS)',
          description:
            'The simulation computes a robot reachable workspace and runs collision-checked dry-runs before the same logic drives the real robot.',
        },
      ],
      videos: [
        {
          meetupNumber: 5,
          title: 'Empowering Industrial Automation with WoT (SICK)',
          fragments: [
            {
              start: 608,
              timestamp: '10:08',
              label: 'Asset Hub manages digital twins with lifecycle traceability to physical devices.',
            },
          ],
        },
        {
          meetupNumber: 8,
          title: 'Web of Things for Digital Twins at Schaeffler',
          fragments: [
            {
              start: 527,
              timestamp: '8:47',
              label: 'Product-centric thing models map properties, interactions and sensors.',
            },
          ],
        },
        {
          meetupNumber: 16,
          title: 'WoT Digital Twin Ontology for Construction',
          fragments: [
            {
              start: 426,
              timestamp: '7:06',
              label: 'Ontology represents entity, models, data, services and connections.',
            },
          ],
        },
        {
          meetupNumber: 12,
          title: 'Interactable Digital Twins Using WoT and Simulation (SimIS)',
          fragments: [
            {
              start: 1443,
              timestamp: '24:03',
              label: 'Dry-run testing detects collisions before the same logic drives the real robot.',
            },
          ],
        },
        {
          meetupNumber: 18,
          title: 'Digital Twins & WoT in Structural Monitoring',
          fragments: [
            {
              start: 1248,
              timestamp: '20:48',
              label: 'What-Twins auto-generates Markov models from observed device interactions.',
            },
          ],
        },
        {
          meetupNumber: 34,
          title: 'Process OPC — WoT Device Onboarding',
          fragments: [
            {
              start: 962,
              timestamp: '16:02',
              label: 'Onboarding creates a digital representation in the OPC UA address space automatically.',
            },
          ],
        },
      ],
    },
    'eu-cyber-resiliency-act': {
      slug: 'eu-cyber-resiliency-act',
      category: 'trend',
      title: 'EU Cyber Resiliency Act',
      description:
        "WoT's machine-readable security metadata and standardized vulnerability reporting align with the CRA's requirements for transparent, secure-by-design connected products.",
      icon: <ShieldCheck size={32} />,
      howWoT:
        'The EU Cyber Resilience Act pushes manufacturers toward secure-by-design connected products with transparent security properties and vulnerability handling. WoT Thing Descriptions carry machine-readable security schemes — authentication, authorization and access policies — directly in the device contract, and community work on delegated authorization, hub-mediated access and edge access control shows how WoT can make these obligations explicit and verifiable.',
      benefits: [
        'Security schemes (authentication, authorization, access policies) are explicit in the TD.',
        'Delegated, time- and scope-limited authorization can be described and enforced.',
        'Hub-mediated designs keep devices off the public internet, shrinking the attack surface.',
        'Fine-grained access control lists restrict who can reach which resources.',
      ],
      realWorldUseCases: [
        {
          title: 'Delegated authorization (NAMI)',
          description:
            'Guests receive scoped, time-limited access to room devices via ACE-OAuth authorization servers — a model for secure-by-design product access.',
        },
        {
          title: 'Reduced attack surface (HiVoT)',
          description:
            'Devices are never exposed directly; all access is mediated through a hub with centralized authentication.',
        },
        {
          title: 'Fine-grained permissions (Solid)',
          description: 'Access Control Lists give installers, operators and residents different resource permissions.',
        },
      ],
      videos: [
        {
          meetupNumber: 4,
          title: 'Delegated Authorization in the Web of Things (NAMI)',
          fragments: [
            {
              start: 547,
              timestamp: '9:07',
              label: 'ACE-OAuth delegates authorization for constrained IoT environments.',
            },
          ],
        },
        {
          meetupNumber: 26,
          title: 'HiVoT Edge Device',
          fragments: [
            {
              start: 614,
              timestamp: '10:14',
              label: 'No direct device access; a hub with centralized auth reduces attack surface.',
            },
          ],
        },
        {
          meetupNumber: 17,
          title: 'Web of Things + Solid at Munich Airport',
          fragments: [
            {
              start: 352,
              timestamp: '5:52',
              label: 'Solid Access Control Lists grant stakeholders fine-grained permissions.',
            },
          ],
        },
      ],
    },
    'digital-product-passport': {
      slug: 'digital-product-passport',
      category: 'trend',
      title: 'Digital Product Passport',
      description:
        'Thing Descriptions can serve as machine-readable product passports, carrying lifecycle data, material composition, and sustainability information for connected products.',
      icon: <QrCode size={32} />,
      howWoT:
        'A Digital Product Passport must carry lifecycle, composition and provenance data in a machine-readable form that survives across the value chain. WoT Thing Descriptions and Thing Models can embed product metadata, sensor calibration, hardware specifications and semantic annotations, acting as a living, queryable passport for connected products throughout their lifecycle.',
      benefits: [
        'TDs embed product model, serial number, version and physical-device relationships.',
        'Hardware specs, calibration ranges and data-resolution metadata travel with the product.',
        'schema.org and industrial ontologies make passport data semantically queryable.',
        'One product-centric model covers the entire lifecycle from design to field use.',
      ],
      realWorldUseCases: [
        {
          title: 'Product-centric bearings (Schaeffler)',
          description:
            'Thing models map product properties, serial numbers and embedded sensors (load, lubrication) so customers query products through a REST API across their lifecycle.',
        },
        {
          title: 'Embedded specs via IDO (GridForce)',
          description:
            'An ISO Industrial Data Ontology model embeds sensor calibration, register sizes and step-size resolution inside the TD for downstream consumers.',
        },
        {
          title: 'Lifecycle traceability (SICK)',
          description:
            'The Asset Hub relates digital twins to physical devices with lifecycle traceability via semantic annotations.',
        },
      ],
      videos: [
        {
          meetupNumber: 8,
          title: 'Web of Things for Digital Twins at Schaeffler',
          fragments: [
            {
              start: 560,
              timestamp: '9:20',
              label: 'schema.org semantic annotations carry product model, serial number and version.',
            },
          ],
        },
        {
          meetupNumber: 11,
          title: 'Industrial Data Ontology for IoT Operating Instructions (GridForce)',
          fragments: [
            {
              start: 935,
              timestamp: '15:35',
              label: 'IDO model embeds calibration, register sizes and resolution in the TD.',
            },
          ],
        },
        {
          meetupNumber: 5,
          title: 'Empowering Industrial Automation with WoT (SICK)',
          fragments: [
            { start: 608, timestamp: '10:08', label: 'Asset Hub tracks digital twins with lifecycle traceability.' },
          ],
        },
      ],
    },
    'agentic-systems': {
      slug: 'agentic-systems',
      category: 'trend',
      title: 'Agentic Systems',
      description:
        "Autonomous AI agents can leverage WoT's standardized affordances and discovery mechanisms to find, understand, and orchestrate IoT devices without human intervention.",
      icon: <Bot size={32} />,
      howWoT:
        'Autonomous agents need to discover devices, understand their capabilities and act — without a developer hand-coding every integration. A WoT Thing Description already contains the full contract an agent needs: typing, security, transport and event schemas. Agents and LLMs consume TDs directly as tools, discovering and orchestrating IoT devices at runtime.',
      benefits: [
        'TDs act as complete, ready-made agent tool definitions — no per-device hand-coding.',
        'LLMs drive previously unseen devices using only their Thing Descriptions.',
        'No-code environments turn TDs into functional blocks domain experts compose.',
        'Multi-agent systems map internal naming to shared ontologies for cross-agent action.',
      ],
      realWorldUseCases: [
        {
          title: 'No-code autonomous agents (SERIA)',
          description: 'Functional blocks generated from TDs let non-programmers compose agent programs in AgentSpeak.',
        },
        {
          title: 'Multi-agent conversational AI (Deutsche Telekom)',
          description:
            'A supervisor agent classifies intent and routes to specialized sub-agents described in TD format.',
        },
        {
          title: 'LLM device orchestration (Dashjoin)',
          description:
            "An LLM with access to TD schemas maps natural language such as 'huge coffee' to a device's structured API.",
        },
      ],
      videos: [
        {
          meetupNumber: 7,
          title: 'Autonomous Agents on the Web of Things (SERIA)',
          fragments: [
            {
              start: 465,
              timestamp: '7:45',
              label: 'No-code blocks generated from TDs composed by domain experts in AgentSpeak.',
            },
          ],
        },
        {
          meetupNumber: 25,
          title: 'Agentic Systems (Deutsche Telekom)',
          fragments: [
            {
              start: 245,
              timestamp: '4:05',
              label: 'Hierarchical multi-agent architecture with a supervisor doing intent classification.',
            },
          ],
        },
        {
          meetupNumber: 33,
          title: 'Multi-Agent Systems with Web of Things',
          fragments: [
            {
              start: 227,
              timestamp: '3:47',
              label: 'Agents map internal naming to shared ontologies for cross-agent execution.',
            },
          ],
        },
        {
          meetupNumber: 23,
          title: 'Web of Things Manager (Dashjoin)',
          fragments: [
            {
              start: 889,
              timestamp: '14:49',
              label: "Voice command 'huge coffee' mapped to the coffee-machine schema enum 'large'.",
            },
          ],
        },
      ],
    },
    'neurosymbolic-ai': {
      slug: 'neurosymbolic-ai',
      category: 'trend',
      title: 'Neurosymbolic AI',
      description:
        "Combining neural networks with WoT's semantic, knowledge-graph-compatible Thing Descriptions enables AI systems that can both reason symbolically about devices and learn from sensor data.",
      icon: <Brain size={32} />,
      howWoT:
        'Neurosymbolic AI pairs neural learning with symbolic reasoning. WoT Thing Descriptions are semantic, JSON-LD, ontology-compatible contracts, so neural components such as LLMs can act on devices while symbolic components reason over the same descriptions. Agents map their internal, learned vocabularies onto shared WoT ontologies to translate between perception and structured action.',
      benefits: [
        'Semantic JSON-LD TDs give neural models a symbolic, machine-understandable ground truth.',
        'LLMs translate natural language into schema-valid device actions.',
        'Agents map learned naming conventions onto shared ontologies for reasoning.',
        'The same TD supports both symbolic queries and data-driven learning.',
      ],
      realWorldUseCases: [
        {
          title: 'Ontology mapping across agents',
          description:
            'Agents map internal naming conventions to shared WoT ontologies, enabling cross-agent semantic translation and plan execution.',
        },
        {
          title: 'Schema-grounded LLM commands (Dashjoin)',
          description:
            "An LLM maps 'huge coffee' to the coffee-machine schema enum 'large', translating language to structured APIs using TD schemas.",
        },
        {
          title: 'Agent and tool descriptions (Deutsche Telekom)',
          description:
            "WoT's JSON-LD semantics describe conversational agent and tool capabilities in a standardized, machine-understandable way.",
        },
      ],
      videos: [
        {
          meetupNumber: 33,
          title: 'Multi-Agent Systems with Web of Things',
          fragments: [
            {
              start: 227,
              timestamp: '3:47',
              label: 'Mapping internal naming to shared ontologies for cross-agent reasoning.',
            },
          ],
        },
        {
          meetupNumber: 23,
          title: 'Web of Things Manager (Dashjoin)',
          fragments: [
            {
              start: 889,
              timestamp: '14:49',
              label: 'LLM translates natural language into a schema-valid device action.',
            },
          ],
        },
        {
          meetupNumber: 25,
          title: 'Agentic Systems (Deutsche Telekom)',
          fragments: [
            {
              start: 387,
              timestamp: '6:27',
              label: 'Agent and tool descriptions expressed in WoT Thing Description format.',
            },
          ],
        },
      ],
    },
    'edge-computing': {
      slug: 'edge-computing',
      category: 'trend',
      title: 'Edge Computing',
      description:
        'WoT enables discovery and interaction with computing resources at the network edge, bringing standardized interfaces to latency-sensitive and bandwidth-constrained IoT deployments.',
      icon: <Network size={32} />,
      howWoT:
        'Edge deployments are latency-sensitive and bandwidth-constrained, and increasingly span an edge-cloud continuum. WoT brings standardized interfaces and discovery to resources at the edge — local hubs, gateways and mediators expose devices through the same TDs used in the cloud, so processing can be placed dynamically where it makes most sense.',
      benefits: [
        'The same TD abstracts a device at the edge and in the cloud.',
        'Mediators map device protocols and encodings to a uniform API at the edge.',
        'Local hubs run device logic privately without cloud dependency.',
        'Processing is allocated dynamically across the edge-cloud continuum.',
      ],
      realWorldUseCases: [
        {
          title: 'Edge-cloud mediators (Munich Airport)',
          description:
            'An edge orchestrator with mediators maps device protocols and encodings to RDF/HTTP, creating a uniform API at both edge and cloud.',
        },
        {
          title: 'Local simulation feedback (SimIS)',
          description:
            'CoppeliaSim runs on a laptop talking to a Node-WoT server over WebSockets, giving instant feedback without cloud infrastructure.',
        },
        {
          title: 'Edge hub without cloud (HiVoT)',
          description:
            'Devices connect to a local edge hub for privacy-preserving automation with no external dependency.',
        },
      ],
      videos: [
        {
          meetupNumber: 17,
          title: 'Web of Things + Solid at Munich Airport',
          fragments: [
            {
              start: 507,
              timestamp: '8:27',
              label: 'Mediators map device protocols to RDF/HTTP for a uniform edge and cloud API.',
            },
          ],
        },
        {
          meetupNumber: 12,
          title: 'Interactable Digital Twins Using WoT and Simulation (SimIS)',
          fragments: [
            {
              start: 590,
              timestamp: '9:50',
              label: 'Local simulation talks to a Node-WoT server for instant feedback without cloud.',
            },
          ],
        },
        {
          meetupNumber: 26,
          title: 'HiVoT Edge Device',
          fragments: [
            {
              start: 274,
              timestamp: '4:34',
              label: 'An edge hub manages IoT devices without requiring a central cloud.',
            },
          ],
        },
        {
          meetupNumber: 28,
          title: 'Virtual Object Stack (Nephele Project)',
          fragments: [
            {
              start: 121,
              timestamp: '2:01',
              label: 'Integrating IoT with the edge-cloud continuum for orchestration.',
            },
          ],
        },
        {
          meetupNumber: 18,
          title: 'Digital Twins & WoT in Structural Monitoring',
          fragments: [
            {
              start: 643,
              timestamp: '10:43',
              label: 'Processing allocated dynamically across the edge-cloud continuum.',
            },
          ],
        },
      ],
    },
    'zero-trust-architecture': {
      slug: 'zero-trust-architecture',
      category: 'trend',
      title: 'Zero Trust Architecture',
      description:
        "WoT's fine-grained security descriptions support zero-trust models by making device authentication, authorization, and access policies explicit and machine-verifiable.",
      icon: <Lock size={32} />,
      howWoT:
        'Zero-trust assumes no implicit trust and demands explicit, verifiable authentication and authorization for every interaction. WoT makes security policies part of the device contract, and community work shows delegated authorization, hub-mediated access, edge access-control lists and even blockchain-backed trustless data — all making device access explicit and machine-verifiable.',
      benefits: [
        'Security definitions and access policies are explicit and machine-verifiable in the TD.',
        'Delegated, scoped and time-limited credentials via ACE-OAuth.',
        'Hub mediation prevents direct device exposure, shrinking the attack surface.',
        'Trust placed in decentralized marketplaces rather than any single data source.',
      ],
      realWorldUseCases: [
        {
          title: 'Delegated authorization (NAMI)',
          description:
            'ACE-OAuth authorization servers grant clients scoped access credentials for constrained IoT resources.',
        },
        {
          title: 'Hub-mediated access (HiVoT)',
          description:
            'No direct consumer access to devices; all traffic passes through a hub with centralized authentication.',
        },
        {
          title: 'Trustless oracle networks (ZoNa)',
          description:
            'Blockchain plus WoT aggregates independent sensors with reputation-based selection so trust rests on the network, not one source.',
        },
      ],
      videos: [
        {
          meetupNumber: 4,
          title: 'Delegated Authorization in the Web of Things (NAMI)',
          fragments: [
            {
              start: 547,
              timestamp: '9:07',
              label: 'ACE-OAuth grants scoped access credentials for constrained resources.',
            },
          ],
        },
        {
          meetupNumber: 26,
          title: 'HiVoT Edge Device',
          fragments: [
            {
              start: 614,
              timestamp: '10:14',
              label: 'All communication passes through a hub with centralized authentication.',
            },
          ],
        },
        {
          meetupNumber: 32,
          title: 'ZoNa — Zero Trust Oracle Networks for IoT',
          fragments: [
            {
              start: 1009,
              timestamp: '16:49',
              label: 'Reputation-based selection across independent sensors prevents manipulation.',
            },
          ],
        },
        {
          meetupNumber: 17,
          title: 'Web of Things + Solid at Munich Airport',
          fragments: [
            { start: 352, timestamp: '5:52', label: 'Solid Access Control Lists enforce fine-grained permissions.' },
          ],
        },
      ],
    },
    'semantic-interoperability': {
      slug: 'semantic-interoperability',
      category: 'trend',
      title: 'Semantic Interoperability',
      description:
        "WoT's use of linked data and semantic annotations enables cross-domain data integration, making IoT data FAIR (Findable, Accessible, Interoperable, Reusable) by design.",
      icon: <Workflow size={32} />,
      howWoT:
        'Cross-domain data integration needs shared meaning, not just shared syntax. WoT uses linked data and semantic annotations (JSON-LD, schema.org, domain ontologies) so devices from different vendors and domains describe themselves consistently, making IoT data findable, accessible, interoperable and reusable, and letting tools generate UIs and mappings automatically.',
      benefits: [
        'Linked-data annotations give heterogeneous devices shared, machine-readable meaning.',
        'Protocol-agnostic descriptions map cleanly onto OPC UA, BACnet, Modbus and more.',
        'Auto-generated forms and UIs come straight from TD JSON schemas.',
        'Agent communicative acts map to WoT properties, actions and events.',
      ],
      realWorldUseCases: [
        {
          title: 'Standard device description language (Siemens & Microsoft)',
          description:
            'A protocol-agnostic, extensible, W3C-governed TD becomes the common language across integration stacks.',
        },
        {
          title: 'Auto-generated UIs (Dashjoin)',
          description:
            'Forms are generated from the JSON schema in a TD, so one platform manages any device without device-specific code.',
        },
        {
          title: 'Agent-to-device mapping',
          description:
            'Agent acts such as tell, ask and achieve map to WoT interaction affordances for protocol-agnostic device control.',
        },
      ],
      videos: [
        {
          meetupNumber: 6,
          title: 'Automated Industry Asset Onboarding (Siemens & Microsoft)',
          fragments: [
            {
              start: 527,
              timestamp: '8:47',
              label: 'WoT as a standard, protocol-agnostic, W3C-governed device description language.',
            },
          ],
        },
        {
          meetupNumber: 23,
          title: 'Web of Things Manager (Dashjoin)',
          fragments: [
            { start: 603, timestamp: '10:03', label: 'Forms auto-generated from JSON schema in Thing Descriptions.' },
          ],
        },
        {
          meetupNumber: 33,
          title: 'Multi-Agent Systems with Web of Things',
          fragments: [
            { start: 1006, timestamp: '16:46', label: 'Agent acts map to WoT properties, actions and events.' },
          ],
        },
        {
          meetupNumber: 20,
          title: 'Siemens Smart Connector & Thing Model Catalog',
          fragments: [
            {
              start: 585,
              timestamp: '9:45',
              label: 'A thing model catalog abstracts M-Bus, LoRaWAN and Modbus differences.',
            },
          ],
        },
      ],
    },
    'sustainability-green-iot': {
      slug: 'sustainability-green-iot',
      category: 'trend',
      title: 'Sustainability & Green IoT',
      description:
        'Standardized device descriptions enable energy-aware orchestration, carbon footprint tracking, and optimized resource usage across connected infrastructure.',
      icon: <Sun size={32} />,
      howWoT:
        'Sustainability goals need visibility into energy use and coordinated, efficient operation across connected infrastructure. Standardized WoT descriptions make consumption data comparable across vendors, feed building and grid optimization, and enable energy-aware orchestration — turning fragmented sensor data into actionable efficiency and carbon insights.',
      benefits: [
        'Comparable, vendor-neutral consumption data from heterogeneous meters.',
        'Building digital twins drive energy modelling toward Net-Zero targets.',
        'Semantic normalization aggregates mixed sensor formats into coherent dashboards.',
        'OPC UA energy models add meaning to raw power-meter data.',
      ],
      realWorldUseCases: [
        {
          title: 'Net-Zero building twins',
          description:
            'A building digital twin models energy and space utilization, targeting the billions in savings lost to underused buildings.',
        },
        {
          title: 'Energy dashboards (Dashjoin)',
          description:
            'Heterogeneous sensor formats (watts vs. power plus unit) are normalized into per-floor energy-consumption dashboards.',
        },
        {
          title: 'Power-meter insight (Process OPC)',
          description:
            'TDs enriched with OPC UA energy models turn raw registers into readable phase-level power data for optimization.',
        },
      ],
      videos: [
        {
          meetupNumber: 14,
          title: 'Smart Buildings & Digital Twins with WoT',
          fragments: [
            { start: 77, timestamp: '1:17', label: 'Net-Zero targets could save UK businesses £6 billion a year.' },
          ],
        },
        {
          meetupNumber: 23,
          title: 'Web of Things Manager (Dashjoin)',
          fragments: [
            {
              start: 1249,
              timestamp: '20:49',
              label: 'Energy dashboard normalizes heterogeneous sensor formats by floor.',
            },
          ],
        },
        {
          meetupNumber: 34,
          title: 'Process OPC — WoT Device Onboarding',
          fragments: [
            {
              start: 482,
              timestamp: '8:02',
              label: 'OPC UA energy model turns raw registers into readable power data.',
            },
          ],
        },
      ],
    },
  },
};

/** All use-case entries (domains + trends) as a flat array. */
export function getAllUseCases(): UseCaseEntry[] {
  return [...Object.values(USE_CASES.DOMAINS), ...Object.values(USE_CASES.TECH_TRENDS)];
}

/** Look up a single domain or trend entry by its slug. */
export function getUseCaseBySlug(slug: string): UseCaseEntry | undefined {
  return USE_CASES.DOMAINS[slug] ?? USE_CASES.TECH_TRENDS[slug];
}

/** Backwards-compatible arrays of domains and trends for listing views. */
export const DOMAINS: UseCaseEntry[] = Object.values(USE_CASES.DOMAINS);
export const TECH_TRENDS: UseCaseEntry[] = Object.values(USE_CASES.TECH_TRENDS);

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
