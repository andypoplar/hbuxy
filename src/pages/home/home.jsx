import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'

import Header from '../../common/header/header.jsx';
import CarouselImgs from '../../common/carousel/carousel.jsx';
import Scroll from '../../common/scroll/scroll.jsx';

import SayListData from './components/sayList/sayList.jsx';
import News from './components/news/news.jsx';

import './home.css'

function Home(props) {
  const { changeSayList, sayList } = props

  useEffect(() => {
    changeSayList()
  }, [changeSayList])

  const contentScroll = (position)=> {
    // console.log(position.y);
  }

  const handlePullUp = () => {
    console.log('上拉加载更多');
  }

  const handlePullDown = () => {
    console.log('下拉加载更多');
  }

  return (
    <div className="home">
      <Header title='首页' />
      <Scroll
        onScroll={contentScroll}
        pullUp={handlePullUp} 
        pullDown={handlePullDown}> 
        <CarouselImgs />
        <News />
        <SayListData sayList = {sayList} />
      </Scroll>
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