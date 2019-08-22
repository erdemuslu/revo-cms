import React, { useState } from 'react';
import axios from 'axios';

import formViewData from '../../data/formViewData.json';

const Login = () => {
  // define state for form elements
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // obj
  const funcList = {
    setEmail,
    setPassword,
  };

  const handleInput = (e) => {
    // example output: setEmail, setPassword
    const methodName = `set${e.target.id.charAt(0).toUpperCase()}${e.target.id.slice(1)}`;

    // run setEmail or setPassword and save variable into useState
    funcList[methodName](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/user/login', {
      email,
      password,
    })
      .then(({ data: { token } }) => {
        // save token and userId into sessionStorage
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', email);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div role="main" className="login">
      <form className="form" onSubmit={handleSubmit}>
        {
          formViewData.data.length > 0
            ? formViewData.data.map((item, index) => (
              <div className="form-row" role="grid" key={index.toString()}>
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  placeholder={item.placeholder}
                  onKeyUp={handleInput}
                />
              </div>
            )) : null
        }
        <div className="form-row is-cta" role="grid">
          <button
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
