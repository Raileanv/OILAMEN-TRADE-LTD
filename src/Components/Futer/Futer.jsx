import React from "react";
import s from "./Futer.module.css";
import futer from "./futer.png";

const Futer = () => {
  return (
    <div className={s.futer_wrapper}>
        <div className={s.futer}>
          <div className={s.adress}>
              <h4>Email:</h4>
              <a href="mailto: info@oilamentrade.com"   target="_blank">info@oilamentrade.com</a>
            <h4>Address:</h4>
            <h5>
              <strong>OILAMEN TRADE LTD</strong>
            </h5>
            <p>United Kingdom, London,<br/> W1G 0JR 13 John Prince's Street, 2nd</p>
          </div>
          <div className={s.qr}>
            <img src={futer}></img>
          </div>
        </div>
    </div>
  );
};

export default Futer;
