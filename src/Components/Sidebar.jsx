import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <BsX />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/product">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
