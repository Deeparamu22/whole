import React from 'react'
import style from './Thankyou.module.css';

export default function Thankyou() {
  return (
    <div className={style.Main}>
        <div className={style.thankyouimage}></div>
        <p className={style.Personal}>Thank you!</p>
        <p className={style.Please}>Thanks for confiming your subscription! We hope you have<br></br> fun using our platform. If you ever need support, please feel <br></br>free to email us at support@loremgaming.com</p>
</div>
  )
}