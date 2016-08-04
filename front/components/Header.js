import React from 'react';

import Logo from './Header/Logo';
import SearchForm from './Header/SearchForm';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <Logo/>
        <SearchForm/>
      </header>
    );
  }
}
