"use client"

import React, { useContext } from 'react'
import Link from 'next/link'
import { TbTruckDelivery } from "react-icons/tb";
import style1 from './topnoticebar.module.css'
import style2 from './topnavbar.module.css'
import style3 from "./mainnav.module.css"
import Image from 'next/image';
import SearchBar from '../shop/SearchBar';
import { SidebarContext } from '../providers';

export default function NavBar() {
    const {cart} = useContext(SidebarContext)
    const {cartOpen} = useContext(SidebarContext)
    
  return (
    <div>
        <div className={style1.headerWrapper}>
            <section className={style1.topNoticeBar}>
                <div className={style1.container}>
                    <div className={style1.spaceBetweenBlock}>
                        <div className={style1.noticeBarLeft}>
                            <div className={style1.horizontalBlock7pxGap}>
                                <Image src='https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a6c7a59534ccbb9495_free-delivery%201.svg' alt='Free Delivery' width={150} height={150} className={style1._26pxSvg}/>
                                <p className={style1._14pxTextWhite}>Free Delivery on orders &#8358;100,000+</p>
                            </div>
                            <div className={style1.noticeBarText}>
                                <p className={style1._14pxTextSecondaryParagraph}>Pack Hub is the leading Packagin online store 
                                    <span className={style1.boldUnderlineLink}> <Link href="./shop">Show All Products</Link></span>
                                </p>
                            </div>
                        </div>
                        <Link href="/" className={style1._14pxTextWhite}>Privacy Policy</Link>
                    </div>
                </div>
            </section>
            <section className={style2.topNavigation}>
                <div className={style2.container}>
                    <div className={style2.spaceBetweenBlock}>
                        <Link className={`${style2.navbarLogoWrapper} ${style2.wNavBrand}`} href="/">
                            <Image className={style2.siteLogo} src={'/images/Logo.webp'} alt='Pack Hub Logo' width={75} height={75}/>
                        </Link>
                        <form action="/search" className={`${style2.searchBarWrapper} ${style2.wForm}`}>
                            <SearchBar />
                        </form>
                        <div className={`${style2.wLayoutHflex} ${style2.ecommerceIcons}`}>
                            <div className={style2.userIconBlock}>
                                <Link className={style2.wInlineBlock} href={"/"}>
                                    <Image className={style2._24pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7b89cfcd9e5a4f03c_user%20login.svg'} alt='Account Icon' width={150} height={150}/>
                                </Link>
                                <div className={style2.wLayoutVflex}>
                                    <Link className={style2.text12px } href={'/'}>Login</Link>
                                    <Link className={style2.headingColor} href={'/'}>Account</Link>
                                </div>
                            </div>
                            <div className={style2.wCommerceCartWrapper}>
                                <Link className={`${style2.wCommerceCarOpenLink} ${style2.cartButton} ${style2.wInlineBlock}`} href={`${cartOpen}`}>
                                    <div className={style2.relativeBlock}>
                                        <Image className={style2._24pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a6a12d5be1d7e91306_bag%20icon.svg'} alt='Cart Icon' width={150} height={150}/>
                                        <div className={`${style2.cartQuantity}`}>
                                            {cart}
                                        </div>
                                    </div>
                                    <div className={style2.wLayoutVflex}>
                                        <div className={`${style2.text12px} ${style2.wInlineBlock}`}>Your Cart</div>
                                        <div className={style2.cartTotalPrice}></div>
                                    </div>
                                </Link>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className={style3.navbar}>
            <nav className={style3.container}>
                <div className={style3.navbarWrapper}>
                    <div className={`${style3.categoryDropdown}`}>
                        <div className={`${style3.browseCategoriesBlock} `}>
                            <Image className={style3._20pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a67ecf746a9314d033_Group.webp'} alt='Browse all categories icon' width={75} height={75}/>
                            <div className={style3._14pxTextUppercase}>Browse All Categories</div>
                        </div>
                        <nav></nav>
                    </div>
                    <div className={style3._1pxWidthDivider}></div>
                    <nav role='navigation' className={style3.navMenuWrapper}>
                        <ul role='list' className={style3.navMenu}>
                            <li className={style3.navList}>
                                <Link className={style3.navLink} href="/">Home</Link></li>
                            <li className={style3.navList}>
                                <Link className={style3.navLink} href="./shop">Shop</Link>
                            </li>
                            <li className={style3.navList}>
                                <Link className={style3.navLink} href="./about">About</Link>
                            </li>
                            <li className={style3.navList}>
                                <Link className={style3.navLink} href="./contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style3._1pxWidthDivider}></div>
                    <div>
                        <div className={style3.horizontalBlockWith7pxGap}>
                            <Image className={style3._16pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7248f0423a4a5df65_phone-call%202.webp'} alt='Phone icon' width={75} height={75}/>
                            <div className={style3.paragraph400Semibold}>Call: +234 812 988 3744</div>
                        </div>
                        <div className={style3.horizontalBlockWith7pxGap}>
                            <Image className={style3._16pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7b51c3fd39e167223_Layer_1.webp'} alt='Email icon' width={75} height={75}/>
                            <div className={style3.paragraph400Semibold}>Email: packhubhq@gmail.com</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </nav>
        </div>
    </div>
  )
}
