import React, { useState } from 'react';
import '../../styles/main.scss';
import { withRouter } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onClick = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="logo-container">
        <div>header</div>
      </div>
      <div className="userinfo-container">
        <div className="email">Email:</div>
        <input type="email" placeholder="Email" required />
        <div className="nickname">Nickname:</div>
        <input type="nickname" placeholder="Nickname" required />
        <div className="password">Password:</div>
        <input type="password" placeholder="Password" required />
        <div className="change-password">Change password:</div>
        <input type="password" placeholder="Enter a password to change"></input>
      </div>
      <div className="signup-btn">
        <button>Signup</button>
      </div>
    </div>
  );
};

export default withRouter(Signup);
