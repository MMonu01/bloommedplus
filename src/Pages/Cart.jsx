import React,{useContext} from 'react'
import styles from '../Styles/Cart.module.css'
import {CartContext} from '../Contexts/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear,faChevronRight,faCircleInfo,faTrashCan,faCirclePlus,faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { saveData } from '../Utils/accessLocalstorage'
import Empty from '../Components/Cart/Empty'
import { Navbar } from '../Components/Navbar'

const Cart = () => {

const {userCart,setUserCart}  = useContext(CartContext)
const [faceValue,setFaceValue]  = React.useState(0)
const [discount,setDiscount]  = React.useState(0)
const [payment,setPayment]  = React.useState(0)
const [save,setSave] = React.useState(0)

React.useEffect(()=>{
let m = userCart.cart
let x = 0
let d =0
let p =0
let s= 0
if(m.length>0){
  for(let i=0; i<m.length;i++){
    x += Number(m[i].quantity)*Number(m[i].mrp)
    d += Number(m[i].quantity)*Number(m[i].mrp)-Number(m[i].quantity)*Number(m[i].price)
    p += Number(m[i].quantity)*Number(m[i].price)
s+= Math.floor((Number(m[i].quantity)*Number(m[i].mrp))/20)
  }
}

setFaceValue(x)
setDiscount(d)
setPayment(p)
setSave(s)
// -------------




},[userCart])

const RemoveItem = (id)=>{
  let x = userCart.cart
  let newCart = []
for(let i=0; i<x.length;i++){
  if(x[i].id!==id){
newCart.push(x[i])
  }
}
setUserCart({...userCart,cart:newCart})
saveData("Cart",{...userCart,cart:newCart})
}




const QuantityPlus = (id)=>{
let x = userCart.cart

for(let i=0; i<x.length;i++){
  if(x[i].id===id){
    // if(Number(x[i].quantity)<4){
      x[i].quantity = Number(x[i].quantity) + 1
    // }
  }
}
setUserCart({...userCart,cart:x})
saveData("Cart",{...userCart,cart:x})

}

const QuantityMinus = (id)=>{
  let x = userCart.cart

  for(let i=0; i<x.length;i++){
    if(x[i].id===id){
      if(Number(x[i].quantity)>1){
        x[i].quantity = Number(x[i].quantity) - 1
      }
    }
  }
  setUserCart({...userCart,cart:x})
saveData("Cart",{...userCart,cart:x})

}




  return (<>
    <Navbar/>
    <>{userCart.cart.length==0?<Empty/>:(

 
    <div className={styles.container}>
      
      <div className={styles.left}>

<div className={styles.list}>
{userCart.cart.length>0 && userCart.cart.map((el)=>(
  <>
  <div key={el.id} className={styles.child}>
   
   <div  className={styles.flx}>
   <div className={styles.name}>{el.name}</div>
   <div className={styles.price}>₹{el.price}</div>
    </div>
    
    <div style={{marginTop:"7px",marginBottom:"20px"}} className={styles.flx}>
    <div className={styles.packs}>{el.packs}</div>
 <div className={styles.mrp}>MRP <span style={{textDecoration:"line-through"}}>₹{el.mrp}</span></div>
    </div>
    
    
    <div  className={styles.flx}>
    <div onClick={()=>RemoveItem(el.id)} style={{background:"white",cursor:"pointer"}}><FontAwesomeIcon className={styles.trash}  icon={faTrashCan}/><span style={{fontSize:"14px",background:"white",color:"rgb(151,151,151)"}}>Remove</span></div>
 <div style={{background:"white",display:"flex",alignItems:"center",gap:"6px"}}><FontAwesomeIcon className={styles.circle} onClick={()=>QuantityMinus(el.id)} icon={faCircleMinus}/> {el.quantity} <FontAwesomeIcon className={styles.circle} onClick={()=>QuantityPlus(el.id)} icon={faCirclePlus}/></div>
    </div>
   

    </div>
    <hr style={{border:"1px solid rbg(200,200,200)"}}/>
  </>
))}
</div>
      </div>




      <div className={styles.right}>
{/* ---------------------------------------------- */}
<div className={styles.plan}>
<p className={styles.corePlan}>Care Plan</p>
<p className={styles.extra}>You can save extra ₹{save} on this order</p>
<p className={styles.member}>Become a member</p>
<p className={styles.care}>Care plan membership ₹165 ₹<span style={{textDecoration:"line-through",background:"white",color:"rgb(155, 155, 155)"}}>549</span>  / 3 months</p>
<div className={styles.cartmore}>
  <button>Know More</button>
  <button>Add to Cart</button>
</div>

<hr style={{marginTop:"15px"}}/>


<div className={styles.couponBox}>

 <div className={styles.coupon}>
  <FontAwesomeIcon style={{background:"white",fontSize:"20px"}} icon={faGear}/>
  <span>Apply Coupon</span>
 </div>
<FontAwesomeIcon style={{padding:"7px 10px",borderRadius:"50%",background:"rgb(217,217,217)"}} icon={faChevronRight}/>
</div>
</div>

{/* ------------------------------------------------- */}

<div className={styles.check}>
<div className={styles.vital} >
  <p style={{fontSize:"17px",background:"#fffcf8"}}>Check the health of your vital organs</p>
<FontAwesomeIcon icon={faCircleInfo}/>
</div>

<div className={styles.health}>
  <input type="checkbox"/>
  <div>
    <p style={{fontSize:"15px",background:"white"}}>Book Good Health Silver Package for just ₹649</p>
  </div>
</div>
    <div className={styles.remaining}>
    <p>Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</p>
    <p>Pay later on home sample collection</p>
    </div>
</div>

{/* ------------------------------------------- */}

<div className={styles.bill}>

<div>
  <p>Item Total{'('}MRP{')'}</p>
  <p>₹<span>{faceValue}</span></p>
</div>

<div>
  <p>Price Discount</p> 
  <p>-₹<span>{discount}</span></p>
  </div>
<hr className={styles.newhr} />
<div>
  <p>Shipping Fee</p>
  <p>As per delivery address</p>
  </div>

<hr className={styles.newhr} />

<div>
  <p>To be paid</p>
  <p>₹{payment}</p>
</div>
<div>
  <p>Total Savings</p>
  <p style={{color:"green",fontWeight:"600",fontSize:"15px"}}>₹{discount}</p>
</div>
</div>
{/* ----------------------------------- */}

<div className={styles.checkout}>
{/* <div> */}
 <button>CHECKOUT</button>
{/* </div> */}
</div>


      </div>
      
    </div>
       )}
       </>
    </>
  )
}

export default Cart
