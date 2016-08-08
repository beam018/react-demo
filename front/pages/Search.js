import React from 'react'

import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import SerpList from '../components/SerpList'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        <SerpList results={this.props.results}/>
        <Footer/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    results: state.results.docs
  }
})(Search)
