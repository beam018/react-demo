import React from 'react'

import { connect } from 'react-redux'

import Logo from './Header/Logo'
import SearchForm from './Header/SearchForm'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <Logo dispatch={this.props.dispatch} />
        <SearchForm {...this.props} />
      </header>
    )
  }
}

export default connect(state => {
  return { text: state.query.text }
})(Header)
