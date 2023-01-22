import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Products/FaceCare.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const GetData = ()=>{
    return axios({
        method:"get",
        baseURL:"https://bloodmedplus-server.onrender.com/face_car"
    })
}


const FaceCare =()=>{
const [data,setData]=useState([])
const [loading,setLoading] = useState(false)

React.useEffect(()=>{
InGetData()
},[])
// console.log(data,"FaceCare")
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
let box = document.querySelector(".two")
// console.log("box",box)
const PressRev = ()=>{
let width =  box.clientWidth
box.scrollLeft -= width
}


const PressNext =()=>{
    let width =  box.clientWidth
    box.scrollLeft += width
}

return(
    <>
    <div className={styles.box}>
        <div onClick={PressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="two" style={{scrollBehavior:"smooth",background:"white"}}>

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
       <div onClick={PressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    </>
)

}


export default FaceCare