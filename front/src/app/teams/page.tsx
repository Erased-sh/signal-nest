import style from "./page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"

export default function ContactsPage(){
    return (
        <section className={style.layout}>
            <div className={style.header}>
                <NavigationBar></NavigationBar>
            </div>
            <div className={style.leftSide}>2</div>
            <div className={style.body}>3</div>
            <div className={style.rightSide}>4</div>
            <div className={style.footer}>
                <FooterBar></FooterBar>
            </div>
        </section>
    )
}