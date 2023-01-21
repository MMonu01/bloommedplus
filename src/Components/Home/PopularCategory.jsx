
import { Link } from "react-router-dom"
import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Homeopathy.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import {
    Box,
    Text,
    Flex,
    Button,
   
  } from "@chakra-ui/react";
  
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
          <Box   border='1px solid transparent'
           m={"auto"}
           pt={"10"}
           pb={"10"}
            w={"95%"} >
          <Flex 
            justifyContent={"space-between"}
            textAlign="center"
           >
         <span style={{background:"whitesmoke" ,fontSize:"18px",fontWeight:"bold",textAlign:"left", width:"95%",margin: "auto",
            color: "#212121" }} > Popular categories</span>

          <Button   borderRadius="5px"
                    fontSize="0.9rem"
                    margin="0px 15px 0px 2px"
                    padding="5px"
                    color="#fff"
                   
                    bg='#ff6f61' border="none" >
                   See All
                  </Button>
         </Flex>

         </Box>
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




