import styles from "./footer.module.css"
import Image from "next/image"


export default function FooterBar() {
    return (
        <footer>
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3 className={styles.text_inner}>svyazist@mtuci.ru</h3>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.text_inner}>vk.com/mssksvyazist</h3>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.text_inner}><a className={styles.link} href="https://mtuci.ru/">https://mtuci.ru/</a></h3>
                </div>
                <div className={styles.item}>
                    <Image
                        src="/logo_b.jpg"
                        alt='logo'
                        height={100}
                        width={100}>

                        </Image>
                </div>
            </div>
        </div>
        </footer>
    )
}