import styles from '../../Styles/Signup.module.css'
import React from 'react'
import { Link,useNavigate,Navigate,useLocation } from 'react-router-dom'

import { AuthSuccessAction,AuthFailureAction,AuthRequestAction } from "../../Redux/Authentication/action";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Login = ()=>{

  const isAuth  = useSelector((store)=>store.authReducer.isAuth)
  const navigate = useNavigate()
 const location = useLocation()
  const [alertShow,setAlertShow] = React.useState(false)
const [allDetails,setAllDetails]  = React.useState("Nothing")


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [formData,setFormData] = React.useState({
  email:"",password:""
  })
  console.log(formData)
  const dispatch = useDispatch()
  
  
  const HandleAlertShow = ()=>{
    setAlertShow(true)
    setTimeout(()=>{
setAlertShow(false)
    },3000)
  }

  
  
  const HandleLogin = async(e)=>{
    e.preventDefault()

if(formData.email===""){
  setAllDetails("Email field is empty")
  HandleAlertShow()
}
else if(formData.email.includes("@gmail.com")===false){
setAllDetails("Email is incorrect")
HandleAlertShow()
}
else if(formData.password==""){
  setAllDetails("Password field is empty")
}
else{

  
  dispatch(AuthRequestAction())
    
  
  try{
    let res = await fetch(`https://bloodmedplus-server.onrender.com/user`)
    res = await res.json()
  let x = false
  for(let i=0; i<res.length; i++){
  if((res[i].email===formData.email && res[i].password===formData.password)){
    x = true
    console.log("loginDataMatched")
    dispatch(AuthSuccessAction(res[i]))
  }
}



if(x===false){
  console.log("Alert is not working")
  setAlertShow(true)
  dispatch(AuthFailureAction())
  setAllDetails("Either email or password is incorrect")
  HandleAlertShow()
}
else{
  setAlertShow("True")
}

}

catch(err){
  console.log(err)
}
setFormData({
  email:"",password:""
})
}
}
  
  
  const HandleFormData = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
      }
  
      if(isAuth){
        return <Navigate to="/"/>
    }


  return(
    <>
<div style={{display:alertShow===true?"flex":"none"}} className={styles.alert}>
<p>{allDetails}</p>
<FontAwesomeIcon className={styles.cross} onClick={()=>setAlertShow(false)} icon={faCircleXmark}/>
    </div>

    <div className={styles.container}>

<div className={styles.formContainer}>
  <h1>Welcome Back!</h1>
<form>
<input type="email" name="email" value={formData.email} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your E-mail"/>



<div  className={styles.passwordContainer}>
<input  type={show ? 'text' : 'password'}name="password" value={formData.password} onChange={HandleFormData} style={{boxShadow:"none",width:"100%"}} placeholder="Enter password"/>
<div className={styles.eyeButton}  onClick={handleClick}>  {show ? 
<FontAwesomeIcon className={styles.eye}  icon={faEye}/>
: <FontAwesomeIcon className={styles.eye} icon={faEyeSlash}/>
}</div>
</div>

<button onClick={HandleLogin}>Login</button>
</form>

<div className={styles.have}>
Need a Bloommedplus account? <Link className={styles.navigateButton} to='/signup'>Create an account</Link>
</div>
</div>






    </div>
    </>
  )


}

export default Login