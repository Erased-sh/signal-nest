
import axios from 'axios';

const token = "y0_AgAAAABy2V8BAAsAZAAAAAD1A5NVkdB2Wbr0R1iwF7Uxrn-VPbP0H8U";
interface Prew{
   
    preview:string
   
}
const fetchData = async () => {
  try {
    const response = await axios.get('https://cloud-api.yandex.net/v1/disk/resources/public', {
      headers: {
        Authorization: `OAuth ${token}`,
        'Content-Type': 'application/json',
      },
    });

    
    const keys=Object.keys(response.data.items)

    const data:string[]=keys.map((key)=>{
       return response.data.items[key].file
    })
    console.log(data)
   
    return data
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    const data=[]
    return 
  }
};



import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import PhotoGrid from "../components/photogrid/photo_grid"



export default async function PhotosPage(){
    
    const photos_example = [[1,2,3,4], [4,5,6,7], [8,9,10,10] ]
    const fetch=await fetchData()||[""]
    return (
        <div className={style.body}>
            <NavigationBar></NavigationBar>


         
                
            

            <div className={style.main}>

                <div className={style.text_holder}>
                    <div className={style.col1}></div>
                    <div className={style.text_container}>
                        <h3 className={style.title}>
                            Галерея
                        </h3>
                    </div>
                    
                    <div className={style.col1}></div>
                </div>

                <div className={style.text_holder}>
                    <div className={style.col1}></div>
                    <div className={style.text_container}>
                        {/* <ESlider></ESlider> */}
                    </div>
                    <div className={style.col1}></div>
                </div>
                
                
                {photos_example.map(photo => 
                <div key={photo[0]} className={style.text_holder}>
                    <div className={style.col2}></div>
                        <PhotoGrid
                        source1={`/photos/${photo[0]}.jpg`}
                        source2={`/photos/${photo[1]}.jpg`}
                        source3={`/photos/${photo[2]}.jpg`}
                        source4={`/photos/${photo[3]}.jpg`}
                        >
                        </PhotoGrid>
                        

                        {fetch.map((file)=>{
            return <img height="100" width="100" src={file} alt="nor"></img>
            })}
                    <div className={style.col2}></div>
                </div>
                )}
            </div>

            <div className={style.footer}>
                <FooterBar></FooterBar>
            </div>
            
        </div>
    )
}