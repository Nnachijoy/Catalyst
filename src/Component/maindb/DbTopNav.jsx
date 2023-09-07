import React from "react";
import "./DbTopNav.scss";
import sideMainIcon from "/sideMainIcon.svg";
import favouriteIcon from "/favouriteIcon.svg";
import iphoneIcon from "/iphoneIcon.svg";
import searchIcon from "/searchIcon.svg";
import notificationIcon from "/notificationIcon.svg";
import currentUserIcon from "/currentUserIcon.svg";
import dropDownIcon from "/dropDownIcon.svg";
import { useEffect } from "react";
import { useState } from "react";
import MainDbDropdown from "./MainDbDropdown";
import { useNavigate } from "react-router-dom";
import Notifications from "../../Component/Notifications";
const DbTopNav = ({ clickedItem, setShowComp }) => {
  let [user, setUser] = useState({
    name: "Helen Chinweike",
    notifications: 2,
    icon: currentUserIcon,
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
        <img src={currentUserIcon} alt="current User" />
        <button className="dropDown" onClick={(e) => setToggle(true)}>
          {user.name.split(" ")[0]}{" "}
          <img
            className="dropDown"
            onClick={(e) => setToggle(true)}
            src={dropDownIcon}
            alt="drop down"
          />{" "}
        </button>
      </div>
      {toggle && (
        <MainDbDropdown
          setShowComp={setShowComp}
          toggle={toggle}
          user={user}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default DbTopNav;
