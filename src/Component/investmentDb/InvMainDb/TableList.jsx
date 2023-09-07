import React from "react";
import { useState } from "react";
import { Tlist } from "./tableListData";
import "./tableList.scss";

const TableList = () => {
  let [table, setTable] = useState(Tlist);
  return (
    <div className="table">
      {table.map((each) => {
        return (
          <div key={each.id} className="tr">
            <div className="cell one">
              {" "}
              {each.cell1.item1 ? (
                <>
                  {" "}
                  <img src={each.cell1.item1} alt="icon" />{" "}
                  <span> {each.cell1.item2} </span>{" "}
                </>
              ) : (
                <span> {each.cell1.item2} </span>
              )}{" "}
            </div>
            <div className="cell two">
              {each.cell2.item1 ? (
                <>
                  {" "}
                  <img src={each.cell2.item1} alt="icon" />{" "}
                  <span> {each.cell2.item2} </span>{" "}
                </>
              ) : (
                <span> {each.cell2.item2} </span>
              )}{" "}
            </div>
            <div className="cell three">
              {each.cell3.item1 ? (
                <>
                  {" "}
                  <img src={each.cell3.item1} alt="icon" />{" "}
                  <span> {each.cell3.item2} </span>{" "}
                </>
              ) : (
                <span> {each.cell3.item2} </span>
              )}{" "}
            </div>
            <div className="cell four">
              {each.cell4.item1 ? (
                <>
                  {" "}
                  <img src={each.cell4.item1} alt="icon" />{" "}
                  <span> {each.cell4.item2} </span>{" "}
                </>
              ) : (
                <span> {each.cell4.item2} </span>
              )}{" "}
            </div>
            <div className="cell five">
              {each.cell5.item1 ? (
                <>
                  {" "}
                  <img src={each.cell5.item1} alt="icon" />{" "}
                  <span> {each.cell5.item2} </span>{" "}
                </>
              ) : (
                <span> {each.cell5.item2} </span>
              )}{" "}
            </div>
            <div className="cell si6">
              {each.cell6.item1 ? (
                <>
                  {" "}
                  <img src={each.cell6.item1} alt="icon" />{" "}
                  <span> {each.cell6.item2} </span>{" "}
                </>
              ) : (
                <span id="detail"> {each.cell6.item2} </span>
              )}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableList;
