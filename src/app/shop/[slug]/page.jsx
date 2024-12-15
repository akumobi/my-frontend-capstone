import React from 'react'
import {products } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/app/components/AddToCartButton'
import style from '../../components/productdetails.module.css'
import style1 from '../../components/shop.module.css'

export default function ProductsPage({params}) {
    const productDetails = products.find(product => product.name.split(" ").join("-") == params.slug)

    const relatedProducts = products.filter(product => (product.category == productDetails.category) && (productDetails.name !== product.name)).map(product =>(
        <section key={product.id} className={style1.section}>
            <div className={style1.productCard}>
                <Link className={style1.productThumbnailWrapper} href={`/shop/${product.name.replaceAll(' ','-')}`} title={`${product.name} | ${product.description}`}>
                    <div>
                        <Image className={style1.productThumbnailArchive} src={product.imageUrl} alt={`Image of ${product.name}`} width={150} height={150}/>
                    </div>
                </Link>
                <div className={style1.productBody}>
                    <div className='py-2 border-solid border-b'>
                        <Link className={style1.mask} href={`/shop/${product.name.replaceAll(' ','-')}`}>
                            <h2 className={style1.productName}>{product.name}</h2>
                        </Link>
                        <p className={style1.productPriceBlock}>{product.rating}</p>
                    </div>
                    <div className='py-2 border-solid border-b'>
                        <p className={style.paraText}>{product.description}</p>
                        {/* Insert Button and Item count */}
                    </div>
                    <div>
                        <p className={style.paraText}>{`SKU: PHOS${product.id}`}</p>
                        <p className={style.paraText}>{`Colour: ${product.colour}`}</p>
                        <p className={style.paraText}>{`Category: ${product.category}`}</p>
                    </div>
                    <AddToCartButton/>
                </div>
            </div>
        </section>
    ))
  return (
    <div className={style.pageWrapper}>
        {/* <Link href={`/shop/${productDetails.name.replaceAll(' ','-')}`} title={`${productDetails.name} | ${productDetails.description}`}>
        </Link> */}
        <div className={`${style.section} ${style.container}`}>
            <div className={style._2ColumnContainer}>
                <div className={style.productImagesWrapper}>
                    <div className={style.productImageBackground}>
                        <Image className={style.productImage} src={productDetails.imageUrl} alt={`Image of ${productDetails.name}`} width={450} height={450}/>
                    </div>
                </div>
                <div className={style.productDetailsBlock}>
                    <div>
                            <h2 className={style.productTitle}>{productDetails.name}</h2>
                            <p className={style.starWrapper}>{productDetails.rating}</p>
                        
                    </div>
                    <div className={style.priceWrapper}>
                        <h3 className={style.singleProductPrice}>&#8358;{productDetails.price}</h3>
                    </div>
                    <div>
                        <p className={style.paraText}>{productDetails.description}</p>
                        {/* Insert Button and Item count */}
                    </div>
                    <div className={style.productMetaFieldsWrapper }>
                        <p  className={style.paraText}>{`SKU: PHOS${productDetails.id}`}</p>
                        <p className={style.paraText}>{`Colour: ${productDetails.colour}`}</p>
                        <p className={style.paraText}>{`Category: ${productDetails.category}`}</p>
                    </div>
                    <div className={style.cartButtonWrapper}>
                        <AddToCartButton/>
                    </div>
                </div>
            </div>
            <section className={style.relatedWrapper}>
                <h3 className={style.productTitle}>Related Items</h3>
                <div className={style1._3ColumnProductGrid}>
                    {relatedProducts}
                </div>
            </section>

        </div>
    </div>
  )
}
