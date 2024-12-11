import React from 'react'
import Link from 'next/link'
import { TbTruckDelivery } from "react-icons/tb";
import style1 from '/home/donchy/Documents/September 2024/my-frontend-capstone/src/app/components/topnoticebar.module.css'
import Image from 'next/image';

export default function NavBar() {
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
            <section>
                <div>
                    <div>
                        <Link href="/">
                            <Image src={'/images/Logo.webp'} alt='Pack Hub Logo' width={75} height={75}/>
                        </Link>
                        <form action="/search">
                            <input type="search" name="query" id="search-shop" required/>
                            <input type="submit" name="search" value="search" id="submit-search-shop" />
                        </form>
                        <div>
                            <div>
                                <Link href={"/"}>
                                    <Image src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7b89cfcd9e5a4f03c_user%20login.svg'} alt='Account Icon' width={150} height={150}/>
                                </Link>
                                <div>
                                    <Link href={'/'}>Login</Link>
                                    <Link href={'/'}>Account</Link>
                                </div>
                            </div>
                            <div>
                                <Link href={'/'}>
                                    <div>
                                        <Image src={''} alt=''/>
                                        <div>

                                        </div>
                                    </div>
                                    <div>
                                        <div>Your Cart</div>
                                        <div></div>
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
        <div>
            <nav>
                <ul className='hidden md:flex flex-row justify-between items-center bg-[#fff] text-neutral-600'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
