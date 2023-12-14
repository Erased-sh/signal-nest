import scoped from "./page.module.css"
import style from "../../page.module.css"
import Image from "next/image"


interface GridProps {
    source1: String, source2: String, source3: String, source4: String
}

export default function PhotoGrid({ source1, source2, source3, source4} : GridProps) {
    return (
        <div className={scoped.layout}>
                    <div className={scoped.grow1}>
                        <div className={style.text_holder}>
                            {/* <div className={style.col1}></div> */}
                            <div className={scoped.img_container}>
                                <Image
                                className={scoped.img}
                                src={source1 as string}
                                alt="bla bla bla"
                                width={300}
                                height={250}
                                ></Image>
                            </div>
                            {/* <div className={style.col1}></div> */}
                        </div>
                    </div>
                    <div className={scoped.grow1}>
                        <div className={style.text_holder}>
                            {/* <div className={style.col1}></div> */}
                            <div className={scoped.img_container}>
                                <Image
                                className={scoped.img}
                                src={source2 as string}
                                alt="bla bla bla"
                                width={300}
                                height={250}
                                ></Image>
                            </div>
                            {/* <div className={style.col1}></div> */}
                        </div>
                    </div>
                    <div className={scoped.grow1}>
                        <div className={style.text_holder}>
                            {/* <div className={style.col1}></div> */}
                            <div className={scoped.img_container}>
                                <Image
                                className={scoped.img}
                                src={source3 as string}
                                alt="bla bla bla"
                                width={300}
                                height={250}
                                ></Image>
                            </div>
                            {/* <div className={style.col1}></div> */}
                        </div>
                    </div>
                    <div className={scoped.grow1}>
                        <div className={style.text_holder}>
                            {/* <div className={style.col1}></div> */}
                            <div className={scoped.img_container}>
                                <Image
                                className={scoped.img}
                                src={source4 as string}
                                alt="bla bla bla"
                                width={300}
                                height={250}
                                ></Image>
                            </div>
                            {/* <div className={style.col1}></div> */}
                        </div>
                    </div>
                </div>
    )
}