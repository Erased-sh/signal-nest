import Script from "next/script"
import "./slider.css"
export default function HSlider() {
    return (
        <>
        <swiper-container 
        navigation={true}
        pagination={true} 
        pagination-clickable={true} 
        space-between={30}
        slides-per-view={3}
        >

            <swiper-slide className="sslide">
                <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </swiper-slide>
            <swiper-slide className="sslide">
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </swiper-slide>
        </swiper-container>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

        </>
    )
}