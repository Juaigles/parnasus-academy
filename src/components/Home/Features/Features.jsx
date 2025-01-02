import React from 'react'
import styles from "./features.module.css"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Features = () => {
    const t = useTranslations('Features');
      // Las claves de los ítems en "Features"
      const featureKeys = ['item1', 'item2', 'item3', 'item4'];

      return (
          <div className={styles.features}>
              {featureKeys.map((key, index) => (
                  <div key={index} className={styles.item}>
                    <div className={styles.icon}>
                        <Image className={styles.image} src={"/homeImg.jpg"} width={1300} height={1300} layout="responsive"alt='icon'/>
                    </div>
                    <div className={styles.text}>
                    {t(key)}

                    </div>
                    </div> 
              ))}
          </div>
      );
    
  
}

export default Features