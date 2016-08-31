import { connect } from 'react-redux'

import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout
