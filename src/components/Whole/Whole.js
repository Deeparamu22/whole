import React, { useState } from 'react'
import Addons from '../Addons/Addons'
import Personal from '../Personal/Personal'
import Plan from '../Plan/Plan'
import SideBar from '../SideBar/SideBar'
import Summary from '../Summary/Summary'
import Thankyou from '../Thankyou/Thankyou'
import style from './Whole.module.css'

export default function Whole() {
  const [number, setnumber]=useState(1);
  const [values,setvalues]=useState({number:number,name:"",email:"",phoneno:"",plan:"Arcade",option:false,addons:[],addonsrate:[]});
  const [amount,setamount]=useState({planrate:"$9/mo"});
  const handleChange = input => e => {
    setvalues({...values,[input]: e.target.value });
  }
  const calrate=()=>{
      if(values.plan==="Arcade"){
      if(values.option===false)
      {
        setamount({...amount,planrate:"$9/mo"})
      }
      else{
        setamount({...amount,planrate:"$90/yr"})
      }
    }
    else if(values.plan==="Advantage"){
      if(values.option===false)
      {
        setamount({...amount,planrate:"$12/mo"})
      }
      else{
        setamount({...amount,planrate:"$120/yr"})
      }
    }
    else if(values.plan==="Pro"){
      if(values.option===false)
      {
        setamount({...amount,planrate:"$15/mo"})
      }
      else{
        setamount({...amount,planrate:"$150/yr"})
      }
    }
  }
  const prevStep = () => {
    setnumber(number-1);
  }
  const nextStep = () => {
    setnumber(number+1);
    calrate();
  }
  const change=()=>{
    setnumber(2);
  }
  let component
  switch(number) {
    case 1:
      component = <Personal nextStep={nextStep} handleChange={handleChange} values={values}/>
    break
    case 2:
      component = <Plan nextStep={nextStep} handleChange={handleChange} prevStep={prevStep} values={values}/>
    break
    case 3:
      component = <Addons values={values} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}/>
      break
    case 4:
      component = <Summary values={values} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} change={change} amount={amount}/>
    break
    default:
      component = <Thankyou/>
  }
  return (
    <div className={style.whole}>
      <SideBar get={number}/>
      <div className={style.main}>
        {component}
      {/* <div className={style.NextstepContainer}>
        {number!==1&&number!==5 ?<p className={style.Please} onClick={prevStep}>Go Back</p>:null}
        {number===4?<div className={style.Nextstep+" "+style.nextstep} onClick={nextStep}>Confirm</div>:(number!==5)?<div className={style.Nextstep} onClick={nextStep}>Next Step</div>:null}
      </div> */}
      </div>
    </div>
  )
}