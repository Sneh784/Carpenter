import React from 'react'
import styles from "./Provide.module.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function Provide() {
  return (
    <div className={styles.Provide}>
      <div className={styles.Section}>
        <div className={styles.Name}>Service We Provide</div>
        <div className={styles.Sent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nisi aut, quaerat<br/>
        iusto animi rem deleniti placeat, esse, earum
         consequuntur dolor. <br/>Assumenda ipsam quidem neque culpa suscipit unde similique atque.</div>
        {/* <div className={styles.button}>Contact Now </div> */}

      </div>

      <div className={styles.Section1}>
        <div className={styles.Box1}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Place Renovation</div>
            <div className={styles.Line}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum rerum possimus sed. Voluptatum fuga quis adipisci qui, minima at similique magnam error earum deleniti laborum dolore dolorem ipsa illum?</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20} /></div>
        </div>

        <div className={styles.Box1}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Windows and Fences</div>
            <div className={styles.Line}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nulla commodi maxime numquam consectetur veritatis blanditiis aperiam eveniet distinctio assumenda, mollitia quas.neque cum minima ducimus ratione!</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20}  /></div>
        </div>

        <div className={styles.Box1}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Kitchen Furniture</div>
            <div className={styles.Line}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex voluptatibus vitae eius, deleniti soluta quisquam reiciendis tempore rerum voluptate dolorum, autem in? Odit optio veniam neque odio iure blanditiis.</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20} /></div>
        </div>
      </div>

      <div className={styles.Section2}>
      <div className={styles.Box2}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Wooden Furniture</div>
            <div className={styles.Line}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam eos aut id cum assumenda quia officiis numquam minus non, animi consequatur molestias iusto, optio dignissimos! Aspernatur natus quia unde?</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20} /></div>
        </div>

        <div className={styles.Box2}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Custom Work</div>
            <div className={styles.Line}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi velit veniam alias voluptate adipisci delectus earum nihil quae voluptatibus harum quisquam, doloribus ipsum distinctio molestias quod inventore.</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20} /></div>
        </div>


        <div className={styles.Box2}>
            <div className={styles.logo}></div>
            <div className={styles.Word}>Exterior Furniture</div>
            <div className={styles.Line}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde tempore cumque aut quibusdam soluta dolores! Ad inventore doloremque explicabo! Id accusantium nostrum esse recusandae dolorem sint fugiat laboriosam.</div>
            <div className={styles.Button}>Learn More<FaLongArrowAltRight size={20} /></div>
        </div>
      </div>
    </div>
  )
}

export default Provide
