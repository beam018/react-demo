import { connect } from 'react-redux'

import React from 'react'

import SerpList from '../components/SerpList'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SerpList results={this.props.results} page={this.props.page} />
    )
  }
}

export default connect(state => {
  return {
    results: state.results.docs,
    page: state.page
  }
})(SearchPage)
