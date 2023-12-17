
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
       const data=response.data.items[key]
       console.log(data.path)
       return data.path.split("/").length<=2?data.file:""
    })
    console.log(data)
   
    return data
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    const data=[]
    return 
  }
};


const splitUrls = (urls: string[]) => {
    let index = 0;
    let result: string[][] = [];
    while (index + 4 < urls.length) {
        result.push(urls.slice(index, index + 4));
        index += 4
    }
    return result;
}



import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import PhotoGrid from "../components/photogrid/photo_grid"
import ESlider from "../components/sliders/exhibition_slider/exhibition_slider"



export default async function PhotosPage(){
    
    // const photos_example = [[1,2,3,4], [4,5,6,7], [8,9,10,10] ]
    const fetch=await fetchData()||[""]
    const photos = splitUrls(fetch);

   
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
                        <ESlider urls={fetch}></ESlider>
                    </div>
                    <div className={style.col1}></div>
                </div>
                
                
                {photos.map(photo => 
                <div key={photo[0]} className={style.text_holder}>
                    <div className={style.col2}></div>
                        <PhotoGrid
                        photos={photo}
                        >
                        </PhotoGrid>                    
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