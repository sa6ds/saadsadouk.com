export interface NavbarItem {
  label: string;
  url: string;
}

export const NavbarItems: NavbarItem[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "about",
    url: "/about",
  },
  {
    label: "resume",
    url: "/resume",
  },
  {
    label: "blog",
    url: "/blog",
  },
];
