import React from 'react'
import { products } from '../components/data'
import Link from 'next/link'
import Image from 'next/image'
import style from '../components/shop.module.css'
import AddToCartButton from '../components/AddToCartButton'
import { Rating } from '@mui/material'

export default function Shop() {
  const allProducts = products.map(product => (
      <section key={product.id} className={style.section}>
          <div className={style.productCard}>
            <Link className={style.productThumbnailWrapper} href={`/shop/${product.name.replaceAll(' ','-')}`} title={`${product.name} is ${product.colour}`}>
            <Image className={style.productThumbnailArchive} src={product.imageUrl} alt={`Image of ${product.name}`} width={150} height={150}/>
            </Link>
            <div className={style.productBody}>
              <Link className={style.mask} href={`/shop/${product.name.replaceAll(' ','-')}`}>
                <h3 className={style.productName}>{product.name}</h3>
              </Link>
              <p>Ratings: {product.rating}</p>
              <div className={style.productPriceBlock}>
                <h2 className={style.productPrice}> &#8358; {product.price}</h2>
              </div>
              <AddToCartButton/>
            </div>
          </div>
    </section>
  ))
  return (
    <div className={style.container}>

      <div className={style._3ColumnProductGrid}>
        {allProducts}
      </div>
    </div>
  )
}
