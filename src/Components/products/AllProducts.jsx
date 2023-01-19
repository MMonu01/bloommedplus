import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Products/AllProducts.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'

const AllProducts = ({data})=>{
console.log(data,"AllProducts")
return (
    <div className={styles.container}>

{data.map((el)=>(
    <div key={el.id} className={styles.box}>
<div className={styles.image}>
<Link to={`/products/${el.id}`}>
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
    <span><FontAwesomeIcon style={{fontSize:"15px",color:"rgb(107, 106, 106)"}} icon={faIndianRupeeSign}/> {el.price}</span> <span>ADD</span>
</div>

    </div>


</div>
        </div>
))}
    </div>
)

}


export default AllProducts