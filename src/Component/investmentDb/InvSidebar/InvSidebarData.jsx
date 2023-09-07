import { sidebarSvgs } from "../InvSidebar/InvSidebarSvg";
import Component2 from "../../Component2";
import Component5 from "../../Component5";
import Settings from "../../Settings";
import SupportPage1 from "../../supportTicket/SupportPage1";
import Investment from "../InvMainDb/Investment";
import Application from "../../Applicationn";
export const sidebarList = [
  {
    id: 1,
    name: "Dashboard",
    icon: sidebarSvgs.dashboard,
    content: <Investment />,
    active: "clicked",
  },
  {
    id: 2,
    name: "Application",
    icon: sidebarSvgs.application,
    active: "",
    content: <Application />, //update
  },

  {
    id: 3,
    name: "Settings",
    icon: sidebarSvgs.settings,
    content: <Settings />, //update
    active: "",
  },
];
