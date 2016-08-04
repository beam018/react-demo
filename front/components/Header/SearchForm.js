import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='search'>
        <form action='/search' method='GET' className='search__form'>
          <input
            type='text'
            name='q'
            value={this.context.q}
            className='search__input'
            placeholder='rounded Illustration with mountain'
          />
          <button className='search__btn'></button>
        </form>
      </div>
    );
  }
}

SearchForm.contextTypes = {
  q: React.PropTypes.string
}
