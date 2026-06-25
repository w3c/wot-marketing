import { DevToolsInput } from './types.ts';

// WARNING: Before changing this object, please make sure you read docs/developers/README.md
export const devToolsInput: DevToolsInput = {
  'Thing Description': {
    'Editing and Validation': {
      description: 'Tools for editing, validating, and parsing Thing Descriptions in various programming environments',
      tools: [
        {
          name: 'Thing Description Playground',
          repoUrl: 'https://github.com/eclipse-thingweb/playground',
          platforms: ['Browser', 'CLI'],
          affiliation: 'Eclipse Foundation',
        },
        {
          name: 'Eclipse edi{TD}or',
          repoUrl: 'https://github.com/eclipse-editdor/editdor',
          platforms: ['Browser'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/eclipse-thingweb/td-code',
          homepageUrl: 'https://marketplace.visualstudio.com/items?itemName=arces-wot.td-code',
          platforms: ['IDE Extension'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/eclipse/ditto/tree/master/wot/model',
          platforms: ['Library'],
          affiliation: 'Eclipse Foundation',
          description: `A library to provide a set of Java classes to model and manipulate TDs and TMs in Java applications`,
        },
        {
          repoUrl: 'https://github.com/oeg-upm/wot-jtd',
          platforms: ['Library'],
          affiliation: 'Ontology Engineering Group, Universidad Politécnica de Madrid',
        },
        {
          repoUrl: 'https://github.com/sifis-home/wot-td',
          platforms: ['Library'],
          affiliation: 'SIFIS-HOME',
        },
        {
          repoUrl: 'https://github.com/wot-oss/thingdescription-go',
          platforms: ['Library'],
          affiliation: 'Web of Things Open Source Projects',
        },
        {
          repoUrl: 'https://github.com/wot-oss/tmtd',
          platforms: ['CLI'],
          affiliation: 'Web of Things Open Source Projects',
        },
        {
          repoUrl: 'https://github.com/wot-oss/wot-dtdl-converter',
          platforms: ['CLI'],
          affiliation: 'Web of Things Open Source Projects',
        },
      ],
    },
    'Runtimes for TD Exposers': {
      description: 'Libraries implementing a WoT Runtime for building Things according to WoT paradigms',
      tools: [
        {
          name: 'Eclipse Thingweb node-wot',
          repoUrl: 'https://github.com/eclipse-thingweb/node-wot',
          platforms: ['Library', 'CLI'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/eclipse-ditto/ditto/tree/master/wot',
          platforms: ['Library'],
          affiliation: 'Eclipse Foundation',
          description: `An Eclipse Ditto module implementing the W3C Web of Things`,
        },
        {
          repoUrl: 'https://github.com/sane-city/wot-servient',
          description:
            'This project contains an implementation of the W3C Web of Things (WoT) architecture written in Java',
          platforms: ['Library', 'CLI'],
          affiliation: 'SANE',
        },
        {
          repoUrl: 'https://github.com/sifis-home/wot-serve',
          platforms: ['Service'],
          affiliation: 'SIFIS-HOME',
        },
        {
          repoUrl: 'https://github.com/eclipse-thingweb/wot-py',
          platforms: ['Library'],
        },
        {
          repoUrl: 'https://github.com/thingctx/thingctx',
          platforms: ['Library', 'CLI', 'Service'],
        },
        {
          repoUrl: 'https://github.com/boobalkrishnan/wot-sensor-esp32',
          platforms: [], // TODO
        },
      ],
    },
    'Runtimes for TD Consumers': {
      description: 'Libraries implementing a WoT Runtime for consuming Things and building custom applications',
      tools: [
        {
          name: 'Eclipse Thingweb node-wot',
          repoUrl: 'https://github.com/eclipse/thingweb.node-wot',
          platforms: ['Library', 'CLI'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/project-eria/go-wot',
          platforms: ['Library', 'CLI'],
        },
        {
          repoUrl: 'https://github.com/node-red/node-red-nodegen',
          platforms: ['CLI'],
          affiliation: 'OpenJS Foundation',
        },
        {
          homepageUrl: 'https://pub.dev/packages/dart_wot',
          repoUrl: 'https://github.com/eclipse-thingweb/dart_wot',
          platforms: ['Library'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/sane-city/wot-servient',
          platforms: ['Library', 'CLI'],
          affiliation: 'SANE',
        },
        {
          name: 'kotlin-wot',
          repoUrl: 'https://github.com/eclipse-thingweb/kotlin-wot',
          platforms: ['Library'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/tum-esi/wot.net',
          platforms: ['Library'],
          affiliation: 'TUM ESI',
        },
        {
          repoUrl: 'https://github.com/agmangas/wot-py',
          platforms: ['Library'],
        },
        {
          repoUrl: 'https://github.com/boobalkrishnan/wotcpp',
          platforms: ['Library'],
        },
      ],
    },
    'TD Directories': {
      description: 'Services hosting a Thing Description Directory implementing the W3C WoT Discovery specification',
      tools: [
        {
          repoUrl: 'https://github.com/TinyIoT/thing-directory',
          platforms: ['Service', 'CLI'],
          affiliation: 'Tiny IoT',
        },
        {
          name: 'WoT Hive',
          description:
            'A WoT Directory implementation with enriched features thanks to the usage of other W3C standards related to Semantic Web technologies',
          repoUrl: 'https://github.com/oeg-upm/wot-hive',
          platforms: ['Service'],
          affiliation: 'Ontology Engineering Group, Universidad Politécnica de Madrid',
        },
        {
          name: 'Eclipse Domus TDD API',
          repoUrl: 'https://github.com/eclipse-thingweb/domus-tdd-api',
          platforms: ['Service'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/sifis-home/wot-discovery',
          platforms: ['Service'],
          affiliation: 'SIFIS-HOME',
        },
        {
          name: 'Zion',
          description: 'Zion employs the best open-source technologies to provide a scalable TDD service',
          repoUrl: 'https://github.com/vaimee/zion',
          platforms: ['Service'],
          affiliation: 'VAIMEE',
        },
      ],
    },
  },
  'WoT Development': {
    'Development Environments and UIs': {
      description: 'Tools aiding WoT application development with user interfaces and other utilities',
      tools: [
        {
          repoUrl: 'https://github.com/eclipse-thingweb/wam',
          platforms: ['CLI'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://codeberg.org/jaller94/wot-wrench',
          description: 'A web app to control Web of Things devices',
          platforms: ['Browser'],
          affiliation: 'Christian Jaller',
          ignoreFetch: true,
          name: 'WoT Wrench',
        },
        {
          repoUrl: 'https://github.com/wot-oss/tmc',
          platforms: ['CLI'],
          affiliation: 'Web of Things Open Source Projects',
        },
        {
          name: 'Thing Control Panel',
          description:
            "View and interact with your Thing's properties, actions and events over browser supported protocols. Based on node-wot",
          platforms: ['Browser'],
          affiliation: 'hololinked',
          lastUpdated: '2026-05-04T00:00:00Z',
          ignoreFetch: true,
          homepageUrl: 'https://control-panel.hololinked.dev',
        },
        {
          name: 'BLAST',
          description: 'Block Applications For Things',
          repoUrl: 'https://github.com/wintechis/blast/',
          platforms: ['Browser'],
          affiliation: 'Chair of Technical Information Systems, Friedrich-Alexander-Universität Erlangen-Nürnberg',
        },
        {
          description:
            'A development environment built for Web of Things',
          repoUrl: 'https://github.com/tum-esi/wade',
          platforms: ['Application'],
          affiliation: 'TUM ESI',
        },
        {
          description: 'Desktop, mobile, and browser UI for interacting with Things via TDs',
          repoUrl: 'https://github.com/danielpeintner/wot-fxui',
          platforms: ['Browser', 'Application'],
        },
      ],
    },
    'WoT Software and Middleware': {
      description: 'Deployable software providing functions like gateway, proxying, simulation, and testing',
      tools: [
        {
          name: 'OneConnectivity',
          description: 'Industrial-grade implementation integrating devices into Siemens software',
          platforms: ['Application', 'Service'],
          affiliation: 'Siemens AG',
          homepageUrl: 'https://www.youtube.com/watch?v=vRdX5ItQHX0',
        },
        {
          repoUrl: 'https://github.com/tum-esi/testbench',
          platforms: ['Service'],
          affiliation: 'TUM ESI',
        },
        {
          repoUrl: 'https://github.com/WebThingsIO/gateway/',
          platforms: ['Service', 'Browser'],
          affiliation: 'WebThings',
        },
        {
          repoUrl: 'https://github.com/OPCFoundation/UA-EdgeTranslator',
          platforms: ['Service'],
          affiliation: 'OPC Foundation',
        },
        {
          description:
            'A a multi-layer software framework that virtualizes IoT devices into interoperable Virtual Objects, enabling standardized management, semantic abstraction, service composition, and seamless integration with edge/coud technologies',
          repoUrl: 'https://gitlab.eclipse.org/eclipse/vostack/vostack',
          platforms: ['Service'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://gitlab.com/webthings/wot-anything',
          platforms: ['Service'],
          affiliation: 'WebThings',
        },
        {
          repoUrl: 'https://github.com/tum-esi/shadow-thing',
          platforms: ['Service', 'CLI'],
          affiliation: 'TUM ESI',
        },
        {
          name: 'ERIA Project',
          description: 'Gateway for KNX',
          repoUrl: 'https://github.com/project-eria/gateway-knx',
          platforms: ['Service'],
        },
      ],
    },
    'Online Things': {
      description: 'Publicly accessible Things for testing Consumer applications and learning TD communication',
      tools: [
        {
          name: 'Eclipse Thingweb - Online Things for Testing',
          description: 'Publicly accessible test Things hosted by Eclipse Thingweb',
          homepageUrl: 'https://thingweb.io/services/#online-things-for-testing',
          platforms: ['Service'],
          affiliation: 'Eclipse Foundation',
        },
        {
          repoUrl: 'https://github.com/wot-oss/thingmodels',
          platforms: ['Service'],
          affiliation: 'Web of Things Open Source Projects',
        },
      ],
    },
  },
  Others: {
    'Other Tooling': {
      description: '',
      tools: [
        {
          repoUrl: 'https://github.com/eclipse-aaspe/package-explorer',
          platforms: ['Application'],
          affiliation: 'Eclipse Foundation',
        },
        {
          name: 'Eclipse LMOS',
          description: 'Open-source, cloud-native platform for Multi-Agent systems',
          homepageUrl: 'https://eclipse.dev/lmos/',
          repoUrl: 'https://github.com/eclipse-lmos',
          platforms: ['Service'],
          affiliation: 'Eclipse Foundation',
          ignoreFetch: true,
        },
        {
          repoUrl: 'https://github.com/tum-esi/wotify',
          platforms: ['Browser'],
          affiliation: 'TUM ESI',
        },
      ],
    },
  },
};
