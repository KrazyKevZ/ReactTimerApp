var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link"  activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/Countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
          <ul className="menu">
            <li className= "menu-text">Created by Kevin Macasaet</li>
          </ul>
    </div>
  </div>
  );
};

module.exports = Nav;
