import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCards, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

import { useState, useRef } from 'react'
import { isBrowser } from 'react-device-detect'
import { autoWidthVW } from '../../common/Common'
import ImageCommon from '../../../public/images/ImageCommon'

export const SwiperView = () => {
  // const [selectIndex,setSelectIndex] = useState(0)
  const swiperRef = useRef<any>()

  function onLeft() {
    swiperRef.current.slidePrev()
  }
  function onRight() {
    swiperRef.current.slideNext()
  }
  const pagination = {
    clickable: false,
    bulletElement: 'div',
    renderBullet: function (index: number, className: string) {
      return ''
    },
  }

  return (
    <Swiper
      initialSlide={0}
      style={{ width: isBrowser ? autoWidthVW(600) : '100%' }}
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop
      grabCursor={true}
      onSwiper={(swiper: any) => (swiperRef.current = swiper)}
      onSlideChange={(swiper: any) => {
        // setSelectIndex(swiper.activeIndex)
      }}
      // pagination={pagination}
    >
      <SwiperSlide>
        <h1
          style={{
            backgroundImage: `url(${ImageCommon.bg_banner})`,
            backgroundSize: '100% 100%',
            width: '100%',
            height: `${autoWidthVW(170)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={ImageCommon.logo_words}></img>
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1
          style={{
            backgroundImage: `url(${ImageCommon.bg_banner})`,
            backgroundSize: '100% 100%',
            width: '100%',
            height: `${autoWidthVW(170)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={ImageCommon.logo_words}></img>
        </h1>
      </SwiperSlide>
    </Swiper>
  )
}
