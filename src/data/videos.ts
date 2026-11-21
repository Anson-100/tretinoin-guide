export type Video = {
  /** YouTube video ID — the part after `v=` in the URL. Leave empty for a placeholder. */
  youtubeId: string;
  title: string;
  doctor: string;
  description: string;
};

// TODO: replace these placeholders with real doctor videos.
export const videos: Video[] = [
  {
    youtubeId: "",
    title: "What tretinoin actually does",
    doctor: "Dermatologist name",
    description: "A plain-language overview of how retinoids work on the skin.",
  },
  {
    youtubeId: "",
    title: "How to start without wrecking your skin",
    doctor: "Dermatologist name",
    description: "Frequency, amount, and getting through the adjustment period.",
  },
  {
    youtubeId: "",
    title: "Building a simple routine around it",
    doctor: "Dermatologist name",
    description: "Cleanser, moisturizer, sunscreen, and what to skip.",
  },
];
