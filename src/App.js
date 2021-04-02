import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NoMatch from './NoMatch/NoMatch';
import Order from './components/Orders/Order';
import Admin from './components/Admin/Admin';

import ManageBook from './components/ManageBook/ManageBook';
import AddBook from './components/ManageBook/AddBook';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Deals from './components/Deals/Deals';




export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      
    <Router className="App">
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/order/:id">
          <Header/>
        <strong style={{textAlign: 'center',marginLeft:'45%'}}>{loggedInUser.name}</strong>
           <Order />
        </PrivateRoute>
        <Route path="/deals">
        <Header/>
          <Deals/>
        </Route>
        <Route path="/manage">  
            <ManageBook></ManageBook>        
        </Route>
        <Route path="/add">
            <AddBook></AddBook>
        </Route>
        <Route path="/login">
        <Header/>
        
           <Login />
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route exact path ="/">
            <Home/>
        </Route>
      
      <header className="App-header">
        <Route path="*">
           <NoMatch/>
        </Route>
      </header>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
