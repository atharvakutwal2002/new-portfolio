import React, { useState } from 'react'
import classes from './Contact.module.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const notifySuccess = () => {
    toast.success("Thank you for connecting !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyFailure = () => {
    toast.error("Oops ! Something went wrong . Please try again ! .", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

const Contact = () => {
    const [name , setName] = useState("");
    const [email, setEmail]= useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const details = {
          enteredname: name,
          enteredEmail: email,
          enteredText: msg,
        };
    
        console.log(details);
    
        fetch("https://new-portfolio-71e83-default-rtdb.firebaseio.com/contact.json", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body:JSON.stringify(details) ,
        })
          .then((response) => response.json)
          .then((data) => {console.log("Success ", data) ; notifySuccess();setTimeout(()=>{navigate('/') },3000) })
          .catch((err) => {console.log(err); notifyFailure()});
    
        setName("");
        setEmail("");
        setMsg("");
      };

  return (
    <div className={classes.main}>
        <ToastContainer />
        <div className={classes.form}>
            <p className={classes.heading}>Contact Me </p>
            <input value={name} type='text' onChange={e=>{setName(e.target.value)}} placeholder='Enter Your Name'></input>
            <input value={email} type='text' onChange={e=>{setEmail(e.target.value)}} placeholder='Enter Your Email'></input>
            <textarea value={msg} cols={30} rows={10} onChange={e=>{setMsg(e.target.value)}} placeholder='Message'></textarea>
            <button onClick={submitHandler} className={classes.button}>Submit</button>
        </div>
    </div>
  )
}

export default Contact