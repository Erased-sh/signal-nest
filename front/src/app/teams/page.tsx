import style from "../page.module.css"
import ColorTabs from "../components/tabs/tab"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import {Grid, GridingProps} from "../components/grid/grid"
import { getTeamsDataFromGoogleSheet } from "../fetching/teams";
import { useEffect, useState } from "react"

import TeamateComponent from "./teamsSSR"

export default async function ContactsPage(){
    
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


                {/* <p>Баскетбол</p> */}
            
            {/* <div className={style.text_holder}>
                <div className={style.col1}></div>
                <ColorTabs></ColorTabs>
                <div className={style.col1}></div>
            </div>  */}

          <TeamateComponent/>
            
            </div>
            
            <div className={style.footer}>
                <FooterBar></FooterBar>
            </div>
        </div>
    )
}