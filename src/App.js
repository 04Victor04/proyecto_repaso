
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import uuid from "react-uuid";
import MenuElements from './data/MenuElements';

function App() {

  return (

    <Router>
      <nav>
        <ul>
          {MenuElements.map((item,index)=>{
            return( <li key={uuid()}><Link to={item.path}>{item.text}</Link></li>);
          })}
        </ul>
        {MenuElements.map(function creaRoute(item,index){
            return( <Route path={item.path} key={uuid()} exact={item.defaultRoute}> {item.componentSite}</Route>);
          })}
        
      </nav>
    </Router>
  );
}

export default App;
