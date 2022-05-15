
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
// import List from './pages/List';
// import AddUser from './pages/AddUser';
// import EditUser from './pages/EditUser';



function App() {
  return (
    <div className="App">
         <BrowserRouter>
         
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            {/* <Route  path="/login" component={Login}></Route>
            <Route  path="/register" component={Register}></Route>
            <Route  path="/list" component={UserList}></Route>
            <Route  path="/profile" component={ProfilePage}></Route>
            <Route  path="/editprofile/:id" component={EditProfile}></Route>
             */}
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
