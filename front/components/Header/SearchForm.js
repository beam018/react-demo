import { connect } from 'react-redux'

import React from 'react';

import { querySubmit, queryChange } from '../../actions/queryActions'
import { debounce } from 'lodash'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange(e) {
    // TODO: add debounce
    this.props.dispatch(queryChange(e.target.value))
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.text && this.props.dispatch(querySubmit())
  }

  render() {
    return (
      <div className='search'>
        <form action='/search' method='GET' className='search__form' onSubmit={this.onSubmit.bind(this)}>
          <input
            type='text'
            name='query'
            className='search__input'
            placeholder='Rounded illustration with mountain'

            value={this.props.text}
            onChange={this.onChange.bind(this)}
          />

          <button className='search__btn'></button>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return { text: state.query.text }
})(SearchForm)
