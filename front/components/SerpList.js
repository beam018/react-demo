import React from 'react';

import SerpItem from './SerpList/SerpItem';

export default class SerpList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.page === 'index') {
      return null
    }

    if (!this.props.results.length) {
      return (
        <p>Did not match any documents.</p>
      )
    }

    return (
      <div className='search-result'>
        {this.props.results.map((item, i) => {
          return <SerpItem
            key={i}

            link={item.link}
            preview={item.preview}

            user={item.user}

            views={item.views}
            comments={item.comments}
            likes={item.likes}
          />;
        })}
      </div>
    );
  }
}
