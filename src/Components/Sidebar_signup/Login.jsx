import styles from '../../Styles/Login.module.css'
import React from 'react'
import { Link,useNavigate,Navigate,useLocation } from 'react-router-dom'

import { AuthSuccessAction,AuthFailureAction,AuthRequestAction } from "../../Redux/Authentication/action";
import { useDispatch,useSelector } from "react-redux";

const Login = ()=>{

  const isAuth  = useSelector((store)=>store.authReducer.isAuth)
  const navigate = useNavigate()
 const location = useLocation()
  const [alertShow,setAlertShow] = React.useState(null)

  const [formData,setFormData] = React.useState({
  email:"",password:""
  })
  console.log(formData)
  const dispatch = useDispatch()
  
  
  
  const HandleLogin = async(e)=>{
    e.preventDefault()
    dispatch(AuthRequestAction())
  
  try{
  let res = await fetch(`https://bloodmedplus-server.onrender.com/user`)
  res = await res.json()
  let x = false
  for(let i=0; i<res.length; i++){
  if((res[i].email===formData.email && res[i].password===formData.password)){
  x = true
  // loginUser(res[i])
  console.log("loginDataMatched")
  dispatch(AuthSuccessAction(res[i]))
  }
  }
  
  
  
  if(x===false){
  console.log("Alert is not working")
  setAlertShow("False")
  dispatch(AuthFailureAction())
  alert("Either email or password is incorrect")
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
  
  
  const HandleFormData = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
      }
  
      if(isAuth){
        return <Navigate to="/"/>
    }


  return(
    <>
    
    <div className={styles.container}>

<div className={styles.formContainer}>
  <h1>Welcome Back!</h1>
<form>
<input type="email" name="email" value={formData.email} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your E-mail"/>


<input type="password" name="password" value={formData.password} onChange={HandleFormData} style={{boxShadow:"none"}} placeholder="Enter password"/>
<button onClick={HandleLogin}>Login</button>
</form>

<div className={styles.have}>
Need a Bloommedplus account? <Link to='/signup'>Create an account</Link>
</div>
</div>




<div className={styles.sideImage}>
  <img src='../../../Images/registration.png'/>

</div>


    </div>
    </>
  )


}

export default Login