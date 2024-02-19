import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: '/products' //update the root link

  },
  {
    id: 'admin/products',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: '/admin/products' //update the root link

  }

];