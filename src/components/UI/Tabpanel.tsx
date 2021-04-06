import React, { ReactNode } from "react";

interface TabPanelProps {
  children: ReactNode;
  name: string;
}

const TabPanel = ({ children }: TabPanelProps) => {
  return <div className="tab-pane">{children}</div>;
};

export default TabPanel;
