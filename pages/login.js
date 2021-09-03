import React, { useState } from 'react'
import Image from "next/image"
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
   const [showPass, setShowPass] = useState(false)
   const [loginData, setLoginData] = useState({
      email: '',
      pass: '',
      captcha: false,
      checkbox: false
   })

   const handleInput = (e) => {
      setLoginData({
         ...loginData,
         [e.target.id]: e.target.value,
      })
   }

   const handleCheckbox = (e) => {
      setLoginData({
         ...loginData,
         [e.target.id]: !loginData.checkbox ? true : false,
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      console.log(loginData)
   }

   const handleCaptcha = (key) => {

      if(key) {
         setLoginData({
            ...loginData,
            captcha: true,
         })
      }else{
         setLoginData({
            ...loginData,
            captcha: false,
         })
      }
   }

   const handleShowPass = () => {
      if(showPass) {
         setShowPass(false)
      }else{
         setShowPass(true)
      }
   }

   return(
      <div className="login-page">
         <section className="cover-page">
            <Image src="/1920x1080compressed.png" alt="background" layout="fill" quality="100"/>
         </section>
         <section className="login">
            <h1 className="title">Inicio de Sesión</h1>
            <form onSubmit={handleSubmit}>
               <label className="label" htmlFor="email">
                  <span>Dirección De Email</span>
               </label>
               <input className="input-txt" id="email" type="email" value={loginData.email} placeholder="Ingresa tu email" onChange={handleInput}/>

               <label className="label" htmlFor="pass">
                  <span>Contraseña</span>
               </label>
               <div className="pass-container">
                  <img className="eye" src="/eye.svg" alt="show password" onClick={handleShowPass}/>
                  <input className="input-txt" id="pass" type={!showPass ? "password" : "text"} value={loginData.pass} placeholder="Ingresa tu contraseña" onChange={handleInput}/>
               </div>
               
               <label className="label label-checkbox" htmlFor="checkbox">
                  <input id="checkbox" type="checkbox" onChange={handleCheckbox} checked={loginData.checkbox}/>
                  <span>Recordar Sesión</span>
               </label>
               <ReCAPTCHA sitekey={process.env.RE_CAPTCHA_KEY} onChange={handleCaptcha} />

               <div className="btn-container">
                  <button className="btn">
                     Iniciar Sesión
                  </button>
               </div>
            </form>
            <div className="forgotten-pass">
               <span>Olvidaste tu contraseña?</span>
               <a href="#">Recuperar Contraseña</a>
            </div>
         </section>
      </div>
   )
}

export default Login