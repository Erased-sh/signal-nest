import HomeSwiper from "../components/sliders/home_slider"
import NavigationBar from "../components/layout/navigation_bar"
import Image from 'next/image';
import FooterBar from "../components/layout/footer_bar"
import style from "../page.module.css";
export default function ContactsPage(){
    return(
        <div className={style.body}>
            <NavigationBar></NavigationBar>
            <div className={style.main}>
                <div className={style.text_holder}>
                    <div className={style.col1}></div>
                        <div className={style.text_container}>
                            <h3 className={style.title}>
                                Контакты
                            </h3>
                            <h3 className={style.article}>
                            Выходите из метро 3 выход, прямо до светофора, переходите его и поворачиваете налево, прямо идете, доходите то светофора, там поворот направо, идете прямо и увидите наш ВУЗ
                            </h3>
                    </div>
                    <div className={style.col1}></div>
                </div>



                <div className={style.text_holder}>
                    <div className={style.col1}></div>
                        <div className={style.text_container}>
                        <Image
                    src="/map.jpg"
                    alt='logo'
                    height={441}
                    width={675}
                    sizes="(max-width: 100vw | max-height: 100vh)"
                    >

                    </Image>
                        </div>
                    <div className={style.col1}></div>
                </div>

            </div>
            <div className={style.footer}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}