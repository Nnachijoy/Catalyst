import React, { useState, useEffect } from "react";
import Component1 from "../Component1"; // Import Component1
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Mysidebar from "../mysidebar/Mysidebar";
import "./maindb.scss";
import DbTopNav from "./DbTopNav";

function DB() {
  let [showComp, setShowComp] = useState(<Component1 />);
  let [clickedItem, setClikedItem] = useState({ id: 1, item: "Dashboard" });
  let [width, setWidth] = useState({
    sidebar: "15vw",
    main: "66.5vw",
    leftbar: "17vw",
  });
  useEffect(() => {
    if (clickedItem.id != 1) {
      setWidth({
        sidebar: "15vw",
        main: "83.5vw",
        leftbar: "",
      });
    } else {
      setWidth({
        sidebar: "15vw",
        main: "66.5vw",
        leftbar: "17vw",
      });
    }
  }, [clickedItem]);
  return (
    <div
      className="myDB"
      style={{
        gridTemplateColumns: `${width.sidebar} ${width.main} ${width.leftbar} `,
      }}
    >
      <div className="Sidebar">
        {" "}
        <Mysidebar
          setShowComp={setShowComp}
          setClikedItem={setClikedItem}
          clickedItem={clickedItem}
        />{" "}
      </div>
      <div className="MainContent">{showComp}</div>
      {clickedItem.id === 1 && <div className="Leftbar"></div>}
      <DbTopNav setShowComp={setShowComp} clickedItem={clickedItem} />
    </div>
  );
}

export default DB;
