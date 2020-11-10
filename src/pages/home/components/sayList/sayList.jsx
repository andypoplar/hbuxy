import React from 'react';
import { connect } from 'react-redux';
import SayItem from '../sayItem/sayItem.jsx';

function SayList(props) {
  const { sayList } = props

  return (
    <div className="say-list">
      {
        sayList.map(item => {
          return (
            <SayItem key={item.get('id')} sayItemData={item} />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, null)(SayList)

