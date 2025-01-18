import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.data}>
                datos
            </div>
            <div className={styles.social}>
                redes
            </div>
            <div className={styles.legal}>
                enlaces legales
            </div>
        </div>
    )
}

export default Footer