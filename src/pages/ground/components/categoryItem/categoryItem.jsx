import React from 'react';
import './categoryItem.less';

function CategoryItem(props) {

  const { cateItem } = props

  return (
    <div className="cate-item">
      <div>
        <img src={cateItem.get('imgUrl')} width="40px" height="40px" alt=""/>
      </div>
      <div className="cate-item-title">{cateItem.get('title')}</div>
    </div>
  )
}

export default CategoryItem