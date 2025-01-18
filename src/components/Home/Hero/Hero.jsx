import { useTranslations } from 'next-intl';
import styles from "./hero.module.css"
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('HomePage');
  
  return (
    <div className={styles.homeFrame}>
      <div className={styles.heroInfo}>
        <div className={styles.title}>
          <h1>{t('title')}</h1>

        </div>
        <div className={styles.subtitle}>
          <h2>{t('subtitle')}<span className={styles.subtitleHighlited}> <h2>{t('subtitleHighlighted')}</h2></span></h2>
        </div>
        
        <div className={styles.description}>
          <p>{t('description')}</p>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button}>{t('ctaHero')}</button>
        </div>

      </div>
      <div className={styles.imageDiv}>

        <div className={styles.image}>

          <Image src="/homeImg.jpg" alt='home-parnasus'  width={1000} height={600} />
        </div>
      </div>

    </div>
  );
}