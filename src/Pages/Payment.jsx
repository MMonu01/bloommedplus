import React,{useContext} from "react";
import styles from '../Styles/Payment.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear ,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {CartContext} from '../Contexts/CartContext'
import  PinInput  from "../Components/Payment/PinInput"


const initialState = {
cardNumber:"",
month:"",
year:"",
securityCode:"",
nameOnCard:""
}


const Payment = () => {

  const {userCart,setUserCart,paymentDetails,setPaymentDetails}  = useContext(CartContext)
  const [faceValue,setFaceValue]  = React.useState(0)
  const [discount,setDiscount]  = React.useState(0)
  const [saving,setSaving]  = React.useState(0)
  const [payment,setPayment]  = React.useState(0)
const [formData,setFormData] = React.useState(initialState)
  



const HandleFormData = (e)=>{

  setFormData({...formData,[e.target.name]:e.target.value})
}

const HandleCardNumber = (e)=>{
  setFormData({...formData,cardNumber:e})
}



const HandleSubmit = ()=>{
setPaymentDetails(formData)
}





React.useEffect(()=>{
  let m = userCart.cart
  let x = 0
  let d =0
  let p =0
  let s =0
  if(m.length>0){
    for(let i=0; i<m.length;i++){
      x += Number(m[i].quantity)*Number(m[i].mrp)
      d += Number(m[i].quantity)*Number(m[i].mrp)-Number(m[i].quantity)*Number(m[i].price) 
      s += Number(m[i].quantity)*Number(m[i].mrp)-Number(m[i].quantity)*Number(m[i].price)
      p += Number(m[i].quantity)*Number(m[i].price) 
    }
  }
  s = s-50
  p = p+50
  if(s<0){
    s=0
  }
  
  setFaceValue(x)
  setDiscount(d)
  setPayment(p)
  setSaving(s)
  // -------------
  
  
  },[userCart])


console.log(saving)




















  return (
    <>
    <nav className={styles.navbar}>
      <Link to="/" style={{background:"white"}}>
<img src="../Images/bloommedplus.png"/>
      </Link>

<div>Need Help?</div>
    </nav>
      <div className={styles.container}>

<div className={styles.left}>

<div className={styles.option}>
<div style={{minWidth:"210px"}}>

<div>
  <img src="https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg" alt="https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg"/>
  <div>WALLETS</div>
</div>

<div>
<img src="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png" alt="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png"/>
  <div>UPI</div>
</div>

<div style={{background:"white",padding:"10px 0px 10px 10px",marginLeft:"-10px",width:"100%"}}>
 <img style={{background:"white"}} src="https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg" alt="https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg"/>
  <div style={{background:"white"}}>CARDS</div>
</div>

<div>
<img src="https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg" alt="https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg"/>
  <div>NET BANKING</div>
</div>

<div>
 <img src="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg" alt="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg"/>
  <div>PAY ON DELIVERY</div>
</div>
</div>

</div>



<div className={styles.credit}>
<p className={styles.debit}>Credit & Debit Cards</p>
<p className={styles.small}>Add New Card For Payment</p>
<p className={styles.small} style={{marginTop:"30px"}}>Card Number</p>
{/* <input type="text" className={styles.cardNumber} style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}} placeholder="XXXX XXXX XXXX XXXX"/> */}

<div className={styles.PinInput}>
<PinInput HandleCardNumber={HandleCardNumber} length={4} className={styles.cardNumber}  maxChar={4}/>
</div>
<div className={styles.security}>
<div>
  <p className={styles.small}>Expiry Date (MM/YY)</p>
  <input type="text" className={styles.expiry} name="month" value={formData.month} onChange={HandleFormData} style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}} placeholder="MM"/><span style={{color:"rgb(162,162,162)",marginLeft:"5px",background:"white"}}>{'/'}</span>
  
  <input type="text" className={styles.expiry}  name="year" value={formData.year} onChange={HandleFormData}  style={{boxShadow:"none",paddingRight:"0px",borderBottom:"2px solid rgb(201, 201, 201)"}} placeholder="YY"/>
</div>

<div>
  <p className={styles.small}>Security code</p>
  <input type="text" className={styles.cvv}  name="securityCode" value={formData.securityCode} onChange={HandleFormData}  style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}}   placeholder="CVV"/>
</div>
</div>

<input type="text"  name="nameOnCard" value={formData.nameOnCard} onChange={HandleFormData}  className={styles.cardName} style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}} placeholder="Name on Card"/>

  <input type="checkbox" className={styles.checkbox}/>
<p className={styles.future}>Your card details will be saved securely for future transactions, based on the industry standards.</p>

<div className={styles.makePayment}>
  <button onClick={HandleSubmit}>MAKE PAYMENT</button>
</div>

<p className={styles.domestic}>We Support domestic credit and debit cards of following brands</p>
<div className={styles.brands}>
  <img src="https://onemg.gumlet.io/marketing/0d7023e4-b2bb-4322-8ca0-3b917294e722.jpg" alt="1"/>
  <img src="https://onemg.gumlet.io/marketing/7f77216d-f9fc-4740-8c10-be627b0b6005.jpg" alt="2"/>
  <img src="https://onemg.gumlet.io/marketing/ff2df2be-ddaf-4b6f-9be2-ea422f06633d.jpg" alt="3"/>
  <img src="https://onemg.gumlet.io/marketing/b0f4092b-f799-4bc8-af01-b28426f1b13e.jpg" alt="4"/>
  <img src="https://onemg.gumlet.io/marketing/8a11fbd0-55cd-4826-bb22-92914954c43f.jpg" alt="5"/>
</div>
</div>

</div>



<div className={styles.right}>



<div className={styles.cashback}>
<div className={styles.offer}><FontAwesomeIcon className={styles.gear} icon={faGear}/><p>Pay with Paytm and get 5% cashback up to ₹75. T&C apply.</p></div>
<hr style={{marginTop:"10px",border:"1px solid rgb(230,230,230)"}}/>
<div className={styles.all}><span style={{background:"white",fontSize:"15px"}}>SHOW ALL PAYMENT OFFERS</span> <FontAwesomeIcon className={styles.chevron} icon={faChevronRight}/></div>
</div>


<div>

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
  <p>Shipping Fee </p>
  <p>₹{20}</p>
  </div>
  <div>
  <p>Packaging Charges </p>
  <p>₹{20}</p>
  </div>
  <div>
  <p>Rapid Delivery Fee </p>
  <p>₹{10}</p>
  </div>

<hr className={styles.newhr} />

<div>
  <p>To be paid</p>
  <p>₹{payment}</p>
</div>
<div>
  <p>Total Savings</p>
  <p style={{color:"green",fontWeight:"600",fontSize:"15px"}}>₹{saving}</p>
</div>
</div>
<div className={styles.placeOrder}>
  <button >
    PLACE ORDER
  </button>
</div>

</div>
</div>
      </div> 

    </>
  );
};

export default Payment;
