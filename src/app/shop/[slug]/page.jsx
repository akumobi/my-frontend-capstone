import React from 'react'
import {products } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/app/components/AddToCartButton'

export default function ProductsPage({params}) {
    const productDetails = products.find(product => product.name.split(" ").join("-") == params.slug)

    const relatedProducts = products.filter(product => (product.category == productDetails.category) && (productDetails.name !== product.name)).map(product =>(
        <section key={product.id}>
            <Link href={`/shop/${product.name.replaceAll(' ','-')}`} title={`${product.name} | ${product.description}`}>
                <div>
                    <Image src={product.imageUrl} alt={`Image of ${product.name}`} width={150} height={150}/>
                </div>
            </Link>
            <div>
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.rating}</p>
                </div>
                <div>
                    <p>{product.description}</p>
                    {/* Insert Button and Item count */}
                    <AddToCartButton/>
                </div>
                <div>
                    <p>{`SKU: PHOS${product.id}`}</p>
                    <p>{`Colour: ${product.colour}`}</p>
                </div>
                <div>
                    <p>{`Category: ${product.category}`}</p>
                </div>
            </div>
        </section>
    ))
  return (
    <div>
        <Link href={`/shop/${productDetails.name.replaceAll(' ','-')}`} title={`${productDetails.name} | ${productDetails.description}`}>
            <div>
                <Image src={productDetails.imageUrl} alt={`Image of ${productDetails.name}`} width={150} height={150}/>
            </div>
        </Link>
        <div>
            <div>
                    <h2>{productDetails.name}</h2>
                    <p>{productDetails.rating}</p>
                    <h3>&#8358;{productDetails.price}</h3>
            </div>
                <div>
                    <p>{productDetails.description}</p>
                    {/* Insert Button and Item count */}
                    <AddToCartButton/>
                </div>
                <div>
                    <p>{`SKU: PHOS${productDetails.id}`}</p>
                    <p>{`Colour: ${productDetails.colour}`}</p>
                </div>
                <div>
                    <p>{`Category: ${productDetails.category}`}</p>
                </div>
        </div>
        <section>
            <h3>Related Items</h3>
            <div>
                {relatedProducts}
            </div>
        </section>
    </div>
  )
}
