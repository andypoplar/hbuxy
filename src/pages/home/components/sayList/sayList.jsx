import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SayItem from '../sayItem/sayItem.jsx';
import './sayList.css';

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

SayList.propTypes = {
  sayList: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, null)(SayList)

