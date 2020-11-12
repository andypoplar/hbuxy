import React from 'react';
import './recentViewed.less';

import ViewedItem from '../viewedItem/viewedItem.jsx';

function RecentViewed(props) {

  const { recentViewedList } = props

  return (
    <div className="recent-viewed">
      <div>我的最近浏览</div>
      <div className="recent-viewed-list">
        {
          recentViewedList.map(item => {
            return (
              <ViewedItem key={item.get('id')} viewItem={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default RecentViewed