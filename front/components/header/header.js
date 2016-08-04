import React from 'react';

import Logo from '../logo/logo';
import SearchForm from '../searchForm/searchForm';

class Header extends React.Component {
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

export default Header;
