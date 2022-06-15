import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { motion, AnimatePresence } from "framer-motion";
import {
    Button,
  } from "react-bootstrap"
  
import { FaList } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { GiCorn } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
import Search from "../Search";
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";
import { useState } from "react";


const Sidebar = ({ data, setSearchName}) => {

  console.log('setSearchName:', setSearchName)
  const [modalShow, setModalShow] = useState(false);
  const closeModal = () => setModalShow(false);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
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
                <p className="cornIcon">
                  <GiCorn />
                </p>
              ) : (
                <p className="cornAndText">
                  <GiCorn /> Cropify
                </p>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square"></Menu>
            <Search setSearchName = {setSearchName}/>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
