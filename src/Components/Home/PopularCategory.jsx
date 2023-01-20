
import { Link } from "react-router-dom"
import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Homeopathy.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const GetData = ()=>{
    return axios({
        method:"get",
        baseURL:"http://localhost:1010/Landing_page"
    })
}
export const PopularCategories = ()  =>{
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
        setData(()=>res.data[1].popular_categories)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })
}
let box = document.querySelector("#h2")
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
        color:"black" }} > Popular categories </h3>
    <div className={styles.box}>
        <div onClick={buttonPressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="one" id="h2"  style={{scrollBehavior:"smooth",background:"white"}}>
        {
            loading===false ? data.map((el,index)=>(

                index==5?(
                    <div key={el.id}>
    <Link to="/products/skincare">
                    <img src={el.image} alt={el.image}/>
                    </Link>
                    <p>{el.name}</p>
                    </div>
                ):(<div key={el.id}>
                    <img src={el.image} alt={el.image}/>
                    <p>{el.name}</p>
                    </div>)
                
            )):null
        }
        </div>
    </div>
    <div onClick={buttonPressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    </div>
)
}




