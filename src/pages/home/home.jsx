import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Header from '../../common/header/header.jsx';
import './home.css'

function Home(props) {
  return (
    <div>
      <Header title='首页' />
      <p>我是首页</p>
    </div>
  )
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.changeTopShow('22222');
    dispatch(action)
  }
})


export default connect(mapState, mapDispatch)(Home)