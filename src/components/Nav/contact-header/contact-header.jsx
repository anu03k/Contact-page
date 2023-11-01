import styles from './contact-header.module.css'


const ContactHeader= ()=>{
    return(
        <div className={`container ${styles.contact_section}`}>
            <h1>Contact Us</h1>
            <p>If any inquiries or doubts feel free to contact .We are availabe 24/6 for your service ! You can reach us via phone, email, or through our live chat support for immediate assistance. We look forward to hearing from you! ; ) </p>
        </div>
    );
}
export default ContactHeader;