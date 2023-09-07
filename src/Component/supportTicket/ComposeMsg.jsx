import React from "react";
import closeIcon from "/closeIcon.svg";
import "./ComposeMsg.scss";
const ComposeMsg = ({ close }) => {
  return (
    <div className="shadow">
      <div className="mainContent">
        <div className="line1">
          <img
            src={closeIcon}
            alt="close pop up"
            onClick={(e) => close(false)}
          />
        </div>
        <div className="line2">
          <p className="msgBold">New Message</p>
          <p className="infoSmall">
            Sharing more details will increase your chances of receiving a reply
          </p>
        </div>
        <form
          className="line3"
          onSubmit={(e) => {
            e.preventDefault(e);
            close(false);
          }}
        >
          <fieldset>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter a subject line"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type something"
            ></textarea>
          </fieldset>
          <fieldset className="btns">
            <button className="send" type="submit">
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ComposeMsg;
