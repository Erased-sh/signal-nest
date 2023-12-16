
export async function generateStaticParams(){
    try {
      const urls:string[]= await getPhotosDrive();
      console.log(urls)
      return {props:
        {urls}
    }
    } catch (error) {
      const urls:string[]=[""]
      console.error('Error fetching photos:', error);
      return {props:
        {urls}
    }
    }
  };


import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import PhotoGrid from "../components/photogrid/photo_grid"
import { getPhotosDrive } from "../fetching/photo_drive";
interface pr{
    urls:string[]
}

export default async function PhotosPage({urls}:pr){
    
    const photos_example = [[1,2,3,4], [4,5,6,7], [8,9,10,10] ]
    return (
        <div className={style.body}>
            <NavigationBar></NavigationBar>

            {

                urls?.map((photo)=>{
                    return <img src={photo} alt={photo}/>
                })
                
            }

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
                        <img src="https://drive.google.com/file/d/1PXz227-kJS0KXXI_H38WLRxWeYqdZdN5/view?usp=share_link"/>

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