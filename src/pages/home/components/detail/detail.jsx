import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import './detail.less'

import Header from '../../../../common/header/header.jsx';

function DetailSayItem(props) {

  const {match:{params:{id}}, getDetail} = props

  useEffect(() => {
    getDetail(id);
  }, [getDetail, id])

  return (
    <div className="detail">
      <Header title="详情" />
      <p>
        { id }
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    console.log(id);
    // dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatch)(DetailSayItem)