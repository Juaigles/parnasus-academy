import React from 'react'
import styles from './product.module.css'
import Image from 'next/image'

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image src="/curso.webp" width={500} height={500} />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <h3 className={styles.title}>Titulo</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere provident, ducimus deleniti quas sed sunt excepturi fuga omnis, esse, id atque deserunt. Architecto fugit repellat repellendus sequi totam beatae numquam.</p>
          <button  className={styles.button}>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default Product