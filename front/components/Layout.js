import { connect } from 'react-redux'

import React from 'react';

import Header from './Header';
import Footer from './Footer';

import SerpList from './SerpList';

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  getChildContext() {
    const props = this.props;

    return {
      q: props.q
    }
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header/>
        <SerpList results={this.props.results}/>
        <Footer/>
      </div>
    );
  }
}

Layout.childContextTypes = {
  q: React.PropTypes.string
}

export default connect(state => {
  return {
    results: state.results.docs,
    count: state.results.count,
    q: state.query
  }
})(Layout)
