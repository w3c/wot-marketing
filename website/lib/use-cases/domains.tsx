import {
  Factory,
  Zap,
  Building,
  Landmark,
  Tractor,
  Truck,
  Home,
  Leaf,
  Activity,
  Bot,
  Brain,
  Copy,
  Network,
  QrCode,
  ShieldCheck,
  Sun,
  Lock,
  Workflow,
} from 'lucide-react';
import { ReactNode } from 'react';

export interface Domain {
  title: string;
  description: string;
  icon: ReactNode;
}

export function getDomainPageSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getDomainPagePath(title: string) {
  return `/use-cases/${getDomainPageSlug(title)}`;
}

export type WoTUseCaseGroup = 'application-domain' | 'technology-trend';

export type WoTResourceKind =
  | 'w3c-spec'
  | 'w3c-note'
  | 'w3c-cg-tutorial'
  | 'w3c-cg-meetup'
  | 'external-standard'
  | 'external-organization'
  | 'regulatory'
  | 'research'
  | 'ecosystem';

export type WoTCapability =
  | 'thing-description'
  | 'thing-models'
  | 'discovery'
  | 'profiles'
  | 'binding-templates'
  | 'security-metadata'
  | 'semantic-annotations'
  | 'scripting-api'
  | 'digital-twin'
  | 'edge-services';

export type WoTResource = {
  readonly label: string;
  readonly url: string;
  readonly kind: WoTResourceKind;
  readonly note: string;
};

export type WoTUseCasePage = {
  title: string;
  icon: ReactNode;
  subtitle: string;
  sellingPoint: string;
  heroUseCase: string;
  body: string[];
  wotEnables: string[];
  primaryCapabilities: WoTCapability[];
  resources: WoTResource[];
  relatedStandards: string[];
  relatedOrganizations: string[];
  keywords: string[];
};

export type WoTUseCasePagesByGroup = Record<WoTUseCaseGroup, WoTUseCasePage[]>;

export const DOMAINS: WoTUseCasePagesByGroup = {
  'application-domain': [
    {
      title: 'Smart Manufacturing',
      icon: <Factory size={32} />,
      subtitle:
        'Connect PLCs, robots, machines and sensors across factory floors using standardized Thing Descriptions',
      sellingPoint:
        'WoT gives brownfield and greenfield industrial assets a common web-facing description layer, so factories can integrate OPC UA, Modbus, HTTP and cloud systems without rewriting every application for every protocol.',
      heroUseCase:
        'A production line exposes robots, sensors, energy meters and controllers as Things. Applications can monitor quality, predict faults, optimize energy use and coordinate actions across devices from different vendors.',
      body: [
        'Manufacturing environments combine many machines, sensors and control systems. A single fault can stop production or create quality defects, so production monitoring depends on timely, interoperable access to machine status, process data and environmental measurements.',
        "WoT Thing Descriptions describe each asset's properties, actions, events, protocol bindings, data schemas and security metadata. This lets IT and OT systems consume industrial assets through a common application layer while preserving existing factory protocols.",
        'For Industry 4.0, WoT is especially valuable as a bridge between operational technology and web/cloud systems. It can complement OPC UA and asset administration models by making non-web assets discoverable, describable and composable.',
      ],
      wotEnables: [
        'Standardized onboarding of industrial assets through Thing Descriptions and Thing Models.',
        'Cross-protocol interaction with PLCs, robots, sensors, meters and cloud services.',
        'Factory-wide monitoring, anomaly detection, predictive maintenance and energy optimization.',
      ],
      primaryCapabilities: [
        'thing-description',
        'thing-models',
        'binding-templates',
        'discovery',
        'profiles',
        'security-metadata',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Manufacturing',
          url: 'https://www.w3.org/TR/wot-usecases/#manufacturing',
          kind: 'w3c-note',
          note: 'Production monitoring and cross-protocol Industry 4.0 scenarios.',
        },
        {
          label: 'WoT CG Tutorial, Industrial and Agriculture Systems',
          url: 'https://w3c-cg.github.io/wot-cg/tutorials/whatiswot/docs/wot/application-domains/industrial-and-agriculture-systems',
          kind: 'w3c-cg-tutorial',
          note: 'Community tutorial material for industrial and agricultural WoT deployments.',
        },
        {
          label: 'WoT CG Meetups, slides and minutes',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
          kind: 'w3c-cg-meetup',
          note: 'Repository for meetup slides, minutes and related implementation discussions.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 1',
          url: 'https://www.youtube.com/watch?v=l-suLrJDjd0&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=1&t=1265s&pp=iAQB',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 2',
          url: 'https://www.youtube.com/watch?v=PlY-ixquyZc&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=6&pp=iAQB',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 3',
          url: 'https://www.youtube.com/watch?v=VYHjMU5a9FI&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=24&pp=iAQB',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 4',
          url: 'https://www.youtube.com/watch?v=kPfdqGYvBVM&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=26&pp=iAQB',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 5',
          url: 'https://www.youtube.com/watch?v=xFnrWOeh3pc&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=28&pp=iAQB0gcJCT8LAYcqIYzv',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'WoT CG Meetup video, industrial use case 6',
          url: 'https://www.youtube.com/watch?v=SIKMbxLJXow&list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ&index=30&pp=iAQB',
          kind: 'w3c-cg-meetup',
          note: 'Video reference supplied for the smart manufacturing resource dump.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Core model for describing industrial assets as machine-readable Things.',
        },
        {
          label: 'W3C WoT Binding Templates',
          url: 'https://www.w3.org/TR/wot-binding-templates/',
          kind: 'w3c-spec',
          note: 'Basis for mapping WoT interactions to protocols such as HTTP, MQTT, CoAP or OPC UA.',
        },
        {
          label: 'OPC Foundation',
          url: 'https://opcfoundation.org/',
          kind: 'external-organization',
          note: 'Industrial interoperability organization relevant to OPC UA binding and WoT connectivity work.',
        },
        {
          label: 'Industrial Digital Twin Association',
          url: 'https://industrialdigitaltwin.org/',
          kind: 'external-organization',
          note: 'Organization behind Asset Administration Shell submodel work relevant to industrial digital twins.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Binding Templates',
        'W3C WoT Discovery',
        'W3C WoT Profile',
        'OPC UA Binding',
        'OPC Foundation WoT Connectivity specification',
        'IDTA AID Submodel',
        'Asset Administration Shell',
      ],
      relatedOrganizations: [
        'W3C',
        'W3C WoT Community Group',
        'OPC Foundation',
        'Industrial Digital Twin Association',
        'ISO / IDO working group',
      ],
      keywords: [
        'Industry 4.0',
        'PLC',
        'robotics',
        'predictive maintenance',
        'OPC UA',
        'Modbus',
        'asset administration shell',
        'factory integration',
      ],
    },
    {
      title: 'Energy & Utilities',
      icon: <Zap size={32} />,
      subtitle:
        'Enable smart grid management, renewable integration and consumption optimization through interoperable device interfaces',
      sellingPoint:
        'WoT lets grid assets, meters, buildings, batteries, renewables and control platforms expose interoperable interfaces, making energy systems easier to monitor and coordinate across stakeholders.',
      heroUseCase:
        'A virtual power plant discovers batteries, solar inverters, smart meters and flexible loads, then coordinates them through standardized affordances to balance demand and renewable supply.',
      body: [
        'Smart grids combine generation, storage, distribution, consumption and market systems. These systems are often owned by different stakeholders and use different communication standards.',
        'WoT can describe generators, meters, storage systems and controllable loads as Things. Applications can then read measurements, subscribe to events and trigger control actions without hardcoding each vendor API.',
        'This supports renewable integration, demand response, smart metering, grid observability and energy-aware automation in buildings and factories.',
      ],
      wotEnables: [
        'Common web-facing interfaces for grid assets, distributed energy resources and flexible loads.',
        'Discovery and orchestration of energy devices across utilities, buildings and industrial sites.',
        'Energy optimization based on real-time metering, weather, production and demand data.',
      ],
      primaryCapabilities: [
        'thing-description',
        'discovery',
        'binding-templates',
        'semantic-annotations',
        'security-metadata',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Smart Grids',
          url: 'https://www.w3.org/TR/wot-usecases/#smart-grids',
          kind: 'w3c-note',
          note: 'Smart grid scenario covering generation, storage, grid management and consumption.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Energy Optimization testimonial',
          url: 'https://www.w3.org/WoT/use-cases/#testimonials',
          kind: 'w3c-note',
          note: 'W3C use-case page includes energy optimization positioning from industrial stakeholders.',
        },
        {
          label: 'IEC 61850',
          url: 'https://webstore.iec.ch/en/publication/6028',
          kind: 'external-standard',
          note: 'Power utility automation standard relevant to smart grid interoperability.',
        },
        {
          label: 'IEEE 1547',
          url: 'https://standards.ieee.org/ieee/1547/5915/',
          kind: 'external-standard',
          note: 'Interconnection standard relevant to distributed energy resources.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Discovery can help applications find energy assets and their Thing Descriptions.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'IEC 61850',
        'IEEE 1547',
        'OpenADR',
        'MQTT',
        'CoAP',
      ],
      relatedOrganizations: ['W3C', 'IEC', 'IEEE', 'OPC Foundation', 'LF Energy'],
      keywords: [
        'smart grid',
        'virtual power plant',
        'DER',
        'smart metering',
        'demand response',
        'renewable energy',
        'energy optimization',
      ],
    },
    {
      title: 'Smart Buildings',
      icon: <Building size={32} />,
      subtitle:
        'Unify HVAC, lighting, access, energy and monitoring systems from multiple vendors in commercial and residential buildings',
      sellingPoint:
        'WoT turns fragmented building systems into discoverable, semantically described Things, allowing building applications to understand where devices are, what they measure and how they can be controlled.',
      heroUseCase:
        'A building management app discovers temperature sensors, HVAC units, lighting groups and occupancy sensors, then optimizes comfort and energy use using one normalized interaction model.',
      body: [
        'Buildings often contain devices from many vendors and protocols. Without shared metadata, applications need manual integration work to understand what each device measures, where it is located and what building system it affects.',
        'WoT Thing Descriptions provide syntactic interoperability through common affordances and semantic interoperability through links to building models and vocabularies such as Brick, BOT, SAREF and SSN/SOSA.',
        'This supports automated commissioning, fault detection, energy-efficient control, device replacement and cross-vendor building automation.',
      ],
      wotEnables: [
        'Discoverable building devices with machine-readable metadata, location and function.',
        'Integration of building information models with live IoT controls and sensor data.',
        'Vendor-neutral automation across HVAC, lighting, access, safety and energy systems.',
      ],
      primaryCapabilities: ['thing-description', 'discovery', 'semantic-annotations', 'binding-templates', 'profiles'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Connected Building Energy Efficiency',
          url: 'https://www.w3.org/TR/wot-usecases/#connected-building-energy-efficiency',
          kind: 'w3c-note',
          note: 'Building energy efficiency use case using sensors, endpoints and building metadata.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Automated Smart Building Management',
          url: 'https://www.w3.org/TR/wot-usecases/#automated-smart-building-management',
          kind: 'w3c-note',
          note: 'Use case showing WoT TDs linked with building context.',
        },
        {
          label: 'Brick Schema',
          url: 'https://brickschema.org/',
          kind: 'external-standard',
          note: 'Semantic model for buildings, equipment and relationships.',
        },
        {
          label: 'ETSI SAREF',
          url: 'https://saref.etsi.org/',
          kind: 'external-standard',
          note: 'Ontology suite for smart appliances, buildings and energy.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Semantic vocabulary for sensors, observations, actuators and samples.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'Brick',
        'BOT',
        'SAREF4BLDG',
        'SSN/SOSA',
        'BACnet',
        'KNX',
      ],
      relatedOrganizations: ['W3C', 'ETSI', 'ASHRAE', 'buildingSMART'],
      keywords: [
        'HVAC',
        'lighting',
        'occupancy',
        'BMS',
        'BIM',
        'energy efficiency',
        'commissioning',
        'fault detection',
      ],
    },
    {
      title: 'Smart Cities',
      icon: <Landmark size={32} />,
      subtitle:
        'Integrate traffic, waste, environment, lighting and public infrastructure into cohesive city-wide platforms',
      sellingPoint:
        'WoT gives cities a common interface layer for heterogeneous urban infrastructure, making sensors and actuators easier to discover, visualize, govern and orchestrate across departments.',
      heroUseCase:
        'A city dashboard discovers air-quality sensors, traffic lights, flood gates, parking systems and public displays, then combines their data into a real-time operational view.',
      body: [
        'Smart city systems span many domains, including traffic, environmental monitoring, emergency management, lighting, parking, waste and public safety.',
        'WoT can describe mobile and fixed city assets with properties, actions, events, geolocation metadata and protocol bindings. This helps city platforms integrate devices from different vendors and agencies.',
        'The result is a more reusable city data and control layer for dashboards, automation, open data portals and emergency response.',
      ],
      wotEnables: [
        'Common descriptions for urban sensors, actuators and mobile assets.',
        'City-wide discovery and visualization of Things by location, capability and status.',
        'Interoperable automation across traffic, environment, safety and infrastructure systems.',
      ],
      primaryCapabilities: [
        'thing-description',
        'discovery',
        'semantic-annotations',
        'binding-templates',
        'security-metadata',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Smart City Dashboard',
          url: 'https://www.w3.org/TR/wot-usecases/#smart-city-dashboard',
          kind: 'w3c-note',
          note: 'Scenario for city-wide visualization and management of sensors and actuators.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Geolocation',
          url: 'https://www.w3.org/TR/wot-usecases/#geolocation',
          kind: 'w3c-note',
          note: 'Reusable geolocation interface for mobile devices, sensors, vehicles and robots.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Discovery of Things and Thing Descriptions across platforms and domains.',
        },
        {
          label: 'OGC SensorThings API',
          url: 'https://www.ogc.org/standard/sensorthings/',
          kind: 'external-standard',
          note: 'Geospatial IoT standard relevant to sensor data in smart city systems.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Semantic model for describing sensors, observations and actuators.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'SSN/SOSA',
        'OGC SensorThings API',
        'MQTT',
        'CoAP',
        'NGSI-LD',
      ],
      relatedOrganizations: ['W3C', 'OGC', 'ETSI', 'FIWARE Foundation'],
      keywords: [
        'traffic',
        'waste',
        'parking',
        'lighting',
        'city dashboard',
        'geolocation',
        'open data',
        'urban infrastructure',
      ],
    },
    {
      title: 'Healthcare & Well-being',
      icon: <Activity size={32} />,
      subtitle:
        'Connect medical devices, wearables and facility systems to improve care, remote monitoring and clinical workflows',
      sellingPoint:
        'WoT can expose medical and wellness devices through standardized, secure interfaces, helping clinical and care applications combine device data without being locked into one manufacturer ecosystem.',
      heroUseCase:
        'A care platform reads blood pressure, heart rate and wearable activity data, subscribes to alerts and shares patient status with authorized clinicians or caregivers.',
      body: [
        'Healthcare environments rely on medical devices, wearables, facility systems and software services that often have incompatible interfaces.',
        'WoT Thing Descriptions can describe device measurements, alerts and control operations in a machine-readable way. Discovery and security metadata can help authorized applications find and access the right device capabilities.',
        'This supports remote monitoring, health notifiers, hospital device integration, care coordination and patient-centered well-being services.',
      ],
      wotEnables: [
        'Machine-readable interfaces for medical devices, wearables and care-environment sensors.',
        'Secure discovery and access to health-related device data.',
        'Interoperable workflows for remote monitoring, alerts and clinical dashboards.',
      ],
      primaryCapabilities: ['thing-description', 'discovery', 'security-metadata', 'semantic-annotations', 'profiles'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Health Notifiers',
          url: 'https://www.w3.org/TR/wot-usecases/#health-notifiers',
          kind: 'w3c-note',
          note: 'Use case for monitoring patient status with networked health devices.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Public Health Monitoring',
          url: 'https://www.w3.org/TR/wot-usecases/#public-health-monitoring',
          kind: 'w3c-note',
          note: 'Scenario using connected sensing, AI services and facility systems.',
        },
        {
          label: 'OpenICE',
          url: 'https://www.openice.info/',
          kind: 'ecosystem',
          note: 'Medical device interoperability ecosystem referenced by WoT healthcare use-case discussions.',
        },
        {
          label: 'W3C WoT Security and Privacy Guidelines',
          url: 'https://www.w3.org/TR/wot-security/',
          kind: 'w3c-spec',
          note: 'Security and privacy considerations for WoT systems.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Describes device affordances, schemas and security metadata.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'W3C WoT Security',
        'HL7 FHIR',
        'IEEE 11073',
        'OpenICE',
      ],
      relatedOrganizations: ['W3C', 'HL7', 'IEEE', 'OpenICE'],
      keywords: [
        'remote patient monitoring',
        'wearables',
        'medical devices',
        'alerts',
        'care workflows',
        'patient status',
        'health data',
      ],
    },
    {
      title: 'Agriculture',
      icon: <Tractor size={32} />,
      subtitle:
        'Use interoperable soil sensors, weather stations and irrigation controllers for data-driven crop and livestock management',
      sellingPoint:
        'WoT makes farm devices and agricultural data sources easier to combine, allowing precision-farming applications to discover sensors, read field conditions and control equipment across vendor boundaries.',
      heroUseCase:
        'A farm platform combines soil moisture, weather, greenhouse, irrigation and livestock sensors to optimize watering, fertilizer use and crop conditions.',
      body: [
        'Agricultural IoT systems often combine low-power sensors, gateways, farm machinery, greenhouse equipment, weather data and cloud analytics.',
        'WoT can describe each sensor or actuator as a Thing with standardized properties, actions and events. Gateways can expose constrained or unreliable field devices through stable Thing Descriptions.',
        'This supports precision irrigation, greenhouse automation, equipment monitoring, livestock health tracking and cross-manufacturer agricultural machinery integration.',
      ],
      wotEnables: [
        'Consistent descriptions for field sensors, weather stations, irrigation controllers and farm machinery.',
        'Gateway-based virtualization of constrained or intermittently connected devices.',
        'Data-driven farming decisions using interoperable measurements and controls.',
      ],
      primaryCapabilities: [
        'thing-description',
        'thing-models',
        'binding-templates',
        'semantic-annotations',
        'discovery',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Agriculture',
          url: 'https://www.w3.org/TR/wot-usecases/#agriculture',
          kind: 'w3c-note',
          note: 'Use cases covering greenhouse systems, livestock health and agricultural machinery.',
        },
        {
          label: 'WoT CG Tutorial, Industrial and Agriculture Systems',
          url: 'https://w3c-cg.github.io/wot-cg/tutorials/whatiswot/docs/wot/application-domains/industrial-and-agriculture-systems',
          kind: 'w3c-cg-tutorial',
          note: 'Community tutorial material for agriculture and industrial systems.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Vocabulary for sensors, observations and actuators in agricultural monitoring.',
        },
        {
          label: 'OGC SensorThings API',
          url: 'https://www.ogc.org/standard/sensorthings/',
          kind: 'external-standard',
          note: 'Relevant for geospatial agricultural sensor observations.',
        },
        {
          label: 'WoT and IoT Semantic Interoperability in Agriculture',
          url: 'https://arxiv.org/abs/2306.09079',
          kind: 'research',
          note: 'Research reference on WoT and semantic interoperability for agriculture.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Binding Templates',
        'SSN/SOSA',
        'OGC SensorThings API',
        'ISO 11783 / ISOBUS',
      ],
      relatedOrganizations: ['W3C', 'OGC', 'ISO'],
      keywords: [
        'precision farming',
        'soil moisture',
        'irrigation',
        'greenhouse',
        'weather station',
        'livestock',
        'farm machinery',
      ],
    },
    {
      title: 'Transportation & Logistics',
      icon: <Truck size={32} />,
      subtitle:
        'Support fleet tracking, supply-chain visibility and connected vehicle systems through standardized IoT descriptions',
      sellingPoint:
        'WoT provides a common vocabulary and interaction model for vehicles, cargo, infrastructure and logistics services, helping fragmented transport systems share data and coordinate actions.',
      heroUseCase:
        'A logistics platform tracks trucks, cargo conditions, port systems and traffic infrastructure, then optimizes routes and handovers using interoperable Thing Descriptions.',
      body: [
        'Transportation systems involve vehicles, road infrastructure, public transport, cargo, ports, airports, warehouses and last-mile services.',
        'WoT can describe location, speed, route, cargo status, environmental conditions and control interfaces with a unified data and interaction model.',
        'This enables fleet tracking, supply-chain visibility, smart parking, connected vehicle services and logistics optimization across independently operated systems.',
      ],
      wotEnables: [
        'Reusable Thing Models for vehicles, cargo, transport infrastructure and logistics services.',
        'Cross-stakeholder data sharing through standardized descriptions and discovery.',
        'Interoperable tracking and control workflows for fleets, public transport and supply chains.',
      ],
      primaryCapabilities: [
        'thing-description',
        'thing-models',
        'discovery',
        'semantic-annotations',
        'binding-templates',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Transportation',
          url: 'https://www.w3.org/TR/wot-usecases/#transportation',
          kind: 'w3c-note',
          note: 'Transportation use case covering roads, vehicles, cargo and route information.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Geolocation',
          url: 'https://www.w3.org/TR/wot-usecases/#geolocation',
          kind: 'w3c-note',
          note: 'Reusable interface for location-aware devices, vehicles and robots.',
        },
        {
          label: 'W3C Automotive Working Group',
          url: 'https://www.w3.org/auto/',
          kind: 'external-organization',
          note: 'W3C group relevant to connected vehicle data and web integration.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Discovery support for finding transport-related Things and metadata.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Core description format for vehicles, devices and logistics assets.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'Vehicle Signal Specification',
        'MQTT',
        'CoAP',
        'GS1 EPCIS',
      ],
      relatedOrganizations: ['W3C', 'COVESA', 'GS1', 'OGC'],
      keywords: [
        'fleet tracking',
        'cargo',
        'supply chain',
        'connected vehicle',
        'smart parking',
        'geolocation',
        'route optimization',
      ],
    },
    {
      title: 'Consumer & Smart Home',
      icon: <Home size={32} />,
      subtitle: 'Bridge cross-vendor smart home devices and ecosystems through WoT abstractions',
      sellingPoint:
        'WoT can sit above smart home ecosystems and expose appliances, lights, sensors, media devices and gateways through a shared web model, reducing app and ecosystem fragmentation.',
      heroUseCase:
        'A home automation app discovers lights, HVAC, security sensors, a smart TV and a cleaning robot, then orchestrates them for leaving home, returning home or entertainment scenarios.',
      body: [
        'Smart homes often contain devices from multiple ecosystems, including appliances, lights, sensors, entertainment systems and gateways.',
        'WoT Thing Descriptions can expose these devices through common properties, actions and events. A gateway can map ecosystem-specific devices into WoT abstractions.',
        'This supports cross-vendor automation, multimodal user interfaces, accessibility, routines and easier integration between smart home platforms.',
      ],
      wotEnables: [
        'Common affordances for reading state, changing modes and subscribing to events across home devices.',
        'Gateway-based bridging between ecosystems such as Matter, Zigbee, Z-Wave, ECHONET Lite and web applications.',
        'User-centric automation that combines devices without one app per vendor.',
      ],
      primaryCapabilities: ['thing-description', 'discovery', 'profiles', 'binding-templates', 'security-metadata'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Smart Home',
          url: 'https://www.w3.org/TR/wot-usecases/#smart-home',
          kind: 'w3c-note',
          note: 'Smart home scenarios for device synchronization, routines and multimodal interfaces.',
        },
        {
          label: 'W3C WoT Architecture 1.1',
          url: 'https://www.w3.org/TR/wot-architecture11/',
          kind: 'w3c-spec',
          note: 'Architecture for exposing Things across protocols and domains.',
        },
        {
          label: 'W3C WoT Profile',
          url: 'https://www.w3.org/TR/wot-profile/',
          kind: 'w3c-spec',
          note: 'Profiles constrain implementations for easier out-of-the-box interoperability.',
        },
        {
          label: 'Matter',
          url: 'https://csa-iot.org/all-solutions/matter/',
          kind: 'ecosystem',
          note: 'Smart home ecosystem that can be bridged through a WoT abstraction layer.',
        },
        {
          label: 'ECHONET Lite Web API',
          url: 'https://echonet.jp/web_api/',
          kind: 'ecosystem',
          note: 'Smart home API ecosystem referenced in WoT smart home use-case material.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'W3C WoT Profile',
        'Matter',
        'Zigbee',
        'Z-Wave',
        'ECHONET Lite',
      ],
      relatedOrganizations: ['W3C', 'Connectivity Standards Alliance', 'ECHONET Consortium'],
      keywords: ['smart home', 'Matter', 'Zigbee', 'Z-Wave', 'appliances', 'routines', 'gateway', 'home automation'],
    },
    {
      title: 'Environment Monitoring',
      icon: <Leaf size={32} />,
      subtitle: 'Standardize access to air, water, weather and ecological sensor networks through web protocols',
      sellingPoint:
        'WoT makes environmental sensors easier to discover, describe and reuse, so monitoring platforms can combine observations from many vendors and locations.',
      heroUseCase:
        'A regional dashboard combines air-quality sensors, water-quality stations, weather sensors and ecological monitoring devices into one interoperable observation platform.',
      body: [
        'Environmental monitoring depends on distributed sensors that measure air quality, water quality, pollution, weather, noise, soil and ecological conditions.',
        'WoT can describe sensor properties, observed quantities, units, locations, events and data access protocols. Semantic vocabularies such as SSN/SOSA can make observations easier to interpret across systems.',
        'This supports public dashboards, research data collection, emergency response, compliance monitoring and cross-domain environmental intelligence.',
      ],
      wotEnables: [
        'Discoverable environmental sensors with machine-readable units, locations and observed properties.',
        'Reusable web access to measurements, events and historical data endpoints.',
        'Integration of sensor networks with smart city, agriculture, water and climate applications.',
      ],
      primaryCapabilities: ['thing-description', 'discovery', 'semantic-annotations', 'binding-templates'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Smart City Dashboard',
          url: 'https://www.w3.org/TR/wot-usecases/#smart-city-dashboard',
          kind: 'w3c-note',
          note: 'Includes environmental measurements such as temperature, humidity, UV and pollution.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Core vocabulary for sensors, observations, observed properties and actuators.',
        },
        {
          label: 'OGC SensorThings API',
          url: 'https://www.ogc.org/standard/sensorthings/',
          kind: 'external-standard',
          note: 'Relevant for geospatial sensor observations and environmental data.',
        },
        {
          label: 'Indoor Air Quality Monitoring Sensor for WoT',
          url: 'https://www.mdpi.com/2504-3900/2/23/1466',
          kind: 'research',
          note: 'Research example of WoT-based air quality monitoring.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Machine-readable interface model for environmental sensor Things.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'SSN/SOSA',
        'OGC SensorThings API',
        'MQTT',
        'CoAP',
      ],
      relatedOrganizations: ['W3C', 'OGC', 'environmental monitoring agencies'],
      keywords: ['air quality', 'water quality', 'weather', 'pollution', 'ecology', 'sensor networks', 'observations'],
    },
  ],
  'technology-trend': [
    {
      title: 'Digital Twins',
      icon: <Copy size={32} />,
      subtitle: 'Use Thing Descriptions to describe and interact with digital representations of physical assets',
      sellingPoint:
        'WoT gives digital twins a standard interaction contract, so a twin is not only a dashboard representation but also a machine-readable interface to properties, actions, events and relationships.',
      heroUseCase:
        'A factory digital twin mirrors a physical production line, exposing live state, simulation functions and control affordances through WoT-compatible interfaces.',
      body: [
        'Digital twins need live asset data, control interfaces, metadata, relationships and sometimes simulation endpoints.',
        'WoT Thing Descriptions can describe both physical Things and virtual Things. This lets applications interact with a real asset, a simulated asset or a twin through the same affordance model.',
        'This supports predictive maintenance, what-if simulation, asset documentation, supply-chain integration and cross-vendor digital twin ecosystems.',
      ],
      wotEnables: [
        'Standardized interaction contracts for physical assets, virtual Things and digital twin services.',
        'Machine-readable affordances for reading state, invoking simulations and subscribing to events.',
        'Reuse of the same client logic across real devices, simulated devices and twin representations.',
      ],
      primaryCapabilities: ['thing-description', 'thing-models', 'digital-twin', 'semantic-annotations', 'discovery'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Digital Twin',
          url: 'https://www.w3.org/TR/wot-usecases/#digital-twin',
          kind: 'w3c-note',
          note: 'Use case for virtual representations of physical assets and real-time status.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Virtual Thing',
          url: 'https://www.w3.org/TR/wot-usecases/#virtual-thing',
          kind: 'w3c-note',
          note: 'Scenario where software simulations conform to the same TD interface as physical Things.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Core machine-readable model for describing physical and virtual assets.',
        },
        {
          label: 'Industrial Digital Twin Association',
          url: 'https://industrialdigitaltwin.org/',
          kind: 'external-organization',
          note: 'Relevant industrial digital twin and Asset Administration Shell ecosystem.',
        },
        {
          label: 'Digital Twin Consortium',
          url: 'https://www.digitaltwinconsortium.org/',
          kind: 'external-organization',
          note: 'Industry organization focused on digital twin interoperability and adoption.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'Asset Administration Shell',
        'Digital Twin Consortium frameworks',
        'OPC UA',
      ],
      relatedOrganizations: ['W3C', 'IDTA', 'Digital Twin Consortium', 'OPC Foundation'],
      keywords: [
        'digital twin',
        'virtual thing',
        'simulation',
        'predictive maintenance',
        'asset model',
        'thing model',
        'real-time state',
      ],
    },
    {
      title: 'EU Cyber Resilience Act',
      icon: <ShieldCheck size={32} />,
      subtitle: 'Use machine-readable security metadata to support secure-by-design connected products',
      sellingPoint:
        'WoT can help connected-product ecosystems expose security requirements, authentication schemes and access constraints in a machine-readable way, supporting the documentation and automation needed for CRA-era products.',
      heroUseCase:
        'A manufacturer publishes Thing Descriptions that declare authentication methods, secure endpoints, scopes and links to security documentation for connected products.',
      body: [
        'The EU Cyber Resilience Act introduces cybersecurity requirements for products with digital elements, including obligations across design, development, production and the product support period.',
        'WoT does not make a product CRA-compliant by itself. Its value is that Thing Descriptions can make security metadata explicit: schemes, scopes, endpoint forms, data schemas and links to supporting documentation.',
        'This can support secure onboarding, automated conformance checks, vulnerability-response workflows and clearer communication between manufacturers, operators and integrators.',
      ],
      wotEnables: [
        'Machine-readable security metadata for connected products.',
        'Explicit authentication, authorization and endpoint information per interaction affordance.',
        'Links from device descriptions to security documentation, update channels or vulnerability information.',
      ],
      primaryCapabilities: ['thing-description', 'security-metadata', 'discovery', 'profiles'],
      resources: [
        {
          label: 'European Commission, Cyber Resilience Act summary',
          url: 'https://digital-strategy.ec.europa.eu/en/policies/cra-summary',
          kind: 'regulatory',
          note: 'Official EU overview of CRA scope, dates and objectives.',
        },
        {
          label: 'European Commission, CRA reporting obligations',
          url: 'https://digital-strategy.ec.europa.eu/en/policies/cra-reporting',
          kind: 'regulatory',
          note: 'Official EU guidance on vulnerability and incident reporting obligations.',
        },
        {
          label: 'W3C WoT Security and Privacy Guidelines',
          url: 'https://www.w3.org/TR/wot-security/',
          kind: 'w3c-spec',
          note: 'Security and privacy guidance for WoT assets, TDs and scripting.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'TDs include security definitions and metadata for interaction affordances.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, OAuth2',
          url: 'https://www.w3.org/TR/wot-usecases/#oauth2',
          kind: 'w3c-note',
          note: 'Use case mapping OAuth2 concepts to WoT entities and affordances.',
        },
      ],
      relatedStandards: [
        'EU Cyber Resilience Act',
        'W3C WoT Thing Description',
        'W3C WoT Security',
        'OAuth 2.0',
        'SBOM-related ecosystems',
      ],
      relatedOrganizations: ['European Commission', 'W3C', 'ENISA'],
      keywords: [
        'CRA',
        'cybersecurity',
        'secure by design',
        'vulnerability reporting',
        'security metadata',
        'authorization',
        'connected products',
      ],
    },
    {
      title: 'Digital Product Passport',
      icon: <QrCode size={32} />,
      subtitle:
        'Use Thing Descriptions as machine-readable entry points for product lifecycle and sustainability data',
      sellingPoint:
        'WoT can complement Digital Product Passports by connecting static product information with live product interfaces, telemetry and lifecycle services.',
      heroUseCase:
        'A connected product exposes a TD that links to product identity, material information, repair instructions, sustainability data and live operational telemetry.',
      body: [
        'Digital Product Passports are intended to store and share product data such as sustainability, durability and environmental information across a product lifecycle.',
        'A Thing Description can act as a machine-readable web entry point for a connected product. It can expose product metadata, links to passport records and affordances for reading lifecycle-relevant data.',
        'This is useful for repair, reuse, recycling, compliance reporting, carbon tracking and circular-economy services.',
      ],
      wotEnables: [
        'Machine-readable product identity, metadata and links to lifecycle records.',
        'Live access to product state, usage, maintenance and sustainability-related telemetry.',
        'A bridge between regulatory product data systems and connected-product runtime interfaces.',
      ],
      primaryCapabilities: ['thing-description', 'semantic-annotations', 'security-metadata', 'discovery'],
      resources: [
        {
          label: 'European Commission, Digital Product Passport consultation',
          url: 'https://single-market-economy.ec.europa.eu/news/commission-launches-consultation-digital-product-passport-2025-04-09_en',
          kind: 'regulatory',
          note: 'Official EU source describing DPP sustainability and lifecycle-data goals.',
        },
        {
          label: 'European Commission, Ecodesign for Sustainable Products Regulation',
          url: 'https://single-market-economy.ec.europa.eu/single-market/goods/sustainable-products/ecodesign-sustainable-products-regulation_en',
          kind: 'regulatory',
          note: 'Regulatory context for DPP under ESPR.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'TDs can carry product metadata, links and machine-readable affordances.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Device Lifecycle',
          url: 'https://www.w3.org/TR/wot-usecases/#device-lifecycle',
          kind: 'w3c-note',
          note: 'Lifecycle states and transitions for devices in WoT systems.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Discovery can help applications locate product descriptions and related metadata.',
        },
      ],
      relatedStandards: [
        'Digital Product Passport',
        'Ecodesign for Sustainable Products Regulation',
        'W3C WoT Thing Description',
        'GS1 Digital Link',
        'Asset Administration Shell',
      ],
      relatedOrganizations: ['European Commission', 'W3C', 'GS1', 'IDTA'],
      keywords: [
        'DPP',
        'product lifecycle',
        'sustainability',
        'repair',
        'reuse',
        'recycling',
        'circular economy',
        'product metadata',
      ],
    },
    {
      title: 'Agentic Systems',
      icon: <Bot size={32} />,
      subtitle:
        'Let autonomous AI agents discover, understand and orchestrate IoT devices through standardized affordances',
      sellingPoint:
        'WoT gives AI agents a safe, structured interface to the physical world: what a device is, what it can do, how to call it and what security constraints apply.',
      heroUseCase:
        'An energy-saving agent discovers room sensors, HVAC controls and lighting systems, checks their affordances and policies, then proposes or executes an optimization plan.',
      body: [
        'AI agents need more than raw APIs. They need machine-readable descriptions of capabilities, input schemas, security requirements and real-world effects.',
        'WoT Thing Descriptions expose device affordances as properties, actions and events. Discovery lets agents find Things by type, location, protocol, semantic category or capability.',
        'This enables agentic orchestration of IoT systems while keeping policies, authentication and authorization explicit.',
      ],
      wotEnables: [
        'Machine-readable affordances that agents can inspect before acting.',
        'Discovery of devices and services by capability, context and constraints.',
        'Safer orchestration because schemas, security requirements and interaction patterns are explicit.',
      ],
      primaryCapabilities: ['thing-description', 'discovery', 'semantic-annotations', 'security-metadata', 'profiles'],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Discovery',
          url: 'https://www.w3.org/TR/wot-usecases/#discovery',
          kind: 'w3c-note',
          note: 'Discovery use case for finding Things by capability, constraints and metadata.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Standard mechanism for distributing and locating Thing Descriptions.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Machine-readable affordances, schemas, links and security metadata.',
        },
        {
          label: 'W3C WoT Profile',
          url: 'https://www.w3.org/TR/wot-profile/',
          kind: 'w3c-spec',
          note: 'Profiles reduce ambiguity for clients, including automated clients.',
        },
        {
          label: 'W3C WoT Use Cases, Agentic Systems category',
          url: 'https://www.w3.org/WoT/use-cases/',
          kind: 'w3c-note',
          note: 'Current W3C WoT use-case page includes Agentic Systems as a technology trend.',
        },
      ],
      relatedStandards: ['W3C WoT Thing Description', 'W3C WoT Discovery', 'W3C WoT Profile', 'JSON Schema', 'JSON-LD'],
      relatedOrganizations: ['W3C', 'AI and IoT research communities'],
      keywords: [
        'AI agents',
        'autonomous systems',
        'tool use',
        'orchestration',
        'affordances',
        'discovery',
        'policy-aware control',
      ],
    },
    {
      title: 'Neurosymbolic AI',
      icon: <Brain size={32} />,
      subtitle: 'Combine learned sensor intelligence with symbolic reasoning over WoT semantic descriptions',
      sellingPoint:
        'WoT Thing Descriptions can provide the symbolic layer that AI systems need to reason about device meaning, units, capabilities and constraints while neural models learn from sensor streams.',
      heroUseCase:
        'A building AI predicts occupancy from sensor data, then uses semantic TD annotations to identify which HVAC zones, sensors and control actions are relevant.',
      body: [
        'Neurosymbolic AI combines neural methods, such as machine learning from data, with symbolic methods, such as rules, knowledge graphs and formal relationships.',
        'WoT TDs are JSON-LD-compatible and can be annotated with external vocabularies. This allows IoT devices to become part of knowledge graphs that describe what they measure, where they are and how they can be used.',
        'The result is AI that can learn from sensor data while also reasoning over device capabilities, safety constraints, physical context and domain semantics.',
      ],
      wotEnables: [
        'Knowledge-graph-compatible device descriptions for symbolic reasoning.',
        'Semantic links between sensor data, physical assets, units, locations and actions.',
        'AI workflows that combine learned predictions with explainable device and domain context.',
      ],
      primaryCapabilities: ['thing-description', 'semantic-annotations', 'thing-models', 'discovery'],
      resources: [
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'TDs use JSON-LD processing and support machine-understandable descriptions.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Ontology for sensors, observations, actuators and observed properties.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Semantic Interoperability',
          url: 'https://www.w3.org/TR/wot-usecases/#semantic-interoperability',
          kind: 'w3c-note',
          note: 'Use-case material on annotating TDs with external vocabularies.',
        },
        {
          label: 'W3C JSON-LD 1.1',
          url: 'https://www.w3.org/TR/json-ld11/',
          kind: 'w3c-spec',
          note: 'Linked-data serialization used by TD processing.',
        },
        {
          label: 'W3C WoT Architecture 1.1',
          url: 'https://www.w3.org/TR/wot-architecture11/',
          kind: 'w3c-spec',
          note: 'Architecture for integrating Things across application domains.',
        },
      ],
      relatedStandards: ['W3C WoT Thing Description', 'JSON-LD', 'RDF', 'SSN/SOSA', 'OWL', 'SHACL'],
      relatedOrganizations: ['W3C', 'semantic web research community', 'AI research community'],
      keywords: [
        'neurosymbolic AI',
        'knowledge graph',
        'semantic reasoning',
        'machine learning',
        'sensor data',
        'JSON-LD',
        'explainability',
      ],
    },
    {
      title: 'Edge Computing',
      icon: <Network size={32} />,
      subtitle: 'Discover and interact with computing resources near devices, users and physical processes',
      sellingPoint:
        'WoT can describe not only sensors and actuators, but also edge services that process data locally for lower latency, lower bandwidth use and stronger privacy.',
      heroUseCase:
        'A robot discovers a nearby edge vision service, sends camera frames locally and receives object-detection results without routing all data through the cloud.',
      body: [
        'Many IoT systems need low-latency processing, privacy-preserving computation or reduced network traffic. Sending every sensor stream to the cloud is often inefficient or unacceptable.',
        'WoT can expose edge services as Things with properties, actions and events. Discovery can help applications find local compute services based on location, capability and protocol.',
        'This supports computer vision, machine learning inference, robotics, industrial control, local analytics and bandwidth-constrained deployments.',
      ],
      wotEnables: [
        'Standardized descriptions for edge services as callable Things.',
        'Discovery of nearby compute resources by location, capability and constraints.',
        'Composable workflows across devices, gateways, local compute and cloud systems.',
      ],
      primaryCapabilities: [
        'thing-description',
        'discovery',
        'edge-services',
        'binding-templates',
        'security-metadata',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Edge Computing',
          url: 'https://www.w3.org/TR/wot-usecases/#edge-computing',
          kind: 'w3c-note',
          note: 'Use case for offloading computation to nearby edge resources.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Useful for finding local edge services and their metadata.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Can describe edge services using the same affordance model as devices.',
        },
        {
          label: 'ETSI MEC',
          url: 'https://www.etsi.org/technologies/multi-access-edge-computing',
          kind: 'external-standard',
          note: 'Edge computing ecosystem relevant to local compute services.',
        },
        {
          label: 'OpenFog / Industrial IoT edge ecosystem',
          url: 'https://www.iiconsortium.org/',
          kind: 'external-organization',
          note: 'Industrial edge and fog-computing ecosystem reference.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'ETSI MEC',
        'IETF IoT edge work',
        'MQTT',
        'CoAP',
      ],
      relatedOrganizations: ['W3C', 'ETSI', 'IETF', 'Industry IoT Consortium'],
      keywords: [
        'edge computing',
        'local inference',
        'latency',
        'bandwidth',
        'privacy',
        'gateway',
        'robotics',
        'computer vision',
      ],
    },
    {
      title: 'Zero Trust Architecture',
      icon: <Lock size={32} />,
      subtitle: 'Make device authentication, authorization and access policies explicit and machine-verifiable',
      sellingPoint:
        "WoT supports zero-trust-style IoT integration by making each interaction's security requirements visible in the Thing Description instead of relying on implicit network trust.",
      heroUseCase:
        'An application discovers a pump but can only read status, while a maintenance service with stronger credentials can invoke calibration actions.',
      body: [
        'Zero Trust Architecture assumes that network location alone should not grant trust. Every request should be authenticated, authorized and evaluated in context.',
        'WoT TDs can declare security schemes, required scopes and endpoint forms per Thing or per interaction affordance. Discovery can also be protected so sensitive metadata is only exposed to authorized consumers.',
        'This helps IoT systems implement least privilege, clearer policy enforcement and safer cross-domain integration.',
      ],
      wotEnables: [
        'Explicit security metadata for Things and individual affordances.',
        'Policy-aware discovery and access control for IoT resources.',
        'Least-privilege integration between applications, devices, gateways and services.',
      ],
      primaryCapabilities: ['security-metadata', 'thing-description', 'discovery', 'profiles'],
      resources: [
        {
          label: 'W3C WoT Security and Privacy Guidelines',
          url: 'https://www.w3.org/TR/wot-security/',
          kind: 'w3c-spec',
          note: 'Security and privacy guidance for WoT deployments.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'TDs include security definitions and affordance metadata.',
        },
        {
          label: 'W3C WoT Discovery',
          url: 'https://www.w3.org/TR/wot-discovery/',
          kind: 'w3c-spec',
          note: 'Discovery includes security, authentication and authorization considerations.',
        },
        {
          label: 'NIST SP 800-207, Zero Trust Architecture',
          url: 'https://csrc.nist.gov/pubs/sp/800/207/final',
          kind: 'external-standard',
          note: 'Foundational zero-trust architecture publication.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, OAuth2',
          url: 'https://www.w3.org/TR/wot-usecases/#oauth2',
          kind: 'w3c-note',
          note: 'Use case mapping OAuth2 to WoT entities and interactions.',
        },
      ],
      relatedStandards: [
        'W3C WoT Security',
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'NIST SP 800-207',
        'OAuth 2.0',
        'ACE-OAuth',
      ],
      relatedOrganizations: ['W3C', 'NIST', 'IETF'],
      keywords: [
        'zero trust',
        'least privilege',
        'authentication',
        'authorization',
        'access policy',
        'security metadata',
        'secure discovery',
      ],
    },
    {
      title: 'Semantic Interoperability',
      icon: <Workflow size={32} />,
      subtitle:
        'Use linked data and semantic annotations to make IoT data Findable, Accessible, Interoperable and Reusable by design',
      sellingPoint:
        'WoT turns device APIs into semantically understandable web resources, allowing applications to combine IoT data across domains instead of only exchanging raw protocol messages.',
      heroUseCase:
        'A city energy application combines building sensors, weather stations and grid devices because their TDs describe units, observed properties, locations and domain concepts using shared vocabularies.',
      body: [
        'Syntactic interoperability means systems can exchange data formats. Semantic interoperability means they also share the meaning of that data.',
        'WoT TDs use JSON-LD processing and can be annotated with external vocabularies. This lets device descriptions participate in knowledge graphs and domain models.',
        'By combining TDs with vocabularies such as SSN/SOSA, Brick, BOT and SAREF, IoT data becomes easier to discover, interpret, validate and reuse across applications.',
      ],
      wotEnables: [
        'JSON-LD-compatible descriptions for Things, affordances, schemas and links.',
        'Cross-domain annotation with shared vocabularies and knowledge graphs.',
        'FAIR-style IoT data access through discovery, web protocols, semantics and reusable metadata.',
      ],
      primaryCapabilities: ['thing-description', 'semantic-annotations', 'thing-models', 'discovery', 'profiles'],
      resources: [
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'JSON-LD-compatible model for machine-understandable Thing descriptions.',
        },
        {
          label: 'W3C WoT Profile',
          url: 'https://www.w3.org/TR/wot-profile/',
          kind: 'w3c-spec',
          note: 'Profiles distinguish syntactic, semantic and organizational interoperability.',
        },
        {
          label: 'W3C SSN/SOSA',
          url: 'https://www.w3.org/TR/vocab-ssn/',
          kind: 'w3c-spec',
          note: 'Sensor, observation and actuator vocabulary for semantic IoT data.',
        },
        {
          label: 'Brick Schema',
          url: 'https://brickschema.org/',
          kind: 'external-standard',
          note: 'Semantic building model often combined with WoT TDs.',
        },
        {
          label: 'ETSI SAREF',
          url: 'https://saref.etsi.org/',
          kind: 'external-standard',
          note: 'Cross-domain smart applications ontology relevant to semantic IoT.',
        },
      ],
      relatedStandards: ['W3C WoT Thing Description', 'JSON-LD', 'RDF', 'SSN/SOSA', 'Brick', 'BOT', 'SAREF', 'SHACL'],
      relatedOrganizations: ['W3C', 'ETSI', 'semantic web community'],
      keywords: [
        'semantic interoperability',
        'FAIR data',
        'JSON-LD',
        'linked data',
        'knowledge graph',
        'ontology',
        'cross-domain integration',
      ],
    },
    {
      title: 'Sustainability & Green IoT',
      icon: <Sun size={32} />,
      subtitle:
        'Use standardized device descriptions for energy-aware orchestration, carbon tracking and optimized resource usage',
      sellingPoint:
        'WoT helps sustainability systems discover what connected assets consume, produce, measure or control, then coordinate them to reduce energy use, waste and emissions.',
      heroUseCase:
        'A campus platform discovers buildings, batteries, solar inverters, EV chargers and HVAC systems, then optimizes operation based on occupancy, renewable availability and grid signals.',
      body: [
        'Sustainability use cases need data from many domains: energy meters, building systems, industrial equipment, transport, product lifecycle systems and environmental sensors.',
        'WoT provides a standardized way to describe these connected resources, including how to read measurements, subscribe to events and invoke control actions.',
        'This enables energy-aware orchestration, carbon-aware scheduling, resource optimization, predictive maintenance and integration with product lifecycle reporting.',
      ],
      wotEnables: [
        'Discovery of energy-consuming, energy-producing and resource-monitoring Things.',
        'Standardized access to telemetry needed for energy, carbon and resource optimization.',
        'Cross-domain orchestration across buildings, grids, factories, transport and product systems.',
      ],
      primaryCapabilities: [
        'thing-description',
        'discovery',
        'semantic-annotations',
        'binding-templates',
        'digital-twin',
      ],
      resources: [
        {
          label: 'W3C WoT Use Cases and Requirements, Smart Grids',
          url: 'https://www.w3.org/TR/wot-usecases/#smart-grids',
          kind: 'w3c-note',
          note: 'Energy systems scenario involving generation, storage, grid management and consumption.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Connected Building Energy Efficiency',
          url: 'https://www.w3.org/TR/wot-usecases/#connected-building-energy-efficiency',
          kind: 'w3c-note',
          note: 'Building energy efficiency scenario using interoperable sensor and building metadata.',
        },
        {
          label: 'W3C WoT Use Cases and Requirements, Manufacturing',
          url: 'https://www.w3.org/TR/wot-usecases/#manufacturing',
          kind: 'w3c-note',
          note: 'Industrial production monitoring and optimization use cases.',
        },
        {
          label: 'European Commission, Digital Product Passport consultation',
          url: 'https://single-market-economy.ec.europa.eu/news/commission-launches-consultation-digital-product-passport-2025-04-09_en',
          kind: 'regulatory',
          note: 'DPP source for sustainability and lifecycle product data.',
        },
        {
          label: 'W3C WoT Thing Description 1.1',
          url: 'https://www.w3.org/TR/wot-thing-description11/',
          kind: 'w3c-spec',
          note: 'Core model for making sustainability-relevant devices and data machine-readable.',
        },
      ],
      relatedStandards: [
        'W3C WoT Thing Description',
        'W3C WoT Discovery',
        'Digital Product Passport',
        'IEC 61850',
        'SSN/SOSA',
        'SAREF',
      ],
      relatedOrganizations: ['W3C', 'European Commission', 'IEC', 'ETSI'],
      keywords: [
        'green IoT',
        'sustainability',
        'energy optimization',
        'carbon tracking',
        'resource efficiency',
        'predictive maintenance',
        'circular economy',
      ],
    },
  ],
};
