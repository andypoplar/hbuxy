import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default function Header(props) {

  const { title } = props

  return (
    <div className="nav-bar">
      <NavBar
        mode="light"
        icon={<Icon type="search" />}
        onLeftClick={() => console.log('onSearchClick')}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >{title}</NavBar>
    </div>
    
  )
}