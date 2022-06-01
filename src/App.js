
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

function App() {

  return (
    <div id="fondo">
      <nav>
        <BootstrapHeader/>
      </nav>
     <Router>
        {MenuItems.map(function showRoutes(item){
        return (<Route path={item.path} key={uuid()} exact={item.defaultRoute}>{item.componentSite}</Route>);
      })}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>

    </Router>
    </div>
  );
}

export default App;
