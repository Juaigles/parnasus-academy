import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';


const Info = () => {
    const t = useTranslations("About")
    return (
        <div className={styles.main}>
            <div className={styles.top}>

                <div className={styles.text}>
                    <h2>{t('title')}</h2>
                    <p className={styles.desc}>{t('description')}</p>
                </div>
                <div className={styles.video}>
                    <Link href="" >VIDEO  YOUTUBE</Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.pin}>
                    <h2>70+</h2>
                    <p>{t('achivement1')}</p>
                </div>
                <div className={styles.pin}>
                    <h2>5000+</h2>
                    <p>{t('achivement2')}</p>

                </div>
                <div className={styles.pin}>
                    <h2>41+</h2>
                    <p>{t('achivement3')}</p>

                </div>
                <div className={styles.pin}>
                    <h2>4+</h2>
                    <p>{t('achivement4')}</p>

                </div>
            </div>
        </div>
    )
}

export default Info