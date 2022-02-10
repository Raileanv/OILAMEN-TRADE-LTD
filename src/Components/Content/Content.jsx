import s from "./Content.module.css";
import React from "react";
import ship from "./ship.png";
import {Carousel} from "react-carousel-minimal";
import weiweis from "../Header/weiweis.jpeg";
import wheat_grain from "../Header/wheat_grain.jpeg";
import milling_wheat from "../Header/Milling-wheat.jpeg";
import barley from "../Header/barley.jpeg";
import yellow_corn from "../Header/yellow_corn.jpeg";
import futer from "../Futer/futer.png";

const Content = () => {
  const data = [
    {
      image: weiweis,
      caption: "SUNFLOWER SEEDS"
    },
    {
      image: wheat_grain,
      caption: "FEED WHEAT"
    },
    {
      image: milling_wheat,
      caption: "MILLING WHEAT"
    },
    {
      image: barley,
      caption: "FEED BARLEY"
    },
    {
      image: yellow_corn,
      caption: "YELLOW CORN"
    }
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#fff',

  }


  return (
      <>

        <div className={s.content}>

          <div className={s.content_center}>
            <div className={s.adress}>
              <div className={s.email_block}>
                <h4>Email:</h4>
                <a href="mailto: info@oilamentrade.com"   target="_blank">info@oilamentrade.com</a>
              </div>
              <div className={s.adress_block}>
                <h4>Address:</h4>
                <h5>
                  <strong>OILAMEN TRADE LTD</strong>
                </h5>
                <p className={s.adress_text}>United Kingdom, London,<br/> W1G 0JR 13 John Prince's Street, 2nd</p>
              </div>
              <div className={s.qr}>
                <img src={futer}></img>
              </div>
            </div>
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

            <br/>
            <br/>
            <br/>
            <div className={s.products}>
              <h2>Our Products</h2>
              <span className={s.tbk_symbol}>
                <span></span>
              </span>
              <Carousel
                  data={data}
                  time={2000}
                  width="850px"
                  height="500px"
                  captionPosition="center"
                  automatic={true}
                  captionStyle={captionStyle}
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                    fontSize: '1rem'
                  }}
              />
            </div>

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
            <br/>
            <br/>
            <br/>
            <img src={ship}></img>
            <p>
              We are always open for a new handshake or even a hug, because every
              shipment that we supply contains kindness and warmth of the lands and
              people where it has grown.
            </p>
            <br/>
            <br/>
            <br/>
            <div className={s.products}>
              <span className={s.tbk_symbol}>
                <span></span>
              </span>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </>

  );
};

export default Content;
