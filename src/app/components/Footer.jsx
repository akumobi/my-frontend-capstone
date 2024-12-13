import React from 'react'
import style1 from "./footer.module.css"
import style2 from "./mainfooter.module.css"
import style3 from "./footerbottom.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className={style1.footer}>
        <div className={style1.container}>
            <div className={style1.newsletterBlock}>
                <div className={`${style1.wLayoutVflex} ${style1._10pxGap}`}>
                    <div className={style1._30pxTitle}>Subscribe our newsletter</div>
                    <p className={style1.paragraph300}>Subscribe to our newsletter for exclusive updates, promotions, and exciting news delivered straight to your inbox!</p>
                </div>
                <div className={`${style1.subscriptionFormBlock} ${style1.wForm}`}>
                    <form action="" className={style1.subscriptionForm}>
                        <input className={`${style1.subscriptionMailInput} ${style1.wInput}`} type="email" name="Newsletter-Email" id="Newsletter-Email" required placeholder='Your Email'/>
                        <input className={`${style1.subscriptionButton} ${style1.wButton}`} type="submit"  value="Subscribe"></input>
                    </form>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className={style2.mainFooter}>
            <div className={style2.container}>
                <div className={style2.footerWrapper}>
                    <div className={`${style2.footerBlock} ${style2.firstBlock}`}>
                        <Link className={style2.wNavBrand} href={'/'}>
                            <Image src={'/images/Logo.webp'} alt='Pack Hub Logo' width={100} height={100}/>
                        </Link>
                        <p className={style2.footerParagraph}>Pack Hub is Nigeria's foremost indigenous packaging company, providing quality packaging products and ensuring a stress-free shopping experience of eco-friendly packaging.</p>
                        <div className={style2.socialShareIconContainer}>
                            <Link href="https://www.instagram.com/akumobikingsley/" target="_blank" className={style2.footerSocialIcon}><FaInstagram /></Link>
                            <Link href="https://www.facebook.com/akumobikingsley/" target="_blank" className={style2.footerSocialIcon}><FaFacebookF />
                            </Link>
                            <Link href="https://www.pinterst.com/akumobikingsley/" target="_blank" className={style2.footerSocialIcon}><FaPinterestP />
                            </Link>
                            <Link href="https://www.x.com/akumobikingsley/" target="_blank" className={style2.footerSocialIcon}><FaXTwitter />

                            </Link>
                        </div>
                    </div>
                    <div className={style2.footerBlock}>
                        <div className={style2.footerTitle}>Locations</div>
                        <div className={style2.listBlock}>
                            <Link className={style2.footerLink} href={'https://www.instagram.com/abujapackagingcenter/'} target="_blank" >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Abuja
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'https://www.instagram.com/enugupackagingco/'} target="_blank" >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Enugu
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'https://www.instagram.com/ibadanpackaging.co/'} target="_blank" >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Ibadan
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'https://www.instagram.com/portharcourtpackaging.co/'} target="_blank" >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Port Harcourt
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={style2.footerBlock}>
                        <div className={style2.footerTitle}>Quick Links</div>
                        <div className={style2.listBlock}>
                            <Link className={style2.footerLink} href={'/'} >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Home
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'/shop'} >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Shop
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'/about'} >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    About
                                </div>
                            </Link>
                            <Link className={style2.footerLink} href={'/contact'} >
                                <div className={style2.footerLinkIcon}><FaChevronRight /></div>
                                <div>
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={style2.footerBlock}>
                        <div className={style2.footerTitle}>HQ</div>
                        <p className={style2.footerParagraph}>Shomolu, Lagos, Nigeria</p>
                        <div className={`${style2.wLayoutVflex} ${style2._10pxGap}`}>                            
                            <div className={style2.footerTitle}>Call or Write Us</div>
                            <div className={style2.horizontalBlock10pxGap}>
                                <Image className={style2._16pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7248f0423a4a5df65_phone-call%202.webp'} alt='Phone icon' width={75} height={75}/>
                                <div className={style2.paragraph300}>+234 812 988 3744</div>
                            </div>
                            <div className={style2.horizontalBlock10pxGap}>
                                <Image className={style2._16pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f127a7b51c3fd39e167223_Layer_1.webp'} alt='Email icon' width={75} height={75}/>
                                <div className={style2.paragraph300}>packhubhq@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style3.footerBottom}>
            <div className={`${style3.container} ${style3.middleAllign}`}>
                <div className={style3.footerCopyright}>
                    Copyright © {currentYear} Akumobi Kingsley | &nbsp;
                    <Link className={style3.footerCopyright} href="https://univelcity.com/" target="_blank">A Univelcity Frontend Project &nbsp;</Link> | &nbsp;
                    <Link className={style3.footerCopyright} href="https://react.dev/" target="_blank">Built with React &nbsp; <FaReact /></Link> &nbsp;
                    <Link className={style3.footerCopyright} href="https://nextjs.org/" target="_blank">& NextJS &nbsp; <TbBrandNextjs /></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
