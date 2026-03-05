interface DevToolsInput {
  [groupName: string]: {
    [subgroup: string]: {
      description: string;
      tools: ToolInput[];
    };
  };
}
export interface ToolInput {
  repoUrl?: string;
  name?: string;
  description?: string;
  languages?: string[];
  isObsolete?: boolean;
  homepageUrl?: string;
  platforms: ToolPlatform[];
}

export type ToolPlatform =
  | "Application"
  | "Browser" // browser-based UI/tool primarily used on the web
  | "Library" // package meant to be imported and used in code
  | "IDE Extension" // plugin/extension for an IDE or editor
  | "CLI" // tool that provides a command-line interface
  | "Service"; // network-accessible backend, API, hosted endpoint, or server you run somewhere

// WARNING: Before changing this object, please make sure you read docs/developers/README.md
export const devToolsInput: DevToolsInput = {
  "Thing Description": {
    "Editing and Validation": {
      description:
        "Tools for editing, validating, and parsing Thing Descriptions in various programming environments",
      tools: [
        {
          name: "Thing Description Playground",
          repoUrl: "https://github.com/eclipse-thingweb/playground",
          platforms: ["Browser", "CLI"],
        },
        {
          name: "Eclipse edi{TD}or",
          repoUrl: "https://github.com/eclipse-editdor/editdor",
          platforms: ["Browser"],
        },
        {
          repoUrl: "https://github.com/eclipse-thingweb/td-code",
          homepageUrl:
            "https://marketplace.visualstudio.com/items?itemName=arces-wot.td-code",
          platforms: ["IDE Extension"],
        },
        {
          repoUrl: "https://github.com/eclipse/ditto/tree/master/wot/model",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/oeg-upm/wot-jtd",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-td",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/wot-oss/thingdescription-go",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/wot-oss/tmtd",
          platforms: ["CLI"],
        },
        {
          repoUrl: "https://github.com/wot-oss/wot-dtdl-converter",
          platforms: ["CLI"],
        },
      ],
    },
    "Runtimes for TD Exposers": {
      description:
        "Libraries implementing a WoT Runtime for building Things according to WoT paradigms",
      tools: [
        {
          name: "Eclipse Thingweb node-wot",
          repoUrl: "https://github.com/eclipse-thingweb/node-wot",
          platforms: ["Library", "CLI"],
        },
        {
          repoUrl: "https://github.com/eclipse-ditto/ditto/tree/master/wot",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/sane-city/wot-servient",
          platforms: ["Library", "CLI"],
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-serve",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/agmangas/wot-py",
          platforms: ["Library"],
        },
      ],
    },
    "Runtimes for TD Consumers": {
      description:
        "Libraries implementing a WoT Runtime for consuming Things and building custom applications",
      tools: [
        {
          name: "Eclipse Thingweb node-wot",
          repoUrl: "https://github.com/eclipse/thingweb.node-wot",
          platforms: ["Library", "CLI"],
        },
        {
          repoUrl: "https://github.com/node-red/node-red-nodegen",
          platforms: ["CLI"],
        },
        {
          homepageUrl: "https://pub.dev/packages/dart_wot",
          repoUrl: "https://github.com/eclipse-thingweb/dart_wot",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/sane-city/wot-servient",
          platforms: ["Library", "CLI"],
        },
        {
          name: "kotlin-wot",
          repoUrl: "https://github.com/eclipse-thingweb/kotlin-wot",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/tum-esi/wot.net",
          platforms: ["Library"],
        },
        {
          repoUrl: "https://github.com/agmangas/wot-py",
          platforms: ["Library"],
        },
      ],
    },
    "TD Directories": {
      description:
        "Services hosting a Thing Description Directory implementing the W3C WoT Discovery specification",
      tools: [
        {
          repoUrl: "https://github.com/TinyIoT/thing-directory",
          platforms: ["Service", "CLI"],
        },
        {
          name: "WoT Hive",
          description:
            "This implementation is compliant with the standard specification but aims at providing enriched features thanks to the usage of other W3C standards related to Semantic Web technologies.",
          repoUrl: "https://github.com/oeg-upm/wot-hive",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/eclipse-thingweb/domus-tdd-api",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-discovery",
          platforms: ["Service"],
        },
        {
          name: "Zion",
          description:
            "Zion employs the best open-source technologies to provide a scalable TDD service",
          repoUrl: "https://github.com/vaimee/zion",
          platforms: ["Service"],
        },
      ],
    },
  },
  "WoT Development": {
    "Development Environments and UIs": {
      description:
        "Tools aiding WoT application development with user interfaces and other utilities",
      tools: [
        {
          repoUrl: "https://github.com/eclipse-thingweb/wam",
          platforms: ["CLI"],
        },
        {
          repoUrl: "https://gitlab.com/jaller94/wot-wrench",
          platforms: ["Browser"],
        },
        {
          repoUrl: "https://github.com/wot-oss/tmc",
          platforms: ["CLI"],
        },
        {
          repoUrl: "https://github.com/hololinked-dev/thing-control-panel",
          platforms: ["Browser"],
        },
        {
          name: "BLAST",
          description: "Block Applications For Things",
          repoUrl: "https://github.com/wintechis/blast/",
          platforms: ["Browser", "Library"],
        },
        {
          description:
            "Wade is an API development environment for Web of Things that was designed for the W3C WoT building blocks",
          repoUrl: "https://github.com/tum-esi/wade",
          platforms: ["Application"],
        },
        {
          description:
            "Desktop, mobile, and browser UI for interacting with Things via TDs",
          repoUrl: "https://github.com/danielpeintner/wot-fxui",
          platforms: ["Browser", "Application"],
        },
      ],
    },
    "WoT Software and Middleware": {
      description:
        "Deployable software providing functions like gateway, proxying, simulation, and testing",
      tools: [
        {
          name: "sayWoT!",
          description:
            "Industrial-grade implementation integrating devices into Siemens software",
          homepageUrl: "https://www.evosoft.com/en/digitalization-offering/saywot/",
          languages: ["No-Code"],
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/tum-esi/testbench",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/WebThingsIO/gateway/",
          platforms: ["Service", "Browser"],
        },
        {
          repoUrl: "https://github.com/OPCFoundation/UA-EdgeTranslator",
          platforms: ["Service"],
        },
        {
          description:
            "VO-WoT is an experimental implementation of a W3C WoT Runtime and the W3C WoT Scripting API in Python.",
          repoUrl:
            "https://gitlab.eclipse.org/eclipse-research-labs/nephele-project/vo-wot",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://gitlab.com/webthings/wot-anything",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/tum-esi/shadow-thing",
          platforms: ["Service", "CLI"],
        },
      ],
    },
    "Online Things": {
      description:
        "Publicly accessible Things for testing Consumer applications and learning TD communication",
      tools: [
        {
          name: "Eclipse Thingweb - Online Things for Testing",
          description:
            "Publicly accessible test Things hosted by Eclipse Thingweb",
          homepageUrl: "https://thingweb.io/services/#online-things-for-testing",
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/wot-oss/thingmodels",
          platforms: ["Library"],
        },
      ],
    },
  },
  Others: {
    "Other Tooling": {
      description: "",
      tools: [
        {
          repoUrl: "https://github.com/eclipse-aaspe/package-explorer",
          platforms: ["Application"],
        },
        {
          name: "Eclipse LMOS",
          description:
            "Open-source, cloud-native platform for Multi-Agent systems",
          homepageUrl: "https://eclipse.dev/lmos/",
          repoUrl: "https://github.com/eclipse-lmos",
          languages: ["Kotlin", "Shell", "JavaScript", "Dart"],
          isObsolete: false,
          platforms: ["Service"],
        },
        {
          repoUrl: "https://github.com/tum-esi/wotify",
          platforms: ["Browser"],
        },
      ],
    },
  },
};