import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faLocationDot,faLocationCrosshairs,faMagnifyingGlass,faChevronDown,faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../Styles/Navbar.module.css'
import { Input,InputRightElement,Button,InputGroup } from '@chakra-ui/react'
import Sidebar from "./Sidebar"


export const Navbar = ()=>{

    return (
     <nav className={styles.navbar}>
      <div className={styles.laptop}>


<div className={styles.top}>

<div><Link style={{background:"white"}} to='/'><img className={styles.logo} src="../../Images/bloommedplus.png" alt="logo"/></Link></div>
<div className={styles.medicine}>MEDICINES</div>
<div><span className={styles.head}>LAB TESTS  </span> <span style={{fontSize:"12px"}} className={styles.safe}>SAFE</span></div>
<div className={styles.head}>CONSULT DOCTORS</div>
<div className={styles.head}>COVID-19</div>
<div className={styles.head}>AYURVEDA</div>
<div><span className={styles.head}>CARE PLAN  </span> <span className={styles.safe}>SAVE MORE</span></div>
<div><span className={styles.login}>Login</span> | <span className={styles.signup}>Signup</span></div>
<div>Offers</div>
<div style={{width:"35px",cursor:"pointer"}}><FontAwesomeIcon icon={faCartShopping}/><sup style={{background:"white"}}>0</sup></div>
<div>Need Help?</div>
</div>




<hr className={styles.hr}/> 



 <div className={styles.middle}>

<div className={styles.left}>

<div className={styles.delhi}>
<div><FontAwesomeIcon icon={faLocationDot} className={styles.dot}/> <span style={{fontWeight:"bold",marginLeft:"5px"}}> New Delhi</span></div>
<div><FontAwesomeIcon icon={faLocationCrosshairs} className={styles.cross}/></div> 
</div>

<div className={styles.Search}>
  <input className={styles.input} type="text" placeholder="Search for Medicines and Health Products"/>
  <FontAwesomeIcon className={styles.glass} icon={faMagnifyingGlass}/>
</div> 


</div>



<div className={styles.right}>
<div className={styles.quick}>
QUICK BUY! Get 25% off on 
<div >
<p style={{float:"right",background:'white'}}>medicines*</p>
</div>
</div>
<div style={{background:"white"}}>
  <button className={styles.order}>Quick order</button>
</div>
</div>


</div> 



 <hr className={styles.hr}/> 
{/* ------------------------------------------------------------------------ */}




<div className={styles.bottom}>

<div><span>Health Care Resource</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Vitamins & Nutritions</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>diabetes</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Healthcare Devices</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Personal Care</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Health Conditions</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Ayurveda Products</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Homeopathy</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Featured</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>
<div><span>Covid Essentials</span> <FontAwesomeIcon className={styles.down} icon={faChevronDown}/></div>

</div>
 
      </div>

{/* ---------------------------------------------------------------------------------------- */}

<div className={styles.newNav}>


<div className={styles.newTop}>

<div>  
<Sidebar/>
<div><Link style={{background:"white"}} to='/'><img  src="../../Images/bloommedplus.png" alt="logo"/></Link></div>
</div>

<div style={{background:"white"}}>
<FontAwesomeIcon icon={faCartShopping}/>
<sup style={{background:"white"}}>0</sup>
</div>
</div>
<hr />
<div className={styles.newMiddle}>
<div><FontAwesomeIcon icon={faLocationDot} className={styles.dot}/> <span style={{fontWeight:"bold",marginLeft:"5px"}}> New Delhi</span> <FontAwesomeIcon className={styles.newdown}  icon={faChevronDown}/>
</div>
</div>

<div className={styles.newbottom}>
<div className={styles.newSearch}>
<InputGroup size='md' style={{background:"white",border:"1px solid rgb(168, 168, 168)",borderRadius:"5px"}}>
      <Input
      style={{background:"white",padding:"10px 20px",marginLeft:"5px",outline:"none",border:"none",}}
        pr='4.5rem'
        type="text"
        placeholder='Search for Medicines and Health Products'
      />
      <InputRightElement  style={{background:"white",width:"20px",marginRight:"15px"}}>
       
  <FontAwesomeIcon style={{color:"black",background:"white",marginRight:"5px",outline:"none",paddingLeft:"5px",cursor:"pointer",marginTop:"9px"}}  icon={faMagnifyingGlass}/>

   
      </InputRightElement>
    </InputGroup>
</div>
</div>

</div>

     </nav>
    )
}