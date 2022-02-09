import s from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
      <div className={s.header_wrapper}>
        <div className={s.header}> </div>
        <div className={s.header_logo}>
          <div className={s.header_title}>OILAMEN TRADE LTD</div>
        </div>
      </div>
  );
};

export default Header;
