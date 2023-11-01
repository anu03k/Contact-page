

import styles from "./button.module.css"





 const Button = ({isOutline, icon,text ,...rest}) => {

  return (
    <button {...rest}
    className={ isOutline? styles.outline_btn : styles.primary_btn}>  {text}
    {icon}
    {/* since props already defines we dont need props.  */}
        </button>
  )
}

export default Button;