import { sidebarSvgs } from "./sidebarSvg";
import Component1 from "../Component1";
import Component2 from "../Component2";
import Component3 from "../Component3";
import Component5 from "../Component5";
import Component6 from "../Component6";
import SupportPage1 from "../supportTicket/SupportPage1";
export const sidebarList = [
  {
    id: 1,
    name: "Dashboard",
    icon: sidebarSvgs.dashboard,
    content: <Component1 />,
    active: "clicked",
  },
  {
    id: 2,
    name: "My Company",
    icon: sidebarSvgs.company,
    content: <Component2 />,
    active: "",
  },
  {
    id: 3,
    name: "Application",
    icon: sidebarSvgs.application,
    active: "",
    content: <Component3 />,
  },
  {
    id: 4,
    name: "Support Ticket",
    icon: sidebarSvgs.support,
    content: <SupportPage1 />,
    active: "",
  },
  {
    id: 5,
    name: "Mentorship",
    icon: sidebarSvgs.mentorship,
    content: <Component5 />,
    active: "",
  },
  {
    id: 6,
    name: "Settings",
    icon: sidebarSvgs.settings,
    content: <Component6 />,
    active: "",
  },
];
