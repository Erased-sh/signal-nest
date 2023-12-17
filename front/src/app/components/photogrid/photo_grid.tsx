



import scoped from "./page.module.css"
import style from "../../page.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getPhotosDrive } from "@/app/fetching/photo_drive"


interface GridProps {
   photos:string[]
}

export default function PhotoGrid({photos} : GridProps) {
  
    const photosPrev=photos.filter(ex=> ex!=="")
   
    return (
        <div className={scoped.layout}>
                    <div className={scoped.grow1}>
                        <div className={style.text_holder}>
                            

                            {photosPrev.map((photo)=>{
return  <div className={scoped.img_container}>
<img
className={scoped.img}
src={photo}
alt="bla bla bla"
width={300}
height={250}
></img>
</div>
                            }
                                        
                 

              
                  )
}
</div>
</div>
</div>)}
 
    