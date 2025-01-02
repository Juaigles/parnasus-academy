import React from 'react'
import styles from './info.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl';


const Info = () => {
    const t = useTranslations("Info")
    return (
        <div className={styles.info}>
            <div className={styles.images}>
                <div className={styles.img1}>
                    <Image className={styles.image} src={"/homeImg.jpg"} width={1300} height={1300} layout="responsive" alt='icon' />

                </div>
                <div className={styles.img2}>
                    <Image className={styles.image} src={"/homeImg.jpg"} width={1300} height={1300} layout="responsive" alt='icon' />

                </div>
            </div>
            <div className={styles.text}>
                <h2>{t('title')}</h2>
                <div className={styles.description}>

                    <p> {t('description1')}</p>
                    <p> {t('description2')}</p>
                    <p> {t('description3')}</p>

                </div>
                <button className={styles.button}>{t('button')}</button>
            </div>
        </div>
    )
}

export default Info