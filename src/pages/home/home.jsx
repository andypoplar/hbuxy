import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Header from '../../common/header/header.jsx';
import CarouselImgs from '../../common/carousel/carousel.jsx';
import SayListData from './components/sayList/sayList.jsx';
import './home.less'

function Home(props) {
  const { changeSayList, sayList } = props

  useEffect(() => {
    changeSayList()
  }, [])

  return (
    <div>
      <Header title='首页' />
      <CarouselImgs />
      <SayListData sayList = {sayList} />
    </div>
  )
}

const mapState = (state) => ({
  sayList: state.getIn(['home', 'sayList']),
})

const mapDispatch = (dispatch) => ({
  changeSayList() {
    const action = actionCreators.getHomeSayList();
    dispatch(action)
  }
})


export default connect(mapState, mapDispatch)(Home)