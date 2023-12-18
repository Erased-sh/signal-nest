import Script from "next/script"
import Image from "next/image"
import "./slider.css"



interface EsliderData {
  urls: string[];
}
export default function ESwiper({urls}: EsliderData) {
  const photos_example = ["1",2,3,4,5,6,7,8,9,10,10 ]

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

          {urls.filter(el => el != "").map(photo => 
            <swiper-slide>
              {/* <Image src={`/photos/${photo}.jpg`} alt="" width={320} height={320}></Image> */}
              <img
                                src={photo}
                                alt="bla bla bla"
                                width={300}
                                height={250}
              ></img>
            </swiper-slide>
            )}
        </swiper-container>

        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
  </div>

    )
}