import React, { useState } from 'react';

// load components
import Logo from '../Logo/Logo';

// load icons
import PostIcon from '../Icons/Icons';

const Sidebar = () => {
  const [name] = useState(sessionStorage.getItem('email') || '');

  return (
    <div role="main" className="sidebar">
      <div className="sidebar-header" role="main">
        <Logo />
        <div className="sidebar__profile" role="main">
          <h4>{ name }</h4>
          <h5>admin</h5>
        </div>
      </div>
      <div className="sidebar-content" role="main">
        <div className="sidebar-content__title" role="main">
          <span>
            <PostIcon />
          </span>
          <h4>POSTS</h4>
        </div>
        <div className="list" role="main">
          <div className="list-item" role="main">
            useEffect Kullanimi Uzerine
          </div>
          <div className="list-item" role="main">
            React Hooks ile Animasyon
          </div>
        </div>
      </div>
      <div className="sidebar-footer" role="main">
        <button type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
