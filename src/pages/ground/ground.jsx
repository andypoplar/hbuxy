import React from 'react';
import { connect } from 'react-redux'
import './ground.css'

import Header from '../../common/header/header.jsx';

function Ground(props) {
  return (
    <div>
      <Header title="广场"/>
      <p>我是广场</p>
    </div>
  )
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
  
})


export default connect(mapState, mapDispatch)(Ground)