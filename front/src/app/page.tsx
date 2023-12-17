

const newsReciever=async ()=>{
  const data=await getDataFromGoogleSheet("1_QbMUJ6qPyOQfhgVEQQG14XkIhAZL1IBlTFFuhESHaQ");
  console.log(data)
  return data
}

import NavigationBar from "./components/layout/navigation_bar"
import FooterBar from "./components/layout/footer_bar";
import {HSlider} from "./components/sliders/home_slider/home_slider";
import style from "./page.module.css"
import { UsersRowData, getDataFromGoogleSheet } from "./fetching/news";



export default async function Home() {
  const news:UsersRowData[]= await Promise.all(await newsReciever())
  
  return (
   <div className={style.body}>
    <NavigationBar></NavigationBar>
    
    
    <div className={style.main}>
      <div className={style.text_holder}>
        <div className={style.col1}></div>
          <div className={style.text_container}>
              <h3 className={style.title}>
                Наша миссия
              </h3>
              <h3 className={style.article}>
              Главной задачей клуба является развитие массового студенческого спорта в Московском Техническом Университее Связи и Информатики.Основная работа МССК «Связист» направлена на организацию спортивных соревнований, мероприятий, а так же на организацию тренировочного процесса.
              </h3>
          </div>
          
        <div className={style.col1}></div>
      </div>

      <div className={style.text_holder}>
        <div className={style.col1}></div>
          <div className={style.text_container}>
              <h3 style={{marginBottom: 50}} className={style.title}>Новости</h3>
              <HSlider fields={news}></HSlider>
          </div>
          
      
        <div className={style.col1}></div>
      </div>
      

      <div style={{marginBottom: 70}} className={style.text_holder}>
        <div className={style.col1}></div>
          <div className={style.text_container}>
              <h3 className={style.title}>
                Расписание
              </h3>
              <h3 className={style.article}>
              Расписание сборных и секций: https://docs.google.com/document/d/1cL227htjs0HJ5itZZjCAwkHIoJOp8TLm/edit
              </h3>
              <h3 className={style.article}>
              Расписание пар по физ.культуре: https://docs.google.com/document/d/1cL227htjs0HJ5itZZjCAwkHIoJOp8TLm/edit
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
