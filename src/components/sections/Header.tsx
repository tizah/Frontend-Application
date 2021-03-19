import React, { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./Header.css";

interface HeaderProps {
  onClick: () => void;
  logo: string | undefined;
  headerBgColor?: string | undefined;
}

const Header = ({ onClick, logo, headerBgColor }: HeaderProps) => {
  const history = useHistory();
  return (
    <div
      className="header"
      style={{ backgroundColor: headerBgColor ? headerBgColor : "" }}
    >
      <div className="header__image">
        <img src={logo} alt="innoloft-logo" />
        <div className="mobile-menu" onClick={onClick}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div className="sideContent"></div>
    </div>
  );
};

export default Header;