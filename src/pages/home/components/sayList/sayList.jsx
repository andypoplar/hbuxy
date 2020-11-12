import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sayList.css';

import SayItem from '../sayItem/sayItem.jsx';

function SayList(props) {
  const { sayList } = props

  return (
    <div className="say-list">
      {
        sayList.map(item => {
          return (
            <Link style={{ textDecoration:'none', color: 'black'}} key={item.get('id')} to={`/detail/${item.get('id')}`}>
              <SayItem key={item.get('id')} sayItemData={item} />
            </Link>
          )
        })
      }
    </div>
  )
}

SayList.propTypes = {
  sayList: PropTypes.object.isRequired
}

export default SayList

