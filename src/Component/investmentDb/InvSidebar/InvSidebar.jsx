import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../InvSidebar/InvSidebar.scss";
import { sidebarList } from "../InvSidebar/InvSidebarData";
import sidebarLog from "/sidebarLogo.svg";
import Logout from "/Logout.svg";
import applicationIcon from "/applicationIcon.svg";
import { useEffect } from "react";
const MyInvsidebar = ({ setShowComp, setClikedItem, clickedItem }) => {
  let redir = useNavigate();
  let [lists, setLists] = useState(sidebarList); // using state to enable easy update
  useEffect(() => {}, [clickedItem]);
  function handleActive(id) {
    let upd = lists.map((list) => {
      if (list.id === id) {
        list.active = "clicked"; //set active class on click
        setShowComp(list.content);
      } else {
        list.active = ""; // remove active class if not clicked
      }
      return list; // returns changes to upd
    });
    setLists(upd); // applying changes to lists
  }
  return (
    <div className="Mysidebar">
      <div className="logo" onClick={() => redir("/maindb")}>
        <img src={sidebarLog} alt="logo" />
      </div>
      <div className="sidebar-list">
        {
          // showing sibarList items
          lists.map((list) => {
            return (
              <div
                onClick={(e) => {
                  handleActive(list.id);
                  setClikedItem({ item: list.name, id: list.id });
                }}
                className={`List`}
                id={list.active}
                key={list.id}
              >
                <span className="icon"> {list.icon} </span>
                <span> {list.name} </span>
              </div>
            );
          })
        }
      </div>
      <div className="logout">
        <div className="line">
          <img src={Logout} alt="logout" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default MyInvsidebar;
