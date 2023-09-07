import React, { useEffect } from "react";
import { useState } from "react";
import "./Conversations.scss";
import stateColor from "/stateColor.svg";
import dots from "/dots.svg";
import Attach from "/Attach.svg";
import sendMsg from "/sendMsg.svg";
const Conversations = ({ userObj, id }) => {
  let [obj, setObj] = useState(userObj[0]);
  useEffect(() => {
    setObj(userObj[0]);
  }, [id]);
  return (
    <div id="conversations">
      <div className="line-1">
        <div className="boxa">
          <div className="img-box">
            <img src={obj.img} alt={obj.name} className="icon" />
            <img src={stateColor} alt="stateColor" className="stateColor" />
          </div>
          <div className="info">
            <div className="name">{obj.name}</div>
            <div className="active">{obj.state}</div>
          </div>
        </div>
        <div className="boxb">
          {" "}
          <img src={dots} alt={"more button"} />{" "}
        </div>
      </div>
      <div className="line-2">
        {obj.chats.map((each, i) => {
          return (
            <div className="chats" key={i}>
              <div className="cell1">
                <img src={each.icon} alt={each.name} />
              </div>
              <div className="cell2">
                <div className="line1">
                  <p className="name">{each.name}</p>
                  <p className="time">{each.time}</p>
                </div>
                <div className="line2">
                  <div>
                    <div>
                      {each.msgs.map((each, i) => {
                        return (
                          <p key={i} className="text">
                            {" "}
                            {each.msg}{" "}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  {each.img.length > 2 ? (
                    <div className="image">
                      <img src={each.img} alt={each.name} />
                    </div>
                  ) : (
                    <></>
                  )}
                  {/* {each.file && <a href={each.file}>Open </a>} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <form className="line-3">
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
      </form>
    </div>
  );
};

export default Conversations;
