import styles from '../../Styles/Signup.module.css'
import React from 'react'
import { Link,Navigate,useLocation, useNavigate } from 'react-router-dom'
import { SignupSuccessAction,SignupRequestAction,SignupFailureAction } from "../../Redux/Authentication/action";
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Signup = ()=>{

  const isAuth  = useSelector((store)=>store.authReducer.isAuth)
const navigate = useNavigate()
const location = useLocation()
const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  const dispatch = useDispatch()
  const [alertShow,setAlertShow] = React.useState(false)

const [allDetails,setAllDetails]  = React.useState("Nothing")


  const [formData,setFormData] = React.useState({
    name:"",username:"",email:"",mobile:"",password:"",order:[]
  })

  const InSignUp = async()=>{

    try{
      let res = await fetch(`https://bloodmedplus-server.onrender.com/user`,{
    method:"POST",
    body:JSON.stringify(formData),
    headers:{
      "Content-Type":"application/json"
    }
      })
    
      res = await res.json()
    if(res.name!=undefined){
      // console.log("signup Successful")
      setAllDetails("signup Successfull")
      HandleAlertShow(true)
      dispatch(SignupSuccessAction(res))
      // loginUser(res)
    }
    
    }
    
    catch(err){
    console.log(err)
    // console.log("NODAjjdss")
    }
    
  }  

  const HandleAlertShow = ()=>{
    setAlertShow(true)
    setTimeout(()=>{
setAlertShow(false)
    },3000)
  }




  const HandleSignup = async(e)=>{
    // console.log("Nothing is hapenig")
e.preventDefault()
// -------------------------------------------------------
let status = true
if(formData.name==""|| formData.username=="" || formData.email == "" || formData.mobile ==""|| formData.password==""){
setAllDetails("Please all the credentials")
HandleAlertShow()
}
else if(formData.email.includes("@gmail.com")===false){
  setAllDetails("Incorrect email")
  HandleAlertShow()
}
else if(formData.mobile.length!==10){
  setAllDetails("Mobile number must contain only 10 digit")
  HandleAlertShow()
}
else if(formData.password.length<=4){
  setAllDetails("Length of password should be atleast 5")
  HandleAlertShow()
}
else{
dispatch(SignupRequestAction())
  let signupStatus = ''
  fetch(`https://bloodmedplus-server.onrender.com/user`)
  .then((res)=>res.json())
.then((res)=>{signupStatus = res
  for(let i=0; i<signupStatus.length; i++){
  if( signupStatus[i].username == formData.username ){
    status = false
    dispatch(SignupFailureAction())
    setAllDetails("Username is taken")
    // setAlertShow(true)
    HandleAlertShow()
    break
  }

  else   if(signupStatus[i].email==formData.email){
    status = false
    dispatch(SignupFailureAction())
    setAllDetails("Email is already registered")
    // setAlertShow(true)
    HandleAlertShow()
    break
  }


  else   if(signupStatus[i].mobile==formData.mobile){
    status = false
    dispatch(SignupFailureAction())
    setAllDetails("Mobile Number is already registered")
    // setAlertShow(true)
    HandleAlertShow()
    break
  }
}

if(status){
  // setAlertShow(false)
  InSignUp()
    
  setFormData({
    name:"",username:"",email:"",mobile:"",password:"",order:[]
  })
  }
})
.catch((err)=>console.log(err))

}

// -----------------------------------------------
  }

  const HandleFormData = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }




  if(isAuth){
    return <Navigate to='/'/>
}




  return(
    <>
    <div style={{display:alertShow===true?"flex":"none"}} className={styles.alert}>
<p>{allDetails}</p>
<FontAwesomeIcon className={styles.cross} onClick={()=>setAlertShow(false)} icon={faCircleXmark}/>
    </div>
    <div className={styles.container}>

<div className={styles.formContainer}>
  <h1>Get started with a free account</h1>
<form>
<input  type="text" name="name" value={formData.name} onChange={HandleFormData} style={{boxShadow:"none"}} placeholder="Enter your full name"/>


<input type="text" name="username" value={formData.username} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Create a unique username"/>



<input type="email" name="email" value={formData.email} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your E-mail"/>


<input type="number" name="mobile" value={formData.mobile} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your mobile number"/>

<div  className={styles.passwordContainer}>

<input  type={show ? 'text' : 'password'}name="password" value={formData.password} onChange={HandleFormData} style={{boxShadow:"none",width:"100%"}} placeholder="Enter password"/>
<div className={styles.eyeButton}  onClick={handleClick}>  {show ? 
<FontAwesomeIcon className={styles.eye}  icon={faEye}/>
: <FontAwesomeIcon className={styles.eye} icon={faEyeSlash}/>
}</div>

</div>




<button onClick={HandleSignup}> Create an account</button>
</form>

<div className={styles.have}>
Already have a Bloommedplus account? <Link to='/login'>Login</Link>
</div>
</div>




<div className={styles.sideImage}>
  <img src='../../../Images/registration.png'/>

</div>


    </div>
    </>
  )


}

export default Signup