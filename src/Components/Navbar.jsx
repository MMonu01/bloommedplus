import { Link, Navigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "./SearchBar";
import {
  faCartShopping,
  faLocationDot,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../Styles/Navbar.module.css";
import { Input, InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import React, { useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


import { useDispatch, useSelector } from "react-redux";
import { LogoutSuccessAction } from "../Redux/Authentication/action";
import { saveData } from "../Utils/accessLocalstorage";



export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginShow = () => setShowLogin(true);


  const { userCart } = useContext(CartContext);
  const [cartItem, setCartItem] = useState(0);

  const dispatch = useDispatch()
const {isAuth,token} = useSelector((store)=>{
  return {isAuth:store.authReducer.isAuth,token:store.authReducer.token}
})


const HandleLogout = ()=>{
dispatch(LogoutSuccessAction())
saveData("PaymentDetails",{})
saveData("locationDetails",{})
}


  React.useEffect(() => {
    if(userCart.cart){
      setCartItem(userCart.cart.length);
    }
  }, [userCart]);




  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.laptop}>
          <div className={styles.top}>
            <div>
              <Link style={{ background: "white" }} to="/">
                <img
                  className={styles.logo}
                  src="../../Images/bloommedplus.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={styles.medicine}>MEDICINES</div>
            <div>
              <span className={styles.head}>LAB TESTS </span>{" "}
              <span style={{ fontSize: "12px" }} className={styles.safe}>
                SAFE
              </span>
            </div>
            <div className={styles.head}>CONSULT DOCTORS</div>
            <div className={styles.head}>COVID-19</div>
            <div className={styles.head}>AYURVEDA</div>
            <div>
              <span className={styles.head}>CARE PLAN </span>{" "}
              <span className={styles.safe}>SAVE MORE</span>
            </div>
            <div>
              {isAuth?(<span onClick={HandleLogout} className={styles.login}>Logout</span>):
              <Link style={{color:'black',textDecoration:"none"}} to="/login">

                <span className={styles.login} onClick={handleLoginShow}>
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
            <div>Offers</div>
            <div style={{ width: "35px", cursor: "pointer" }}>
              <Link
                to="/cart"
                style={{ background: "white", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  style={{ color: "black", background: "white" }}
                  icon={faCartShopping}
                />
                <sup style={{ background: "white" }}>{cartItem}</sup>
              </Link>
            </div>
            <div>Need Help?</div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.middle}>
            <div className={styles.left}>
              <div className={styles.delhi}>
                <div>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.dot}
                  />{" "}
                  <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    {" "}
                    New Delhi
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    className={styles.cross}
                  />
                </div>
              </div>

              <div className={styles.Search}>
<SearchBar/>
               
                  <FontAwesomeIcon
                    className={styles.glass}
                    icon={faMagnifyingGlass}
                  />
               
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.quick}>
                QUICK BUY! Get 25% off on
                <div>
                  <p style={{ float: "right", background: "white" }}>
                    medicines*
                  </p>
                </div>
              </div>
              <div style={{ background: "white" }}>
                <button className={styles.order}>Quick order</button>
              </div>
            </div>
          </div>

          <hr className={styles.hr} />
          {/* ------------------------------------------------------------------------ */}

          <div className={styles.bottom}>
            <div>
              <span>Health Care Resource</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Vitamins & Nutritions</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>diabetes</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Healthcare Devices</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Personal Care</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Health Conditions</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Ayurveda Products</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Homeopathy</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Featured</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Covid Essentials</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------- */}

        <div className={styles.newNav}>
          <div className={styles.newTop}>
            <div>
              <Sidebar />
              <div>
                <Link style={{ background: "white" }} to="/">
                  <img src="../../Images/bloommedplus.png" alt="logo" />
                </Link>
              </div>
            </div>

            <div style={{ background: "white" }}>
              <Link
                to="/cart"
                style={{ background: "white", textDecoration: "none", }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  
                  style={{
                    background: "white",
                    textDecoration: "none",
                    color: "black",
                   
                  }}
                  
                />
                <sup style={{ background: "white" }}>{cartItem}</sup>
              </Link>
            </div>
          </div>
          <hr />
          <div className={styles.newMiddle}>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className={styles.dot} />{" "}
              <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                {" "}
                New Delhi
              </span>{" "}
              <FontAwesomeIcon
                className={styles.newdown}
                icon={faChevronDown}
              />
            </div>
          </div>

          <div className={styles.newbottom}>
            <div className={styles.newSearch}>
              <InputGroup
                size="md"
                style={{
                  background: "white",
                  border: "1px solid rgb(168, 168, 168)",
                  borderRadius: "5px",
                }}
              >
               
                <SearchBar/>
                <InputRightElement
                  style={{
                    background: "white",
                    width: "20px",
                    marginRight: "15px",
                  }}
                >
                    <FontAwesomeIcon
                      style={{
                        color: "black",
                        background: "white",
                        marginRight: "5px",
                        outline: "none",
                        paddingLeft: "5px",
                        cursor: "pointer",
                        marginTop: "9px",
                      }}
                      icon={faMagnifyingGlass}
                    />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
        </div>
      </nav>
  
    </>
  );
};
