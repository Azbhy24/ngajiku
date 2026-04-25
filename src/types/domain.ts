export type Highlight = {
  title: string;
  description: string;
};

export type StatCard = {
  label: string;
  value: string;
  badge: string;
  badgeClass: string;
  caption: string;
};

export type ModuleCard = {
  title: string;
  summary: string;
  status: string;
  statusClass: string;
  items: string[];
};

export type Spotlight = {
  name: string;
  track: string;
  progress: string;
  note: string;
  percent: string;
};

export type Phase = {
  title: string;
  summary: string;
  scope: string;
};
