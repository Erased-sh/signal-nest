

export default function HomeSwiper() {
    return (
     
        // <div className={style.slider}>
        //       <swiper-container className={style.swiper_container} navigation={true} >
        //         <swiper-slide className={style.swiper_slide}>Slide 1</swiper-slide>
        //         <swiper-slide className={style.swiper_slide}>Slide 2</swiper-slide>
        //         <swiper-slide className={style.swiper_slide}>Slide 3</swiper-slide>
        //         <swiper-slide className={style.swiper_slide}>Slide 4</swiper-slide>
        //     </swiper-container>
        //     <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        // </div>
    <div>
        <swiper-container navigation={true} >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
      </swiper-container>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
  </div>

    )
}