import React, { FC } from "react";
import { HTMLAttributes } from "react";

import "./SidebarRow.css";

interface SidebarRow {
  iconStyle: HTMLAttributes<HTMLElement>;
  faicon: string;
  title: string;
  isHomePage: boolean;
  onClick: () => void;
}

const SidebarRow = ({
  iconStyle,
  faicon,
  title,
  onClick,
  isHomePage,
}: SidebarRow) => {
  return (
    <div
      className="sidebarrow"
      onClick={onClick}
      style={{ backgroundColor: isHomePage ? "#d7d7d7" : "" }}
    >
      <i className={faicon + " icon"} style={iconStyle}></i>
      <p className="sidebar__title">{title}</p>
    </div>
  );
};

export default SidebarRow;
