import React from 'react'
import styles from './contact.module.css'
import { useTranslations } from 'next-intl';


const Contact = () => {
    const t = useTranslations("Contact")
    return (
        <div className={styles.contact}>
            <div className={styles.text}>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>
            </div>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <input className={styles.input} type="text" placeholder={t('placeholder_name')} />
                    <input className={styles.input} type="text" name="" id="" placeholder='Email' />
                </div>
                
                    <button  className={styles.button}>{t('button')}</button>
            </div>
        </div>
    )
}

export default Contact