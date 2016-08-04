import React from 'react';

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href='/' className='logo'>
        <img src='/img/logo.svg' alt='' />
      </a>
    );
  }
}

export default Logo;
