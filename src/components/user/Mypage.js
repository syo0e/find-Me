import axios from 'axios';
import Reacct, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/main.scss';

const Mypage = ({ handleDelete }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
    password: '',
    changePassWord: '',
  });

  const { email, nickname, password, changePassWord } = inputs;

  const onChnageInput = e => {
    e.preventDefalut();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const rePassword = () => {
    if (!email || !password || !changePassWord) {
      setErrorMessage({ errorMessage: '모든 항목은 필수입니다.' });
    } else {
      axios
        .post(
          'http://localhost:5000/users/:userid/update',
          {
            email: email,
            nickname: nickname,
            password: password,
            changePassWord: changePassWord,
          },
          {
            'Content-Type': 'application/json',
          },
        )
        .then(() => console.log('changed completed'))
        .catch(err => console.log(err));
    }
  };
};

return (
  <>
    <div className="container">
      <form>
        <div>
          <span>Email</span>
          <input
            type="email"
            onChange={onChangeInput}
            name="email"
            value={email}
            required
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="current-password"
            onChange={onChangeInput}
            name="password"
            value={password}
            required
          />
        </div>
        <div>
          <span>Change Password</span>
          <input
            type="new-password"
            placeholder="Enter a password to change"
            onchange={onChangeInput}
            name="changePassword"
            value={changePassWord}
          />
        </div>
        <button
          className="button-change-password"
          type="submit"
          onClick={rePassword}
        ></button>
        <button
          className="button-delete"
          type="submit"
          onClick={handleDelete}
        ></button>
        {errorMessage === '' ? null : (
          <div className="message-info">{errorMessage}</div>
        )}
      </form>
    </div>
  </>
);

export default withRouter(Mypage);
