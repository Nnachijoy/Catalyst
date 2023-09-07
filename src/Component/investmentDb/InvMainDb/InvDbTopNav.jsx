import React from "react";
import "../InvMainDb/InvDbTopNav.scss";
import sideMainIcon from "/sideMainIcon.svg";
import favouriteIcon from "/favouriteIcon.svg";
import iphoneIcon from "/iphoneIcon.svg";
import searchIcon from "/searchIcon.svg";
import notificationIcon from "/notificationIcon.svg";
import investorIcon from "/investorIcon.svg";
import dropDownIcon from "/dropDownIcon.svg";
import { useEffect } from "react";
import { useState } from "react";
import MainDbDropdown from "./InvMainDbDropdown";
import { useNavigate } from "react-router-dom";
import Notifications from "../../../Component/Notifications";
const DbTopNav = ({ clickedItem, setShowComp }) => {
  let [user, setUser] = useState({
    name: "Investor Uju",
    notifications: 2,
    icon: investorIcon,
    position: "Founder",
  });
  let [toggle, setToggle] = useState(false);
  let redir = useNavigate();
  useEffect(() => {}, [clickedItem]);
  return (
    <div className="DbTopNav">
      <div className="boxa">
        <img src={sideMainIcon} alt="sideMainIcon" />
        <img src={favouriteIcon} alt="favouriteIcon" />
        <span> {clickedItem.item} </span>
      </div>
      <div className="boxb">
        <form onSubmit={(e) => e.preventDefault(e)}>
          <fieldset>
            <label htmlFor="search">
              <img src={searchIcon} alt="search" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
              <img src={iphoneIcon} alt="iphone icon" />
            </label>
          </fieldset>
        </form>
      </div>
      <div className="boxc">
        <span onClick={() => setShowComp(<Notifications />)} className="notify">
          <img src={notificationIcon} alt="notification" />
          <span className="notifyNumber">{user.notifications}</span>
        </span>
        <img src={investorIcon} alt="current User" />
        <button>{user.name} </button>
      </div>
    </div>
  );
};

export default DbTopNav;
