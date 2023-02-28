import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Products/TopBrands.module.css'
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
// console.log("box",box)
const PressRev = ()=>{
    let box = document.querySelector(".twotwo")
let width =  box.clientWidth
box.scrollLeft -= width
}


const PressNext =()=>{
    let box = document.querySelector(".twotwo")

    let width =  box.clientWidth
    box.scrollLeft += width
}

return(
    <>{loading===false ?
        <div className={styles.box}>
        <div onClick={PressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="twotwo" style={{scrollBehavior:"smooth",background:"white"}}>

        {
             data.map((el)=>(
                <div key={el.id}>
                    <img src={el.image} alt={el.image}/>
                    <p>{el.name}</p>
                    </div>
            ))
        }
        </div>
    </div>
       <div onClick={PressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>:null
    }
    </>
)

}


export default FaceCare