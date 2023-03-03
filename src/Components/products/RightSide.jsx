import Nav from "./Nav"
import TopBrands from "./TopBrands"
import styles from '../../Styles/Products/RightSide.module.css'
import FaceCare from "./FaceCare"
import BodyCare from "./BodyCare"
import AllProducts from "./AllProducts"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"



const RightSide = ({HandleSort,sort})=>{
    


    return(
        <div style={{width:"100%"}}>
            <Nav/>
            <h2 className={styles.skincare}>SKIN CARE</h2 >
            <img style={{width:"100%",marginTop:"25px"}} src="https://onemg.gumlet.io/0460c9f0-9952-4a9b-88d8-f285bc7ba712_1667481734.jpg?w=1027&h=120&format=auto" alt="head_image"/> 
          
            <TopBrands/> 
            <FaceCare/>  
            <BodyCare/> 


<div>
    <div className={styles.header}>

<p id="AllProducts">All Products</p>
<div>
    <span className={styles.sort}>Sort By</span>
    <select  value={sort || "name"} onChange={(e)=>HandleSort(e)}>
        <option value="name">Relevance</option>
        <option value="rating">Average Customer Rating</option>
        <option value="Pricelth">Price: Low to High</option>
        <option value="Pricehtl">Price: High to Low</option>
        <option value="discountlth">Discount: Low to High</option>
        <option value="discounthtl">Discount: High to Low</option>
        <option></option>
    </select>
</div>
    </div>

    <AllProducts />
</div>
        </div>
    )
}

export default RightSide