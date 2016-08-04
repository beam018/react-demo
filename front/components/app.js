import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';

import Serp from './serp/serp';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  getChildContext() {
    const props = this.props;

    return {
      q: props.q
    }
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header/>

        <Serp results={this.props.results}/>

        <Footer/>
      </div>
    );
  }
}

App.childContextTypes = {
  q: React.PropTypes.string
}

export default App;
