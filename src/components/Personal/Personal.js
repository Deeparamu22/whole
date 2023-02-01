import React, {useRef } from 'react';
import style from './Personal.module.css';

export default function Personal(props) {
    const inputRef1= useRef(null);
    const inputRef2= useRef(null);
    const inputRef3= useRef(null);
    const Nextstep1=()=>{
        if(inputRef1.current.value==="")
        {
            inputRef1.current.parentElement.children[0].children[1].style.display="block"
            inputRef1.current.parentElement.children[1].style.border="2px solid red"
        }
        else{
            inputRef1.current.parentElement.children[0].children[1].style.display="none"
            inputRef1.current.parentElement.children[1].style.border="1px solid black"
        }
        if(inputRef2.current.value==="")
        {
            inputRef2.current.parentElement.children[0].children[1].style.display="block"
            inputRef2.current.parentElement.children[1].style.border="2px solid red"
        }
        else{
            inputRef2.current.parentElement.children[0].children[1].style.display="none"
            inputRef2.current.parentElement.children[1].style.border="1px solid black"
        }
        if(inputRef3.current.value==="")
        {
            inputRef3.current.parentElement.children[0].children[1].style.display="block";
            inputRef3.current.parentElement.children[1].style.border="2px solid red"
        }
        else{
            inputRef3.current.parentElement.children[0].children[1].style.display="none"
            inputRef3.current.parentElement.children[1].style.border="1px solid black"
        }
        if(inputRef1.current.value!==""&&inputRef2.current.value!==""&&inputRef3.current.value!=="")
        {
            props.nextStep();
            
        }
    }
  return (
    <div className={style.Main}>
        <div>
            <p className={style.Personal}>Personal info</p>
            <p className={style.Please}> Please provide your name, email address, and phone number</p>
        </div>
        <div>
            <div className={style.inputText}><p>Name</p><p className={style.alert}>This field is required</p></div>
            <input type={'text'} placeholder={"e.g. Stephen King"} name={"name"} className={style.input} ref={inputRef1} onChange={props.handleChange('name')} defaultValue={props.values.name}/>
        </div>
        <div>
            <div className={style.inputText}><p>Email Address</p><p className={style.alert}>This field is required</p></div>
            <input type={'email'} placeholder={"e.g. stephenking@lorem.com"} name={"email"} className={style.input} ref={inputRef2} onChange={props.handleChange('email')} defaultValue={props.values.email}/>
        </div>
        <div>
            <div className={style.inputText}><p>Phone Number</p><p className={style.alert}>This field is required</p></div>
            <input type={'text'} placeholder={"e.g.+1 234 567 890"} name={"phone Number"} className={style.input} ref={inputRef3} onChange={props.handleChange('phoneno')} defaultValue={props.values.phoneno}/>
        </div>
        <div className={style.NextstepContainer}>
            <div className={style.Nextstep} onClick={Nextstep1}>Next Step</div>
        </div>
    </div>
  )
}
