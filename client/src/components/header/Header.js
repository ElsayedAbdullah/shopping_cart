import React from "react";
import '../../css/Header/Header.css'
import { words } from "../../words";

const Header = () => {
  return <header className="header-footer-style">{words.headerTitle}</header>;
};

export default Header;
