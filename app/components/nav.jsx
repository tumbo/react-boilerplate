import React from 'react';
import { Link, IndexLink } from 'react-router';
// same as...
// var Link = require('react-router').Link
export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Nav Menu</li>
          </ul>
        </div>

      </div>
    );
  }
}
