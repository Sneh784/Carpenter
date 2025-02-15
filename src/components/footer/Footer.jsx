import React from 'react'
import styles from "./Footer.module.css"
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";



function Footer() {
  return (
    <div className={styles.Footer}>
       <div className={styles.Section}>
          <div className={styles.Section1}>
             <div className={styles.Name}>Handmade And Fully-<br/>Bespoke Joinery & Carpentry</div>
             <div className={styles.Line}>Penta Software Consultancy Services(I) Pvt Ltd <br/>
             (PSCS) is a Global leader in IT services, Digital and <br/>
             business solutions that partners with its clients to <br/>
             simplify, strengthen and transform their businesses. <br/>
             We ensure the highest levels of certainty and satisfaction<br/>
             through a deep-set commitment to our clients, <br/>comprehensive
             industry expertise and a global network <br/>
             of innovation and delivery canters</div>
          </div>
        
              <div className={styles.Section3}>
               <div className={styles.Name3}>Contacts</div>
                <div className={styles.box1}>
                <div className={styles.logo1}></div>
                <div className={styles.Address}>sr No 78/60, PI.No 1,Wing A, Office 26<br/>
                 A, Sai Vision,, Near Govind Garden,<br/>PimPle saudagar, Pune - 411027
                </div></div>
                <div className={styles.box2}>
                <div className={styles.logo2}></div>
                <div className={styles.No}>+91 7066541234|83298294</div>
                </div>
                <div className={styles.box3}>
                <div className={styles.logo3}></div>
                <div className={styles.Mail}>
                  hr@pentasoftwarereconsultancy.com</div>
               
              </div>

        </div>
       
        <div className={styles.Section2}>
           <div className={styles.line}> </div>
            <div className={styles.No}>
           
            <div className={styles.Logo}>
            <FaInstagram size={30}/>
            <IoLogoYoutube size={30}/><FaFacebook size={30}/><AiFillTwitterCircle size={30}/>


            </div></div> 
        </div>
        <div className={styles.Copy}>Copyright © 2024 - All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer