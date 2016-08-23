import React from 'react'

// import { debounce } from 'lodash'
import { browserHistory } from 'react-router'

import { querySubmit, queryChange } from '../../actions/queryActions'
import { resultsUpdate } from '../../actions/resultsActions'

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange(e) {
    // TODO: add debounce
    this.props.dispatch(queryChange(e.target.value))
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.dispatch([
      querySubmit(),
      resultsUpdate(this.props.text)
    ])

    this.changeLocation()
  }

  changeLocation() {
    browserHistory.push({
      pathname: '/search',
      query: {
        query: this.props.text
      }
    })
  }

  render() {
    return (
      <div className='search'>
        <form action='/' method='GET' className='search__form' onSubmit={this.onSubmit.bind(this)}>
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
    )
  }
}
