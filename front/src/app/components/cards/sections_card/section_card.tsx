import Image from "next/image"
import style from "../../../page.module.css"
import scoped from "./card.module.css"

interface SectionProps {
    name: string,
    img: string,
}
export default function SectionCard({name, img}: SectionProps) {
    return (
    <div className={scoped.card}>
        <Image 
        className={scoped.img}
        src={img}
        alt=""
        width={300}
        height={200}
        objectFit='contain'
        >
        </Image>
        <div className={scoped.hol}>
        <div className={style.text_holder}>
            <div className={style.col1}></div>
            <h3 className={scoped.name}>{name}</h3>
            <div className={scoped.col}></div>
            <h3 className={scoped.more}>Узнать больше{'>'}</h3>
            <div className={style.col1}></div>
        </div>
        </div>
        
    </div>
    )
}