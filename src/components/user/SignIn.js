import React, { useState } from 'react';
import '../../styles/main.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onClick = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo">Logo Image</div>
      </div>
      <div className="signin-container">
        <div className="email-container">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
            required
          ></input>
        </div>
        <div className="password-container">
          <input
            type="password"
            name="pasword"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
            required
          ></input>
        </div>
        <div className="signin-btn-container">
          <button onClick={onClick}>signin</button>
        </div>
        <hr></hr>
      </div>
      <div className="social-container">
        <span className="social-icon">소셜 아이콘</span>
        <span className="move-social">소셜페이지로</span>
      </div>

      <div className="signup-info-container">
        <span className="signup-info">계정이 없으신가요?</span>
        <span className="move-signups">가입하기</span>
      </div>
    </div>
  );
};

export default SignIn;
