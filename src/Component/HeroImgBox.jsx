import React from "react";
import "./heroImgBox.scss";
// import flag from "/flag.svg";
// import waveImg from "/waveImg.svg";
import flag from "../assets/flag.svg";
import waveImg from "../assets/waveImg.svg";
const HeroImgBox = () => {
  return (
    <div className="heroImgBox">
      <div className="Card">
        <div className="line1">
          <img src={flag} alt="flag" />
          <span className="title">Portfolio</span>
        </div>
        <div className="line2">
          <span className="num">122,637</span>
          <span className="gray">From last 7 days</span>
        </div>
        <div className="line3">
          <span className="num2">$ 122,637</span>
          <span className="text">Average Price Target</span>
        </div>
      </div>
      <div className="Card1">
        <img src={waveImg} alt="image" />
      </div>
    </div>
  );
};

export default HeroImgBox;
