import React from 'react'

import { Link } from 'react-router'

import { range } from 'lodash' 

export default class Pagination extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * Returns range of pages id's with current page in the middle
   * @param current {Number} current page id
   * @param amount {Number} available pages amount
   * @returns {Array}
   */
  getPagesRange(current=0, amount=0) {
    if (!amount) {
      return []
    }

    if (amount <= 5) {
      return range(0, amount);
    } 

    const pageNumber = current + 1

    // fixme: varible name
    const headerExtraSize = Math.abs(pageNumber - 2)
    const tailExtraSize = pageNumber + 2 - amount

    let startDelta = 3
    let finishDelta = 2

    // if current page at the beginning of sequence
    // increase 'tail' size
    // [current, x, x, x, x]
    if (pageNumber <= 2) {
      finishDelta += headerExtraSize + 1
      startDelta -= headerExtraSize + 1
    }

    // if current page at the end of sequence
    // increase 'head' size
    // [x, x, x, x, current]
    if (pageNumber > amount - 2) {
      finishDelta -= tailExtraSize
      startDelta += tailExtraSize
    }

    // [x, x, current, x, x]
    return range(pageNumber - startDelta, pageNumber + finishDelta)
  }

  render() {
    const { current, amount } = this.props

    const pages = this.getPagesRange(current, amount);

    const pagesLinks = pages.map((pageId, idx) => {
      const pageNumber = pageId + 1

      return (<Link to={'#'} key={idx} className={current === pageId ? 'active' : ''}>{pageNumber}</Link>)
    })

    const isFirst = current > 0
    const prevLink = isFirst
      ? <Link to={'#'} className='prev-next prev'><i className='fa fa-long-arrow-left' aria-hidden='true'></i> Previous</Link>
      : ''

    const isLast = current < amount - 1
    const nextLink = isLast
      ? <Link to={'#'} className='prev-next next'>Next <i className='fa fa-long-arrow-right' aria-hidden='true'></i></Link>
      : ''

    return (
      <nav className='pagination'>
        {prevLink}

        {pagesLinks}

        {nextLink}
      </nav>
    )
  }
}
