import { AiFillAliwangwang } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import {BiMailSend} from "react-icons/bi";
import {useState} from 'react'



import styles from "./contact.module.css";
import Button from "../button/button";

const ContactForm = () => {
    const [name,setName]=useState('Anuja');
    const [email, setMail]=useState();
const  [message,setMsg]=useState();

  
  

   const onViaMail = ()=>{
    console.log("from Mail");
   }


   const OnSubmit =(event)=>{
    event.preventDefault();
   
    setName(event.target[0].value);
    setMail(event.target[1].value);
    setMsg (event.target[2].value);

    

   };
    











  return (
    <section className={styles.container}>
        <div className= {styles.conatct_form}>
            <div className={styles.top_btn}>

            <Button    text='Via Support Chat'  icon={<AiFillAliwangwang fontSize='24px'/>}/>
             <Button text='Via Call' icon={<BiSolidPhoneCall fontSize='24px'/>}/>
            </div> 
            <Button  onClick={onViaMail}        
                    
              isOutline='true' text="Via Email" icon={<BiMailSend fontSize='24px' />} />


             <form action=" " onSubmit={OnSubmit}>

                <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
                </div>
                
                
                <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
                </div>
                
                
                <div className={styles.form_control}>
                <label htmlFor="text">Messages</label>
                <textarea name="text" id="" cols="20" rows="5"></textarea>
                </div>
                <div style={{display:'flex',
                justifyContent:'end', marginTop:'10px'}}>
                <Button  text='SUBMIT' /></div>

                
                <div> { name + " " + email +" " +message}</div>



                
                



            </form> 
   
        </div>
       
       <div className= {styles.contact_img}>
        <img src="./public/images/contact-us.png" alt="" srcset="" />
       </div>
    </section>
  )
}

export default ContactForm;