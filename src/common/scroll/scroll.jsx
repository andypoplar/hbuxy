import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './scroll.less'

function Scroll(props) {

  const [bScroll, setBScroll] = useState('')

  const scrollContainerRef = useRef();

  const { pullUp, pullDown, onScroll } = props;
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      click: true,
      probeType: 3,
      scrollY: true,
      pullUpLoad: true
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
  }, [])

  let pullUpDebounce = useCallback(() => pullUp(), [pullUp])

  let pullDownDebounce = useCallback(() => pullDown(), [pullDown])

  useEffect(() => {
    if(!bScroll || !onScroll) return;
    bScroll.on('scroll', onScroll)
    return () => {
      bScroll.off('scroll', onScroll);
    }
  }, [onScroll, bScroll]);

  useEffect(() => {
    if(!bScroll || !pullUp) return;
    const handlePullUp = () => {
      //判断是否滑动到了底部
      if(bScroll.y === bScroll.maxScrollY) {
        pullUpDebounce();
      }
    };
    bScroll.on('scrollEnd', handlePullUp);
    return () => {
      bScroll.off('scrollEnd', handlePullUp);
    }
  }, [pullUp, pullUpDebounce, bScroll]);

  useEffect(() => {
    if(!bScroll || !pullDown) return;
    const handlePullDown = (pos) => {
      //判断用户的下拉动作
      if(pos.y > 50) {
        pullDownDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    }
  }, [pullDown, pullDownDebounce, bScroll]);

  return (
    <div className="wrapper" ref={scrollContainerRef}>
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}

Scroll.defaultProps = {
  onScroll:null,
  pullUp: null,
  pullDown: null,
  probeType: 3
};

Scroll.propTypes = {
  pullDown: PropTypes.func,
  pullUp: PropTypes.func,
  onScroll: PropTypes.func,
}

export default Scroll