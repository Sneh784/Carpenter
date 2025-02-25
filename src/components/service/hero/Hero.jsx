import React from 'react'
import styles from "./Hero.module.css"
import { TiTick } from "react-icons/ti";


function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Container}>
      <div className={styles.Section3}>
            <div className={styles.image3}>
                <img src="https://i.pinimg.com/736x/13/ff/e9/13ffe9863e957e1e1208b42fa5745b7b.jpg"/>
            </div>
            <div className={styles.Name11}>SERVICES</div>
            </div>
        <div className={styles.Section}>
            <div className={styles.Box}>
                <div className={styles.box}>
            <div className={styles.Name}>WOOD<br/>CUSTOM <br/>SPECIALIST..!!</div>
            <div className={styles.Sent}>Lorem ipsum dolor sit amet</div>
            <div className={styles.button}>EXPLORE</div>
            </div>
            <div className={styles.image}>
                <img src="https://i.pinimg.com/736x/9f/89/f1/9f89f14aac51656a23e9de5e2a06099a.jpg"/>
            </div>
            </div>

            <div className={styles.Box2}>
                <div className={styles.image1}>
                    <img src="https://i.pinimg.com/736x/31/ba/1e/31ba1e82ef20888cdbd990b0364e5c1a.jpg"/>
                </div>
                <div className={styles.Section2}>
                    <div className={styles.header}>WE TRY TO PROVIDE THE BEST<br/> FOR OUR CLIENTS</div>
                    <div className={styles.Line1}>KAJUH COMPANY IS SPECIALIST WOOD CUSTOM</div>
                    <div className={styles.Line2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nulla eaque dolore nesciunt molestias alias reprehenderit earum modi adipisci? Facilis officiis cumque eligendi laborum rem saepe et, ea quae explicabo.</div>
                    <div className={styles.Line3}>
                      <TiTick size={30} color='chocolate' />Sed of tellus non rasi ultricies<br/>
                      <TiTick size={30} color='chocolate' />  Nullarm vulaputate malesuada aliquam<br/>
                      <TiTick size={30} color='chocolate' />  Condimantum augue ultricies
                    </div>
                </div>
            </div>
            {/* <div className={styles.Section3}>
            <div className={styles.image3}>
                <img src="https://i.pinimg.com/736x/13/ff/e9/13ffe9863e957e1e1208b42fa5745b7b.jpg"/>
            </div>
            <div className={styles.Name11}>SERVICES</div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
