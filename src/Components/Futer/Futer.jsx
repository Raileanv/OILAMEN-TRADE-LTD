import React from "react";
import s from "./Futer.module.css";
import futer from "./futer.png";

const Futer = () => {
  return (
    <div className={s.futer}>
      <div className={s.adress}>
        <h3>Address:</h3>
        <h4>
          <strong>OILAMEN TRADE LTD</strong>
        </h4>
        <p>United Kingdom, London, W1G 0JR 13 John Prince's Street, 2nd</p>
      </div>
      <div className={s.qr}>
        <img src={futer}></img>
      </div>
    </div>
  );
};

export default Futer;
