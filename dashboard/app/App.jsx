import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    axios.get('/auth/check', {
      headers: {
        'x-access-token': sessionStorage.getItem('token'),
      },
    })
      .then(({ data: { status } }) => {
        setAuth(status === 1);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {
        auth ? <Dashboard /> : <Login />
      }
    </>
  );
};

export default App;
