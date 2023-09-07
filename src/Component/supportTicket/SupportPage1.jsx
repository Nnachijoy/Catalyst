import React from "react";
import { useState } from "react";
import ComposeMsg from "./ComposeMsg";
import Conversations from "./Conversations";
import { messages } from "./messages";
import "./supportPage1.scss";
import searchIcon from "/searchIcon.svg";
import stateColor from "/stateColor.svg";
import Attach from "/Attach.svg";
import sendMsg from "/sendMsg.svg";
const SupportPage1 = () => {
  let [close, setClose] = useState(false);
  let [msg, setMsg] = useState(messages);
  let [msgClickedId, setMsgClickedId] = useState(-1);
  let [userObj, setUserObj] = useState(false);

  function handleChatClick(id) {
    setMsgClickedId(id);
    let showMsg = msg.filter((each) => each.id === id);
    setUserObj(showMsg);
    let upd = msg.map((each) => {
      if (each.id === id) {
        each.active = "#F6F6F6";
      } else {
        each.active = "";
      }
      return each;
    });
    setMsg(upd);
  }
  return (
    <section className="supportPage1">
      <h1>Support Ticket</h1>
      <div className="section1">
        <div className="smallBox">
          <div className="line1" onClick={(e) => setClose(true)}>
            <p>Compose Message</p>
          </div>
          <div className="line2">
            <label htmlFor="search">
              <img src={searchIcon} alt="search icon" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder={"Search"}
              />
            </label>
          </div>
          <div className="line3">
            {msg.length > 0 &&
              msg.map((each) => {
                return (
                  <div
                    className={`chat`}
                    style={{ backgroundColor: each.active }}
                    key={each.id}
                    onClick={(e) => handleChatClick(each.id)}
                  >
                    <div className="boxa">
                      <img src={each.img} alt={each.name} className="icon" />
                      <img
                        src={stateColor}
                        alt="stateColor"
                        className="stateColor"
                      />
                    </div>
                    <div className="boxb">
                      <div className="lineA">
                        <p className="name"> {each.name} </p>
                        <p className="time"> {each.time} </p>
                      </div>
                      <div className="lineB">
                        <p className="msg"> {each.msg} </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            {msg.length <= 0 && <div className="no-msg"> No Message Yet </div>}
          </div>
        </div>
        <div className="bigBox">
          {msgClickedId > 0 && (
            <Conversations userObj={userObj} id={msgClickedId} />
          )}
          {msgClickedId < 0 && (
            <div className="no-msg">
              <p className="h3">No Message selected</p>
              <p className="h6">
                Select a message and see all conversation here
              </p>
            </div>
          )}
        </div>
      </div>
      {close && <ComposeMsg close={setClose} />}
      {/* <form className="line-3">
        <fieldset>
          <input
            type="text"
            name="type-msg"
            id="type-msg"
            placeholder="Type something..."
          />
          <button className="attach">
            {" "}
            <img src={Attach} alt="add file" />{" "}
          </button>
          <button className="send">
            {" "}
            <img src={sendMsg} alt="send message" />{" "}
          </button>
        </fieldset>
      </form> */}
    </section>
  );
};

export default SupportPage1;
