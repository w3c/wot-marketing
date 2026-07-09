import {
  Globe,
  FileText,
  Workflow,
  QrCode,
  ShieldCheck,
  Braces,
  Brain,
  Leaf,
  Cpu,
  Radio,
  Building,
  Home,
  Boxes,
  FileCode,
  Tractor,
  Landmark,
  Network,
  Lock,
  Activity,
} from 'lucide-react';
import { Reference } from './referencesData';

export type Standard =
  | 'jsonld'
  | 'rdf'
  | 'owl'
  | 'saref'
  | 'opcua'
  | 'modbus'
  | 'bacnet'
  | 'knx'
  | 'matter'
  | 'zwave'
  | 'mqtt'
  | 'coap'
  | 'lorawan'
  | 'gs1'
  | 'fhir'
  | 'isobus'
  | 'ngsild'
  | 'oauth2'
  | 'cra';

/**
 * Catalogue of standards relevant to the Web of Things, keyed by a short id.
 * Each domain/trend entry references the ids of the standards relevant to it,
 * and every entry links to the standard's official website.
 */
export const STANDARDS: Record<Standard, Reference> = {
  jsonld: {
    title: 'JSON-LD 1.1',
    description:
      'The W3C linked-data serialization that underpins Thing Descriptions, giving IoT metadata shared semantic meaning.',
    url: 'https://www.w3.org/TR/json-ld11/',
    urlLabel: 'w3.org/TR/json-ld11',
    icon: <Braces size={24} />,
  },
  rdf: {
    title: 'RDF 1.1',
    description:
      'The W3C framework for representing linked data as graphs, the semantic foundation for describing Things and their relationships.',
    url: 'https://www.w3.org/TR/rdf11-concepts/',
    urlLabel: 'w3.org/TR/rdf11-concepts',
    icon: <Network size={24} />,
  },
  owl: {
    title: 'OWL 2',
    description:
      'The W3C Web Ontology Language for modelling rich domain knowledge and enabling reasoning over IoT data.',
    url: 'https://www.w3.org/TR/owl2-overview/',
    urlLabel: 'w3.org/TR/owl2-overview',
    icon: <Brain size={24} />,
  },
  saref: {
    title: 'SAREF',
    description:
      'The ETSI Smart Applications REFerence ontology providing shared semantics for smart devices across energy, buildings and more.',
    url: 'https://saref.etsi.org/',
    urlLabel: 'saref.etsi.org',
    icon: <Leaf size={24} />,
  },
  opcua: {
    title: 'OPC UA',
    description:
      'The industrial interoperability standard from the OPC Foundation, widely bridged to WoT in manufacturing and energy scenarios.',
    url: 'https://opcfoundation.org/about/opc-technologies/opc-ua/',
    urlLabel: 'opcfoundation.org',
    icon: <Cpu size={24} />,
  },
  modbus: {
    title: 'Modbus',
    description:
      'The de-facto serial and TCP protocol for industrial devices and meters, commonly exposed through WoT Thing Descriptions.',
    url: 'https://www.modbus.org/',
    urlLabel: 'modbus.org',
    icon: <Radio size={24} />,
  },
  bacnet: {
    title: 'BACnet',
    description:
      'The ASHRAE communication protocol for building automation and control networks, integrable with WoT via binding templates.',
    url: 'http://www.bacnet.org/',
    urlLabel: 'bacnet.org',
    icon: <Building size={24} />,
  },
  knx: {
    title: 'KNX',
    description:
      'The open standard for commercial and residential building control, connecting lighting, HVAC and access systems.',
    url: 'https://www.knx.org/',
    urlLabel: 'knx.org',
    icon: <Home size={24} />,
  },
  matter: {
    title: 'Matter',
    description:
      'The Connectivity Standards Alliance protocol for smart-home interoperability across manufacturers and ecosystems.',
    url: 'https://csa-iot.org/all-solutions/matter/',
    urlLabel: 'csa-iot.org',
    icon: <Boxes size={24} />,
  },
  zwave: {
    title: 'Z-Wave',
    description:
      'The wireless mesh protocol widely used for residential smart-home devices such as locks, sensors and lighting.',
    url: 'https://z-wave.com/',
    urlLabel: 'z-wave.com',
    icon: <Radio size={24} />,
  },
  mqtt: {
    title: 'MQTT',
    description:
      'The lightweight OASIS publish/subscribe messaging protocol for constrained IoT devices, supported as a WoT protocol binding.',
    url: 'https://mqtt.org/',
    urlLabel: 'mqtt.org',
    icon: <FileCode size={24} />,
  },
  coap: {
    title: 'CoAP',
    description:
      'The IETF Constrained Application Protocol (RFC 7252) for RESTful communication with resource-limited edge devices.',
    url: 'https://datatracker.ietf.org/doc/html/rfc7252',
    urlLabel: 'datatracker.ietf.org',
    icon: <Radio size={24} />,
  },
  lorawan: {
    title: 'LoRaWAN',
    description:
      'The LoRa Alliance low-power wide-area networking standard for long-range, battery-efficient IoT sensor deployments.',
    url: 'https://lora-alliance.org/about-lorawan/',
    urlLabel: 'lora-alliance.org',
    icon: <Radio size={24} />,
  },
  gs1: {
    title: 'GS1 Digital Link',
    description:
      'The GS1 standard connecting physical products to web resources via identifiers, a foundation for product passports and traceability.',
    url: 'https://www.gs1.org/standards/gs1-digital-link',
    urlLabel: 'gs1.org',
    icon: <QrCode size={24} />,
  },
  fhir: {
    title: 'HL7 FHIR',
    description:
      'The HL7 standard for exchanging healthcare information electronically, relevant to connected medical and well-being devices.',
    url: 'https://hl7.org/fhir/',
    urlLabel: 'hl7.org/fhir',
    icon: <Activity size={24} />,
  },
  isobus: {
    title: 'ISOBUS (ISO 11783)',
    description:
      'The ISO standard for communication between tractors and agricultural implements, promoted by the AEF for interoperable farming.',
    url: 'https://www.isobus.net/isobus/',
    urlLabel: 'isobus.net',
    icon: <Tractor size={24} />,
  },
  ngsild: {
    title: 'NGSI-LD',
    description:
      'The ETSI context-information standard for smart-city and cross-domain data exchange based on linked-data principles.',
    url: 'https://www.etsi.org/technologies/ngsi-ld',
    urlLabel: 'etsi.org',
    icon: <Landmark size={24} />,
  },
  oauth2: {
    title: 'OAuth 2.0',
    description:
      'The IETF authorization framework used to grant scoped, token-based access to devices and services in zero-trust designs.',
    url: 'https://oauth.net/2/',
    urlLabel: 'oauth.net',
    icon: <Lock size={24} />,
  },
  cra: {
    title: 'EU Cyber Resilience Act',
    description:
      'The European Union regulation defining cybersecurity requirements for products with digital elements across their lifecycle.',
    url: 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act',
    urlLabel: 'digital-strategy.ec.europa.eu',
    icon: <ShieldCheck size={24} />,
  },
};

/** Resolve the standards relevant to a use-case entry from their ids. */
export function getStandards(ids: Standard[]): Reference[] {
  return ids.map((id) => STANDARDS[id]).filter((s): s is Reference => Boolean(s));
}
