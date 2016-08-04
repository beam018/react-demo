import React from 'react';

export default class Logo extends React.Component {
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
