import React, { ReactNode, useEffect, useState } from "react";
import TabPane from "./Tabpanel";

interface TabProps {
  children: ReactNode;
  mainColor: string | undefined;
}

const Tabs = ({ children, mainColor }: TabProps) => {
  // const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState<any>({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const headers: any = [];
    const childCnt: any = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [children]);

  const changeTab = (name: any) => {
    setActive(name);
  };

  return (
    <React.Fragment>
      <div className="tabs">
        <ul className="tab-header">
          {tabHeader.map((item) => (
            <li
              onClick={() => changeTab(item)}
              key={item}
              className={item === active ? "active" : ""}
              style={{ backgroundColor: item === active ? mainColor : "#eee" }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {Object.keys(childContent).map((key, index) => {
            if (key === active) {
              return (
                <div className="tab-child" key={index}>
                  {childContent[key]}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tabs;
