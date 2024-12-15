"use client"

import React, { useContext } from 'react'
import style from './shop.module.css'
import { SidebarContext } from '../providers'

export default function AddToCartButton() {
    const {setCart} = useContext(SidebarContext)

    function handleCartIncrease(){
        setCart(prev => prev + 1)
    }
  return (
    <button className={`${style.addToCart} ${style.addToCartHover}`} onClick={handleCartIncrease}>Add to Cart</button>
  )
}
