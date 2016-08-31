import { connect } from 'react-redux'

import React from 'react'

import SerpList from '../components/SerpList'
import Pagination from '../components/Pagination'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pagination = this.props.nav.amount > 1 ? <Pagination {...this.props.nav} /> : ''

    return (
      <div className='serp-wrapper'>
        <section className='content content_no-bottom-offset' role='main'>
          <SerpList docs={this.props.docs} page={this.props.page} />
        </section>

        {pagination}
      </div>
    )
  }
}

export default connect(state => {
  return {
    docs: state.results.docs,
    page: state.page,
    nav: {
      prev: '',
      next: '',
      current: 4,
      amount: 10
    }
  }
})(SearchPage)
