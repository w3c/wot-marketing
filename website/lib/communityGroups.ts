export interface CommunityGroup {
  id: string;
  title: string;
  description: string[];
  list?: string[];
  afterListDescription?: string[];
  chairs: string;
  chairLabel: string;
  website: string;
}

export const communityGroups: CommunityGroup[] = [
  {
    id: 'wotcg',
    title: 'Web of Things Community Group',
    description: [
      'The aim of the Web of Things Community Group (CG) is to accelerate the adoption of Web technologies as a basis for enabling services for the combination of the Internet of Things with rich descriptions of things and the context in which they are used.',
    ],
    afterListDescription: ['This group will not publish any specifications.'],
    chairs: 'Ege Korkan, Cristiano Aguzzi',
    chairLabel: 'Chairs',
    website: 'https://www.w3.org/community/wot/',
  },
  {
    id: 'wotjpcg',
    title: 'Web of Things Japanese Community Group',
    description: ['The mission of the Web of Things Japanese Community Group includes the following:'],
    list: [
      'to facilitate focused discussion in Japanese on the Web of Things specifications and related specifications;',
      'to gather comments and questions in Japanese about those specifications;',
      'to collect information about specific use cases in Japanese for technologies defined in those specifications; and',
      'to report the results of its activities as a group back to the Web of Things Working Group/Interest Group, the W3C membership, and the Web community.',
    ],
    afterListDescription: ['This group will not publish any specifications.'],
    chairs: 'Tomoaki Mizushima (IRI), Kunihiko Toumura (Hitachi)',
    chairLabel: 'Chairs',
    website: 'https://www.w3.org/community/wot-jp/',
  },
  {
    id: 'webthingcg',
    title: 'Web Thing Protocol Community Group',
    description: [
      'The mission of this group is to define a common protocol for communicating with connected devices over the web, to enable ad-hoc interoperability on the Web of Things.',
    ],
    afterListDescription: ['Deliverables of the group may include use cases, requirements and specifications.'],
    chairs: 'Ben Francis',
    chairLabel: 'Chair',
    website: 'https://www.w3.org/community/web-thing-protocol/',
  },
  {
    id: 'webagents',
    title: 'Autonomous Agents on the Web Community Group',
    description: [
      "This community group focuses on the design of Web-based Multi-Agent Systems (MAS) for deploying world-wide hybrid communities of people and artificial agents. It aims to develop a new class of 'Hypermedia MAS' (hMAS) aligned with Web Architecture, utilizing Linked Data and Semantic Web standards to enable uniform interaction among heterogeneous entities like people, devices, digital services, and knowledge repositories.",
    ],
    chairs: 'Andrei Ciortea, Rem Collier, Antoine Zimmermann, Ege Korkan',
    chairLabel: 'Chairs',
    website: 'https://www.w3.org/community/webagents/',
  },
];
