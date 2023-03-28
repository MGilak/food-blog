import React, { useEffect, useState, useRef } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { data } from "./../data";

function Header() {
  const [activeElement, setActiveElement] = useState(1);
  const [animOff, setAnimOff] = useState(false);

  setTimeout(() => {
    setAnimOff(!animOff);
  }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement(activeElement + 1);
      if (activeElement === 4) {
        setActiveElement(1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeElement]);

  return (
    <div className="header">
      <div className="header_body">
        <div className="header_body_top">
          <div className="header_body_images">
            {data.map((d) => (
              <img
                className={activeElement === d.id ? "show" : ""}
                src={d.img}
                alt="piza"
              />
            ))}
          </div>

          <div className="header_body_title">
            <h1 className={animOff ? "animoff" : ""}>
              {data[activeElement - 1].name}
            </h1>
          </div>

          <div className="header_body_details">
            <h5>Overview</h5>
            <div className="rate">
              <h2 className={animOff ? "animoff" : ""}>
                {data[activeElement - 1].rate}
              </h2>
              <BsFillStarFill />
            </div>
            <div className={animOff ? "food_detail animoff" : "food_detail"}>
              <p className="chef">{data[activeElement - 1].chef}</p>
              <p className="chef_desc">{data[activeElement - 1].chef_desc}</p>
              <p className="food_desc">{data[activeElement - 1].food_desc}</p>
            </div>
            <div className="food_like">
              <div className="food_like_item">
                <FiThumbsUp />
              </div>
              <div className="food_like_item">
                <FiThumbsDown />
              </div>
            </div>
          </div>
        </div>
        <div className="header_body_bottom">
          <div className="background"></div>
          {data.map((d) => (
            <div
              key={d.id}
              className={activeElement === d.id ? "item active" : "item"}
            >
              <img src={d.img} alt="food" />
              <p>{d.name}</p>
            </div>
          ))}
          <div className="menu">
            <ul>
              <li>Menu</li>
              <li>order</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
