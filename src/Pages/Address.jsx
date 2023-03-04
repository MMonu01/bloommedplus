import React, { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../Styles/address.module.css";
import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { CartContext } from "../Contexts/CartContext";
import { saveData } from "../Utils/accessLocalstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "../Components/Payment/Nav";


const initialState = {
  flat: "",
  landmark: "",
  pincode: "",
  locality: "",
  city: "",
  state: "",
  name: "",
  mobile: "",
  product_used: "",
};

function Address() {
  const [formData, setFormData] = useState(initialState);
  const { setLocationDetails } = useContext(CartContext);
  const [alertShow,setAlertShow] = React.useState(false)
  const [allDetails,setAllDetails]  = React.useState("Nothing")

  const navigate = useNavigate()
 


  const HandleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleUse = (e) => {
    setFormData({ ...formData, product_used: e });
  };

 

  
  const HandleAlertShow = ()=>{
    setAlertShow(true)
    setTimeout(()=>{
setAlertShow(false)
    },3000)
  }



  const SubmitData = () => {
    if(formData.flat=="" || formData.landmark == "" || formData.pincode=="" || formData.locality=="" || formData.city == "" || formData.state == "" || formData.name=="" || formData.mobile=="" || formData.product_used =="" ){
setAllDetails("Please fill all the credentials")
HandleAlertShow()
    }
    else if(formData.pincode.length!==6){
      setAllDetails("Pincode must contain only 6 digits")
HandleAlertShow()
    }
    else if(formData.mobile.length!=10){
setAllDetails("Mobile number must contain only 10 digits")
HandleAlertShow()
    }
    else {
      setLocationDetails(formData);
      saveData("locationDetails", formData);
      setFormData(initialState);
      return navigate("/payment")
    }
  };



  return (
    <>
      <div style={{display:alertShow===true?"flex":"none"}} className={styles.alert}>
<p>{allDetails}</p>
<FontAwesomeIcon className={styles.cross} onClick={()=>setAlertShow(false)} icon={faCircleXmark}/>
    </div>
      <Nav />
      <div className={styles.container}>
        <h3 className={styles.please}>Please Enter Your Detailed Location</h3>
        <div className={styles.head}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Flat number,Building name,Street/Locality"
                className={styles.flat}
                name="flat"
              
              
                value={formData.flat}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Landmark"
                className={styles.land}
                name="landmark"
                value={formData.landmark}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Pincode"
                className={styles.pin}
                name="pincode"
 
                value={formData.pincode}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Locality"
                className={styles.loc}
                name="locality"
                value={formData.locality}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="City"
                className={styles.city}
                name="city"
                vallue={formData.city}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="State"
                className={styles.state}
                name="state"
                value={formData.state}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Customer Name"
                className={styles.nm}
                name="name"
                value={formData.name}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                placeholder="10 Digit Mobile Number"
                className={styles.mob}
                name="mobile"
                value={formData.mobile}
                maxLength={10} 
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>
            <Flex className={styles.hoo}>
              <Form.Group
                onClick={() => HandleUse("Home")}
                className={styles.radioGroup}
                style={{ background: "#f6f6f6" }}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    style={{ background: "#f6f6f6" }}
                    className={styles.home}
                  />
                  <span> Home</span>
                </Form.Label>
              </Form.Group>

              <Form.Group
                onClick={() => HandleUse("Office")}
                className={styles.radioGroup}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    className={styles.office}
                  />
                  <span> Office</span>
                </Form.Label>
              </Form.Group>

              <Form.Group
                onClick={() => HandleUse("Other")}
                className={styles.radioGroup}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    className={styles.other}
                  />
                  <span> Others</span>
                </Form.Label>
              </Form.Group>
            </Flex>
            <Box className={styles.can_sa}>
              <Button
                variant="primary"
                onClick={() => setFormData(initialState)}
                className={styles.cancel}
                style={{
                  padding: "5px 15px",
                  background: "white",
                  color: "red",
                }}
              >
                Cancel
              </Button>

              <Button
            
                variant="primary"
                onClick={SubmitData}
                className={styles.save}
                style={{
                  padding: "5px 18px",
                  background: "red",
                  color: "white",
                }}
              >
               
                  Save
                
              </Button>
            </Box>
          </Form>
        </div>
        <div>
          <img src="../../Images/newbanner.jpg" className={styles.banner} />
        </div>
      </div>
    </>
  );
}

export default Address;
