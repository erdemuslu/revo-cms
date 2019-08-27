import React from 'react';
// import axios from 'axios';

import Sidebar from '../../components/Sidebar/Sidebar';
import Editor from '../../components/Editor/Editor';

const Dashboard = () => {
  console.log('dashboard');

  return (
    <div role="main" className="dashboard">
      <Sidebar />
      <div className="dashboard-main" role="main">
        <Editor />
      </div>
    </div>
  );
};

export default Dashboard;
