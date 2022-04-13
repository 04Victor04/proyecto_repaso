
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import uuid from "react-uuid";
import Header from './components/Header.jsx';
import BootstrapHeader from './components/BootstrapHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <Router>
      <nav>
        <Header/>
        <BootstrapHeader/>
        {/*<ul>
          {MenuItems.map((item,index)=>{
            return( <li key={uuid()}><Link to={item.path}>{item.text}</Link></li>);
          })}
        </ul>
        {MenuItems.map(function creaRoute(item,index){
            return( <Route path={item.path} key={uuid()} exact={item.defaultRoute}> {item.componentSite}</Route>);
          })}
        */}
      </nav>
    </Router>
  );
}

export default App;
