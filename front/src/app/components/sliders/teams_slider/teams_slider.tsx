import Script from "next/script"
import "./slider.css"
import SectionCard from "../../cards/sections_card/section_card"
export default function TSlider() {
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
                name="Футбол(ж)"
                img="/teams/team_3.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Баскетбол(м)"
                img="/teams/team_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Волейбол"
                img="/teams/team_1.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Футбол(ж)"
                img="/teams/team_3.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Баскетбол(м)"
                img="/teams/team_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Волейбол"
                img="/teams/team_1.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Футбол(ж)"
                img="/teams/team_3.jpg"
                >

                </SectionCard>
            </swiper-slide>
            <swiper-slide className="sslide">
                <SectionCard
                name="Баскетбол(м)"
                img="/teams/team_2.jpg"
                >
                </SectionCard>
            </swiper-slide>
            <swiper-slide>
                <SectionCard
                name="Волейбол"
                img="/teams/team_1.jpg"
                >
                </SectionCard>
            </swiper-slide>
        </swiper-container>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

        </>
    )
}