
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItems } from './data/MenuItems';
import BootstrapHeader from './components/BootstrapHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div id="fondo">
    <Router>
      <BootstrapHeader />
      
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
    </div>
  );
}

export default App;
