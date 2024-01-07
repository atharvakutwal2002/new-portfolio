import React from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <div className={classes.main}>
        <div className={classes.form}>
            <p className={classes.heading}>Contact Me </p>
            <input type='text' placeholder='Enter Your Name'></input>
            <input type='email' placeholder='Enter Your Email'></input>
            <textarea cols={30} rows={10} placeholder='Message'></textarea>
            <button className={classes.button}>Submit</button>
        </div>
    </div>
  )
}

export default Contact