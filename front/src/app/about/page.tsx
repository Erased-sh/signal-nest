import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import SSlider from "../components/sliders/sections_slider/sections_slider"
import style from "../page.module.css"

export default function AboutPage() {
    return (
    <div className={style.body}>
        <NavigationBar></NavigationBar>

        <div className={style.main}>
            <div className={style.text_holder}>
                <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <h3 className={style.title}>
                            Секции
                        </h3>
                        <h3></h3>
                </div>
                <div className={style.col1}></div>
            </div>
            



            <div className={style.text_holder}>
                    <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <SSlider></SSlider>
                    </div>
                    <div className={style.col1}></div>
            </div>
            <div className={style.text_holder}>
                <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <h3 className={style.title}>
                            Сборные
                        </h3>
                    </div>
                <div className={style.col1}></div>
            </div>
            <div className={style.text_holder}>
                    <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <SSlider></SSlider>
                    </div>
                    <div className={style.col1}></div>
            </div>
            <div style={{marginBottom: 70}} className={style.text_holder}>
                <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <h3 className={style.title}>
                            О нас 
                        </h3>
                        <h3 className={style.article}>
                        Официальное сообщество многопрофильного студенческого спортивного клуба МТУСИ «Связист»
                        <br />
                        <br />
                        Главной задачей клуба является развитие массового студенческого спорта в Московском Техническом Университее Связи и Информатики.
                        <br />
                        <br />
                        Основная работа МССК «Связист» направлена на организацию спортивных соревнований, мероприятий, а так же на организацию тренировочного процесса.
                        <br />
                        <br />
                        КОНТАКТНАЯ ИНФОРМАЦИЯ
                        <br />
                        Многопрофильный студенческий спортивный клуб МТУСИ «Связист»
                        <br />
                        Адрес: Авиамоторная ул. 8а, 1-ый этаж, каб. А-137
                        <br />
                        Email: svyazist@mtuci.ru
                        <br />
                        <br />
                        ЧАСЫ РАБОТЫ СПОРТКЛУБА:
                        <br />
                        Понедельник – Пятница 9:00 – 22:00
                        </h3>
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