import Image from "next/image";
import Link from "next/link";
import style from "./components/home.module.css"
import { MdEast } from "react-icons/md";
import style1 from './components/shop.module.css'
import AddToCartButton from '@/app/components/AddToCartButton'
import {products } from '@/app/components/data'
import style2 from './components/productdetails.module.css'

export default function Home() {

  const whiteProducts = products.filter(product => (product.colour == "White")).map(product =>(
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
                    <p className={style2.paraText}>{product.description}</p>
                    {/* Insert Button and Item count */}
                </div>
                <div>
                    <p className={style2.paraText}>{`SKU: PHOS${product.id}`}</p>
                    <p className={style2.paraText}>{`Colour: ${product.colour}`}</p>
                    <p className={style2.paraText}>{`Category: ${product.category}`}</p>
                </div>
                <AddToCartButton/>
            </div>
        </div>
    </section>
))


  return (
    <div className={style.pageWrapper}>
      <section className={style.heroSection}>
        <div className={style.container}>
          <div className={style.heroSlider}>
            <div className={style.wSliderMask}>
              <div className={style.wSlide}>
                <div className={style.heroBlock}>
                  <div className={style.imageWrapper}>
                    <Image className={style.heroImage} src={'/images/hero.png'} alt="Hero Image" width={500} height={500} />
                    <Image src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/65f2b84091013d85c56e96c4_Hero%20BG-p-800.png'} className={style.heroBgTopLeft} alt="Hero Image Background" width={800} height={800}/>
                  </div>
                  <div className={style.heroContents}>
                    <h2 className={style.heroTitle}>Boat Trays</h2>
                    <p className={style.heroParagraph}>Boat Tray can hold any type of foods/product, whether it is hot, cold, wet or dry. This paperboard tray is suitable for many different kinds of snacks and finger foods such as burgers, chicken goujons, nachos, potato wedges, etc. In addition to its simple product presentation, this tray is an ideal container for instant eat.</p>
                    <Link className={`${style.primaryButton} ${style.primaryButtonHover}`} href={'./shop'}>
                      <div className={style.buttonTextWrapper}>
                        <div>Shop All</div>
                      </div>
                      <div><MdEast /></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style._3ColumnGrid}>
            <div className={style.featureCard}>
              <Image className={style._75pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/6603f311eff828b190c534a1_delivery-truck%201.png'} alt="Delivery Icon" width={150} height={150} />
              <div className={`${style._10pxGap} ${style.wLayoutVflex}`}>
                <div className={style._20pxBoldTitle}>Same Day Delivery</div>
                <p className={style._16pxParaText}>Enjoy same day delivery in locations where we have stores.</p>
              </div>
            </div>
            <div className={style.featureCard}>
              <Image className={style._75pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/6603f3112074495a156839e9_high-quality%201.png'} alt="Quality Assurance icon" width={150} height={150}/>
              <div className={`${style._10pxGap} ${style.wLayoutVflex}`}>
                <div className={style._20pxBoldTitle}>High Quality Packs</div>
                <p className={style._16pxParaText}>Get the Best Quality eco-friendly packs at your finger tips.</p>
              </div>
            </div>
            <div className={style.featureCard}>
              <Image className={style._75pxSvg} src={'https://cdn.prod.website-files.com/65f0219f664a58453bb579a5/6603f311731533b8de44cafe_credit-card%201.png'} alt="Secure payment icon"width={150} height={150}/>
              <div className={`${style._10pxGap} ${style.wLayoutVflex}`}>
                <div className={style._20pxBoldTitle}>Fast and Secure Payments</div>
                <p className={style._16pxParaText}>Complete your rders seemlessly and securely either through cards, bank transfers, USSD or direct debits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style2.relatedWrapper}>
        <div className={style.container}>
          <h3 className={style2.productTitle}>White Packs</h3>
          <div className={style1._3ColumnProductGrid}>
              {whiteProducts}
          </div>
        </div>
      </section>
    </div>
  );
}
