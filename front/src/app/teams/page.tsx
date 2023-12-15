'use client'
import style from "../page.module.css"
import ColorTabs from "../components/tabs/tab"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import Grid from "../components/grid/grid"

export default function ContactsPage(){
    const example = [1,2]
    return (
        <div className={style.body}>
            <NavigationBar></NavigationBar>
            
            <div className={style.main}>
            <div className={style.text_holder}>
                    <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <h3 className={style.title}>
                            Команды
                        </h3>
                    </div>
                    <div className={style.col1}></div>
                </div>
            
            <div className={style.text_holder}>
                <div className={style.col1}></div>
                <ColorTabs></ColorTabs>
                <div className={style.col1}></div>
            </div>

            {example.map(el => 
                <Grid
                source1="/players/1.jpg"
                source2="/players/1.jpg"
                source3="/players/1.jpg"
                source4="/players/1.jpg"
                ></Grid>
            )}
            </div>
            
            <div className={style.footer}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}