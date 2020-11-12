import React from 'react';
import './category.less'

import CategoryItem from '../categoryItem/categoryItem.jsx';

function Category(props) {

  const { categoryList } = props

  return (
    <div className="cate-gory">
      <div>圈子广场</div>
      <div className="cate-gory-list">
        {
          categoryList.map(item => {
            return (
              <CategoryItem key={item.get('id')} cateItem={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category