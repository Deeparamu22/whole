import React from 'react'
import style from './SideBar.module.css';
// import images from 'whole/public/assets/images'

export default function SideBar(props) {
    let class1=""
    let class2=""
    let class3=""
    let class4="";
    switch(props.get)
    {
        case 1: class1=style.fillcolor
        break;
        case 2: class2=style.fillcolor
        break; 
        case 3: class3=style.fillcolor
        break;
        default:
        class4=style.fillcolor;
    }
  return (
    
    <div className={style.sideClass}>
        <div className={style.contentclass}>
            <div className={style.innercontent}>
                <div className={style.textNumber+" "+class1}>1</div>
                <div className={style.textcontent}>
                    <p className={style.step}>STEP 1</p>
                    <p className={style.belowstep}>YOUR INFO</p>
            </div>
            </div>
            <div className={style.innercontent}>
                <div className={style.textNumber+" "+class2} >2</div>
                <div className={style.textcontent}>
                <p className={style.step}>STEP 2</p>
                <p className={style.belowstep}>SELECT PLAN</p>
            </div>
            </div>
            <div className={style.innercontent}>
                <div className={style.textNumber+" "+class3}>3</div>
                <div className={style.textcontent}>
                <p className={style.step}>STEP 3</p>
                    <p className={style.belowstep}>ADD-ONS</p>
                </div>
            </div>
            <div className={style.innercontent}>
                <div className={style.textNumber+" "+class4}>4</div>
                <div className={style.textcontent}>
                    <p className={style.step}>STEP 4</p>
                    <p className={style.belowstep}>SUMMARY</p>
                </div>
            </div>
        </div>
    </div>
  )
}