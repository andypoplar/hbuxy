import React from 'react';
import './sayItem.less';

function SayItem(props) {

  const { sayItemData } = props

  return (
    <div>
      <div className="say-item">
        <div className="header">
          <div className="header_left">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605004762803&di=e4cc603b0a106b5803fab7f75602f01e&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F62e80da4db21d3d2134dab05bc4cd729f260ec6f.jpg" width="40px" height="40px" alt="" />
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
          <div className="imgs"></div>
        </div>
      </div>
    </div>
  )
}

export default SayItem