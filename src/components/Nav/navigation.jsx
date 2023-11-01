import styles from "./nav.module.css";


const Navigation =()=>{
    console.log(styles);
    return(
        <nav className={styles.navigation}>
             
             

            <div className="logo">   
                
                <img src="./public/images/logo.png" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            
            
         
            {/* container */}
           
           

           
        </nav>
    )
}
/* if multiple classname required then{ `${styles.navigation} conatiner`} here container is global in app.css */

export default Navigation;