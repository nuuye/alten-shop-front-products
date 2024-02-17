import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-1',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: '/products' //update the root link

  },
  {
    id: 'Menu-item-2',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: '/admin/products' //update the root link

  }

];