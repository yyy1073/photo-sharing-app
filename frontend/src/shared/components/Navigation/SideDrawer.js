import React from "react";
import reactDOM from "react-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return reactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
