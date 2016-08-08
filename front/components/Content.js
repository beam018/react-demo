import React from 'react'

import { connect } from 'react-redux'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div className='page-content'>{this.props.content}</div>
    );
  }
}

export default connect(state => {
  return {
    content: state.page
  }
})(Content)
