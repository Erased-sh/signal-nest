import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"

export default function AttandancePage() {
    return (
        <div className={style.body}>
            <NavigationBar></NavigationBar>

            <div className={style.main}>
                <div className={style.text_holder}>
                    <div className={style.col1}></div>
                        <div className={style.text_container}>
                            <h3 className={style.title}>
                                Посещаемость
                            </h3>
                            <h3 className={style.article}>
                                Свою посещаемость вы можете увидеть в таблице по ссылке ниже, во вкладке своей группы; 
                                <br />
                                <br />
                                https://docs/spreadsheets/d/1c5R17gpz63536I2SEr2Jo9Viybvy99MaS8-YgwU0KtazrO8/edit#gid=1545700022
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