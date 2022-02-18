import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import TestModal from './components/test/TestModal';

import Add from './components/answer/Add';
import Edit from './components/answer/Edit';
import List from './components/answer/List';
import Read from './components/answer/Read';

import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import Mypage from './components/user/Mypage';

function App({ history }) {
  const [signinStatus, setSigninstatus] = useState({
    isSignin: false,
    userInfo: null,
  });

  const { isSignin, userInfo } = signinStatus;

  //로그인 성공시 사용자정보와 로그인 상태변경해줘야함
  // path insert page로 이동 설정

  const handleSigninSuccess = () => {
    console.log('checking');
    axios
      .get('http://localhost:5000//users/:userid', {
        'Content-Type': 'application/json',
      })
      .then(res => console.log(res));
  };

  // 회원탈퇴 처리, 로그인 상태 변경해줘야 함
  // 랜딩페이지로 이동

  const handleDelete = () => {
    console.log('delete checking');
    axios
      .post('http://localhost:5000/users/:userid/delete', {
        'Content-Type': 'application/json',
      })
      .then(() => history.push('/'));
  };
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Signin handleSigninSuccess={handleSigninSuccess} />
        </Route>
        <Route exact path="/signup" component={Signup} />
        <Route exact paht="test/modal" component={TestModal} />
        <Route exact path="/users">
          <Mypage handleDelete={handleDelete}></Mypage>
        </Route>
      </Switch>
    </div>
  );
}
export default withRouter(App);
