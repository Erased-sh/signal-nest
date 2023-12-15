import style from "../page.module.css"
import NavigationBar from "../components/layout/navigation_bar"
import FooterBar from "../components/layout/footer_bar"
import PhotoGrid from "../components/photogrid/photo_grid"
import ESlider from "../components/sliders/exhibition_slider/exhibition_slider"
export default function PhotosPage() {
    const photos_example = [1,2,3,4]
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
                        <ESlider></ESlider>
                    </div>
                    <div className={style.col1}></div>
                </div>
                
                
                {photos_example.map(photo => 
                <div key={photo} className={style.text_holder}>
                    <div className={style.col2}></div>

                        <PhotoGrid
                        source1="/map.jpg"
                        source2="/map.jpg"
                        source3="/map.jpg"
                        source4="/map.jpg"
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