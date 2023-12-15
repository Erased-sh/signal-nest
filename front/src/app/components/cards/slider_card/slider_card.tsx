import Image from "next/image"
import style from "../../../page.module.css"
import scoped from "./card.module.css"

interface ImageProps {
    name: string,
    date: string,
    img: string,
    views: string
}
export default function SliderCard({name, date, img, views}: ImageProps) {
    return (
    <div className={scoped.card}>
        <Image 
        className={scoped.img}
        src={img}
        alt=""
        width={300}
        height={190}
        objectFit='contain'
        >
        </Image>
        <div className={style.text_holder}>
            <div className={style.col1}></div>
            <div className={style.text_container}>
                <h3 className={style.article}>
                    {name}
                </h3>

            </div>
            <div className={style.col1}></div>
        </div>
        <div className={style.text_holder}>
            <h3 className={scoped.date}>
                {date}
            </h3>
            <div className={scoped.spacer}></div>
            <h3 className={scoped.views}>
                {views}
            </h3>
        </div>
    </div>
    )
}