import React from 'react';

export default class SerpItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.link} className='search-result-item'>
        <img src={this.props.preview} alt='' className='search-result-item__preview' />

        <div className='search-result-item__info info'>
          <div className='info__author'>
            <img src={this.props.user.avatar} className='info__avatar' />
            {this.props.user.name}
          </div>

          <div className='info__likes'>
            <span className='info__views'>{this.props.views}</span>
            <span className='info__comments'>{this.props.comments}</span>
            <span className='info__likes'>{this.props.likes}</span>
          </div>
        </div>
      </a>
    );
  }
}
