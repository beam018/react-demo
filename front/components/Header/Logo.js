import React from 'react'

import { Link } from 'react-router'

// TODO: replace for page actions
import { queryChange } from '../../actions/queryActions'

export default class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    this.props.dispatch(queryChange())
  }

  render() {
    return (
      <Link to='/' className='logo' onClick={this.onClick.bind(this)}>
        <img src='/img/logo.svg' alt='' />
      </Link>
    )
  }
}
