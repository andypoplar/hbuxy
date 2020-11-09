import React from 'react';
import { connect } from 'react-redux'
import Header from '../../common/header/header.jsx';
import './announce.css'

function Announce(props) {
  return (
    <div>
      <Header title="发布" />
      <p>我是发布样式</p>
    </div>
  )
}

export default connect(null, null)(Announce)