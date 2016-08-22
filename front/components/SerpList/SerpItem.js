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
            <span className='info__views'><i className='fa fa-eye' aria-hidden={true}></i> {this.props.views}</span>
            <span className='info__comments'><i className='fa fa-comment-o' aria-hidden={true}></i> {this.props.comments}</span>
            <span className='info__likes'><i className='fa fa-heart' aria-hidden={true}></i> {this.props.likes}</span>
          </div>
        </div>
      </a>
    );
  }
}
