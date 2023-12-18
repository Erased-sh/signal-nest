import Script from "next/script"
import "./slider.css"
import SectionCard from "../../cards/sections_card/section_card"
export default function SSlider() {
    return (
        <>
        <swiper-container 
        navigation={true}
        // pagination={true} 
        // pagination-clickable={true} 
        space-between={30}
        slides-per-view={3}
        >

            <swiper-slide className="sslide">
                <SectionCard 
                name="Баскетбол"
                img="/home_1.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Дартс"
                img="/home_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Теннис"
                img="/home_4.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Баскетбол"
                img="/home_1.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Дартс"
                img="/home_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Теннис"
                img="/home_4.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Баскетбол"
                img="/home_1.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Дартс"
                img="/home_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Теннис"
                img="/home_4.jpg"
                >
                </SectionCard>
            </swiper-slide>
        </swiper-container>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

        </>
    )
}