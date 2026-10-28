export interface HeroLead {
  prefix: string;
  highlight: string;
  suffix: string;
}

export interface HeroData {
  titleLines: [string, string];
  lead: HeroLead;
  status: string;
}
