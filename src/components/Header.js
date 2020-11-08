import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="logo-name">Contact Book</h1>
          <Link to="/contacts/add" className="custom-btn">Create Contact</Link>
        </div>
      </header>
    )
  }
}

export default Header;
