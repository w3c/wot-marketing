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
  url?: string;
  languages?: string[];
  isObsolete?: boolean;
}

// WARNING: Before changing this object, please make sure you read docs/developers/README.md
// #TODO: write the readme file
export const devToolsInput: DevToolsInput = {
  "Thing Description": {
    "Editing and Validation": {
      description:
        "Tools for editing, validating, and parsing Thing Descriptions in various programming environments",
      tools: [
        {
          name: "Thing Description Playground",
          description:
            "Reference validation suite including OpenAPI generation, linting, and other utilities",
          url: "https://playground.thingweb.io/",
          languages: ["JSON", "yaml"],
        },
        {
          name: "Eclipse edi{TD}or",
          repoUrl: "https://github.com/eclipse-editdor/editdor",
        },
        {
          name: "TD code",
          description:
            "Visual Studio Code extension for validation and code snippets",
          url: "https://marketplace.visualstudio.com/items?itemName=arces-wot.td-code",
        },
        {
          repoUrl: "https://github.com/oeg-upm/wot-jtd",
        },
        {
          name: "Eclipse Ditto :: WoT :: Model",
          repoUrl: "https://github.com/eclipse/ditto/wot/model",
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-td",
        },
        {
          repoUrl: "https://github.com/wot-oss/thingdescription-go",
        },
        {
          repoUrl: "https://github.com/wot-oss/tmtd",
        },
        {
          repoUrl: "https://github.com/wot-oss/wot-dtdl-converter",
        },
      ],
    },
    "Runtimes for TD Exposers": {
      description:
        "Libraries implementing a WoT Runtime for building Things according to WoT paradigms",
      tools: [
        {
          repoUrl: "https://github.com/eclipse/thingweb.node-wot",
        },
        {
          name: "WoT Integration for Eclipse Ditto",
          description:
            "Links managed digital twins to WoT Thing Models to create Thing Descriptions with API details",
          url: "https://www.eclipse.org/ditto/basic-wot-integration.html",
          languages: ["Java", "Typescript"],
        },
        {
          repoUrl: "https://github.com/sane-city/wot-servient",
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-serve",
        },
        {
          repoUrl: "https://github.com/agmangas/wot-py",
        },
      ],
    },
    "Runtimes for TD Consumers": {
      description:
        "Libraries implementing a WoT Runtime for consuming Things and building custom applications",
      tools: [
        {
          repoUrl: "https://github.com/eclipse/thingweb.node-wot",
        },
        {
          repoUrl: "https://github.com/node-red/node-red-nodegen",
        },
        {
          name: "dart_wot",
          description:
            "Dart implementation of W3C WoT supporting HTTP and CoAP",
          url: "https://pub.dev/packages/dart_wot",
          languages: ["Dart"],
        },
        {
          repoUrl: "https://github.com/sane-city/wot-servient",
        },
        {
          repoUrl: "https://github.com/eclipse-thingweb/kotlin-wot",
        },
        {
          repoUrl: "https://github.com/tum-esi/wot.net",
        },
        {
          repoUrl: "https://github.com/agmangas/wot-py",
        },
      ],
    },
    "TD Directories": {
      description:
        "Services hosting a Thing Description Directory implementing the W3C WoT Discovery specification",
      tools: [
        {
          repoUrl: "https://github.com/TinyIoT/thing-directory",
        },
        {
          repoUrl: "https://github.com/oeg-upm/wot-hive",
        },
        {
          repoUrl: "https://github.com/eclipse-thingweb/domus-tdd-api",
        },
        {
          repoUrl: "https://github.com/sifis-home/wot-discovery",
        },
        {
          repoUrl: "https://github.com/vaimee/zion",
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
        },
        {
          repoUrl: "https://gitlab.com/jaller94/wot-wrench",
        },
        {
          repoUrl: "https://github.com/wot-oss/tmc",
        },
        {
          repoUrl: "https://github.com/hololinked-dev/thing-control-panel",
        },
        {
          repoUrl: "https://github.com/wintechis/blast/",
        },
        {
          repoUrl: "https://github.com/tum-esi/wade",
        },
        {
          description:
            "Desktop, mobile, and browser UI for interacting with Things via TDs",
          repoUrl: "https://github.com/danielpeintner/wot-fxui",
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
          url: "https://www.evosoft.com/en/digitalization-offering/saywot/",
          languages: ["No-Code"],
        },
        {
          repoUrl: "https://github.com/tum-esi/testbench",
        },
        {
          repoUrl: "https://github.com/WebThingsIO/gateway/",
        },
        {
          repoUrl: "https://github.com/OPCFoundation/UA-EdgeTranslator",
        },
        {
          repoUrl:
            "https://gitlab.eclipse.org/eclipse-research-labs/nephele-project/vo-wot",
        },
        {
          repoUrl: "https://gitlab.com/webthings/wot-anything",
        },
        {
          repoUrl: "https://github.com/tum-esi/shadow-thing",
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
          url: "https://thingweb.io/services/#online-things-for-testing",
          languages: ["TypeScript", "Python"],
        },
        {
          repoUrl: "https://github.com/wot-oss/thingmodels",
        },
      ],
    },
  },
  Others: {
    "Other Tooling": {
      description: "",
      tools: [
        {
          repoUrl: "https://github.com/admin-shell-io/aasx-package-explorer",
        },
        {
          name: "Eclipse LMOS",
          description:
            "Open-source, cloud-native platform for Multi-Agent systems",
          url: "https://eclipse.dev/lmos/",
          languages: ["Kotlin", "Java"],
        },
        {
          repoUrl: "https://github.com/tum-esi/wotify",
        },
      ],
    },
  },
};
