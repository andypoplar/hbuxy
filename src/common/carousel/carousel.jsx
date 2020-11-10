import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd-mobile';
import './carousel.css'

function CarouselImgs(props) {

  const [imgPath, setImgPath] = useState(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
  const [imgHeight, setImgHeight] = useState(160)

  useEffect(() => {

  })

  return (
    <div className="carousel-imgs">
      <Carousel
        autoplay={true}
        infinite
        beforeChange={(from, to) => {}}
        afterChange={index => {}}
      >
        {imgPath.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: imgHeight }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                setImgHeight(imgHeight);
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselImgs