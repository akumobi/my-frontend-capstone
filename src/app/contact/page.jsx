import React from 'react'
import style from '../components/contact.module.css'
import { IoStorefrontOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function page() {
  return (
    <div>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style._2ColumnBlock}>
            <div className={style.officeAddressWrapper}>
              <h2 className={style.heading}>Get in Touch</h2>
              <div className={style.marginBottom47px}>
                <p className={style.paraText}>Get in touch with us in-person or electronically through our contact form for any inquiries, questions, or partnership opportunities.</p>
              </div>
              <div className={style.logoAndInformationBlock}>
                <div className={style.officeInformationIcon}><IoStorefrontOutline /></div>
                <div className={style.officeInformationBlock}>
                  <div className={style.informationTitle}>Locate Our Stores</div>
                  <div className={style.officeInformation}>Abuja | Enugu | Ibadan | Lagos | Port Harcourt</div>
                </div>
              </div>
              <div className={style.logoAndInformationBlock}>
                <div className={style.officeInformationIcon}><ImWhatsapp /></div>
                <div className={style.officeInformationBlock}>
                  <div className={style.informationTitle}>Call or Chat Us</div>
                  <div className={style.officeInformation}>+234 812 988 3744</div>
                </div>
              </div>
              <div className={style.logoAndInformationBlock}>
                <div className={style.officeInformationIcon}><MdOutlineMarkEmailRead /></div>
                <div className={style.officeInformationBlock}>
                  <div className={style.informationTitle}>Email Us</div>
                  <div className={style.officeInformation}>packhubhq@gmail.com</div>
                </div>
              </div>
            </div>
            <div className={style.contactFormBlock}>
              <div className={style.contactFormTextsWrapper}>
                <div className={style.contactFormTitle}>Send Us A Quick Message Here!</div>
                <p className={style.contactFormParagraph}>Connect with us through our contact form for any inquiries, questions.</p>
              </div>
              <form className={style.contactForm}>
                <div className={style.formHorizontalWrapper}>
                  <div className={style.fieldWrapper}>
                    <label for="name" className={style.contactFormField}>Name</label>
                    <input className={style.contactFormInputField} maxlength="256" name="name" data-name="Name" placeholder="Your name" type="text" id="name"></input>
                  </div>
                  <div className={style.fieldWrapper}>
                    <label for="email" className={style.contactFormField}>Email</label>
                    <input className={style.contactFormInputField} maxlength="256" name="email" data-name="Email" placeholder="Your email" type="email" id="email" required=""></input>
                  </div>
                </div>
                <div className={style.formHorizontalWrapper}>
                  <div className={style.fieldWrapper}>
                    <label for="Phone-2" className={style.contactFormField}>Phone</label>
                    <input className={style.contactFormInputField} maxlength="256" name="Phone" data-name="Phone" placeholder="Your phone" type="number" id="Phone-2"></input>
                  </div>
                  <div className={style.fieldWrapper}>
                    <label for="Subject" className={style.contactFormField}>Subject</label>
                    <input className={style.contactFormInputField} maxlength="256" name="Subject" data-name="Subject" placeholder="Subject" type="email" id="Subject" required=""></input>
                  </div>
                </div>
                <div >
                  <label for="Message" className={style.contactFormField}>Message</label>
                  <textarea placeholder="Your Message" maxlength="5000" id="Message" name="Message" data-name="Message" className={`${style.contactFormInputField} ${style.messageArea}`}></textarea>
                </div>
                <div className={style.formButtonWrapper}>
                  <input type="submit" data-wait="Please wait..." className={`${style.submitButton} ${style.submitButtonHovwer}`} value="Send"></input>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
