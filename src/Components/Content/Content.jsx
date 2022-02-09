import s from "./Content.module.css";
import futer from "../Futer/futer.png";
import React from "react";
import map from "./Eastern-Europe.webp";
import ship from "./ship.png";

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.content_center}>
        <p>
          <strong>OILAMEN TRADE LTD</strong>
          <br/>
          <br/>
          is a global agricultural commodity
          trading and supplying company from Black Sea Region. Was established
          in London, UK, in the year of 2018 as exporter and supplier of grains,
          sunflower seeds, pulses and derivates.
        </p>
        <p>
          We have strong presence and origination structure in Moldova and
          Ukraine and possessed of strong customer network in the countries of
          Asia and Middle East.
        </p>
        <img src={map}></img>
        <p>
          Our company is a well organized team and with a good planned strategy,
          which provides high professional service to it's partners. Our main
          key of success is that we deal with good and trusted farmers directly,
          our export process is combined with the work of the first class
          international survey companies thus we have constant quality control
          of the goods that we trade.
        </p>
        <p>
          A big role in our work is devoted to logistics and here we 24 hours
          and 7 days a week supervise our shipments, keep in touch with the
          shipping lines and shipowners, in this way, our shipments are
          delivered in time and in the maximum short period.
        </p>
        <img src={ship}></img>
        <p>
          We are always open for a new handshake or even a hug, because every
          shipment that we supply contains kindness and warmth of the lands and
          people where it has grown.
        </p>
      </div>
    </div>
  );
};

export default Content;
