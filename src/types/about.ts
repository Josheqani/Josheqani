export interface Fact {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  photoPlaceholderText: string;
  facts: Fact[];
}
