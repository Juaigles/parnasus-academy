import Product from '@/components/Cursos/products/Product'
import React from 'react'
import styles from './cursos.module.css'



const Cursos = () => {
    const baseDatos = [1,2,3,4]
  return (
    <div className={styles.cursos}>
        <div className={styles.title}>

        <h2 >MIS CURSOS</h2>
        </div>
        <div className={styles.products}>

        {baseDatos.map((index)=>(
            <Product key={index}/>
            
        ))}
        </div>
    </div>
  )
}

export default Cursos