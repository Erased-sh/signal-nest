import SliderCard from "../../cards/slider_card/slider_card"
import Script from "next/script"
import "./slider.css"
export default function HSlider() {
    return (
        <>
        <swiper-container 
        navigation={true}
        space-between={30}
        slides-per-view={3}
        >

            <swiper-slide className="sslide">
                <SliderCard
                name="10 БИЛЕТОВ САМЫМ БЫСТРЫМ"
                date="10.04.2023"
                img="/home_3.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                    name="ПЕРВЕНСТВО МТУСИ ПО ДАРТСУ"
                    date="10.04.2023"
                    img="/home_2.jpg"
                    views="2.3k"
                    >
                    </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                name="25 БИЛЕТОВ НА БАСКЕТБОЛ"
                date="10.04.2023"
                img="/home_1.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                name="10 БИЛЕТОВ САМЫМ БЫСТРЫМ"
                date="10.04.2023"
                img="/home_3.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                    name="ПЕРВЕНСТВО МТУСИ ПО ДАРТСУ"
                    date="10.04.2023"
                    img="/home_2.jpg"
                    views="2.3k"
                    >
                    </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                name="25 БИЛЕТОВ НА БАСКЕТБОЛ"
                date="10.04.2023"
                img="/home_1.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                name="10 БИЛЕТОВ САМЫМ БЫСТРЫМ"
                date="10.04.2023"
                img="/home_3.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                    name="ПЕРВЕНСТВО МТУСИ ПО ДАРТСУ"
                    date="10.04.2023"
                    img="/home_2.jpg"
                    views="2.3k"
                    >
                    </SliderCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SliderCard
                name="25 БИЛЕТОВ НА БАСКЕТБОЛ"
                date="10.04.2023"
                img="/home_1.jpg"
                views="2.3k"
                >
                </SliderCard>
            </swiper-slide>
        </swiper-container>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

        </>
    )
}