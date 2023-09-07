import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyInvsidebar from "../InvSidebar/InvSidebar";
import "./Invmaindb.scss";
import InvDbTopNav from "./InvDbTopNav";
import Investment from "./Investment";

function InvMainDb() {
  let [showComp, setShowComp] = useState(<Investment />);
  let [clickedItem, setClikedItem] = useState({ id: 1, item: "Dashboard" });
  let [width, setWidth] = useState({
    sidebar: "15vw",
    main: "83.5vw",
    leftbar: "",
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
        main: "83.5vw",
        leftbar: "",
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
        <MyInvsidebar
          setShowComp={setShowComp}
          setClikedItem={setClikedItem}
          clickedItem={clickedItem}
        />{" "}
      </div>
      <div className="MainContent">{showComp}</div>
      {clickedItem.id === 1 && <div className="Leftbar"></div>}
      <InvDbTopNav setShowComp={setShowComp} clickedItem={clickedItem} />
    </div>
  );
}

export default InvMainDb;
