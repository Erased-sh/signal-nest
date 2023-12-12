import * as React from 'react';
import { current_routes } from '@/app/utils';
import styles from "./styles.module.css"
import Link from 'next/link';

export default function NabigationBar() {
    const routes = current_routes;

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className='navigatioin_item'>
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
            </div>
        </div>
    )
}