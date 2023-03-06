import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Products/AllProducts.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Contexts/CartContext'
import { saveData } from '../../Utils/accessLocalstorage'




const AddProducts = ({el})=>{



    
  const {userCart,setUserCart} = React.useContext(CartContext)
  
   
   
   
    const HandleBag = ()=>{
  
  let bag = {
    id: el.id,
    adminId: el.adminId,
    name: el.name,
    quantity: el.quantity || 1,
    price: el.price,
    packs:el.packs,
    discount:el.discount,
    mrp:el.mrp,
    total_price: el.price*el.quantity|| el.price,
    status: "placed"
  }
  // ----------------------------------------------------
  
  let arr = []
  if(userCart.cart!=undefined){

    let x = userCart.cart
    
  let y = true
  let matid = []
     
     
      for(let j=0; j<x.length; j++){
          if(bag.id==x[j].id){
            x[j].quantity = Number(x[j].quantity)+1
              arr.push(x[j])
              y = false
          }else{
            arr.push(x[j])
          }
      }

  
  
      if(y){
        arr.push(bag)
      }
      // ------------------------------------
    }
  
  
  
  
  
  
  setUserCart({...userCart,cart:arr})
  saveData("Cart",{...userCart,cart:arr})
    }
  

  

















return (

<>
    <div key={el.id} className={styles.box}>
<div className={styles.image}>
<Link to={`/products/skincare/${el.id}`} style={{background:"white"}}>
<img src={el.image} alt={el.image}/>
</Link>
</div>

{/* ---------------- */}

<div>
<div className={styles.name}>{el.name}</div>
<div className={styles.packs}>{el.packs}</div>
<div className={styles.rating}><span style={{background:"#1aab2a",color:"white",padding:"2px 5px",display:"flex",justifyContent:"center",width:"32px",alignItems:"center",fontSize:"12px"}}>{el.rating} <FontAwesomeIcon style={{background:"#1aab2a",color:"white",marginLeft:"3px",fontSize:"10px"}} icon={faStar}/></span> <span className={styles.rating_count}>{el.rating_count} rating</span></div>


<div className={styles.down}>
    
<span className={styles.discount}> 
    <span>MRP</span><span><FontAwesomeIcon className={styles.rupee} icon={faIndianRupeeSign}/>{el.mrp}</span><span>{el.discount}%</span><span>OFF</span>
   
</span>

<div className={styles.price}>
    <span><FontAwesomeIcon style={{fontSize:"15px",color:"rgb(107, 106, 106)"}} icon={faIndianRupeeSign}/> {el.price}</span> <span onClick={HandleBag}>ADD</span>
</div>

    </div>


</div>
        </div>
</>
)

}


export default AddProducts