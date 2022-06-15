import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

import {RiStockLine} from "react-icons/ri"
import Search from "../Search";
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";
import { useState } from "react";


const Sidebar = ({ data, setSearchName}) => {

  const [menuCollapse, setMeunCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMeunCollapse(false) : setMeunCollapse(true);
  };

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logoText">
              {menuCollapse ? (
                <p className="stockIcon">
                  <RiStockLine />
                </p>
              ) : (
                <p className="stockText">
                  <RiStockLine /> Stock Portfolio
                </p>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Search setSearchName = {setSearchName}/>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
