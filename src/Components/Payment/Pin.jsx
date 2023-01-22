import { forwardRef } from "react"
import styles from '../../Styles/Payment/Pin.module.css'
const Pin = forwardRef(({maxChar,focusHandler,backSpaceHandler},ref)=>{

 


const keyHandler = (e)=>{
if(e.keyCode===8){
    backSpaceHandler(e)
}
else{
    focusHandler(e)
}
}


    return  <input 
   ref = {ref}
    type="text"
    style={{boxShadow:"none",borderBottom:"2px solid white"}} 
    placeholder="XXXX"
    maxLength={maxChar}
  className={styles.input}
    onKeyUp={keyHandler}
    />
})


export default Pin