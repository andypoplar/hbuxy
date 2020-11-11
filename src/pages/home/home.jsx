import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Header from '../../common/header/header.jsx';
import CarouselImgs from '../../common/carousel/carousel.jsx';
import SayListData from './components/sayList/sayList.jsx';
import Scroll from '../../common/scroll/scroll.jsx';
import './home.css'

function Home(props) {
  const { changeSayList, sayList } = props

  useEffect(() => {
    changeSayList()
  }, [])

  const contentScroll = (position)=> {
    console.log(position.y);
  }

  return (
    <div className="home">
      <Header title='首页' />
      <Scroll
        onScroll={contentScroll}> 
        <CarouselImgs />
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