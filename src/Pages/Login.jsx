import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import modalStyle from "../Styles/SignupModal/modal.module.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";
import { AuthSuccessAction,AuthFailureAction,AuthRequestAction } from "../Redux/Authentication/action";
import { useDispatch } from "react-redux";

const Login = ({ showLogin, handleLoginShow, handleLoginClose }) => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  
const [alertShow,setAlertShow] = React.useState(null)

const [formData,setFormData] = React.useState({
email:"",password:""
})

const dispatch = useDispatch()



const HandleLogin = async(e)=>{
  dispatch(AuthRequestAction())
e.preventDefault()

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
handleLoginClose()
}
}



if(x===false){
console.log("Alert is not working")
setAlertShow("False")
dispatch(AuthFailureAction())

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


















  return (
    <Modal
      show={showLogin}
      onHide={handleLoginClose}
      className={modalStyle.mainMod}
    >
      <Flex>
        <div>
          <img
            className={modalStyle.pharmaLogin}
            alt=""
            src="../../Images/pharma.jpg"
          />
        </div>
        <div className={modalStyle.leftForm}>
          <Modal.Header className={modalStyle.cls}>
            <Modal.Title className={modalStyle.title}>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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

              <Button
                className={modalStyle.btn}
                variant={"ghost"}
                onClick={() =>
                  setShowLoginPassword(
                    (showLoginPassword) => !showLoginPassword
                  )
                }
              >
                {showLoginPassword ? (
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
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={HandleFormData}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={HandleLogin} className={modalStyle.create}>
              Login
            </Button>
          </Modal.Footer>
          <Flex gap="5%" alignItems={"center"} justify={"center"}>
            <Button onClick={handleLoginClose} className={modalStyle.close}>
              Close
            </Button>

            <Button onClick={handleLoginClose} className={modalStyle.login}>
              Create an account
            </Button>
          </Flex>
        </div>
      </Flex>
    </Modal>
  );
};

export default Login;
