import { Route } from "react-router-dom"
import React from 'react';
import Home from '../pages/home/home.jsx';
import Ground from '../pages/ground/ground.jsx';
import Announce from '../pages/announce/announce.jsx';
import Detail from '../pages/home/components/detail/detail.jsx';

export default function RouterConfig () {
  return (
    <div>
      <Route path='/' exact component={Home}></Route> 
      <Route path='/ground' exact component={Ground}></Route> 
      <Route path='/announce' exact component={Announce}></Route> 
      <Route path='/detail/:id' exact component={Detail}></Route> 
    </div>
  )
}