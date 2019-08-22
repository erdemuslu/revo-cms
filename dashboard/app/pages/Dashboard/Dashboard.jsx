import React, { useState } from 'react';
// import axios from 'axios';

import Editor from '../../components/Editor/Editor';
import Posts from '../../components/Posts/Posts';

const Dashboard = () => {
  const [name] = useState(sessionStorage.getItem('email') || '');

  return (
    <div role="main">
      <h4>
        Welcome
        { ' ' }
        { name }
      </h4>
      <Editor />
      <Posts />
    </div>
  );
};

export default Dashboard;
