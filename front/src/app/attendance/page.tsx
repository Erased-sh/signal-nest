import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import Link from "next/link"

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
                                Свою посещаемость вы можете увидеть в таблице по ссылке ниже, во вкладке своей группы
                                <br />
                                <br />
                                <Link href="https://docs.google.com/spreadsheets/d/121P-Tr7feHAfkhX4Bq0KJMuiHFgZ5fCz8w71hMKJ9hg/edit#gid=0">Моя посещаемость</Link>
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