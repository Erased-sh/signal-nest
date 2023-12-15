import scoped from "./grid.module.css"
import style from "../../page.module.css"
import Image from "next/image"


interface GridProps {
    source1: String, source2: String, source3: String, source4: String
}

export default function Grid({ source1, source2, source3, source4} : GridProps) {
    const srcs = [source1, source2, source3, source4]
    return (
        <div className={scoped.layout}>
            {srcs.map((src) =>
                <div className={scoped.grow1}>
                    <div className={style.text_holder}>
                        <div className={style.col1}></div>
                            <div className={style.text_container}>
                                <div className={scoped.img_container}>
                                    <Image
                                    className={scoped.img}
                                    src={source1 as string}
                                    alt="bla bla bla"
                                    width={300}
                                    height={250}
                                    ></Image>
                                </div>
                                <h3 className={style.title}>
                                    Уралев Дмитрий Андреевич
                                </h3>
                                <h3 className={style.article}>
                                Дата рождения: 18.03.2003 <br />
                                Место рождения: г. Стерлитамак <br />
                                Факультет: СиСС <br />
                                Год поступления: 2021 <br />
                                </h3>
                            </div>
                        <div className={style.col1}></div>
                    </div>
                </div>
            )}
        </div>
    )
}