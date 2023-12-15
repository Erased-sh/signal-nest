import Script from "next/script"
import "./slider.css"
export default function ESwiper() {
    return (
    <div>
        <swiper-container 
        navigation={true}
        effect="coverflow"
        centered-slides={true}
        slides-per-view="auto" 
        coverflow-effect-rotate="50" 
        coverflow-effect-stretch="0" 
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1" 
        coverflow-effect-slide-shadows={true}
        loop={true}
        >
          <swiper-slide>
            <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </swiper-slide>
        </swiper-container>

        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
  </div>

    )
}