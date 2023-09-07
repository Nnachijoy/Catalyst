import React, { useRef } from "react";
import { useState } from "react";
import { testimonies } from "./testData";
import "./testimonies1.scss";
import { FaArrowLeft, FaGreaterThan, FaLessThan } from "react-icons/fa";
import left from "./left.svg";
import right from "./right.svg";
const Testimonies = () => {
  let [testi, setTesti] = useState(testimonies);
  // let [currId, setCurrId] = useState(6);
  let currId = useRef(6);
  function handleClick(id) {
    let curr = {};
    let clicked = {};
    // setCurrId(id);
    currId.current = id;

    // console.log(id);
    testi.forEach((each) => {
      if (each.id === id) {
        // get clicked
        clicked.img = each.img;
        clicked.testimony = each.testimony;
        clicked.name = each.name;
      }
      // get current
      if (each.id === testi.length) {
        curr.img = each.img;
        curr.testimony = each.testimony;
        curr.name = each.name;
      }
    });

    let toUpd = testi.map((each) => {
      if (each.id === id) {
        // change clicked
        each.img = curr.img;
        each.testimony = curr.testimony;
        each.name = curr.name;
      }

      if (each.id === testi.length) {
        //change current
        each.img = clicked.img;
        each.testimony = clicked.testimony;
        each.name = clicked.name;
      }
      return each;
    });
    // console.log(curr, clicked);

    setTesti(toUpd);
  }

  async function handleGT(direction) {
    /* 
    ALGORITHM TO ACTIVATE IMAGE CHANGE LEFT AND RIGHT: 
    > GET CURRENT IMG ON CARD ID
    > USE THE ID TO GET CURRENT CARD > IMG, TESTIMONEY AND AND NAME
    > INCREAMENT OR DECREAMENT ID BY 1 TO NEXT IMG DETAILS
    > SWAP DETAILS
    > APPLY CHANGES
    > ENSURE THAT IMG ID DOES NOT INCRASE MORE THAN AVAILABLE TESTIMONIES AND DOES NOT GO BELOW 1
    */
    let curProps = {};
    let nextProps = {};
    if (direction === "plus") {
      let presentId, newId;
      if (currId.current < testi.length) {
        currId.current += 1;
        presentId = currId.current - 1;
        newId = currId.current;

        let toUpd = testi.map((each) => {
          if (each.id === testi.length) {
            // get current
            curProps.img = each.img;
            curProps.testimony = each.testimony;
            curProps.name = each.name;
            curProps.id = each.id;
          }
          if (each.id === newId) {
            // get next
            nextProps.img = each.img;
            nextProps.testimony = each.testimony;
            nextProps.name = each.name;
            nextProps.id = each.id;
          }
          return each;
        });
        let toUpd1 = toUpd.map((each) => {
          if (each.id === nextProps.id) {
            //change next
            each.img = curProps.img;
            each.testimony = curProps.testimony;
            each.name = curProps.name;
          }
          if (each.id === curProps.id) {
            //change current
            each.img = nextProps.img;
            each.testimony = nextProps.testimony;
            each.name = nextProps.name;
          }
          return each;
        });
        setTesti(toUpd1);
      }
    }

    if (direction === "minus") {
      let presentId = 0;
      let newId = 1;
      if (currId.current > 1) {
        currId.current -= 1;
        presentId = currId.current + 1;
        newId = currId.current;

        let toUpd = testi.map((each) => {
          if (each.id === testi.length) {
            // get current
            curProps.img = each.img;
            curProps.testimony = each.testimony;
            curProps.name = each.name;
            curProps.id = each.id;
          }
          if (each.id === newId) {
            // get next
            nextProps.img = each.img;
            nextProps.testimony = each.testimony;
            nextProps.name = each.name;
            nextProps.id = each.id;
          }
          return each;
        });
        var toUpd1 = toUpd.map((each) => {
          if (each.id === nextProps.id) {
            //change next
            each.img = curProps.img;
            each.testimony = curProps.testimony;
            each.name = curProps.name;
          }
          if (each.id === curProps.id) {
            //change current
            each.img = nextProps.img;
            each.testimony = nextProps.testimony;
            each.name = nextProps.name;
          }
          return each;
        });
        setTesti(toUpd1);
      }
    }
  }
  return (
    <div className="Testimonies">
      <h1>Testimonies</h1>
      <p className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="board">
        {testi.map((each) => {
          return (
            <div className={each.class} key={each.id}>
              <img
                onClick={(e) => handleClick(each.id)}
                src={each.img}
                alt={each.name}
              />
            </div>
          );
        })}
        <div className={"testiCard"}>
          <img
            className="img"
            src={testi[testi.length - 1].img}
            alt={testi[testi.length - 1].name}
          />
          <p>{testi[testi.length - 1].testimony}</p>
          <h6>{testi[testi.length - 1].name}</h6>
          {/* <FaGreaterThan onClick={() => handleGT("plus")} className="plus" />
          <FaLessThan onClick={() => handleGT("minus")} className="minus" /> */}
          <div onClick={() => handleGT("plus")} className="plus">
            <img src={right} alt="right" />
          </div>
          <div onClick={() => handleGT("minus")} className="minus">
            {" "}
            <img src={left} alt="left" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
