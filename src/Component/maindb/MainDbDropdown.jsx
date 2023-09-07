import React from "react";
import { useEffect } from "react";
import { dropdownData } from "./dropdownData";
import "./maindbdropdown.scss";

const MainDbDropdown = ({ user, setToggle, toggle, setShowComp }) => {
  useEffect(() => {}, [toggle]);
  window.addEventListener("click", (e) => {
    if (toggle) {
      if (!String(e.target.className).includes("dropDown")) {
        setToggle(false);
      }
    }
  });
  return (
    <div className="MainDbDropdwon">
      <div className="line1">
        <img src={user.icon} alt={user.name} />
        <div className="cell">
          <span className="name"> {user.name} </span>
          <span className="position"> {user.position} </span>
        </div>
      </div>
      <hr />

      {dropdownData.map((data) => {
        return data.map((each) => {
          if (!each.hr) {
            return (
              <div
                onClick={(e) => {
                  setToggle(false);
                }}
                key={each.id}
                className={each.block}
              >
                <div
                  onClick={() => setShowComp(each.component && each.component)}
                  className={each.line}
                >
                  <img src={each.img} alt={each.text} />
                  <span className="text"> {each.text} </span>
                </div>
              </div>
            );
          } else {
            return <div key={each.id}> {each.hr} </div>;
          }
        });
      })}
    </div>
  );
};

export default MainDbDropdown;
