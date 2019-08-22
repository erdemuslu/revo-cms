import React, { useState } from 'react';
// import axios from 'axios';

import PostEditor from '../../components/PostEditor/PostEditor';

const Dashboard = () => {
  const [name] = useState(sessionStorage.getItem('email') || '');

  return (
    <div role="main">
      <h4>
        Welcome
        { ' ' }
        { name }
      </h4>
      <PostEditor />
    </div>
  );
};

export default Dashboard;
