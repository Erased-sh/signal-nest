import { Grid, GridingProps } from "../components/grid/grid";
import { getTeamsDataFromGoogleSheet } from "../fetching/teams";
import style from "../page.module.css"
interface props{
  info:GridingProps[]
}



  export default async function TeamateComponent(){
    const arr = [0, 1, 2, 3, 4];
     const name=["Футбол","Хоккей","Физра", "Воллейбол(ж)", "Воллейбол(м)"]
    const data=await  Promise.all( await getTeamsDataFromGoogleSheet("1eiHH0fZlKYdgi3DXmal0LcF-25Zp7S4zpzjo7rsy2YM"))
  
    
    return (
      <> { arr.map((numb)=>
        
        <>
        <div key={numb}></div>
        <div className={style.text_holder}>
        <div className={style.col1}></div>
          <div className={style.text_container}>
              <h3 style={{marginBottom: 50}} className={style.title}>{name[numb]}</h3>
          </div>
          
      
        <div className={style.col1}></div>
      </div>
        {/* <h2>{name[numb]}</h2> */}
        <Grid 
          title={name[numb]}
          fields={data[numb]}
       ></Grid>
        </>
        
      )}
      </>
    
    )
      
  }