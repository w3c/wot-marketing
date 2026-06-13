export interface Task {
  description: string;
  taskList: {
    name: string;
    subTasks: string[];
  }[];
}

export type DeliverableType = 'Normative Deliverable' | 'Informative Deliverable' | 'Deliverable';

export interface TaskForce {
  title: string;
  description: string;
  isActive: boolean;
  people: Record<
    string,
    {
      name: string;
      href?: string;
    }[]
  >;
  deliverables: { type: DeliverableType; name: string; description: string }[];
  tasks?: Task[];
  resources: {
    label: string;
    url: string;
  }[];
}

export const TASK_FORCES: Record<string, TaskForce> = {
  'tf-td': {
    title: 'Thing Description',
    description:
      'The WoT Thing Description task force is responsible for defining the information model for WoT Thing metadata, its interpretation, and its common representation. In addition, the task force covers WoT Binding Templates topics to define the mapping from the abstract interaction model used in the Thing Description metadata to concrete IoT protocols and payload encodings.',
    isActive: true,
    deliverables: [
      {
        type: 'Normative Deliverable',
        name: 'WoT Thing Description 1.1',
        description:
          'This document describes a superset of the features defined for Thing Description 1.0. In general, this document describes the formal model of a Thing and its common representation in JSON-LD 1.1. It introduces a simple interaction model with Properties, Actions, and Events to describe the capabilities of a Thing, including its data model, communication protocols used, security mechanisms, and other semantic metadata. A WoT Thing Description defines a specific instance of a Thing. The WoT Thing Description 1.1 also formally introduces the Thing Model concept that describes sets of Things. It has fewer restrictions than the Thing Description and does not contain any instance-specific information.',
      },
      {
        type: 'Informative Deliverable',
        name: 'WoT Binding Templates',
        description:
          'This document describes a set of vocabulary extensions to the WoT Thing Description that make up the Binding Templates. Binding Templates enable a Thing Description to be adapted to specific protocol or data payload usages across different standards. This is done through additional descriptive vocabulary that is used in the Thing Description.',
      },
    ],
    people: {
      'TF-Leads': [
        { name: 'Ege Korkan (Siemens AG)', href: 'mailto:ege.korkan@siemens.com' },
        { name: 'Michael Koster (Invited Expert)', href: 'mailto:michaeljohnkoster@gmail.com' },
      ],
      'WoT Thing Description Co-Editors': [
        { name: 'Sebastian Kaebisch (Siemens AG)' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
        { name: 'Ege Korkan (Siemens AG)', href: 'mailto:ege.korkan@siemens.com' },
      ],
      'WoT Binding Templates': [
        { name: 'Michael Koster (Invited Expert)', href: 'mailto:michaeljohnkoster@gmail.com' },
        { name: 'Ege Korkan (Siemens AG)', href: 'mailto:ege.korkan@siemens.com' },
      ],
    },
    resources: [
      {
        label: 'WoT Thing Description TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/WG_WoT_Thing_Description_WebConf',
      },
      { label: 'WoT Thing Description GitHub repository', url: 'https://github.com/w3c/wot-thing-description/' },
      { label: 'Web of Things (WoT) Thing Description 1.1', url: 'https://www.w3.org/TR/wot-thing-description11/' },
      { label: 'WoT Binding Templates GitHub repository', url: 'https://github.com/w3c/wot-binding-templates/' },
      { label: 'WoT Binding Templates Note', url: 'https://www.w3.org/TR/wot-binding-templates/' },
    ],
  },
  'tf-marketing': {
    title: 'Marketing',
    description:
      'The WoT Marketing task force is responsible for reaching out and collaborating with the community to increase the adoption of the WoT. The Marketing Task Force works on promoting the W3C Web of Things in different ways such as Web presence, Social Media presence, and more.',
    isActive: true,
    deliverables: [
      {
        type: 'Deliverable',
        name: 'WoT Web Page',
        description:
          //TODO: Needs a review
          'The WoT Web Page is the primary online hub for the W3C Web of Things. It is designed to reach out to and support the wide Web of Things community by providing a central location for resources, updates, and educational materials. The web page establishes the brand identity of WoT and serves as a key tool for promoting the adoption of the standard.',
      },
    ],
    people: {
      'TF-Leads': [{ name: 'Ege Korkan (Siemens AG)', href: 'mailto:ege.korkan@siemens.com' }],
    },
    tasks: [
      {
        description:
          'The Marketing Task Force aims to reach out and support the wide Web of Things community. Our charter contains the goals for a certain period of time. The overall tasks of the task force are:',
        taskList: [
          { name: 'Maintaining the web page', subTasks: [] },
          {
            name: 'Creating visual materials such as:',
            subTasks: ['Powerpoint templates', 'Figures', 'Animation', 'Videos'],
          },
          {
            name: 'Establishing the representation of WoT like a brand identity at:',
            subTasks: [
              'WoT Repositories',
              'WoT Web Page',
              'WoT Wiki Pages',
              'WoT Twitter account and other possible social channels',
            ],
          },
          {
            name: 'Reaching out to the wide community through:',
            subTasks: [
              'Social Media',
              'Web Pages',
              'Blog Posts',
              'Promotional Text and Videos',
              'Explainer Text and Videos',
              'Tutorial Text and Videos',
            ],
          },
          { name: 'Assuring consistent style for all the points above', subTasks: [] },
        ],
      },
    ],
    resources: [
      {
        label: 'WoT Marketing TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/Marketing_WebConf',
      },
      { label: 'WoT Marketing GitHub repository', url: 'https://github.com/w3c/wot-marketing' },
    ],
  },

  'tf-plugfest': {
    title: 'Plugfest/Testing',
    description:
      // TODO: needs a review
      'The WoT Plugfest/Testing task force is responsible for organizing the Web of Things (WoT) Plugfests and also for organizing general testing procedures, data collection, and implementation report tooling for WoT deliverables',
    isActive: true,
    deliverables: [
      {
        type: 'Deliverable',
        name: 'WoT Plugfest',
        description:
          'The WoT Plugfests are regular events organized to test the interoperability of Web of Things (WoT) implementations. They provide a practical environment for developers to test their tools, gather data, and create implementation reports for WoT deliverables, ensuring the specifications are robust and implementable.',
      },
    ],
    people: {
      'TF-Leads': [{ name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' }],
    },
    resources: [
      {
        label: 'WoT Plugfest/Testing TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/PlugFest_WebConf',
      },
      { label: 'WoT Testing GitHub repository', url: 'https://github.com/w3c/wot-testing' },
    ],
  },
  'tf-profiles': {
    title: 'Profiles',
    description: 'The WoT Profiles task force is responsible for interoperability profiles for the Web of Things',
    isActive: true,
    deliverables: [
      {
        type: 'Normative Deliverable',
        name: 'WoT Profiles',
        description:
          'The WoT Profiles Specification defines a Profiling Mechanism and a set of WoT Profiles which enables out of the box interoperability among things and devices. Out of the box interoperability implies that devices can be integrated into various application scenarios without deep level adaptations. Typically only minor configuration operations are necessary (such as entering a network key or IP address) to use the device in a certain scenario. These actions can be done by anyone without specific training.',
      },
    ],
    people: {
      'TF-Leads': [{ name: 'Luca Barbato (Invited Expert)' }, { name: 'Ben Francis (Invited Expert)' }],
      'WoT Profiles Co-Editors': [
        { name: 'Michael Lagally (Oracle Corp.)', href: 'mailto:michael.lagally@oracle.com' },
        { name: 'Ben Francis (Invited Expert)' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
        { name: 'Ryuichi Matsukura (Fujitsu Ltd.)' },
        { name: 'Sebastian Kaebisch (Siemens AG)' },
        { name: 'Tomoaki Mizushima (Internet Research Institute, Inc.)', href: 'mailto:sasami@iri.co.jp' },
      ],
    },
    resources: [
      {
        label: 'WoT Profile TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/WG_WoT_Profile_WebConf',
      },
      { label: 'WoT Profile GitHub repository', url: 'https://github.com/w3c/wot-profile' },
    ],
  },
  'tf-scripting': {
    title: 'Scripting API',
    description:
      'The WoT Scripting API task force is responsible for specifying an application programming interface (API) representing the WoT Interface that allows scripts to discover, invoke interactions with Things, and expose interactions for locally defined Things',
    isActive: true,
    deliverables: [
      {
        type: 'Informative Deliverable',
        name: 'WoT Scripting API',
        description:
          'Scripting is an optional building block in WoT and it is typically used in gateways, hubs, or browsers that are able to run a WoT Runtime and script management, providing a convenient way to define the behavior of exposed Things, extend WoT support to new types of endpoints, orchestrate interactions among multiple Things, and implement WoT applications.',
      },
    ],
    people: {
      'TF-Leads': [
        { name: 'Daniel Peintner (Siemens AG)', href: 'mailto:daniel.peintner.ext@siemens.com' },
        { name: 'Cristiano Aguzzi (Invited Expert)', href: 'mailto:cristiano.aguzzi@unibo.it' },
      ],
      'WoT Scripting API Co-Editors': [
        { name: 'Zoltan Kis (Intel Corp.)' },
        { name: 'Daniel Peintner (Siemens AG)', href: 'mailto:daniel.peintner.ext@siemens.com' },
        { name: 'Cristiano Aguzzi (Invited Expert)', href: 'mailto:cristiano.aguzzi@unibo.it' },
      ],
    },
    resources: [
      { label: 'Web of Things (WoT) Scripting API Note', url: 'https://www.w3.org/TR/wot-scripting-api/' },
      {
        label: 'WoT Scripting API TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/WG_WoT_Scripting_API_WebConf',
      },
      { label: 'WoT Scripting API GitHub repository', url: 'https://github.com/w3c/wot-scripting-api' },
    ],
  },
  'tf-usecases': {
    title: 'Use Case',
    description:
      'The WoT Use Case task force is responsible for collecting use cases for WoT and extracting requirements. Use cases can include both specific vertical applications as well as relevant horizontal technologies or other horizontal usage patterns. Guests who are not WoT members but who have an interest in specific vertical application domains, technologies, or usage patterns are explicitly invited to engage with this task force to provide input.',
    isActive: true,
    deliverables: [
      {
        type: 'Informative Deliverable',
        name: 'WoT Use Cases and Requirements',
        description:
          'The WoT Use Cases and Requirements document includes a catalog and taxonomy of use cases and a set of general requirements extracted from an analysis of these use cases. These requirements are then used to drive the development of other normative WoT specifications.',
      },
    ],
    people: {
      'TF-Leads': [
        { name: 'Tomoaki Mizushima (Internet Research Institute, Inc.)', href: 'mailto:sasami@iri.co.jp' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
      ],
      'WoT Use Cases Co-Editors': [
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
        { name: 'Luca Barbato (Luminem Srl)' },
        { name: 'Ege Korkan (Siemens AG)', href: 'mailto:ege.korkan@siemens.com' },
        { name: 'Tomoaki Mizushima (Internet Research Institute, Inc.)', href: 'mailto:sasami@iri.co.jp' },
      ],
      'Previous Editors': [
        { name: 'Michael Lagally (Oracle Corp.)', href: 'mailto:michael.lagally@oracle.com' },
        { name: 'Ryuichi Matsukura (Fujitsu Ltd.)' },
      ],
    },
    resources: [
      {
        label: 'WoT Use Cases TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/IG_UseCase_WebConf',
      },
      { label: 'WoT Use Cases GitHub repository', url: 'https://github.com/w3c/wot-usecases' },
    ],
  },
  'tf-architecture': {
    title: 'Architecture',
    description: 'The WoT Architecture task force is responsible for the abstract architecture for the Web of Things',
    isActive: false,
    deliverables: [
      {
        type: 'Normative Deliverable',
        name: 'WoT Architecture',
        description:
          'The WoT Architecture specification describes the abstract architecture for the W3C Web of Things. It defines the terminology that is used by all other WoT building blocks. The specification defines a conceptual framework that can be mapped onto a variety of concrete deployment scenarios.',
      },
    ],
    people: {
      'TF-Leads': [
        { name: 'Michael Lagally (Oracle Corp.)', href: 'mailto:michael.lagally@oracle.com' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
      ],
      'WoT Architecture Co-Editors': [
        { name: 'Michael Lagally (Oracle Corp.)', href: 'mailto:michael.lagally@oracle.com' },
        { name: 'Ryuichi Matsukura (Fujitsu Ltd.)' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
        { name: 'Kunihiko Toumura (Hitachi, Ltd.)' },
      ],
    },
    resources: [
      {
        label: 'WoT Architecture TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/WG_WoT_Architecture_WebConf',
      },
      { label: 'WoT Architecture GitHub repository', url: 'https://github.com/w3c/wot-architecture' },
    ],
  },
  'tf-discovery': {
    title: 'Discovery',
    description:
      'The WoT Discovery task force is responsible for defining a distribution mechanism for WoT Thing Descriptions that can be used to facilitate access to WoT Things and services while supporting security and privacy',
    isActive: false,
    deliverables: [
      {
        type: 'Normative Deliverable',
        name: 'WoT Discovery',
        description:
          'The WoT Discovery specification defines a mechanism to provide access to WoT Thing Descriptions in both local and global contexts. It uses a two-phase approach to take advantage of existing discovery mechanisms for "first contact" but provides for authenticated web services to actually provide metadata in order to support security and privacy goals. WoT Thing Descriptions can be retrieved from services running either on a Thing itself (that is, directly from self-describing objects), or from a directory service that provides a searchable database of WoT Thing Descriptions.',
      },
    ],
    people: {
      'TF-Leads': [{ name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' }],
      'WoT Discovery Co-Editors': [
        { name: 'Andrea Cimmino (Universidad Politécnica de Madrid)' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
        { name: 'Farshid Tavakolizadeh (Fraunhofer-Gesellschaft)' },
        { name: 'Kunihiko Toumura (Hitachi, Ltd.)' },
      ],
    },
    resources: [
      {
        label: 'WoT Discovery TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/WG_WoT_Discovery_WebConf',
      },
      { label: 'WoT Discovery GitHub repository', url: 'https://github.com/w3c/wot-discovery' },
    ],
  },
  'tf-security': {
    title: 'Security',
    description:
      'The WoT Security task force is responsible for identifying and analyzing the security and privacy considerations of the WoT and providing recommendations to support appropriate security technologies and to mitigate security and privacy risks',
    isActive: false,
    deliverables: [
      {
        type: 'Informative Deliverable',
        name: 'WoT Security and Privacy Guidelines',
        description:
          'The WoT Security and Privacy Guidelines document defines general security and privacy concepts and terminology for the W3C Web of Things, catalogs stakeholders and threats, and provides general guidance on best practices to mitigate these threats.',
      },
    ],
    people: {
      'TF-Leads': [{ name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' }],
      'WoT Security and Privacy Guidelines Co-Editors': [
        { name: 'Elena Reshetova (Intel Corp.)' },
        { name: 'Michael McCool (Intel Corp.)', href: 'mailto:michael.mccool@intel.com' },
      ],
    },
    resources: [
      {
        label: 'WoT Security TF Wiki (has meeting logistics)',
        url: 'https://www.w3.org/WoT/IG/wiki/IG_Security_WebConf',
      },
      { label: 'WoT Security GitHub repository', url: 'https://github.com/w3c/wot-security' },
    ],
  },
};
