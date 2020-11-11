import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './scroll.css'

function Scroll(props) {

  const [bScroll, setBScroll] = useState('')

  const scrollContainerRef = useRef();

  const { pullUp, pullDown, onScroll, probeType } = props;
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      click: true,
      probeType,
      scrollY: true,
      pullUpLoad: true
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(!bScroll || !onScroll) return;
    bScroll.on('scroll', onScroll)
    return () => {
      bScroll.off('scroll', onScroll);
    }
  }, [onScroll, bScroll]);

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
  probeType: PropTypes.number
}

export default Scroll