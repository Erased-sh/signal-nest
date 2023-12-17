import SliderCard from "../../cards/slider_card/slider_card"
import Script from "next/script"
import "./slider.css"
import { FC } from "react";
import { UsersRowData } from "@/app/fetching/news";




interface sliderProps{
    fields:UsersRowData[]
}
export const HSlider:FC<sliderProps>=({fields})=> {
    
    return (
        <>
        <swiper-container 
        navigation={true}
        space-between={30}
        slides-per-view={3}
        >
      {fields.map((fields)=>{
        return    (<swiper-slide className="sslide">
        <SliderCard
        name={fields.title}
        date={fields.date}
        img={fields.img||""}
        views="2.3k"
        >
        </SliderCard>
    </swiper-slide>)
      })}
         
           
        </swiper-container>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>

        </>
    )
}