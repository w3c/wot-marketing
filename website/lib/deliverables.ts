interface Deliverable {
  deliverable: string;
  url: string;
  status?: string;
  last_publication: string;
}

export const DELIVERABLES: Record<string, Deliverable[]> = {
  normative_deliverables: [
    {
      deliverable: 'Web of Things (WoT) Architecture',
      url: 'https://www.w3.org/TR/2020/REC-wot-architecture-20200409/',
      status: 'W3C Recommendation',
      last_publication: '9 April 2020',
    },
    {
      deliverable: 'Web of Things (WoT) Architecture 1.1',
      url: 'https://www.w3.org/TR/2023/REC-wot-architecture11-20231205/',
      status: 'W3C Recommendation',
      last_publication: '5 December 2023',
    },
    {
      deliverable: 'Web of Things (WoT) Thing Description',
      url: 'https://www.w3.org/TR/2020/REC-wot-thing-description-20200409/',
      status: 'W3C Recommendation',
      last_publication: '9 April 2020',
    },
    {
      deliverable: 'Web of Things (WoT) Thing Description 1.1',
      url: 'https://www.w3.org/TR/2023/REC-wot-thing-description11-20231205/',
      status: 'W3C Recommendation',
      last_publication: '5 December 2023',
    },
    {
      deliverable: 'Web of Things (WoT) Thing Description 2.0',
      url: 'https://www.w3.org/TR/2025/WD-wot-thing-description-2.0-20251104/',
      status: 'W3C First Public Working Draft',
      last_publication: '4 November 2025',
    },
    {
      deliverable: 'Web of Things (WoT) Binding Registry',
      url: 'https://www.w3.org/TR/2025/DRY-wot-binding-registry-20251104/',
      status: 'W3C Draft Registry',
      last_publication: '4 November 2025',
    },
    {
      deliverable: 'Web of Things (WoT) Discovery',
      url: 'https://www.w3.org/TR/2023/REC-wot-discovery-20231205/',
      status: 'W3C Recommendation',
      last_publication: '5 December 2023',
    },
    {
      deliverable: 'Web of Things (WoT) Profiles',
      url: 'https://www.w3.org/TR/2025/WD-wot-profile-20251104/',
      status: 'W3C Third Public Working Draft',
      last_publication: '4 November 2025',
    },
  ],
  informative_deliverables: [
    {
      deliverable: 'Web of Things (WoT) Scripting API',
      url: 'https://www.w3.org/TR/2023/NOTE-wot-scripting-api-20231003/',
      last_publication: '3 October 2023',
    },
    {
      deliverable: 'Web of Things (WoT) Binding Templates',
      url: 'https://www.w3.org/TR/2025/NOTE-wot-binding-templates-20251104/',
      last_publication: '4 November 2025',
    },
    {
      deliverable: 'Web of Things (WoT) Security and Privacy Guidelines',
      url: 'https://www.w3.org/TR/2019/NOTE-wot-security-20191106/',
      last_publication: '6 November 2019',
    },
    {
      deliverable: 'Web of Things (WoT) Use Cases and Requirements',
      url: 'https://www.w3.org/TR/2026/NOTE-wot-usecases-20260205/',
      last_publication: '5 February 2026',
    },
  ],
};
