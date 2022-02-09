import s from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_logo}>
        <img src={logo}></img>
      </div>
      <div className={s.header_email}>info@oilamentrade.com</div>
    </div>
  );
};

export default Header;
