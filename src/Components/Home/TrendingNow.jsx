

import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/PopularCombo.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { background } from "@chakra-ui/react"
const GetData = ()=>{
    return axios({
        method:"get",
        baseURL:"http://localhost:1010/Landing_page"
    })
}
export const TrendingNow = ()  =>{
const [data,setData]=useState([])
const [loading,setLoading] = useState(false)
React.useEffect(()=>{
InGetData()
},[])
console.log(data,"oneojos")
const InGetData = ()=>{
    setLoading(true)
    GetData()
    .then((res)=>{
        console.log("array of object",res)
        setData(()=>res.data[5].Trending_now)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })
}
let box = document.querySelector("#bio1")
// console.log("box",box)
const buttonPressRev = ()=>{
let width =  box.clientWidth
box.scrollLeft -= width
}
const buttonPressNext =()=>{
    let width =  box.clientWidth
    box.scrollLeft += width
}
return(
    <div>
        <h3 style={{background:"whitesmoke" ,textAlign:"left", width:"95%",margin: "auto",
        color:"black" }} >Trending now </h3>
    <div className={styles.box}>
        <div onClick={buttonPressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div   id="bio1"  style={{scrollBehavior:"smooth",background:"white" }}>
        {
            loading===false ? data.map((el)=>(
                <div  key={el.id} style={{ height:"270px",fontSize:"14px",padding:"10px",background:"white"}}>
                    <img src={el.image} alt={el.image} height="150px" width="150px"/>
                    <div  > 
                    <p style={{ height:"20px",  overflow: "hidden" ,marginBottom:"0px"}}>{el.name}</p>
                    <p style={{fontSize:"11px",fontWeight:"bold",color:"gray"}}> &#10534;{ ` ${el.packs}`}</p>
                    <div style={{display:"flex",gap:"2px",}}>
                        <div style={{display:"flex",gap:"2px"}} >
                        <span>MRP  ₹ </span>
                        <span style={{"text-decoration-line": "line-through"}}>{ `${el.mrp}`}</span>
                        </div>
                        <div style={{display:"flex",gap:"3px",color:"green"}}>
                        <span style={{}}>{ `${el.discount}`}</span>
                        <span>off</span>
                        </div>
                    </div>
                    <h4 style={{ 'text-align': "start"}}>{ ` ₹ ${el.price}`}</h4>
                   </div>
                 </div>
            )):null
        }
        </div>
    </div>
    <div onClick={buttonPressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    
    </div>
)
}



