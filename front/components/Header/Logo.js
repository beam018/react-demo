import React from 'react'
import { Link } from 'react-router'

export default class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to='/' className='logo'>
        <img src='/img/logo.svg' alt='' />
      </Link>
    );
  }
}
