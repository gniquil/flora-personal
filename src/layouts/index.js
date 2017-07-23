import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title="Flora Liu's Personal Website"
          meta={[
            { name: 'description', content: "Flora Liu's personal website" },
            { name: 'keywords', content: 'Flora Liu, Art, Illustration' },
          ]}
        />
        <main>
          {this.props.children()}
        </main>
      </div>
    );
  }
}
