import { writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchMemberOrganizations() {
  console.log('Fetching member organizations...');
  try {
    const res = await fetch('https://api.w3.org/ecosystems/web-of-things/groups');

    const groups = (await res.json()) as Groups;

    const result: Result = {};

    for (const groupLink of groups._links.groups) {
      const groupRes = await fetch(groupLink.href);
      const group = (await groupRes.json()) as Group;
      let participationsLink: string | undefined = group._links.participations.href;
      const organizations: OrganizationData[] = [];
      while (participationsLink) {
        const participationsLinkRes = await fetch(participationsLink);
        const participations = (await participationsLinkRes.json()) as Participations;

        for (const participantLink of participations._links.participations) {
          const participantRes = await fetch(participantLink.href);
          const participant = (await participantRes.json()) as Participant;
          if (participant.individual || !participant._links.organization) continue;
          const organizationRes = await fetch(participant._links.organization.href);
          const organization = (await organizationRes.json()) as Organization;
          organizations.push({
            title: organization.name,
            homepage: organization._links.homepage?.href ?? null,
          });
        }
        participationsLink = participations._links?.next?.href;
      }
      result[groupLink.title] = organizations.sort((a, b) => a.title.localeCompare(b.title));
    }

    const orderedResult: Result = {};
    const groupOrder = [
      'Web of Things Working Group',
      'Web of Things Community Group',
      'Web Thing Protocol Community Group',
      'Web of Things Japanese Community Group',
      'Web of Things Interest Group',
    ];

    for (const groupName of groupOrder) {
      if (result[groupName]) {
        orderedResult[groupName] = result[groupName];
      }
    }

    // Add any remaining groups not in the specified order
    for (const groupName of Object.keys(result).sort()) {
      if (!orderedResult[groupName]) {
        orderedResult[groupName] = result[groupName];
      }
    }

    // Save the fetched data in memberOrganizationsOutput.json
    writeFileSync(
      resolve(__dirname, '../docs/_data/generated/memberOrganizationsOutput.json'),
      JSON.stringify(orderedResult, null, 2)
    );
    console.log('/docs/_data/generated/memberOrganizationsOutput.json successfully generated');
  } catch (error) {
    console.error('Could not fetch member organizations:', error);
  }
}

fetchMemberOrganizations();

interface Result {
  [group: string]: OrganizationData[];
}
interface OrganizationData {
  title: string;
  homepage: string | null;
}
interface Groups {
  _links: {
    groups: {
      href: string;
      title: string;
    }[];
  };
}
interface Group {
  _links: {
    participations: {
      href: string;
    };
  };
  type: 'community group';
}
interface Participations {
  _links: {
    participations: {
      href: string;
    }[];
    next:
      | {
          href: string;
        }
      | undefined;
  };
}
interface Participant {
  individual: boolean;
  _links: {
    organization:
      | {
          href: string;
        }
      | undefined;
  };
}
interface Organization {
  name: string;
  _links: {
    homepage:
      | {
          href: string;
        }
      | undefined;
  };
}
