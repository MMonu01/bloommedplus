import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCapsules,
  faBottleDroplet,
  faFlask,
  faStethoscope,
  faHandHoldingMedical,
  faHandHoldingDroplet,
  faPlateWheat,
  faFileInvoice,
  faGear,
  faDisease,
  faPills,
  faPrescriptionBottle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import styles from "../Styles/Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LogoutSuccessAction } from "../Redux/Authentication/action";
import { saveData } from "../Utils/accessLocalstorage";
import { Link } from "react-router-dom";



const Sidebar = () => {
  const [placement, setPlacement] = React.useState("left");
  

  const dispatch = useDispatch()
  const {isAuth,token} = useSelector((store)=>{
    return {isAuth:store.authReducer.isAuth,token:store.authReducer.token}
  })
  
  
  const HandleLogout = ()=>{
  dispatch(LogoutSuccessAction())
  saveData("PaymentDetails",{})
saveData("locationDetails",{})
Close()
  }





    const [show,setShow] = useState(false)

const Open  = ()=>{
    setShow(true)
    document.body.style.backgroundColor = "rgba(250,250,250,.1)"
}

const Close =()=>{
    setShow(false)
    document.body.style.backgroundColor = "white"

}





  return (
    <>

<nav  style={{width:show?"300px":"0px"}} className={styles.nav}>
<div className={styles.close}>
            <img  src="../../Images/bloommedplus.png" alt="logo" />
            <FontAwesomeIcon onClick={Close} className={styles.xmark} icon={faCircleXmark}/>
          </div>


      <div className={styles.container}>
      <h2 borderBottomWidth="1px">Hi, there!</h2>
       
            <div className={styles.box}>
              <div className={styles.container}>


                <div>
                {isAuth?(<span onClick={HandleLogout} className={styles.login}>Logout</span>):
              <Link style={{color:'black',textDecoration:"none"}} to="/login">

                <span className={styles.login}>
                Login
              </span>
              </Link>
              }
              {" "}
              |{" "}
              {isAuth?(<span className={styles.signup}>{token.name}</span>):(
                <Link style={{color:'black',textDecoration:"none"}} to="/signup">

                <span className={styles.signup}>
                Signup
              </span>
                </Link>
                )}
                 
                </div>
                <hr style={{ marginTop: "10px" }} />

                <tbody className={styles.tbody}>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faCapsules} />
                    </td>
                    <td>
                      {" "}
                      <span>Buy medicines</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faBottleDroplet} />
                    </td>
                    <td>
                      {" "}
                      <span>Buy health products</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <FontAwesomeIcon className={styles.listIcon} icon={faFlask} />
                    </td>
                    <td>
                      {" "}
                      <span>Book lab tests</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faStethoscope} />
                    </td>
                    <td>
                      {" "}
                      <span>Consult a doctor</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faHandHoldingMedical} />
                    </td>
                    <td>
                      {" "}
                      <span>bloommedplus Care Plan</span>
                    </td>
                  </tr>
                </tbody>

              

                <tbody className={styles.tbody}>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faHandHoldingDroplet} />
                    </td>
                    <td>
                      {" "}
                      <span>Covid support</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <FontAwesomeIcon className={styles.listIcon} icon={faPlateWheat} />
                    </td>
                    <td>
                      {" "}
                      <span>Ayurveda</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faFileInvoice} />
                    </td>
                    <td>
                      <span>Hindi articles</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <FontAwesomeIcon className={styles.listIcon} icon={faGear} />
                    </td>
                    <td>
                      {" "}
                      <span>Offers</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <FontAwesomeIcon className={styles.listIcon} icon={faDisease} />
                    </td>
                    <td>
                      {" "}
                      <span>All diseases</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <FontAwesomeIcon className={styles.listIcon} icon={faPills} />
                    </td>
                    <td>
                      {" "}
                      <span>All medicines</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon className={styles.listIcon} icon={faPrescriptionBottle} />
                    </td>
                    <td>
                      {" "}
                      <span>All diseases</span>
                    </td>
                  </tr>
                  
                </tbody>
              </div>

 
            </div>
         
      </div>
                 </nav>
       

         
         <div onClick={Open} style={{ background: "white" }}>
        <FontAwesomeIcon className={styles.menu} icon={faBars} />
      </div>
       
     
    </>
  );
};

export default Sidebar;
