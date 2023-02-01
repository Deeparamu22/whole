import React,{useRef} from 'react'
import style from './Addons.module.css';

export default function Addons(props) {
    const check1 = useRef(null);
    const check2 = useRef(null);
    const check3 = useRef(null);
    const checkinput=()=>{
        if(check1.current.checked){
            check1.current.parentElement.style.border="2px solid blue";
            if(!props.values.addons.includes(check1.current.value))
            {
                props.values.addons.push(check1.current.value);
                props.values.addonsrate.push(check1.current.parentElement.lastChild.textContent);
            } 
        }
        else{
            check1.current.parentElement.style.border="1.5px solid #bdbfc9";
            if(props.values.addons.includes(check1.current.value))
            {
                props.values.addons.splice(props.values.addons.indexOf(check1.current.value),1);
                props.values.addonsrate.splice(props.values.addonsrate.indexOf(check1.current.parentElement.lastChild.textContent),1);
            } 
        }
        if(check2.current.checked){
            check2.current.parentElement.style.border="2px solid blue";
            if(!props.values.addons.includes(check2.current.value))
            {
            props.values.addons.push(check2.current.value);
            props.values.addonsrate.push(check2.current.parentElement.lastChild.textContent);
            }
        }
        else{
            check2.current.parentElement.style.border="1.5px solid #bdbfc9";
            if(props.values.addons.includes(check2.current.value))
            {
                props.values.addons.splice(props.values.addons.indexOf(check2.current.value),1);
                props.values.addonsrate.splice(props.values.addonsrate.indexOf(check2.current.parentElement.lastChild.textContent),1);
            } 
        }
        if(check3.current.checked){
            check3.current.parentElement.style.border="2px solid blue";
            if(!props.values.addons.includes(check3.current.value))
            {
            props.values.addons.push(check3.current.value);
            props.values.addonsrate.push(check3.current.parentElement.lastChild.textContent);
            }
        }
        else{
            check3.current.parentElement.style.border="1.5px solid #bdbfc9";
            if(props.values.addons.includes(check3.current.value))
            {
                props.values.addons.splice(props.values.addons.indexOf(check3.current.value),1);
                props.values.addonsrate.splice(props.values.addonsrate.indexOf(check3.current.parentElement.lastChild.textContent),1);
            } 
        }
    }   
return(
    <div className={style.Main}>
    <div>
        <p className={style.Personal}>Pick add-ons</p>
        <p className={style.Please}>Add-ons help enhance your gaming experience.</p>
    </div>
    <div className={style.planSmallDiv}>
        {props.values.addons.includes("Online service")?<input type={'checkbox'} ref={check1} name="addons" onChange={checkinput} value={"Online service"} defaultChecked/>:<input type={'checkbox'} ref={check1} name="addons" onChange={checkinput} value={"Online service"}/>}
        <div>
            <p>Online service</p>
            <p className={style.Please}>Access to multiplayer games</p>
            </div>
            {props.values.option?<div className={style.rupee}>+$10/yr</div>:<div className={style.rupee}>+$1/mo</div>}
        </div>
    <div className={style.planSmallDiv}>
    {props.values.addons.includes("Larger storage")?<input type={'checkbox'} ref={check2} name="addons" onChange={checkinput} value={"Larger storage"} defaultChecked/>:<input type={'checkbox'} ref={check2} name="addons" onChange={checkinput} value={"Larger storage"}/>}
        <div>
                <p>Larger storage</p>
                <p className={style.Please}>Extra 1TB of cloud save</p>
        </div>
        {props.values.option?<div className={style.rupee}>+$20/yr</div>:<div className={style.rupee}>+$2/mo</div>}
    </div>
    <div className={style.planSmallDiv}>
    {props.values.addons.includes("Customizable profile")?<input type={'checkbox'} ref={check3} name="addons" onChange={checkinput} value={"Customizable profile"}/>:<input type={'checkbox'} ref={check3} name="addons" onChange={checkinput} value={"Customizable profile"}/>}
        <div>
                <p>Customizable profile</p>
                <p className={style.Please}>Custom theme on your profille</p>
        </div>
        {props.values.option?<div className={style.rupee}>+$20/yr</div>:<div className={style.rupee}>+$2/mo</div>}
    </div>
    <div className={style.NextstepContainer}>
    <p className={style.Please} onClick={()=>props.prevStep()}>Go Back</p>
        <div className={style.Nextstep} onClick={()=>props.nextStep()}>Next Step</div>
    </div>
</div>
  )
}