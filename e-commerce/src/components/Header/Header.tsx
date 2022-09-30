import React from "react";
import Menu from "./menu";
import TopBar from "./topBar";

const Header = () => {
  return (
    <React.Fragment>
      <TopBar />
      <Menu />
    </React.Fragment>
  );
};

export default Header;
