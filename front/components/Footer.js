import React from 'react'

import { Link } from 'react-router'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // TODO: move to data
    const linksData = [
      { url: '/about', text: 'About' },
      { url: '/contact', text: 'Contact' },
      { url: '/terms', text: 'Terms' },
      { url: '/privacy', text: 'Privacy' },
      { url: '/blog', text: 'Blog' },
    ]

    const links = linksData.map((item, idx) => {
      return (<Link to={item.url} key={idx}>{item.text}</Link>)
    })

    return (
      <footer>
        <div className='footer-logo'>
          <img src='/img/logo.svg' alt='' />
        </div>

        <nav className='footer-nav'>
          {links}
        </nav>

        <p className='copyright'>Copyright © 2016 SlashPixels. All screenshots © their respective ownres.</p>
      </footer>
    );
  }
}

export default Footer;
