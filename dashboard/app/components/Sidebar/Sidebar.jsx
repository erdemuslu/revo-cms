import React from 'react';

// load components
import Logo from '../Logo/Logo';

const Sidebar = () => {
  console.log('sidebar');

  return (
    <div role="main" className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <div className="sidebar__profile">
          <h4>usluerdem@yandex.com</h4>
          <h5>admin</h5>
        </div>
      </div>
      <div className="sidebar-content">
        <h4>POSTS</h4>
        <div className="list">
          <div className="list-item">
            Post title
          </div>
          <div className="list-item">
            Post title
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
