import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Add from './components/answer/Add';
import Edit from './components/answer/Edit';
import List from './components/answer/List';
import Read from './components/answer/Read';

import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import Mypage from './components/user/Mypage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={Mypage} />
      </Switch>
    </>
  );
}
export default App;
