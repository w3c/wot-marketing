export interface Result {
  [group: string]: OrganizationData[];
}
export interface OrganizationData {
  title: string;
  homepage: string | null;
}
export interface Groups {
  _links: {
    groups: {
      href: string;
      title: string;
    }[];
  };
}
export interface Group {
  _links: {
    participations: {
      href: string;
    };
  };
  type: 'community group';
}
export interface Participations {
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
export interface Participant {
  individual: boolean;
  _links: {
    organization:
      | {
          href: string;
        }
      | undefined;
  };
}
export interface Organization {
  name: string;
  _links: {
    homepage:
      | {
          href: string;
        }
      | undefined;
  };
}
