import { forwardRef } from "react"
import styles from '../../Styles/Payment/Pin.module.css'





const Pin = forwardRef(({maxChar,focusHandler,backSpaceHandler},ref)=>{

 


const keyHandler = (e)=>{
if(e.keyCode===8){
    backSpaceHandler(e)
}
else if(e.keyCode===48 || e.keyCode===49 || e.keyCode===50 || e.keyCode===51 || e.keyCode===52 || e.keyCode===53 ||  e.keyCode===54 || e.keyCode===55 || e.keyCode===56 || e.keyCode===57){
    focusHandler(e)
}else{

}
}





    return  <input 
   ref = {ref}
    type="text"
    style={{boxShadow:"none",borderBottom:"2px solid white"}} 
    placeholder="XXXX"
    maxLength={maxChar}
  className={styles.input}
  required
    onKeyUp={keyHandler}
    />
})


export default Pin
