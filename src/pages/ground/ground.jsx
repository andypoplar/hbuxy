import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store';
import './ground.less'

import Header from '../../common/header/header.jsx';
import Scroll from '../../common/scroll/scroll.jsx';
import RecentViewed from './components/recentViewed/recentViewed.jsx';
import Category from './components/category/category.jsx';

function Ground(props) {

  const { changeRecentList, recentViewedList, categoryList, changeCategoryList } = props

  useEffect(() => {
    changeRecentList()
    changeCategoryList()
  }, [changeRecentList, changeCategoryList])

  return (
    <div className="ground">
      <Header title="广场"/>
      <Scroll>
        <RecentViewed recentViewedList={recentViewedList}/>
        <Category categoryList={categoryList}/>
      </Scroll>
    </div>
  )
}

const mapState = (state) => ({
  recentViewedList: state.getIn(['ground', 'recentViewedList']),
  categoryList: state.getIn(['ground', 'categoryList'])
})

const mapDispatch = (dispatch) => ({
  changeRecentList() {
    dispatch(actionCreators.changeRecentList())
  },
  changeCategoryList() {
    dispatch(actionCreators.changeCategoryList())
  }
})


export default connect(mapState, mapDispatch)(Ground)