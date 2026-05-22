export type Location = {
  id: string;
  name: string;
  part: number;
  description: string;
  inhabitants: string;
};

export const locations: Location[] = [
  {
    id: "LOC-001",
    name: "Lilliput",
    part: 1,
    description: "An island nation inhabited by tiny people, only six inches tall.",
    inhabitants: "Lilliputians",
  },
  {
    id: "LOC-002",
    name: "Blefuscu",
    part: 1,
    description: "A neighboring empire to Lilliput, enemy nation across a channel.",
    inhabitants: "Blefuscudians",
  },
  {
    id: "LOC-003",
    name: "Brobdingnag",
    part: 2,
    description: "A land of giants where Gulliver is tiny compared to the inhabitants.",
    inhabitants: "Giants",
  },
  {
    id: "LOC-004",
    name: "Laputa",
    part: 3,
    description: "A flying island above Balnibarbi, home to intellectuals and scientists.",
    inhabitants: "Laputans",
  },
  {
    id: "LOC-005",
    name: "Balnibarbi",
    part: 3,
    description: "A land below Laputa, ruined by impractical scientific experiments.",
    inhabitants: "Balnibarbians",
  },
  {
    id: "LOC-006",
    name: "Luggnagg",
    part: 3,
    description: "A kingdom east of Japan, home to the immortal Struldbruggs.",
    inhabitants: "Luggnaggians & Struldbruggs",
  },
  {
    id: "LOC-007",
    name: "Glubbdubdrib",
    part: 3,
    description: "The Island of Sorcerers where the governor can summon the dead.",
    inhabitants: "Sorcerers",
  },
  {
    id: "LOC-008",
    name: "Land of the Houyhnhnms",
    part: 4,
    description: "A land ruled by rational, noble horses where humans (Yahoos) are beasts.",
    inhabitants: "Houyhnhnms & Yahoos",
  },
];
