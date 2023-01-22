import styles from '../../Styles/Signup.module.css'
import React from 'react'
import { Link,Navigate,useLocation, useNavigate } from 'react-router-dom'
import { SignupSuccessAction,SignupRequestAction,SignupFailureAction } from "../../Redux/Authentication/action";
import { useDispatch,useSelector } from 'react-redux';



const Signup = ()=>{

  const isAuth  = useSelector((store)=>store.authReducer.isAuth)
const navigate = useNavigate()
const location = useLocation()



  const dispatch = useDispatch()
  const [alertShow,setAlertShow] = React.useState(null)

const [allDetails,setAllDetails]  = React.useState("")


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
      console.log("signup Successful")
      dispatch(SignupSuccessAction(res))
      // loginUser(res)
    }
    
    }
    
    catch(err){
    console.log(err)
    // console.log("NODAjjdss")
    }
    
  }  

  const HandleSignup = async(e)=>{
    // console.log("Nothing is hapenig")
dispatch(SignupRequestAction())
e.preventDefault()
// -------------------------------------------------------
let status = true
if(formData.name==""|| formData.username=="" || formData.email == "" || formData.mobile ==""|| formData.password==""){
setAllDetails("False")
alert("Please all the credentials")

}
else{
  let signupStatus = ''
  fetch(`https://bloodmedplus-server.onrender.com/user`)
  .then((res)=>res.json())
.then((res)=>{signupStatus = res
  for(let i=0; i<signupStatus.length; i++){
  if(signupStatus[i].email==formData.email || signupStatus[i].username == formData.username || signupStatus[i].mobile==formData.mobile){
    status = false
    dispatch(SignupFailureAction())
    alert("Email, username, mobile should be unique")
    break
  }
}

if(status){
  setAlertShow("False")
  InSignUp()
    
  }else{
    setAlertShow("True")
  
  }
  setFormData({
    name:"",username:"",email:"",mobile:"",password:"",order:[]
  })
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
    
    <div className={styles.container}>

<div className={styles.formContainer}>
  <h1>Get started with a free account</h1>
<form>
<input  type="text" name="name" value={formData.name} onChange={HandleFormData} style={{boxShadow:"none"}} placeholder="Enter your full name"/>


<input type="text" name="username" value={formData.username} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Create a unique username"/>



<input type="email" name="email" value={formData.email} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your E-mail"/>


<input type="number" name="mobile" value={formData.mobile} onChange={HandleFormData}  style={{boxShadow:"none"}} placeholder="Enter your mobile number"/>


<input type="password" name="password"  value={formData.password} onChange={HandleFormData} style={{boxShadow:"none"}} placeholder="Enter password"/>


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