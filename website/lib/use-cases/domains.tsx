import {
  Factory,
  Zap,
  Building,
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
  Building2,
} from 'lucide-react';
import type { ReactNode } from 'react';

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

export type Resource = {
  title: string;
  url: string;
  video_url?: string;
  note?: string;
};

export type WoTUseCasePage = {
  icon: ReactNode;
  description: string;
  useCase: string;
  woTRole: {
    text: string;
    keyBenefits: string[];
  };
  realWorldExamples: string[];
  howItWorks: string;
  relevantStandardsIntegrations: string[];
  resources: Resource[];
  cta: string;
  testimonialIds?: string[];
};

export const DOMAINS: Record<string, Record<string, WoTUseCasePage>> = {
  'Application Domains': {
    'Smart Manufacturing': {
      icon: <Factory size={32} />,
      description:
        'Connecting diverse industrial assets such as PLCs, robots, and sensors across factory floors using standardized Thing Descriptions for seamless integration',
      useCase:
        'Web of Things (WoT) transforms industrial operations by providing a standardized, web-friendly layer over Operational Technology (OT) systems. It bridges the gap between legacy industrial protocols and modern IT/cloud ecosystems, enabling manufacturers to achieve true Industry 4.0 interoperability without rip-and-replace investments. Managers gain a unified view of production lines, enabling predictive maintenance, flexible reconfiguration, and data-driven optimization across multi-vendor environments.',
      woTRole: {
        text: 'WoT Thing Descriptions (TDs) provide a machine-readable, standardized interface for any industrial device or system. Protocol Bindings (Modbus, OPC UA, MQTT, etc.) and Binding Templates allow seamless interaction. Discovery mechanisms enable dynamic onboarding of assets. Security Vocabulary and Access Control ensure safe operations in OT environments. Semantic annotations with ontologies like Brick enable contextual data integration for digital twins and analytics.',
        keyBenefits: [
          'Dramatically reduce integration costs and time-to-deployment for multi-vendor factory floors (often 40-60% savings in custom middleware)',
          'Enable predictive maintenance and reduce unplanned downtime through real-time sensor data aggregation and AI/ML pipelines',
          'Achieve OT/IT convergence for holistic visibility from shop floor to ERP/MES systems',
          'Support flexible, reconfigurable production lines for mass customization and resilience to supply chain disruptions',
          'Facilitate compliance with emerging regulations (e.g., EU CRA, sustainability reporting) via standardized security and data models',
          'Future-proof investments by leveraging open web standards instead of proprietary silos',
        ],
      },
      realWorldExamples: [
        'Production Monitoring: Sensors track temperature, vibration, and output; TDs enable aggregation for anomaly detection, fault prediction, and optimization of raw material use across lines and plants.',
        'Cross-Protocol Industry 4.0: Bottling line (filling, capping, transport) dynamically adjusts production speed based on real-time renewable energy availability from the smart grid via OPC UA + WoT integration.',
        'OPC UA + WoT Connectivity: Rapid onboarding of industrial devices into management platforms like Prosys Forge for unified monitoring and control.',
      ],
      howItWorks:
        "Engineers describe devices once using WoT TD JSON-LD. Forms specify protocol details (e.g., Modbus registers or OPC UA node IDs). Consumers (dashboards, AI agents, cloud apps) discover and interact uniformly via HTTP/CoAP/MQTT/WebSockets without knowing proprietary details. Edge runtimes or gateways host Exposed Things. Semantic models link device data to physical processes (e.g., 'this sensor affects zone temperature').",
      relevantStandardsIntegrations: [
        'OPC UA',
        'Modbus',
        'Profinet',
        'MQTT',
        'BACnet (cross-domain)',
        'Brick Schema',
        'SSN/SOSA',
      ],
      resources: [
        {
          title: 'OPC UA and Web of Things',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/29/2025-10-WoTCG-Meetup29-Barnstedt-Microsoft.pdf',
          video_url: 'https://youtu.be/PlY-ixquyZc',
          note: '16 October 2025: Deep dive into synergy between OPC UA and WoT for industrial automation, OT/IT integration, and practical implementation examples from Microsoft and Siemens experts.',
        },
        {
          title: 'Quick onboarding of devices to Prosys Forge using OPC UA WoT Connectivity',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/34/2026-05-WoTCG-Meetup34-onboarding-prosys.pdf',
          video_url: 'https://youtu.be/l-suLrJDjd0',
          note: '28 May 2026: Demonstration of rapid, standardized device onboarding in industrial environments using WoT and OPC UA.',
        },
        {
          title: 'WoT Use Cases and Requirements - Production Monitoring & Cross-protocol Interaction',
          url: 'https://w3c.github.io/wot-usecases/#sec-production-monitoring',
        },
        {
          title: 'WoT Architecture 1.1',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT Binding Templates - Modbus & OPC UA',
          url: 'https://w3c.github.io/wot-binding-templates/',
        },
        {
          title: 'WoT CG Meetups Repository (more industrial presentations)',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Start with a pilot on one production line: describe 5-10 key assets with TDs and integrate into your existing dashboard or analytics platform. WoT reduces vendor lock-in and accelerates digital twin initiatives.',
      testimonialIds: ['microsoft', 'opc-foundation', 'siemens', 'fujitsu'],
    },

    'Energy & Utilities': {
      icon: <Zap size={32} />,
      description:
        'Enabling smart grid management, renewable energy integration, and consumption optimization through interoperable device interfaces',
      useCase:
        'WoT provides the missing interoperability layer for the energy transition. It allows utilities and building operators to integrate diverse DERs (solar, batteries, EVs, heat pumps), smart meters, and grid equipment from multiple vendors into unified platforms. This enables real-time balancing, virtual power plants (VPPs), demand response, and optimized renewable integration while maintaining grid stability and security.',
      woTRole: {
        text: 'TDs describe energy devices with standardized affordances for monitoring (power, voltage, SOC) and control (setpoints, schedules). Bindings support protocols like IEC 61850, Modbus, and MQTT. Discovery enables dynamic registration of DERs. Security and privacy vocabularies protect sensitive consumption data. Semantic models align with SAREF4ENER for energy-specific context.',
        keyBenefits: [
          'Accelerate renewable integration and VPP participation with plug-and-play device onboarding',
          'Reduce integration costs for smart metering, demand response, and grid edge applications',
          'Enable fine-grained, real-time visibility for better forecasting, balancing, and ancillary services',
          'Support regulatory compliance (grid codes, CRA, sustainability reporting) through standardized, auditable interfaces',
          'Unlock new business models: energy sharing, flexibility markets, and carbon-aware optimization',
          'Improve resilience with decentralized, interoperable control at the grid edge',
        ],
      },
      realWorldExamples: [
        'Smart Grid Management: Monitor and control generators, storage, and consumers; integrate decentralized PV/wind/biogas with load control for stability.',
        'Virtual Power Plants: Aggregate DERs using WoT discovery and TDs for market participation and real-time dispatch.',
        'Connected Building Energy Efficiency: Sensors collect consumption and comfort data to optimize renovations and operations across portfolios.',
      ],
      howItWorks:
        'Devices expose TDs via gateways or directly. Utilities or aggregators use WoT Discovery to find and onboard assets dynamically. Standardized forms allow uniform read/write of power data and control commands. Edge computing nodes can host lightweight WoT runtimes for low-latency local control. Data flows securely to cloud platforms for analytics and market interfaces.',
      relevantStandardsIntegrations: ['IEC 61850', 'Modbus', 'MQTT', 'IEEE 1547', 'SAREF4ENER', 'SSN/SOSA'],
      resources: [
        {
          title: 'Enabling IoT in buildings with BACnet and Web of Things (cross-domain energy relevance)',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/30/2025-11-WoTCG-Meetup30-WoT-BACnet-Fennibay-Siemens.pdf',
          video_url: 'https://youtu.be/VSZA8wjjUIo',
          note: '20 November 2025: Integration of building energy systems with WoT for optimized consumption and smart grid interaction.',
        },
        {
          title: 'WoT Use Cases and Requirements - Smart Grids & Connected Building Energy Efficiency',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Architecture and Security Guidelines',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Pilot WoT-enabled VPP or demand-response integration on a subset of customer DERs. Leverage existing TDs or Thing Models to cut onboarding time from weeks to hours.',
      testimonialIds: ['siemens', 'siemens-microsoft'],
    },

    'Smart Buildings': {
      icon: <Building size={32} />,
      description:
        'Unified control of HVAC, lighting, access, and monitoring systems from multiple vendors within commercial and residential buildings',
      useCase:
        'WoT turns fragmented building automation systems into a cohesive, programmable platform. By describing every sensor, actuator, and subsystem (HVAC, lighting, fire safety, access control) with standardized TDs, building managers and integrators can deploy vendor-agnostic applications for energy optimization, predictive maintenance, occupant comfort, and space utilization without being locked into a single BMS vendor.',
      woTRole: {
        text: 'TDs capture device capabilities and link them to building topology using ontologies like BOT (Building Topology Ontology) and Brick Schema. Protocol bindings for BACnet, KNX, Modbus, and others enable interaction. Discovery supports large-scale building networks. Security and privacy controls protect occupant data and critical infrastructure. Scripting API or edge runtimes allow local automation logic.',
        keyBenefits: [
          'Eliminate vendor lock-in and reduce long-term integration/maintenance costs by 30-50%',
          'Enable advanced applications: fault detection, virtual metering, predictive occupancy, energy optimization, and digital twins of buildings',
          'Accelerate commissioning and renovation projects with self-describing devices and automated topology mapping',
          'Improve occupant experience and ESG performance through data-driven HVAC/lighting optimization',
          'Support compliance with EU EPBD, CRA, and green building certifications via auditable, interoperable data',
          'Future-proof portfolios for PropTech, smart workplace, and tenant experience platforms',
        ],
      },
      realWorldExamples: [
        'Portable Building Applications: Model HVAC, lighting, and electrical subsystems; enable automated fault detection (e.g., rogue zones), virtual metering, and predictive maintenance using SPARQL queries over Brick + WoT data.',
        'Connected Building Energy Efficiency: Deploy sensors for consumption and comfort data; use TDs + topology for renovation planning and ongoing optimization.',
        'BACnet + WoT Integration: Expose legacy building automation systems via standardized web interfaces for unified dashboards and AI applications.',
      ],
      howItWorks:
        "Each device or subsystem gets a TD (often generated from existing BACnet/KNX objects or created via Thing Models). TDs include semantic annotations linking properties to building zones/spaces (e.g., 'this temperature sensor observes zone X air temperature'). Applications discover relevant Things via location/type queries and interact uniformly. Edge gateways or cloud platforms host the WoT layer. SPARQL or REST APIs provide powerful querying over the building knowledge graph.",
      relevantStandardsIntegrations: [
        'BACnet',
        'KNX',
        'Modbus',
        'Brick Schema',
        'BOT (Building Topology Ontology)',
        'SAREF4BLDG',
        'SSN/SOSA',
      ],
      resources: [
        {
          title: 'Enabling IoT in buildings with BACnet and Web of Things',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/30/2025-11-WoTCG-Meetup30-WoT-BACnet-Fennibay-Siemens.pdf',
          video_url: 'https://youtu.be/VSZA8wjjUIo',
          note: '20 November 2025: Practical integration of BACnet building systems with WoT for interoperable IoT applications in commercial and residential buildings.',
        },
        {
          title: 'WoT Use Cases and Requirements - Smart Buildings & Portable Building Applications',
          url: 'https://w3c.github.io/wot-usecases/#sec-smart-building',
        },
        {
          title: 'WoT Thing Description & Discovery Specifications',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: "Map your building portfolio's critical systems to WoT TDs. Start with energy-consuming equipment (HVAC, lighting) to unlock immediate ROI through optimization and fault detection apps. Use Thing Models to scale across sites.",
      testimonialIds: ['siemens-microsoft', 'siemens', 'opc-foundation'],
    },

    'Smart Cities': {
      icon: <Building2 size={32} />,
      description:
        'Integrating urban infrastructure including traffic, waste, and environment monitoring into cohesive city-wide platforms using open standards',
      useCase:
        'WoT provides the open, scalable foundation for smart city platforms. It enables cities and their vendors to integrate traffic systems, waste management, environmental sensors, public lighting, parking, and more into unified dashboards and applications without being locked into proprietary city platforms. Citizens and businesses benefit from better services; city managers gain actionable insights and vendor choice.',
      woTRole: {
        text: "TDs describe heterogeneous urban assets (sensors, actuators, cameras, vehicles) with semantic context (location, type, capabilities). Discovery supports large-scale, cross-domain queries (e.g., 'all air quality sensors in district X'). Protocol bindings and security vocabularies ensure secure, interoperable data flows. Integration with geospatial standards and ontologies enables powerful city dashboards and digital twins.",
        keyBenefits: [
          'Break down data silos across city departments and vendors for holistic urban intelligence',
          'Reduce procurement and integration costs through open standards and reusable components',
          'Enable citizen-centric services: real-time mobility, environmental alerts, participatory governance',
          'Support evidence-based policy making and sustainability reporting with high-quality, interoperable data',
          'Attract innovation from startups and SMEs via open APIs and discovery mechanisms',
          'Build resilient, future-proof city infrastructure aligned with EU smart city and green deal objectives',
        ],
      },
      realWorldExamples: [
        'Smart City Geolocation & Dashboard: Track mobile assets (vehicles, robots, sensors) with standardized location data; visualize environmental, traffic, and health data on maps with historical trends and actuator control.',
        'Cross-Domain Discovery in Smart Campus: Discover devices across energy, buildings, and environment domains via SPARQL queries for energy saving or emergency response.',
        'Cultural Spaces (Museums): Semantic monitoring of temperature/humidity for artifact preservation combined with energy optimization and visitor experience enhancements.',
      ],
      howItWorks:
        'City assets expose or are wrapped with WoT TDs (often via gateways). A city-wide WoT Discovery service (directory or peer-to-peer) allows applications to find relevant Things by location, type, or capability. Data is normalized and semantically annotated for easy integration into GIS platforms, digital twins, or AI analytics. Security policies ensure appropriate access for public vs internal services.',
      relevantStandardsIntegrations: [
        'W3C Geolocation',
        'OGC standards',
        'SSN/SOSA',
        'SAREF',
        'MQTT',
        'CoAP',
        'Brick/BOT (for buildings)',
      ],
      resources: [
        {
          title: 'WoT Use Cases and Requirements - Smart City section (Geolocation, Dashboard, Cross-Domain Discovery)',
          url: 'https://w3c.github.io/wot-usecases/#smart-city',
        },
        {
          title: 'WoT Discovery Specification',
          url: 'https://www.w3.org/TR/wot-discovery/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Define a minimal WoT profile for city assets. Pilot cross-department data sharing (e.g., traffic + environment) using WoT Discovery. This creates immediate value and positions the city as an innovation hub.',
      testimonialIds: ['hitachi'],
    },

    'Healthcare & Well-being': {
      icon: <Activity size={32} />,
      description:
        'Connecting medical devices, wearables, and facility systems to improve patient care, remote monitoring, and clinical workflows',
      useCase:
        'WoT brings web-scale interoperability and security to the highly regulated healthcare domain. It enables safe integration of medical devices, wearables, hospital infrastructure (beds, pumps, monitors), and facility systems into unified platforms for real-time patient monitoring, predictive care, remote patient management, and operational efficiency while meeting strict privacy (GDPR/HIPAA), safety, and security requirements.',
      woTRole: {
        text: "TDs describe medical devices with precise affordances, data formats, and security requirements. Security Vocabulary and fine-grained access control protect sensitive patient data. Discovery supports rapid, secure onboarding in dynamic clinical environments. Semantic models align with health standards for interoperability. WoT's web foundation enables secure remote access and integration with EHR/EMR systems.",
        keyBenefits: [
          'Improve patient outcomes through real-time, interoperable data from diverse medical devices and wearables',
          'Reduce clinical workflow friction and medical errors via automated data capture and closed-loop control',
          'Enable scalable remote patient monitoring and telehealth with standardized, secure interfaces',
          'Lower integration costs for hospital equipment and facility systems (HVAC, lighting, access for patient comfort)',
          'Support regulatory compliance (MDR, CRA, GDPR/HIPAA) with auditable security and data provenance',
          'Accelerate innovation in digital health and AI-assisted diagnostics/therapy',
        ],
      },
      realWorldExamples: [
        'Interconnected Medical Devices in ICU: Integrate monitors, infusion pumps, and sensors for Physiological Closed-Loop Control (PCLC); reduce errors with autonomous therapy adjustments based on real-time vitals.',
        'Health Notifiers & Remote Monitoring: Networked devices for emergency alerts, vital signs tracking, and collaborative analysis with streaming data.',
        'Facility Integration: Link building systems (lighting, temperature) with patient care workflows for improved healing environments and operational efficiency.',
      ],
      howItWorks:
        'Medical devices expose TDs (or are wrapped via gateways). Clinical applications and AI services discover and interact with devices securely using WoT protocols and security mechanisms. Data is semantically described for integration into clinical decision support systems. Edge computing supports low-latency closed-loop control. Full audit trails and access policies are enforced via TD security metadata.',
      relevantStandardsIntegrations: [
        'ASTM F2761 (ICE)',
        'OpenICE/DDS',
        'HL7/FHIR (via mapping)',
        'SSN/SOSA',
        'WoT Security Vocabulary',
      ],
      resources: [
        {
          title: 'WoT Use Cases and Requirements - Healthcare & Medical Device Integration',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Security and Privacy Guidelines',
          url: 'https://w3c.github.io/wot-security/',
        },
        {
          title: 'WoT CG Meetups Repository (search for healthcare or medical)',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Identify high-value integration points (e.g., ICU monitoring or remote patient programs). Use WoT TDs to create secure, standardized interfaces. This reduces custom integration work and accelerates digital health initiatives while improving compliance posture.',
    },

    Agriculture: {
      icon: <Tractor size={32} />,
      description:
        'Precision farming with interoperable soil sensors, weather stations, and irrigation controllers for data-driven crop management',
      useCase:
        'WoT enables the next generation of precision agriculture by providing open, interoperable interfaces for the diverse sensors, actuators, drones, and machinery found on modern farms. Farmers and ag-tech providers can build unified platforms that optimize water, fertilizer, and pesticide use; monitor livestock and crop health; and integrate with supply chain and carbon accounting systems independent of vendor ecosystems.',
      woTRole: {
        text: 'TDs describe agricultural devices (soil moisture sensors, weather stations, irrigation valves, drones, milking robots) with semantic context (location, depth, crop type). Protocol bindings support LPWAN, Modbus, MQTT, and proprietary farm protocols. Discovery enables dynamic field networks. Security protects farm data and equipment. Integration with SAREF4AGRI and SSN/SOSA ontologies provides rich semantic models for AI and decision support.',
        keyBenefits: [
          'Optimize resource use (water, energy, inputs) by 15-30% through precise, data-driven decisions',
          'Reduce labor shortages via automation (e.g., robotic milking, drone-based pest control)',
          'Improve yields and quality while minimizing environmental impact and input costs',
          'Enable traceability and carbon farming programs through standardized, auditable data',
          'Support resilience to climate variability with real-time monitoring and forecasting integration',
          'Lower barriers for small and medium farms by avoiding proprietary lock-in',
        ],
      },
      realWorldExamples: [
        'Greenhouse Horticulture: Unified control of temperature, humidity, CO2, and lighting from multiple vendors for maximum photosynthesis and yield stability.',
        'Open-field Agriculture & Irrigation: Sensors (soil moisture at depth, weather) + actuators (pumps, sprinklers) integrated via gateways; data drives AI irrigation advice and digital twins. Pilots in Italy, Brazil, Spain show significant water/energy savings.',
        'Automatic Milking Systems (AMS): RFID, cameras, robots, and analyzers integrated for labor reduction, milk quality tracking, and health monitoring.',
        'Pest Control & Livestock Health: UAVs + ground sensors for pest detection and targeted application; wearables for animal health prediction and early intervention.',
      ],
      howItWorks:
        "Field gateways or edge devices host WoT runtimes that expose sensors/actuators as Things. TDs include geolocation, calibration info, and semantic links (e.g., 'this sensor measures root-zone moisture for field section Y'). Cloud or edge AI consumes standardized data for decision support. Farmers interact via web/mobile apps or automated rules. Historical and forecast data are linked via semantic models.",
      relevantStandardsIntegrations: ['SAREF4AGRI', 'SSN/SOSA', 'SDI-12', 'LPWAN (LoRaWAN, NB-IoT)', 'MQTT', 'CoAP'],
      resources: [
        {
          title:
            'WoT Use Cases and Requirements - Smart Agriculture (Greenhouse, Open-field, Irrigation, AMS, Pest Control, Livestock, Machinery)',
          url: 'https://w3c.github.io/wot-usecases/#agriculture',
        },
        {
          title: 'WoT Thing Description & Binding Templates',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Start with soil moisture + weather + irrigation control on one field or greenhouse. Use or extend existing Thing Models for rapid TD creation. Integrate data into your farm management platform or carbon accounting tools for quick ROI and compliance value.',
    },

    'Transportation & Logistics': {
      icon: <Truck size={32} />,
      description:
        'Fleet tracking, supply chain visibility, and connected vehicle systems through standardized IoT descriptions and discovery',
      useCase:
        'WoT brings web-scale interoperability to the complex, multi-stakeholder world of transportation and logistics. It enables seamless integration of vehicle telematics, cargo sensors, warehouse systems, port equipment, and infrastructure (traffic lights, parking, charging) into unified platforms for end-to-end visibility, predictive logistics, and optimized multimodal transport while supporting stringent security and privacy requirements.',
      woTRole: {
        text: 'TDs describe vehicles, containers, sensors (location, temperature, shock), and infrastructure with standardized geolocation, status, and control affordances. Discovery supports dynamic fleets and large-scale networks. Security Vocabulary protects sensitive location and cargo data. Semantic models integrate with transport ontologies and geospatial standards for powerful routing, tracking, and digital twin applications.',
        keyBenefits: [
          'Achieve true end-to-end supply chain visibility across carriers, modes, and vendors',
          'Reduce losses, delays, and insurance costs through real-time condition monitoring and predictive alerts',
          'Optimize fleet utilization, routing, and last-mile delivery with interoperable data',
          'Enable new services: cargo as a service, dynamic insurance, carbon tracking per shipment',
          'Support regulatory compliance (e.g., dangerous goods, emissions reporting) with auditable data',
          'Lower integration costs for 3PLs, shippers, and infrastructure operators',
        ],
      },
      realWorldExamples: [
        'Fleet Tracking & Supply Chain: Standardized location, status, and sensor data (temperature, humidity, shock) from vehicles and containers for real-time visibility and exception handling.',
        'Smart City Geolocation: Dynamic tracking of mobile assets with geofencing notifications; integration with traffic and logistics platforms.',
        'Infrastructure Integration: Connected traffic lights, parking, and charging stations discoverable and controllable via WoT for optimized urban logistics.',
      ],
      howItWorks:
        'Vehicles and assets expose or are wrapped with TDs containing location (via GNSS or indoor tech), telemetry, and control interfaces. Discovery services (local on vehicles or cloud-based) allow platforms to find relevant Things. Data is semantically enriched for integration with TMS/ERP/WMS systems. Edge processing on vehicles or gateways supports low-latency decisions. Security policies ensure only authorized parties access sensitive data.',
      relevantStandardsIntegrations: [
        'W3C Geolocation API',
        'OGC standards',
        'NMEA',
        'SSN/SOSA',
        'MQTT',
        '5G/Edge computing bindings',
      ],
      resources: [
        {
          title: 'WoT Use Cases and Requirements - Smart City Geolocation & Transportation-related scenarios',
          url: 'https://w3c.github.io/wot-usecases/#smart-city',
        },
        {
          title: 'WoT Discovery & Architecture Specifications',
          url: 'https://www.w3.org/TR/wot-discovery/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Define a WoT profile for your telematics and cargo sensors. Pilot standardized data sharing with one key partner or platform. This unlocks visibility benefits quickly and positions you for advanced analytics and new service models.',
    },

    'Consumer & Smart Home': {
      icon: <Home size={32} />,
      description:
        'Cross-vendor smart home device integration, bridging ecosystems like Matter, Zigbee, and Z-Wave via WoT abstractions',
      useCase:
        'WoT provides the universal translation layer for the smart home. It allows consumers, installers, and platform providers to integrate devices from any ecosystem (Matter, Zigbee, Z-Wave, proprietary Wi-Fi/Bluetooth) into unified, secure, and programmable experiences without being locked into a single voice assistant or hub vendor. This enables richer automation, better privacy, and future-proof smart homes.',
      woTRole: {
        text: 'WoT abstracts device capabilities into standardized TDs regardless of underlying protocol. Bindings and adapters translate between Matter, Zigbee, etc., and web protocols. Discovery makes devices findable across the home network. Security and privacy vocabularies give users fine-grained control. Thing Models simplify onboarding of common device types. Scripting API enables powerful local automations.',
        keyBenefits: [
          'True cross-ecosystem interoperability: control any device from any app or automation without vendor lock-in',
          'Improved privacy and security by keeping sensitive home data local where possible and using standardized access controls',
          'Faster innovation: developers build once against WoT abstractions and reach all devices',
          'Better user experience: unified dashboards, voice control, and automations that actually work reliably',
          'Support for accessibility and multi-user scenarios through standardized preferences and access policies',
          'Future-proof homes as new protocols and AI agents emerge',
        ],
      },
      realWorldExamples: [
        'Cross-Vendor Integration: Lights, thermostats, locks, and sensors from different ecosystems (Matter + legacy Zigbee) unified in one dashboard or voice assistant via WoT.',
        'Context-Aware Automations: Devices react intelligently to TV programs, presence, or schedules using standardized scene and mode descriptions.',
        'Privacy-Preserving Local Control: Critical automations run locally on edge gateways using WoT Scripting API, reducing cloud dependency.',
      ],
      howItWorks:
        'Gateways or hubs translate native device protocols to WoT TDs. Consumers discover and interact with all devices uniformly via web APIs or local runtimes. Thing Models provide templates for common device classes (light, thermostat, sensor). Security policies and consent flows are expressed in TDs. Advanced users or developers use the WoT Scripting API for custom logic that runs reliably even offline.',
      relevantStandardsIntegrations: ['Matter', 'Zigbee', 'Z-Wave', 'MQTT', 'CoAP', 'WoT Scripting API'],
      resources: [
        {
          title: 'WoT Use Cases and Requirements - Consumer & Smart Home scenarios',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Architecture, Thing Description, and Scripting API',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'If you build smart home products or platforms, adopt or map to WoT TDs. This dramatically expands your addressable market and reduces customer support burden from interoperability issues. For installers/integrators, WoT means faster, more reliable multi-vendor projects.',
      testimonialIds: ['sifis-home'],
    },

    'Environment Monitoring': {
      icon: <Leaf size={32} />,
      description:
        'Air quality, water quality, and ecological monitoring through standardized sensor networks accessible via web protocols',
      useCase:
        'WoT turns environmental sensors into first-class web citizens. Cities, researchers, industries, and citizen scientists can deploy interoperable sensor networks for air/water quality, noise, biodiversity, weather, and climate parameters. Data becomes discoverable, queryable, and integrable into dashboards, early warning systems, digital twins, and policy tools, accelerating environmental action and compliance.',
      woTRole: {
        text: 'TDs describe sensors with precise measurement capabilities, units, calibration info, and location. Semantic annotations (SSN/SOSA, SAREF) enable rich querying and integration. Discovery supports large-scale, distributed networks. Protocol bindings (MQTT, CoAP, HTTP) and edge runtimes enable efficient, low-power deployments. Security and provenance ensure trustworthy public or research data.',
        keyBenefits: [
          'Create open, interoperable environmental data platforms that multiple stakeholders can contribute to and consume',
          'Reduce deployment and integration costs for sensor networks across cities, industrial sites, and research projects',
          'Enable real-time alerts, trend analysis, and integration with climate/digital twin models',
          'Support regulatory compliance (air/water quality directives) and ESG reporting with auditable, standardized data',
          'Empower citizen science and participatory environmental monitoring',
          'Accelerate scientific research and evidence-based environmental policy',
        ],
      },
      realWorldExamples: [
        'Air & Water Quality Networks: Standardized sensor descriptions allow unified platforms to ingest data from municipal, industrial, and citizen sensors for city-wide dashboards and alerts.',
        'Integrated with Agriculture & Smart Cities: Soil, weather, and ecological sensors feed into precision farming and urban environmental management systems.',
        'Cultural & Industrial Sites: Precise monitoring of conditions (temperature, humidity, pollutants) for preservation, compliance, and optimization.',
      ],
      howItWorks:
        'Low-power sensors connect via gateways or directly expose WoT TDs (often using CoAP/MQTT). TDs include semantic metadata (observed property, unit, location, accuracy). Discovery services aggregate and index sensors for easy finding. Data consumers (dashboards, AI models, public portals) query and subscribe uniformly. Provenance and quality metadata build trust in the data.',
      relevantStandardsIntegrations: [
        'SSN/SOSA',
        'SAREF',
        'OGC SensorThings API (mapping)',
        'MQTT',
        'CoAP',
        'W3C Geolocation',
      ],
      resources: [
        {
          title: 'WoT Use Cases and Requirements - Environment Monitoring scenarios across domains',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Thing Description & Discovery',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Standardize your environmental sensor deployments with WoT TDs. This makes data immediately usable by internal systems, partners, regulators, and the public, maximizing the value of your monitoring investments and simplifying compliance.',
    },
  },

  'Technology Trends': {
    'Digital Twins': {
      icon: <Copy size={32} />,
      description:
        'WoT Thing Descriptions provide a standardized way to describe and interact with digital representations of physical assets, enabling interoperable digital twin ecosystems',
      useCase:
        'WoT is the ideal foundation for scalable, interoperable digital twins. By providing standardized, machine-readable descriptions of physical assets (their capabilities, data, and relationships), WoT allows digital twins to be composed, queried, and synchronized across vendors, domains, and lifecycle stages, from factory floor twins to city-scale or product twins, without custom integration for every new asset type.',
      woTRole: {
        text: "Every physical asset gets a corresponding WoT TD that serves as its 'digital shadow' or interface contract. TDs link to 3D models, simulation parameters, historical data, and semantic models (Brick, BOT, SSN). Discovery and composition mechanisms allow building hierarchical or federated twins. Real-time synchronization uses WoT eventing and protocol bindings. Security ensures controlled access to twin data and control functions.",
        keyBenefits: [
          'Accelerate digital twin programs by reusing standardized asset descriptions instead of building custom connectors',
          'Enable composable, multi-vendor twins (factory + building + grid) for system-level optimization and what-if scenarios',
          'Reduce data integration effort for simulation, predictive analytics, and AI training on twin data',
          'Support lifecycle management: design → commissioning → operation → decommissioning with persistent, queryable asset models',
          'Improve collaboration between OEMs, operators, and service providers through shared, standardized interfaces',
          'Lower total cost of ownership for enterprise digital twin platforms',
        ],
      },
      realWorldExamples: [
        'Factory Digital Twins: Production line assets described with TDs + Brick ontology; enable simulation, predictive maintenance, and optimization apps that work across equipment brands.',
        'Building Digital Twins: HVAC, lighting, and structural elements linked via BOT + WoT TDs for energy modeling, fault detection, and space utilization twins.',
        'Cross-Domain Twins: Integrate manufacturing, energy, and building twins for holistic sustainability and resilience analysis.',
      ],
      howItWorks:
        'Physical assets are described with rich TDs that include not only runtime interfaces but also links to static models (CAD/BIM, ontologies). Digital twin platforms consume these TDs to auto-generate or synchronize virtual representations. Changes in the physical world (via events or polling) update the twin; commands flow back through the same standardized interface. Semantic graphs enable powerful querying and reasoning over the twin ecosystem.',
      relevantStandardsIntegrations: [
        'Brick Schema',
        'BOT',
        'SSN/SOSA',
        'IFC',
        'WoT TD + Discovery',
        'MQTT/WebSockets for synchronization',
      ],
      resources: [
        {
          title:
            'An Open-source Software Stack for IoT Virtualization and Convergence with Edge Computing Technologies',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/28/2025-07-WoTCG-Meetup28-VO-WoT.pdf',
          video_url: 'https://youtu.be/EkeoQLWIhlI',
          note: '17 July 2025: Covers IoT virtualization approaches highly relevant to building and maintaining digital twins at scale with edge convergence.',
        },
        {
          title: 'WoT Use Cases and Requirements - Mentions of Digital Twins in multiple domains',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Architecture 1.1 & Thing Description',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: "Make WoT TDs the single source of truth for asset descriptions in your digital twin strategy. This dramatically reduces the 'integration tax' and enables you to compose twins across your ecosystem faster than competitors using proprietary approaches.",
      testimonialIds: ['hitachi'],
    },

    'EU Cyber Resiliency Act': {
      icon: <ShieldCheck size={32} />,
      description:
        "WoT's machine-readable security metadata and standardized vulnerability reporting align with the CRA's requirements for transparent, secure-by-design connected products",
      useCase:
        'The EU Cyber Resilience Act (CRA) mandates that connected products be secure by design, with transparent security properties, vulnerability handling, and documentation. WoT directly supports CRA compliance by embedding rich, machine-readable security descriptions, access control policies, and vulnerability metadata into every Thing Description, making security auditable, automatable, and verifiable across the supply chain.',
      woTRole: {
        text: "WoT Security Vocabulary in TDs declares supported security schemes (OAuth2, API keys, certificates, etc.), required policies, and encryption. TDs can reference or embed vulnerability information and SBOM-like data. Zero-trust patterns are supported via fine-grained, explicit access policies and authentication. Discovery and onboarding mechanisms include security checks. This makes CRA-required transparency and 'secure by design' claims machine-verifiable.",
        keyBenefits: [
          'Significantly reduce CRA compliance effort and cost by using standardized, reusable security descriptions instead of custom documentation per product',
          'Enable automated security assessment, certification support, and supply-chain transparency',
          "Build customer trust with verifiable 'secure by design' claims backed by machine-readable evidence",
          'Support continuous compliance monitoring and rapid vulnerability response across deployed fleets',
          "Align with 'secure by design' best practices and zero-trust architecture principles",
          'Future-proof products for CRA, NIS2, and similar global regulations',
        ],
      },
      realWorldExamples: [
        'Zero-Trust IoT Oracles: WoT enables trusted, verifiable data feeds from devices to blockchain or enterprise systems with explicit security policies and provenance.',
        'Industrial & Building Devices: TDs declare exact security capabilities and policies for PLCs, HVAC controllers, medical devices, etc., satisfying CRA documentation requirements.',
        'Device Onboarding: Secure, authenticated onboarding flows using WoT security metadata reduce attack surface during deployment.',
      ],
      howItWorks:
        "When creating a TD, security schemes and policies are declared explicitly (e.g., 'this property requires OAuth2 with specific scopes'). Vulnerability metadata or links to SBOM/advisories can be included. Consumers and regulators can automatically inspect TDs to verify compliance posture. WoT runtimes enforce declared policies. Updates to security metadata propagate via discovery mechanisms.",
      relevantStandardsIntegrations: [
        'WoT Security Vocabulary',
        'OAuth 2.0 / OpenID Connect',
        'X.509 / mTLS',
        'SBOM standards',
        'Zero Trust principles',
      ],
      resources: [
        {
          title: 'From WoT to Chain: Enabling Zero-Trust Oracles for Blockchain IoT Applications',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/32/2025-12-WoTCG-Meetup32-Zonia-Ivan.pdf',
          video_url: 'https://youtu.be/-ZJ3A0txXD8',
          note: "15 December 2025: Explores WoT's role in enabling zero-trust, secure data oracles and verifiable IoT interactions, directly relevant to CRA compliance and trustworthy connected products.",
        },
        {
          title: 'WoT Security Guidelines & Vocabulary',
          url: 'https://w3c.github.io/wot-security/',
        },
        {
          title: 'WoT Thing Description Security Metadata',
          url: 'https://www.w3.org/TR/wot-thing-description/#security',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Adopt WoT TDs as the vehicle for declaring and verifying security properties of your connected products. This turns CRA compliance from a documentation burden into a competitive advantage and enables automated security tooling across your product lifecycle.',
      testimonialIds: ['ve3', 'sifis-home'],
    },

    'Digital Product Passport': {
      icon: <QrCode size={32} />,
      description:
        'Thing Descriptions can serve as machine-readable product passports, carrying lifecycle data, material composition, and sustainability information for connected products',
      useCase:
        'The EU Digital Product Passport (DPP) initiative requires products to carry standardized digital information about composition, origin, repairability, recyclability, and environmental impact throughout their lifecycle. WoT Thing Descriptions are a natural, machine-readable implementation vehicle for DPP data, especially for connected products, because they already describe what a product is, what it can do, its interfaces, and can be extended with lifecycle and sustainability metadata.',
      woTRole: {
        text: "Core TD properties (title, description, security, affordances) are extended with DPP-relevant sections: material composition, manufacturing data, repair instructions, carbon footprint, end-of-life information, and links to circular economy data. Because TDs are dynamic and discoverable, the passport can evolve with the product (updates, repairs, ownership changes). WoT's semantic foundation allows rich querying and verification of passport data.",
        keyBenefits: [
          'Meet upcoming EU DPP mandates with a standards-based, machine-readable format instead of proprietary or PDF-based solutions',
          'Enable automated compliance checking, circular economy platforms, and repair/refurbishment marketplaces',
          'Provide customers and regulators with trustworthy, queryable product information (origin, materials, repairability, carbon data)',
          'Support new business models: product-as-service, extended producer responsibility, and verified green claims',
          'Reduce administrative burden by maintaining one living digital representation (the TD) instead of multiple static documents',
          'Position your products for green public procurement and ESG-focused markets',
        ],
      },
      realWorldExamples: [
        'Connected Products: A smart HVAC unit or EV charger carries its full DPP data (materials, energy performance, repair guides) directly in its WoT TD, accessible via API or QR code.',
        'Lifecycle Management: As products are repaired or upgraded, updated TDs reflect new components and sustainability metrics, maintaining an accurate passport over time.',
        'Supply Chain Transparency: Downstream manufacturers and recyclers query upstream product TDs for material and disassembly information.',
      ],
      howItWorks:
        "Product TDs are enriched with standardized or domain-specific DPP vocabularies (extensions to TD JSON-LD). Manufacturers publish initial TDs at production. Throughout the lifecycle, authorized parties (repair shops, owners, recyclers) can update relevant sections via secure WoT interfaces. Discovery and search mechanisms make passports findable by regulators, consumers, or circular platforms. Semantic queries verify claims (e.g., 'products with >30% recycled content').",
      relevantStandardsIntegrations: [
        'WoT Thing Description (extensible)',
        'JSON-LD',
        ' emerging DPP vocabularies',
        'SAREF / circular economy ontologies',
        'GS1 or other product identifiers',
      ],
      resources: [
        {
          title: 'WoT Thing Description Specification (extensibility model)',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT Use Cases and Requirements - mentions of lifecycle and sustainability data',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT CG Meetups Repository (search for sustainability or DPP)',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Extend your product TDs with DPP-relevant metadata now. This prepares you for regulation, enables new circular business models, and turns compliance into a source of customer trust and operational efficiency.',
    },

    'Agentic Systems': {
      icon: <Bot size={32} />,
      description:
        "Autonomous AI agents can leverage WoT's standardized affordances and discovery mechanisms to find, understand, and orchestrate IoT devices without human intervention",
      useCase:
        'Agentic AI systems (autonomous agents that plan and act) need reliable, machine-understandable interfaces to the physical world. WoT provides exactly that: standardized, self-describing affordances (properties, actions, events) that agents can discover, reason about, and safely invoke. Combined with semantic models, WoT turns the IoT into a programmable, agent-accessible environment that unlocks sophisticated automation, optimization, and adaptive systems at scale.',
      woTRole: {
        text: "WoT TDs expose clear, typed affordances that agents can parse and reason over (e.g., 'this action sets target temperature with safety bounds'). Discovery lets agents find relevant devices dynamically. Semantic annotations (ontologies) provide the knowledge graph context agents need for planning. Security policies and human-in-the-loop hooks ensure safe operation. WoT runtimes can execute agent-invoked actions reliably.",
        keyBenefits: [
          'Enable truly autonomous operations: agents monitor, decide, and act across complex IoT environments without constant human oversight',
          'Accelerate development of advanced automation, optimization, and digital twin agents',
          'Reduce operational costs and human error in industrial, building, energy, and logistics domains',
          "Support 'human-on-the-loop' models where agents propose actions and humans approve high-impact ones",
          'Create new value through agent-driven services (e.g., autonomous energy optimization, predictive maintenance agents)',
          'Future-proof your IoT investments for the coming wave of agentic AI applications',
        ],
      },
      realWorldExamples: [
        'Cyber-Physical Multi-Agent Systems: WoT enables interoperable agents that coordinate robots, machines, and infrastructure in manufacturing or logistics scenarios.',
        'Autonomous Building Optimization: Agents discover HVAC, lighting, and occupancy sensors; reason about comfort vs energy trade-offs; and execute optimizations safely.',
        'Energy & Grid Agents: Agents monitor DERs, forecast, and autonomously participate in flexibility markets or balance local microgrids within policy bounds.',
      ],
      howItWorks:
        'Agents use WoT Discovery to find relevant Things in their environment or assigned domain. They parse TDs to understand available actions and expected effects (via semantic models). Planning modules generate sequences of WoT actions. Execution happens through standard WoT protocol bindings with full security enforcement. Results and state changes are observed via events or polling. Agents can be hosted in cloud, edge, or on-device runtimes.',
      relevantStandardsIntegrations: [
        'WoT TD + Discovery + Scripting API',
        'Semantic Web / Knowledge Graphs',
        'Agent frameworks (LangChain, AutoGen, etc. via WoT clients)',
      ],
      resources: [
        {
          title: 'Interoperable Cyber-Physical Multi-Agent Systems Through WoT',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/33/2026-04-WoTCG-Meetup33-WoMaT-Binkert.pdf',
          video_url: 'https://youtu.be/xMIHykB_ebg',
          note: '24 April 2026: Explores how WoT enables interoperable, autonomous multi-agent systems in cyber-physical environments, a core capability for agentic IoT applications.',
        },
        {
          title: 'WoT Architecture, Discovery, and Scripting API',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT Use Cases and Requirements - Horizontal use cases relevant to automation',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Expose your key operational assets via WoT TDs today. This is the prerequisite for deploying or benefiting from agentic AI systems that can autonomously optimize your operations, reduce costs, and create new services. Start with read-only monitoring agents and progress to controlled actions.',
      testimonialIds: ['microsoft', 'fujitsu'],
    },

    'Neurosymbolic AI': {
      icon: <Brain size={32} />,
      description:
        "Combining neural networks with WoT's semantic, knowledge-graph-compatible Thing Descriptions enables AI systems that can both reason symbolically about devices and learn from sensor data",
      useCase:
        "Neurosymbolic AI combines the pattern-recognition power of neural networks with the reasoning and explainability of symbolic systems. WoT's Thing Descriptions are inherently symbolic and semantic-web compatible (JSON-LD + ontologies like SSN, Brick, BOT). This makes WoT the perfect bridge: neural models can learn from rich sensor time-series, while symbolic reasoners use TD knowledge graphs to plan, explain, and constrain actions, creating more robust, trustworthy, and data-efficient AI for IoT.",
      woTRole: {
        text: 'TDs provide the symbolic layer: explicit affordances, constraints, safety bounds, and semantic relationships. Neural components learn patterns from the continuous data streams described by those TDs. Hybrid systems use the symbolic TD model for planning and verification while neural models handle perception, forecasting, and anomaly detection. WoT Discovery and querying make the knowledge graph accessible to both neural and symbolic modules.',
        keyBenefits: [
          'Build more reliable and explainable AI systems for safety-critical or regulated IoT domains (manufacturing, healthcare, energy)',
          'Reduce data requirements for training by injecting symbolic domain knowledge from TDs and ontologies',
          'Enable hybrid agents that learn continuously while respecting hard constraints and safety rules',
          'Improve debugging and auditing of AI decisions through symbolic traces linked to device models',
          'Accelerate development of trustworthy AI for industrial and critical infrastructure applications',
          'Position your organization at the forefront of the next wave of enterprise AI (beyond pure deep learning)',
        ],
      },
      realWorldExamples: [
        'Predictive Maintenance: Neural models detect anomalies in vibration/temperature data; symbolic reasoner uses TD + ontology knowledge to diagnose root cause, predict failure mode, and recommend actions within safety bounds.',
        'Energy Optimization Agents: Neural forecasting of demand/renewables combined with symbolic optimization and constraint satisfaction over building/grid TDs.',
        'Clinical Decision Support: Neural analysis of patient sensor streams + symbolic reasoning over medical device TDs and clinical guidelines.',
      ],
      howItWorks:
        'Sensor data streams (described in TDs) feed neural models for perception/forecasting. The symbolic layer (TD knowledge graph + ontologies) provides context, constraints, and action models. Neurosymbolic planners generate candidate action sequences that are verified against TD safety metadata before execution. Learning can update neural weights while symbolic models evolve more slowly via ontology/TD updates. WoT provides the uniform interface layer between the hybrid AI and the physical world.',
      relevantStandardsIntegrations: [
        'WoT TD (JSON-LD)',
        'SSN/SOSA',
        'Brick',
        'BOT',
        'Semantic Web standards',
        'Neuro-symbolic frameworks',
      ],
      resources: [
        {
          title: 'WoT Thing Description & Semantic Annotations',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT Use Cases and Requirements - Semantic aspects across domains',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Invest in semantic modeling of your key assets using WoT TDs and domain ontologies. This creates the symbolic foundation needed for neurosymbolic AI systems that are more robust, explainable, and efficient than pure neural approaches, especially in industrial and regulated environments.',
    },

    'Edge Computing': {
      icon: <Network size={32} />,
      description:
        'WoT enables discovery and interaction with computing resources at the network edge, bringing standardized interfaces to latency-sensitive and bandwidth-constrained IoT deployments',
      useCase:
        'Edge computing is essential for low-latency, resilient, and bandwidth-efficient IoT. WoT brings standardization and interoperability to the edge: devices, gateways, and edge servers expose uniform interfaces via TDs. This allows applications and agents to discover edge capabilities dynamically, deploy logic close to data sources, and maintain operation even when cloud connectivity is intermittent, which is critical for manufacturing, autonomous systems, and remote sites.',
      woTRole: {
        text: 'WoT runtimes (including lightweight implementations) run on edge gateways and devices, exposing local Things and enabling local Scripting API execution. Discovery mechanisms work across edge networks (subnet spanning, mDNS, etc.). TDs describe not only sensors/actuators but also edge computing resources and their capabilities. Protocol bindings optimized for edge (MQTT, CoAP, WebSockets) reduce latency. Security is enforced locally.',
        keyBenefits: [
          'Achieve sub-second or millisecond latency for control loops that cloud round-trips cannot support',
          'Reduce cloud bandwidth and egress costs dramatically by processing and filtering data at the edge',
          'Improve resilience: critical automation continues even during cloud outages or poor connectivity',
          'Enable privacy-preserving local processing of sensitive data (e.g., video, health, industrial)',
          'Simplify deployment of AI/ML inference at the edge with standardized interfaces',
          'Support scalable, distributed IoT architectures for factories, cities, and remote operations',
        ],
      },
      realWorldExamples: [
        'Factory Edge: Local WoT gateways host TDs and run control/optimization logic for production lines with <10ms latency requirements.',
        'Autonomous Systems & Robotics: Edge WoT runtimes enable real-time perception-to-action loops while still exposing standardized interfaces to fleet management or digital twins.',
        'Remote Sites (Agriculture, Energy): Intermittent connectivity is handled gracefully; local agents make decisions using cached TDs and resume sync when possible.',
      ],
      howItWorks:
        'Edge gateways run WoT runtime software that hosts Exposed Things for local devices and can execute WoT Scripting API scripts or host lightweight agent runtimes. Discovery protocols allow applications to find edge-hosted Things and edge computing services. Data pipelines filter/aggregate at the edge before selective forwarding to cloud. TDs describe both the physical devices and the edge capabilities (compute, storage, models available). Security policies are enforced at the edge.',
      relevantStandardsIntegrations: [
        'WoT Scripting API',
        'MQTT / CoAP (edge-optimized)',
        'Edge computing frameworks',
        '5G / private networks',
      ],
      resources: [
        {
          title:
            'An Open-source Software Stack for IoT Virtualization and Convergence with Edge Computing Technologies',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/28/2025-07-WoTCG-Meetup28-VO-WoT.pdf',
          video_url: 'https://youtu.be/EkeoQLWIhlI',
          note: '17 July 2025: Presents open-source approaches to IoT virtualization and edge convergence using WoT principles, with strong relevance for scalable edge deployments.',
        },
        {
          title: 'WoT Architecture 1.1 & Scripting API',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT Binding Templates (edge-friendly protocols)',
          url: 'https://w3c.github.io/wot-binding-templates/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Deploy WoT-enabled edge gateways as the standard interface layer in your IoT architecture. This gives you low-latency local intelligence today while creating a uniform platform for future edge AI and agent deployments without fragmenting your tech stack.',
    },

    'Zero Trust Architecture': {
      icon: <Lock size={32} />,
      description:
        "WoT's fine-grained security descriptions support zero-trust models by making device authentication, authorization, and access policies explicit and machine-verifiable",
      useCase:
        "Zero Trust ('never trust, always verify') is the modern security paradigm for distributed systems. WoT natively supports Zero Trust principles through explicit, machine-readable security metadata in every TD: authentication requirements, authorization policies, encryption mandates, and audit hooks. This makes it possible to implement continuous verification, least-privilege access, and micro-segmentation for IoT devices and the applications that interact with them.",
      woTRole: {
        text: 'Every WoT interaction is governed by the security scheme and policy declared in the TD. No implicit trust based on network location. Fine-grained scopes and dynamic policy evaluation (via OAuth2, certificates, or custom schemes) enforce least privilege. WoT Discovery can include trust verification. Provenance and logging are supported. Integration with identity providers and policy engines enables enterprise Zero Trust architectures that encompass OT/IoT.',
        keyBenefits: [
          'Apply Zero Trust principles consistently to OT, IoT, and IT assets instead of creating security islands',
          'Reduce attack surface through explicit, auditable, least-privilege access policies for every device capability',
          'Enable continuous authentication and authorization even for long-lived device connections',
          'Support compliance with CRA, NIS2, and Zero Trust mandates from regulators and large customers',
          'Simplify auditing and incident response with machine-readable security context for every interaction',
          'Build defensible, future-proof IoT deployments that align with modern enterprise security strategies',
        ],
      },
      realWorldExamples: [
        'Zero-Trust IoT Oracles for Blockchain: Devices prove their identity and data integrity via WoT security mechanisms before feeding trusted data into distributed ledgers.',
        'Industrial OT Access: Engineers or applications must authenticate and receive just-in-time, scoped access to specific PLC functions or sensor data streams as declared in TDs.',
        'Cross-Organizational IoT: Partners or service providers get verified, limited access to specific building or factory assets without broad network trust.',
      ],
      howItWorks:
        "TD authors declare precise security requirements (e.g., 'this action requires mTLS + specific OAuth2 scope + geo-fence'). WoT runtimes and clients enforce these at every interaction. Identity and access management systems integrate via standard schemes. Policy engines can evaluate dynamic context (user, device posture, time, location). All access is logged with TD context for audit. No device or application is trusted by default based on network position.",
      relevantStandardsIntegrations: [
        'WoT Security Vocabulary',
        'OAuth 2.0 / mTLS',
        'Zero Trust Network Access (ZTNA) frameworks',
        'SBOM + vulnerability management',
      ],
      resources: [
        {
          title: 'From WoT to Chain: Enabling Zero-Trust Oracles for Blockchain IoT Applications',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/32/2025-12-WoTCG-Meetup32-Zonia-Ivan.pdf',
          video_url: 'https://youtu.be/-ZJ3A0txXD8',
          note: '15 December 2025: Demonstrates practical Zero Trust patterns with WoT for trustworthy IoT data and interactions, directly applicable to enterprise Zero Trust strategies.',
        },
        {
          title: 'WoT Security Guidelines',
          url: 'https://w3c.github.io/wot-security/',
        },
        {
          title: 'WoT Thing Description - Security Vocabulary',
          url: 'https://www.w3.org/TR/wot-thing-description/#sec-security-vocabulary-definition',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Make WoT TDs the authoritative source of security policy for your IoT/OT assets. This allows you to implement consistent Zero Trust controls across heterogeneous devices and integrate them cleanly into your enterprise IAM and policy infrastructure, turning security from a blocker into an enabler of digital transformation.',
      testimonialIds: ['sifis-home', 've3'],
    },

    'Semantic Interoperability': {
      icon: <Workflow size={32} />,
      description:
        "WoT's use of linked data and semantic annotations enables cross-domain data integration, making IoT data FAIR (Findable, Accessible, Interoperable, Reusable) by design",
      useCase:
        'Semantic interoperability is the ability of systems to exchange and meaningfully use data across domains and vendors. WoT achieves this through Thing Descriptions that are JSON-LD documents rich with semantic annotations. Combined with standard ontologies (SSN/SOSA for sensors, Brick/BOT for buildings, SAREF for domains), WoT turns raw sensor readings into contextualized, queryable knowledge that AI, analytics, and applications can understand and act upon without custom mapping code.',
      woTRole: {
        text: "Every TD is a semantic description: properties and events are linked to concepts in shared ontologies. This allows SPARQL queries, reasoning engines, and AI systems to understand 'what this temperature value means in the context of this zone and this HVAC system'. Discovery services index semantic metadata. Cross-domain integration becomes a query problem rather than an integration project. Data becomes FAIR by construction.",
        keyBenefits: [
          'Eliminate expensive, brittle custom data mapping and integration projects between domains and vendors',
          'Enable powerful cross-domain analytics, digital twins, and AI that understand context and relationships',
          'Make IoT data discoverable and usable by internal and external systems without prior knowledge of proprietary schemas',
          'Accelerate development of new applications and AI agents that can reason over your entire IoT estate',
          'Support regulatory and ESG reporting with consistent, semantically rich, auditable data',
          'Create compounding value as more systems adopt semantic standards through the network effect of interoperable data',
        ],
      },
      realWorldExamples: [
        'Building + Energy Integration: A single query finds all temperature sensors in zones served by heat pumps from any vendor, using Brick + WoT semantics, for portfolio-wide optimization.',
        'Manufacturing + Sustainability: Production data linked to energy consumption and material flows via shared ontologies enables automated carbon accounting and optimization.',
        'Smart City Dashboards: Environmental, traffic, and building data integrated semantically for holistic urban intelligence and decision support.',
      ],
      howItWorks:
        'TD authors annotate affordances with terms from shared ontologies (e.g., sosa:observedProperty, brick:Temperature_Sensor). JSON-LD contexts make the semantics explicit and machine-processable. Discovery services expose semantic search. Applications and AI use SPARQL, GraphQL, or semantic reasoners over the resulting knowledge graph. No custom ETL or schema mapping is needed when new device types or domains are added, provided they follow the same ontologies.',
      relevantStandardsIntegrations: [
        'JSON-LD',
        'SSN/SOSA',
        'Brick Schema',
        'BOT',
        'SAREF (domain-specific)',
        'WoT TD',
        'SPARQL / Semantic Web stack',
      ],
      resources: [
        {
          title: 'Managing Device Descriptions with the Thing Model Catalog',
          url: 'https://github.com/w3c-cg/wot-cg/blob/main/Meetups/31/2025_12_04-WoTCG-Meetup31-TMC-Siemens.pdf',
          video_url: 'https://youtu.be/CuZo1NGshiI',
          note: '04 December 2025: Covers management of semantic device descriptions at scale, a foundation for enterprise semantic interoperability strategies.',
        },
        {
          title: 'WoT Thing Description (JSON-LD & semantic annotations)',
          url: 'https://www.w3.org/TR/wot-thing-description/',
        },
        {
          title: 'WoT Use Cases and Requirements - Semantic Interoperability aspects',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT CG Meetups Repository',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Adopt WoT TDs + domain ontologies (start with Brick for buildings, SSN for sensors) as your standard for describing assets. This is the highest-leverage investment you can make for long-term data interoperability, AI readiness, and reduced integration costs across your organization and ecosystem.',
      testimonialIds: ['intel', 'oracle', 've3'],
    },

    'Sustainability & Green IoT': {
      icon: <Sun size={32} />,
      description:
        'Standardized device descriptions enable energy-aware orchestration, carbon footprint tracking, and optimized resource usage across connected infrastructure',
      useCase:
        'Sustainability is now a core business and regulatory driver. WoT provides the data foundation for Green IoT: standardized, interoperable descriptions of energy-consuming and energy-producing devices make it possible to measure, optimize, report, and automate sustainability performance at scale. From carbon-aware scheduling to circular economy tracking, WoT turns sustainability from a reporting burden into an operational advantage.',
      woTRole: {
        text: 'TDs describe energy-relevant properties (power consumption, efficiency modes, renewable source status) and link them to semantic models for carbon accounting. Discovery and orchestration allow energy-aware agents or rules to shift loads, optimize setpoints, or select low-carbon resources dynamically. Lifecycle metadata in extended TDs supports circularity (repairability, recyclability, material passports). Provenance ensures trustworthy ESG data.',
        keyBenefits: [
          'Achieve measurable, auditable reductions in energy consumption and carbon emissions through automated, data-driven optimization',
          'Simplify and improve accuracy of Scope 1/2/3 emissions reporting and regulatory compliance (CSRD, EU Taxonomy, etc.)',
          'Enable new revenue or cost-saving opportunities: flexibility markets, carbon credits, green premiums',
          'Support circular economy initiatives with machine-readable product and material data',
          'Attract ESG-focused investors, customers, and talent by demonstrating credible, technology-enabled sustainability leadership',
          'Future-proof operations against rising energy costs and tightening environmental regulations',
        ],
      },
      realWorldExamples: [
        'Energy-Aware Manufacturing: Production schedules dynamically adjusted based on real-time renewable availability and grid carbon intensity, using WoT-described assets and smart grid data.',
        'Green Buildings Portfolio: Unified optimization of HVAC, lighting, and on-site generation/storage across sites using semantic energy models and WoT orchestration.',
        'Carbon-Aware Logistics & Agriculture: Route or irrigation decisions informed by real-time emissions factors and resource impact, enabled by standardized sensor and asset descriptions.',
      ],
      howItWorks:
        'Energy and sustainability metadata is added to TDs (power profiles, efficiency classes, material composition links). Agents or optimization engines discover relevant devices and their energy characteristics. Real-time grid carbon intensity or renewable forecasts are integrated via additional WoT Things. Optimization algorithms (or neurosymbolic agents) generate schedules or setpoints that minimize cost + carbon subject to constraints. Results and provenance are logged for reporting. Extended TDs carry DPP/circular data for end-of-life decisions.',
      relevantStandardsIntegrations: [
        'WoT TD (energy & sustainability extensions)',
        'SAREF4ENER',
        'SSN/SOSA',
        'Brick (energy aspects)',
        'Emerging carbon accounting & DPP vocabularies',
        'Grid carbon intensity APIs',
      ],
      resources: [
        {
          title:
            'WoT Use Cases and Requirements - Energy efficiency, sustainability, and green scenarios across domains',
          url: 'https://w3c.github.io/wot-usecases/',
        },
        {
          title: 'WoT Architecture & Thing Description (extensibility for sustainability metadata)',
          url: 'https://www.w3.org/TR/wot-architecture/',
        },
        {
          title: 'WoT CG Meetups Repository (search for energy, sustainability, or green)',
          url: 'https://github.com/w3c-cg/wot-cg/tree/main/Meetups',
        },
      ],
      cta: 'Add energy and sustainability metadata to your WoT TDs now. This enables immediate optimization opportunities, credible ESG reporting, and positions you to participate in emerging flexibility and circular economy markets. Sustainability becomes a source of operational excellence and competitive differentiation rather than just compliance cost.',
      testimonialIds: ['siemens', 'siemens-microsoft'],
    },
  },
};
