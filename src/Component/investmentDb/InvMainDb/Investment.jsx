import React from "react";
import "./investment.scss";
import { InvCard } from "./investmentData";
import TableList from "./TableList";
const Investment = () => {
  return (
    <div className="investment">
      <h1>My Dashboard</h1>
      <div className="section1">
        <div className="myCards">
          {InvCard.map((card) => {
            return (
              <div key={card.id} className="Card" style={card.style}>
                <h6 className="title"> {card.title} </h6>
                <p className="total"> {card.total} </p>
                <div className="InvImgs">
                  <img className="img1" src={card.icon1} alt="investor image" />
                  <img className="img2" src={card.icon2} alt="investor image" />
                  <img className="img3" src={card.icon3} alt="investor image" />
                  <span className="more"> {card.icon4} </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="analytics">
          <h5>Analytics</h5>
          <div className="line2">
            <select name="sort" id="sort">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="daily">Daily</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
        </div>
        <div className="application-list">
          <h5>Application List</h5>
          <div className="all">
            <button>See all</button>
          </div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Investment;
