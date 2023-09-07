import settingsIcon from "/settingsIcon.svg";
import faqIcon from "/faqIcon.svg";
import carbon_user from "/carbon_user.svg";
import logoutIcon from "/logoutIcon.svg";
import Component6 from "../../Component6";
import Faq from "../../Faq";
import Editdetails from "../../Editdetails";
export const dropdownData = [
  [
    {
      id: 1,
      block: `line2`,
      line: "line",
      text: "Edit Profile",
      img: carbon_user,
      component: <Editdetails />,
    },
    {
      id: 2,
      block: `line2`,
      line: "line",
      text: "Account Settings",
      img: settingsIcon,
      component: <Component6 />,
    },
    {
      id: 3,
      block: `line2`,
      line: "line",
      text: "FAQ",
      img: faqIcon,
      component: <Faq />,
    },
  ],
  [
    {
      id: 4,
      hr: <hr />,
    },
  ],
  [
    {
      id: 5,
      block: `line3`,
      line: "line",
      text: "Logout",
      img: logoutIcon,
    },
  ],
];
