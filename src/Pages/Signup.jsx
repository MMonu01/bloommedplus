import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import modalStyle from "../Styles/SignupModal/modal.module.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { SignupSuccessAction,SignupRequestAction,SignupFailureAction } from "../Redux/Authentication/action";
const Signup = ({ show, handleShow, handleClose }) => {
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
      handleClose()
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
















  
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Modal show={show} onHide={handleClose} className={modalStyle.mainMod}>
      <Flex>
        <div>
          <img
            className={modalStyle.pharma}
            alt=""
            src="../../Images/pharma.jpg"
          />
        </div>
        <div className={modalStyle.leftForm}>
          <Modal.Header className={modalStyle.cls}>
            <Modal.Title className={modalStyle.title}>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group>
                <Form.Control
                  className={modalStyle.nm}
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={HandleFormData}
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.unique}
                  type="text"
                  placeholder="Create a unique user name"
                  name="username"
                  value={formData.username}
                  onChange={HandleFormData}

                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.mail}
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={HandleFormData}

                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.mob}
                  type="number"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  onChange={HandleFormData}
                  value={formData.mobile}
                  autoFocus
                />
              </Form.Group>
              <Button
                className={modalStyle.btn}
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <ViewIcon
                    backgroundColor={"#ffffff"}
                    color={"rgb(81, 75, 75);"}
                  />
                ) : (
                  <ViewOffIcon
                    backgroundColor={"#ffffff"}
                    color={"rgb(81, 75, 75);"}
                  />
                )}
              </Button>
              <Form.Group>
                <Form.Control
                  className={modalStyle.pwd}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={HandleFormData}
                  name="password"
                  value={formData.password}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={HandleSignup} className={modalStyle.create}>
              Create an account
            </Button>
          </Modal.Footer>
          <Flex gap="5%" alignItems={"center"} justify={"center"}>
            <Button onClick={handleClose} className={modalStyle.close}>
              Close
            </Button>
            <Button className={modalStyle.login}>Login</Button>
          </Flex>
        </div>
      </Flex>
    </Modal>
  );
};

export default Signup;
