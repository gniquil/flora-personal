import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import myName from '../my-name.png';
import me from '../me.jpg';
import './home.css';

export default class Index extends React.Component {
  render() {
    return (
      <div className="homepage">
        <header>
          <div className="logo">
            <Link to="/">
              <img src={myName} alt="Flora Liu" />
            </Link>
            <a className="hand-written" href="mailto:floraliu27@gmail.com">
              floraliu27@gmail.com
            </a>
          </div>
        </header>
        <div className="me">
          <div className="bubble hand-written">
            Check out my <Link to="/gallery/">gallery</Link> page.
          </div>
          <div className="please hand-written">Please</div>
          <img src={me} alt="Me" />
        </div>
      </div>
    );
  }
}
