import React from 'react';
import Nav from 'nav';

export default class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <Nav/>
        <h2>React App Boilerplate</h2>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
          </div>
        </div>

      </div>

    );
  }
}
