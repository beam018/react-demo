import React from 'react'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getContent } from '../actions/pagesActions'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick(page) {
    this.props.dispatch(getContent(page))
  }

  render() {
    return (
      <footer>
        <div className='footer-logo'>
          <img src='/img/logo.svg' alt='' />
        </div>

        <nav className='footer-nav'>
          <Link to='/about' onClick={this.onClick.bind(this, 'about')}>About</Link>
          <Link to='/contacts' onClick={this.onClick.bind(this, 'contacts')}>Contact</Link>
          <Link to='/terms' onClick={this.onClick.bind(this, 'terms')}>Terms</Link>
          <Link to='/privacy' onClick={this.onClick.bind(this, 'privacy')}>Privacy</Link>
          <Link to='/blog' onClick={this.onClick.bind(this, 'blog')}>Blog</Link>
        </nav>

        <p className='copyright'>Copyright © 2016 SlashPixels. All screenshots © their respective ownres.</p>
      </footer>
    );
  }
}

export default connect(state => {
  return { text: state.page }
})(Footer)
