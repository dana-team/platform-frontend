import {
  mdiApplicationBraces,
  mdiAccountGroup,
  mdiLock,
  mdiCog,
} from "@mdi/js";

type SidebarItem = {
  icon: string;
  label: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    icon: mdiApplicationBraces,
    label: "Applications",
  },
  {
    icon: mdiAccountGroup,
    label: "Members",
  },
  {
    icon: mdiLock,
    label: "Secrets",
  },
  {
    icon: mdiCog,
    label: "Settings",
  },
];
