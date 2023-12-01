
'use client'
import React, { FC } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { AccountCircle, Create, Edit } from '@mui/icons-material'

export const PhotoSlider:FC=() => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      slides:{
        perView: 2,
        spacing: 15,
      }
    },
    [
      // add plugins here
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">First slide</div>
      <div className="keen-slider__slide">Second slide</div>
      <div className="keen-slider__slide">Third slide</div>
    </div>
  )
}