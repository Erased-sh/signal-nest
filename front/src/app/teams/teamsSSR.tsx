import { Grid, GridingProps } from "../components/grid/grid";
import { getTeamsDataFromGoogleSheet } from "../fetching/teams";
interface props{
  info:GridingProps[]
}



  export default async function TeamateComponent(){
    const arr = [0, 1, 2, 3, 4];
     const name=["Футбол","Хоккей","Физра", "Воллейбол(ж)", "Воллейбол(м)"]
    const data=await  Promise.all( await getTeamsDataFromGoogleSheet("1eiHH0fZlKYdgi3DXmal0LcF-25Zp7S4zpzjo7rsy2YM"))
  
    
    return (
      <> { arr.map((numb)=>{
        <div key={numb}></div>
       return <Grid 
       title={name[numb]}
       fields={data[numb]}
       ></Grid>
        
      })}
      </>
    
    )
      
  }