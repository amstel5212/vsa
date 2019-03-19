import { Component, Fragment } from 'react';

function Str() {
  return <div>Welcome to next.js!</div>;
}

class Home extends Component {
  componentDidMount() {
    fetch('/users');
    // TODO:
    // Should be proxied to http://localhost:1337 by nginx
  }
  render() {
    return (
      <Fragment>
        {Str()}
      </Fragment>
    );
  }
}

export default Home;
