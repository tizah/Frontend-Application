import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { RootState } from "./store";
import Homepage from "./components/pages/Homepage";
import Product from "./components/pages/Product/Product";
import Header from "./components/sections/Header";
import SideNavBar from "./components/sections/Sidebar/SideNavBar";
import { fetchSiteConfig, isLoadingApp } from "./store/actions/ProductAction";

import "./App.css";

import dotenv from "dotenv";

const App: FC = () => {
  dotenv.config();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { siteConfig, isLoading } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();

  const defaultAppId = "1"; //default application id

  useEffect(() => {
    dispatch(isLoadingApp(true));
    console.log({ isLoading }, " is loading");
    const appId = process.env.REACT_APP_ID;
    dispatch(fetchSiteConfig(appId || defaultAppId));

    dispatch(isLoadingApp(false));
    console.log({ isLoading }, " is loading 2");
    return () => {};
  }, [fetchSiteConfig, dispatch]);
  // To start listening for location changes...

  const handleSideBarToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <BrowserRouter>
      {/* Header */}
      <div className="app">
        <Header
          onClick={() => handleSideBarToggle()}
          logo={siteConfig?.logo}
          headerBgColor={siteConfig?.mainColor}
        />
        {/* content */}
        {console.log(siteConfig?.logo, " logo")}
        <div className="app__body">
          <SideNavBar isOpen={isOpen} onClick={() => handleSideBarToggle()} />
          <div className="content">
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/product" component={Product} exact />
            </Switch>
          </div>

          {/* content => Side Nav Bar */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
