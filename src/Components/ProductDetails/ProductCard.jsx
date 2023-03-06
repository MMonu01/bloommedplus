import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Box,
  Button,
  Stack,
  Select,
  Wrap,
  Flex,
  Radio,
  Image,
} from "@chakra-ui/react";
import styles from "../../Styles/SingleProduct.module.css";
import { FaRegStar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import {CartContext} from '../../Contexts/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { saveData } from "../../Utils/accessLocalstorage";


const ProductCard = ({ product, loader }) => {
  const [value, setValue] = useState(1);


  const {userCart,setUserCart} = React.useContext(CartContext)
  const [quantity,setQuantity] = useState(1)
  const [alertShow,setAlertShow] = React.useState(false)
  const [allDetails,setAllDetails]  = React.useState("Nothing")

  const [bag,setBag] = useState( {
     
      quantity: +product.quantity || 1,total_price:(+product.quantity ||  1)*product.price,id:product.id, adminId: product.adminId,
    name: product.name,
    price: product.price,packs:product.packs,mrp:product.mrp,discount:product.discount,
      status: "placed"
    })
   

    const HandleBag = ()=>{
  
      let arr = []
      if(userCart.cart!=undefined){
    
        let x = userCart.cart
        
      let y = true
      let matid = []
         
         
          for(let j=0; j<x.length; j++){
              if(bag.id==x[j].id){
                x[j].quantity = Number(x[j].quantity)+ +bag.quantity
                  arr.push(x[j])
                  y = false
              }else{
                arr.push(x[j])
              }
          }
    
      
      
          if(y){
            arr.push(bag)
            setAllDetails("Added to Cart")
           
          }
          else{
            setAllDetails("Updated to Cart")
          }
          HandleAlertShow()
        }
        // ------------------------------------
        
        setUserCart({...userCart,cart:arr})
        saveData("Cart",{...userCart,cart:arr})
      }
     



  
  const HandleQuantity = (val)=>{
    setBag({...bag,quantity:val.target.value,total_price:val.target.value*product.price,id:product.id, adminId: product.adminId,
    name: product.name,
    price: product.price,packs:product.packs,mrp:product.mrp,discount:product.discount})        
  }
  





  const HandleAlertShow = ()=>{
    setAlertShow(true)
    setTimeout(()=>{
setAlertShow(false)
    },2000)
  }




  return (
    <>

<div style={{display:alertShow===true?"flex":"none"}} className={styles.alert}>
<p>{allDetails}</p>
<FontAwesomeIcon className={styles.cross} onClick={()=>setAlertShow(false)} icon={faCircleXmark}/>
    </div>



    <div key={product.id} className={styles.sp}>
      <div className={styles.container}>
        <p className={styles.head}><span style={{color:"#fd8e91",background:"white"}}>Home</span> {'>'} <Link style={{background:'white',border:"none",color:"#fd8e91",textDecoration:"none"}} to="/products/skincare">Skin Care</Link> {'>'} {product.name}</p>
      
        <div className={styles.align}>
          <div className={styles.imgDiv}>
            <img
              className={styles.pimg}
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className={styles.info}>
            <h2 style={{ backgroundColor: "#ffffff" }} className={styles.productName}>{product.name}</h2>
            <h5 style={{ backgroundColor: "#ffffff" }}>{"Laboratory"}</h5>
            <div className={styles.review_rtng}>
              <div className={styles.rev}>
                <p
                  style={{
                    backgroundColor: "#1aab2a",
                    color: "#ffffff",
                   
                    marginRight:"5px"
                  }}
                >
                  {product.rating}
                </p>
                <FaRegStar
                  style={{
                    backgroundColor: "#1aab2a",
                    color: "#ffffff",
                    height: "22px",
                  }}
                />
              </div>
              <Text
                className={styles.rtng_cnt_revw}
              >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
            </div>
            <h3 className={styles.ph}>{"Products Highlights"}</h3>
            <ul className={styles.lst}>
              {loader === false
                ? product.product_highlight.map((el, i) => {
                    return (
                      <li key={i} style={{ backgroundColor: "#ffffff" }}>
                        {el}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className={styles.rhs} style={{ backgroundColor: "#ffffff"}}>
            <Box className={styles.sideDiv}>
              <div 
              className={styles.people}
              >
                <img src="https://www.1mg.com/images/social_cue.svg" />
                <Text >509 people bought this recently</Text>
              </div>

              <Form >
                {["radio"].map((type) => (
                  <div
                    key={`default-${type}`}
                    style={{ backgroundColor: "#ffffff" }}
                    >
                    <div
                    className={styles.flx}
                    >
                      <Form.Check
                        type={type}
                        name={"radio"}
                        id={`default-${type}`}
                        label={`  ₹${product.price}`}
                        className={styles.chk1}
                        defaultChecked
                      />{" "}
                      <del
                       className={styles.mrp1}
                       > 
                      {`₹${product.mrp}`}</del>{" "}
                      <Text
                        className={styles.discnt}
                      >{`${product.discount}% off`}</Text>
                    </div>
                    <Flex 
                    className={styles.flx}
                    >
                      <Form.Check
                      style={{display:"flex",marginRight:"5px",gap:"5px"}}
                        type={type}
                        name={"radio"}
                        label={` ₹${product.price}`}
                        id={`disabled-default-${type}`}
                        className={styles.chk1}
                        //  style={{width:"87px",marginRight:"5px"}}
                      />
                      <div style={{ backgroundColor: "#ffffff" }}>
                        <div 
                        // className={styles.corePlan}
                        >
                        </div>
                        <p 
                        className={styles.free}
                        >
                          + free shipping and 3% Extra NeuCoins With
                          <Image marginLeft={"4px"} src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" />
                        </p>
                      </div>
                    </Flex>
                  </div>
                ))}
              </Form>
              <Text 
              className={styles.incl}
              >Inclusive of all taxes</Text>
              <Flex 
              className={styles.slct_txt}
              >
                <select placeholder="Select option"  onChange={HandleQuantity}  className={styles.slct}>
               
                  <option value={1} className={styles.optn}>
                    1 Quantity
                  </option>
                  <option value={2} className={styles.optn}>
                    2 Quantities
                  </option>
                  <option value={3} className={styles.optn}>
                    3 Quantities
                  </option>
                  <option value={4} className={styles.optn}>
                    4 Quantities
                  </option>
                  
                 
              
                </select>
                <Text
                  className={styles.stck}
                >{`of ${product.stock} ${product.name}`}</Text>
              </Flex>
              <Button onClick={HandleBag} 
              className={styles.addToCart}
              >ADD TO CART</Button>
            </Box>
            <Box className={styles.ear}>
              <Text className={styles.del}>
                Earliest delivery by{" "}
                <span className={styles.pm}>8pm, Today</span>
              </Text>
              <Text className={styles.delive}>
                Delivering To:{" "}
                <span className={styles.pin}>pin , location</span>{" "}
              </Text>
            </Box>

            <Box className={styles.img1}>
              <img
                src="../../Images/pedia.png"
                alt="med"
                style={{width:"100%",borderRadius:"7px"}}
                className={styles.med}
                />
            </Box>

            <img
              src="../../Images/Additional_offers.jpg"
              alt="add"
              className={styles.additional_offers}
              />
          </div>
        </div>
      </div>












      {/* ------------------------------------------------------------------- */}
      <div 
      style={{marginTop:"50px"}}
      // className={styles.info_about}
      >
        <div className={styles.information}>
          <div 
          className={styles.ki_kb_sf}
          >
            <h2
              className={styles.infabt}
            >{`Information about ${product.name}`}</h2>
            <p 
            className={styles.descrip}
            >{product.description}</p>
            <h4 
            className={styles.ki}
            >Key Ingredients:</h4>
            <ul 
            className={styles.ki_li}
            >
              {loader === false
                ? product.key_ingredients.map((el, i) => {
                    return <li key={el} style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>
            <h4 
            className={styles.kb}
            >Key Benefits:</h4>
            <ul 
            className={styles.kb_li}
            >
              {loader === false
                ? product.key_benefits.map((el, i) => {
                    return <li 
                    style={{ backgroundColor: "#ffffff" }}
                    >{el}</li>;
                  })
                  : null}
            </ul>

            <h4 
            className={styles.sf}
            >Safety Information:</h4>
            <ul 
            className={styles.sf_li}
            >
              {loader === false
                ? product.safety_information.map((el, i) => {
                  return <li key={el} style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                  : null}
            </ul>
            <div 
            className={styles.rtngRev}
            >
              <Box backgroundColor="#ffffff">
                <h2 style={{ backgroundColor: "#ffffff" }}>
                  Ratings & Reviews
                </h2>
                <Flex gap="2%" backgroundColor="#ffffff" marginTop={"2%"}>
                  <h1 
                  className={styles.prdrtnd}
                  >{product.rating}</h1>
                  <img
                    src="../../Images/icons8-star-96.png"
                    backgroundColor="#1aab2a"
                    className={styles.icn}
                  />
                </Flex>
                <Text
                  backgroundColor="#ffffff"
                  marginTop={"2%"}
                >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
                <img
                  style={{
                    height: "150px",
                    marginTop: "2%",
                    backgroundColor: "#ffffff",
                    marginLeft: "-2%",
                  }}
                  src="../../Images/Ratings_Reviews.jpg"
                />
              </Box>
            </div>
          </div>
          <div>
            <div 
            className={styles.lb}
            >
              <Box>
                <img
                  src="../../Images/book_lab_test.jpg"
                  alt="lab"
                  className={styles.labTest}
                />
              </Box>
            </div>
            <div>
              <img
                src="../../Images/doctor_consult.jpg"
                alt="doctor"
                className={styles.docCons}
              />
            </div>
            <div>
              <Box>
                <img src="../../Images/ags.jpg" alt="" 
                class={styles.ags}
                 />
              </Box>
              <Box>
                <img
                  src="../../Images/contentDetails.jpg"
                  alt=""
                  className={styles.cdt}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
                  </>
  );
};

export default ProductCard;


