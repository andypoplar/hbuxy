import React from 'react';
import PropTypes from 'prop-types';
import './sayItem.less';

function SayItem(props) {

  const { sayItemData } = props

  return (
    <div>
      <div className="say-item">
        <div className="header">
          <div className="header_left">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" width="40px" height="40px" alt="" />
          </div>
          <div className="header_right">
            <div className="title">测试标题</div>
            <div className="time">2020.11.04 20:21</div>
          </div>
        </div>
        <div className="container">
          <div className="text">
            <span className="tag">类别</span>
            {sayItemData.get('desc')}
          </div>
          <div className="imgs">
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SayItem.propTypes = {
  sayItemData: PropTypes.object.isRequired
}

export default SayItem