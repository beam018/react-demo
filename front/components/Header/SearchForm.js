import { connect } from 'react-redux'

import React from 'react';

import { updateQuery } from '../../actions/queryActions'
import { debounce } from 'lodash'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange(e) {
    // TODO: add debounce
    this.props.dispatch(updateQuery(e.target.value))
  }

  render() {
    return (
      <div className='search'>
        <form action='/search' method='GET' className='search__form'>
          <input
            type='text'
            name='query'
            className='search__input'
            placeholder='Rounded illustration with mountain'

            value={this.props.query}
            onChange={this.onChange.bind(this)}
          />

          <button className='search__btn'></button>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return { query: state.query }
})(SearchForm)
