
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import uuid from 'react-uuid';
import MenuItems from './data/MenuItems';
import Home from './components/Home';
import Login from './components/Login';
import BootstrapHeader from './components/BootstrapHeader';
import AdoptaGato from './components/AdoptaGato';
import Ajustes from './components/Ajustes';

function App() {

  return (
    <div id="fondo">
      <Router>
        <Switch>
          {MenuItems.map((item, index) => {
            return (<Route exact={item.defaultRoute} path={item.path}>{item.componentSite}</Route>);
          })}
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
