import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Content from '../components/Content'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default Page
