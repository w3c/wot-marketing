export interface ResearchPaperFetchOutput {
  title: string;
  type: string;
  publisher: string;
  authors: string[];
  date: string;
  link: string;
}

export type CrossrefDate = {
  'date-parts'?: number[][];
};
