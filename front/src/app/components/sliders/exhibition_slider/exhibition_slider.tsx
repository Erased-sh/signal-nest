import Script from "next/script"
import Image from "next/image"
import "./slider.css"
export default function ESwiper() {
  const photos_example = [1,2,3,4,5,6,7,8,9,10,10 ]
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
          {photos_example.map(photo => 
            <swiper-slide>
              <Image src={`/photos/${photo}.jpg`} alt="" width={320} height={320}></Image>
            </swiper-slide>
            )}
        </swiper-container>

        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
  </div>

    )
}