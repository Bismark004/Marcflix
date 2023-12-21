import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../Images/Icons/tv.png';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <header>
        <div className="logo-text">
          <div className="logo-icon">
            <img src={Logo} alt='logo' />
          </div>
          <div className="logo-text">
            <h1>Marcflix</h1>
          </div>
        </div>
      </header>
      <box-icon
        type='solid'
        name='chevron-left-circle'
        className="chevron-left-circle"
        onClick={toggleSidebar}
      ></box-icon>
    </div>
  );
}

export default Sidebar;
