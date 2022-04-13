import React from 'react';
import { Link } from 'react-router-dom';
import  {MenuItems}  from '../data/MenuItems';

import  '../css/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="header-navbar">
        <ul
          className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}
        >
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="navbar-link"
                  onClick={this.changeClicked.bind(this)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Header;