import React from 'react'
import style from './Summary.module.css';

export default function Summary(props) {
    let number = props.amount.planrate.replace(/\D/g,'');
    let r=props.values.addonsrate.map(a=>a.replace(/\D/g,'')).reduce((a,b)=>Number(a)+Number(b));
    console.log(Number(number)+r);
  return (
    <div className={style.Main}>
    <div>
        <p className={style.Personal}>Finishing up</p>
        <p className={style.Please}>Double check eveything looks OK before confirming</p>
    </div>
    <div className={style.planSmallDiv}>
        <div className={style.insideDiv}>
            <div className={style.change}>
                <div>
                    <div className={style.flexclass}>
                        <p>{props.values.plan}</p>
                        {props.values.option?<p>(Yearly)</p>:<p>(Monthly)</p>}
                        </div>
                    <p className={style.Please+" "+style.changeText} value="1" onClick={()=>props.change()}><u>Change</u></p>
                </div>
                <p>{props.amount.planrate}</p>
            </div>
            <div className={style.online}>
            <div >
                {props.values.addons.map(a=>{
                    return (
                            <p>{a}</p>
                            )       
                })}
                </div>
                <div>
                {props.values.addonsrate.map(b=>{
                            return (<p className={style.para1}>{b}</p>)
                            })}
                    </div>
                
            </div>
        </div>
        <div className={style.total}>
        {props.values.option?<p>Total (per year)</p>:<p>Total (per month)</p>}
            <p className={style.totalruppe}>+${Number(number)+r}{props.values.option?<span>/yr</span>:<span>/mo</span>}</p>
        </div>
    </div>
    <div className={style.NextstepContainer}>
    <p className={style.Please} onClick={()=>props.prevStep()} >Go Back</p>
        <div className={style.Nextstep} onClick={()=>props.nextStep()}>Confirm</div>
    </div>
</div>
  )
}