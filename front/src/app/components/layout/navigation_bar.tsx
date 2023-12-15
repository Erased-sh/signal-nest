import * as React from 'react';
import { current_routes } from '@/app/utils';
import styles from "./navbar.module.css"
import Link from 'next/link';
import Image from 'next/image';

export default function NabigationBar() {
    const routes = current_routes;

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={`${styles.logo} ${styles.item}`}>
                    <Image
                    src="/logo.jpg"
                    alt='logo'
                    height={52}
                    width={52}>

                    </Image>
                </div>
                <div className={styles.item}>
                <Link className={styles.link} href={routes.main_page}>
                    <h3 className={styles.nav_text}>Главная</h3>
                </Link>
                </div>
                <div className={styles.item}>
                <Link className={styles.link} href={routes.about}>
                    <h3 className={styles.nav_text}>О нас</h3>
                </Link>
                </div>            

                <div className={styles.item}>
                <Link className={styles.link} href={routes.teams}>
                    <h3 className={styles.nav_text}>Команды</h3>
                </Link>
                </div>

                <div className={styles.item}>
                <Link className={styles.link} href={routes.attandance}>
                    <h3 className={styles.nav_text}>Посещаемость</h3> 
                </Link>
                </div>
                <div className={styles.item}>
                <Link className={styles.link} href={routes.photos}>
                    <h3 className={styles.nav_text}>Галерея</h3>
                </Link>
                </div>
                <div className={styles.item}>
                <Link className={styles.link} href={routes.contacts}>
                    <h3 className={styles.nav_text}>Контакты</h3>
                </Link>
                </div>
                <div className={`${styles.item} ${styles.numbers}`}>
                    <h4>16.12.2023</h4>
                </div>
            </div>
        </div>
    )
}