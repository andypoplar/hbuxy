import React from 'react';
import './viewedItem.less';

function viewedItem(props) {

  const { viewItem } = props

  return (
    <div className="view-item">
      <div className="view-item-title">{viewItem.get('title')}</div>
    </div>
  )
}

export default viewedItem