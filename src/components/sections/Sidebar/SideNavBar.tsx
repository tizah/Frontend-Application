import React, {useState } from "react";
import { useHistory } from "react-router-dom";

import SidebarRow from "./SidebarRow";

import "./SideNavBar.css";

interface SideNavBarProps {
  isOpen: boolean;
  onClick: () => void;
}

const SideNavBar = ({ isOpen, onClick }: SideNavBarProps) => {
  let [isHomepage, setisHomePage] = useState(false);
  const history = useHistory();
  const styleObj = {
    fontSize: 18,
    color: "",
  };

  const active = {
    backgroundColor: "#d7d7d7",
  };

  // const isLargeScreen = useMediaQuery({
  //   query: "(max-width: 600px) ",
  // });

  const navigate = (path: string) => {
    if (path === "/") {
      history.push("/");
      setisHomePage(true);
    }
    if (path === "/product") {
      history.push("/product");
      setisHomePage(false);
    }
  };

  return (
    <div
      className={isOpen ? "sidenavbarToggle" : "sidenavbar"}
      onClick={onClick}
    >
      {/* also show which button has been clicked */}
      <SidebarRow
        onClick={() => navigate("/")}
        iconStyle={styleObj}
        isHomePage={isHomepage}
        faicon="fa fa-home"
        title={`Home`}
      />
      <SidebarRow
        onClick={() => navigate("/product")}
        iconStyle={styleObj}
        isHomePage={(isHomepage = false)}
        faicon="fa fa-arrow-right"
        title={`Product`}
      />
    </div>
  );
};

export default SideNavBar;
