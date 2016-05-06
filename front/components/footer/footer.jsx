import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className='footer-logo'>
          <img src='/img/logo.svg' alt='' />
        </div>

        <nav className='footer-nav'>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Terms</a>
          <a href='#'>Privacy</a>
          <a href='#'>Blog</a>
        </nav>

        <p className='copyright'>Copyright © 2016 SlashPixels. All screenshots © their respective ownres.</p>
      </footer>
    );
  }
}

export default Footer;
