import React, { useEffect, useState } from "react";
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(
    // Get the initial selected index from localStorage or URL parameters
    () => {
      const storedIndex = localStorage.getItem("sidebarSelectedIndex");
      const urlPath = window.location.pathname;

      if (storedIndex) {
        return parseInt(storedIndex); // Convert stored string to number
      } else if (urlPath === "/") {
        return 0; // Default to "Dashboard" for root path
      } else {
        // Logic to determine selected index based on URL path (if needed)
        return 1; // Assuming the second item is for other paths
      }
    }
  );

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  useEffect(() => {
    // Store the selected index in localStorage for persistence
    localStorage.setItem("sidebarSelectedIndex", selected);
  }, [selected]);

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            EN<span>T</span>NT
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />



<span>
  {item.heading === "Dashboard" ? (
    <Link to="/" className="linkpages">{item.heading}</Link>
  ) : (
    <Link to={`/${item.heading}`} className="linkpages">{item.heading}</Link>
  )}
</span>

              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
