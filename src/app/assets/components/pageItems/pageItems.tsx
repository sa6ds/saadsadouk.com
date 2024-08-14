// utils/pageItems.ts

interface PageItem {
  name: string;
}

export const pageItems: Record<string, PageItem> = {
  about: { name: "About Me" },
  resume: { name: "Resume" },
  blog: { name: "Blog" },
};
