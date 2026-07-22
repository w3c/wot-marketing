export type TestimonialId =
  | 'fujitsu'
  | 'hitachi'
  | 'intel'
  | 'microsoft'
  | 'oracle'
  | 'siemens'
  | 've3'
  | 'siemens-microsoft'
  | 'opc-foundation'
  | 'sifis-home';

export type TestimonialCategory = 'member' | 'liaison';

export interface Testimonial {
  id: TestimonialId;
  name: string;
  category: TestimonialCategory;
  content?: string;
  author?: string;
  isJoint?: boolean;
  quotes?: { quote: string; author: string }[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'fujitsu',
    name: 'Fujitsu',
    category: 'member',
    content:
      '"We are pleased to endorse the updated Web of Things (WoT) standard. This update has made the specifications more practical and applicable, and we committed to continuing our support. As an integrator, we aim to build out digital transformation (DX) solutions based on the global standards, driven by 5G and IoT technologies. Fujitsu believes that this approach will enable us to seamlessly connect to AI-powered solutions, thereby enhancing our ability to deliver innovative and efficient services to our clients."',
    author:
      'Bun Kimura, Head of Strategic Planning Department, Product Planning Div., Mobile System Business Unit, Fujitsu Limited',
  },
  {
    id: 'hitachi',
    name: 'Hitachi',
    category: 'member',
    content:
      '"To feedback effective solutions from digital twins to real-world systems, it is essential that we are able to quickly find devices in the physical environment and understand their roles and the context of the data which they provide. The updated recommendations to which we contributed in part, include enhanced capabilities such as Thing Discovery that will facilitate this link between the physical and cyberspace. We\'re enthusiastic that these leaps in cyber-physical systems will stimulate progress across diverse sectors and contribute to the realization of a better society."',
    author: 'Itaru Nishizawa, Vice President and Executive Officer, Chief Technology Officer, Hitachi, Ltd.',
  },
  {
    id: 'intel',
    name: 'Intel',
    category: 'member',
    content:
      '"Intel congratulates the WoT WG for the updated WoT standard. This update solidifies support for the descriptive approach to IoT interoperability. IoT fragmentation remains a major barrier to greater IoT adoption. The WoT standard addresses a key challenge in the integration of IoT devices and services from different IoT ecosystems by providing a common format for describing data and interaction. This descriptive approach strongly differentiates it from other prescriptive approaches to IoT interoperability, and is designed to work with and enhance other standards, not compete with them."',
    author: 'Eric Siow, Director, Web Standards and Ecosystem Strategies, Intel Corporation',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'member',
    content:
      '"We built a reference implementation that uses the new Web of Things (WoT) release with our Azure OpenAI service to demonstrate how to automatically onboard industrial assets and were pleased with how easy it was to generate WoT Thing Descriptions automatically. In addition, the open-source WoT tools available from the Eclipse Foundation made automatic validation of the generated Thing Description an easy value add."',
    author:
      'Erich Barnstedt, Chief Architect Standards, Consortia and Industrial IoT, Azure Edge + Platform Team, Microsoft Corporation',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'member',
    content:
      '"The Web of Things set of specifications, including the updated version 1.1, serves as a unifying framework to address complex IoT use cases requiring interoperability across diverse ecosystems at massive scale. Oracle is pleased with the progression of this set of specifications to the Recommendation status and is proud to have been an active contributor, leader, and co-editor of this effort. We believe that this will benefit customers and users by enabling much-needed interoperability between different vendor solutions for IoT."',
    author: 'Jai Suri, Vice President, IoT and Blockchain Applications Development, Oracle',
  },
  {
    id: 'siemens',
    name: 'Siemens',
    category: 'member',
    content:
      '"Addressing today\'s market challenges, such as energy optimization, requires technologies that facilitate easy heterogeneous system integration and optimization implementation. The Web of Things, which is one of the key technology building blocks, facilitates addressing such challenges by integrating efficient diverse data sources from a variety of device systems. Our in-house solution sayWoT! implements the latest WoT Thing Description 1.1 and is successfully used in various IoT projects by customers. One of the highlights is the usage of sayWoT! in the Wunsiedel Energy Park, Germany, to enable smart control to ensure green hydrogen production."',
    author: 'Thomas Kiessling, Chief Technology Officer at Smart Infrastructure, Siemens AG',
  },
  {
    id: 've3',
    name: 'VE3 (formerly "Banksly")',
    category: 'member',
    content:
      '"The W3C\'s enhanced Web of Things (WoT) standards, including WoT Architecture 1.1, WoT Thing Description 1.1, and WoT Discovery, represent a significant leap in addressing the challenges of IoT interoperability and system fragmentation. The harmonization of IoT devices and services brought about by these standards resonates with our pursuit of seamless and integrated digital solutions. We particularly appreciate the advancements in Thing Models and Discovery, which align with our focus on scalable, modular, and privacy-conscious digital infrastructure. Through the implementation of these WoT standards, we envision an accelerated progression in developing intelligent, interconnected systems that are not only efficient but also accessible and secure. This aligns perfectly with our mission at VE3 to drive technological advancements that are both innovative and sustainable."',
    author: 'Manish Garg, Director, VE3',
  },
  {
    id: 'siemens-microsoft',
    name: 'Siemens & Microsoft Joint Statement',
    category: 'member',
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
    category: 'liaison',
    content:
      '"The OPC Foundation welcomes the new releases of the W3C Web of Things. Current OPC Foundation group activities are working on a solution how WoT Thing Descriptions can be used as a data model mapping service from non-OPC UA asset interfaces to OPC UA systems. This reduces the onboarding effort (e.g. of Modbus-based assets) and enables smooth use of asset data interfaces in the OPC UA address space. We see this as a big win for the manufacturing industry and another important step towards improving the interoperability of heterogeneous asset landscapes."',
    author: 'Stefan Hoppe, President, OPC Foundation',
  },
  {
    id: 'sifis-home',
    name: 'SIFIS-Home Consortium',
    category: 'liaison',
    content:
      '"The SIFIS-Home consortium is looking forward to the new W3C Web of Things standards. The SIFIS-Home project focused on proving that it is possible to have more awareness on the risks and hazards related to the deployment of connected devices in the Home environment. The Thing Description model proved to be the ideal match to deliver the additional information."',
    author: 'Luca Barbato, SIFIS-Home Consortium Member and Andrea Saracino, SIFIS-Home Project Coordinator',
  },
];

/** Resolve the testimonials related to a use-case entry from their ids. */
export function getTestimonials(ids: TestimonialId[]): Testimonial[] {
  return ids.map((id) => TESTIMONIALS.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t));
}
