import React, { useState } from 'react'
import style from './Plan.module.css';

export default function Plan(props) {
    console.log(props.values.plan)
    const [type,settype]=useState(props.values.option);
    const changeradio=(e)=>{
        settype(e.target.checked)
       props.values.option=e.target.checked;
    }
  return (
    <div className={style.Main}>
    <div>
        <p className={style.Personal}>Select your plan</p>
        <p className={style.Please}>You have the option of monthly or yearly billing.</p>
    </div>
    <div className={style.planSmallDiv}>
    <label>
          {props.values.plan==="Arcade"?<input type="radio" name="product" value="Arcade" className={style.cardinputelement} onClick={props.handleChange('plan')} defaultChecked/>:<input type="radio" name="product" value="Arcade" className={style.cardinputelement} onClick={props.handleChange('plan')}/>}
        <div className={style.smallDiv}>
            <div className={style.arcade}></div>
            <p>Arcade</p>
            {type?<p className={style.Please}>$90/yr</p>:<p className={style.Please}>$90/mo</p>}
            {type?<p>2 months free</p>:null}
        </div>
        </label>
        <label>
        {props.values.plan==="Advantage"?<input type="radio" name="product" value="Advantage" className={style.cardinputelement} onClick={props.handleChange('plan')} defaultChecked/>:<input type="radio" name="product" value="Advantage" className={style.cardinputelement} onClick={props.handleChange('plan')}/>}
        <div className={style.smallDiv}>
            <div className={style.advantage}></div>
            <p>Advanced</p>
            {type?<p className={style.Please}>$120/yr</p>:<p className={style.Please}>$12/mo</p>}
            {type?<p>2 months free</p>:null}
        </div>
        </label>
        <label>
        {props.values.plan==="Pro"?<input type="radio" name="product"  value="Pro" className={style.cardinputelement} onClick={props.handleChange('plan')} defaultChecked/>:<input type="radio" name="product"  value="Pro" className={style.cardinputelement} onClick={props.handleChange('plan')} />}
        <div className={style.smallDiv}>
            <div className={style.pro}></div>
            <p>Pro</p>
            {type?<p className={style.Please}>$150/yr</p>:<p className={style.Please}>$15/mo</p>}
            {type?<p>2 months free</p>:null}
        </div>
        </label>
    </div>
    <div className={style.monthlyyearly}>  
    <p>Monthly</p>
    <div className={style.container}>
  <label className={style.switch}>{props.values.option?<input type="checkbox" value="year" onChange={changeradio} defaultChecked/>:<input type="checkbox" value="year" onChange={changeradio}/>}<div></div>
  </label>
</div>
    <p>Yearly</p>
    </div>
    <div className={style.NextstepContainer}>
    <p className={style.Please} onClick={()=>props.prevStep()}>Go Back</p>
        <div className={style.Nextstep} onClick={()=>props.nextStep()}>Next Step</div>
    </div>
</div>
  )
}