import React, { useState } from 'react';
import axios from 'axios';

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" onKeyUp={handleInput} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" id="password" onKeyUp={handleInput} />
        <br />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
