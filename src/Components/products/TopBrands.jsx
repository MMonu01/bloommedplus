import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Products/TopBrands.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const GetData = ()=>{
    return axios({
        method:"get",
        baseURL:"https://bloodmedplus-server.onrender.com/topbrands"
    })
}


const TopBrands =()=>{
const [data,setData]=useState([])
const [loading,setLoading] = useState(false)

React.useEffect(()=>{
InGetData()
},[])
// console.log(data,"oneojos")
const InGetData = ()=>{
    setLoading(true)
    GetData()
    .then((res)=>{
        setData(()=>res.data)
    
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })
}
let box = document.querySelector(".one")
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
    <>
    <div className={styles.box}>
        <div onClick={buttonPressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="one" style={{scrollBehavior:"smooth",background:"white"}}>

        {
            loading===false ? data.map((el)=>(
                <div key={el.id}>
                    <img src={el.image} alt={el.image}/>
                    <p>{el.name}</p>
                    </div>
            )):null
        }
        </div>
    </div>
    <div onClick={buttonPressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    </>
)

}


export default TopBrands