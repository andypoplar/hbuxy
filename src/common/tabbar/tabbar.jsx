import React, { useState } from 'react';
import { TabBar } from 'antd-mobile'
import './tabbar.css'
import { withRouter } from 'react-router-dom';

function TabBarBottom(props) {

  const [selectedTab, setSelectedTab] = useState('blueTab')

  const changeRouter = (tabbarType, infoType) => {
    setSelectedTab(tabbarType)
    props.history.push(infoType)
  }

  return (
    <div className="tabbar-bottom">
      <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${process.env.PUBLIC_URL}/iconfont/home.svg) center center /  21px 21px no-repeat` }}/>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${process.env.PUBLIC_URL}/iconfont/home-active.svg) center center /  21px 21px no-repeat` }}/>
            }
            selected={selectedTab === 'blueTab'}
            badge={0}
            onPress={() => changeRouter('blueTab','/')}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${process.env.PUBLIC_URL}/iconfont/ground.svg) center center /  21px 21px no-repeat` }}/>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${process.env.PUBLIC_URL}/iconfont/ground-active.svg) center center /  21px 21px no-repeat` }}/>
            }
            title="广场"
            key="广场"
            badge={''}
            dot
            selected={selectedTab === 'redTab'}
            onPress={() => changeRouter('redTab','/ground')}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${process.env.PUBLIC_URL}/iconfont/announce.svg) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${process.env.PUBLIC_URL}/iconfont/announce-active.svg) center center /  21px 21px no-repeat` }}
              />
            }
            title="发布"
            key="发布"
            dot
            selected={selectedTab === 'greenTab'}
            onPress={() => changeRouter('greenTab', 'announce')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="我的"
            selected={selectedTab === 'yellowTab'}
            onPress={() => changeRouter('yellowTab', 'my')}
          >
          </TabBar.Item>
        </TabBar>
    </div>
  )
}

export default withRouter(TabBarBottom)