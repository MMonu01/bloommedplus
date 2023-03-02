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
        <>
           <p  className={styles.productHead}>Face care products</p>
        <div className={styles.box}>
        <div onClick={PressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="twotwo" style={{scrollBehavior:"smooth",background:"white"}}>

        {
             data.map((el)=>(
                <div key={el.id}>
                    <a  className={styles.anchor} href="#AllProducts" alt="AllProducts">
                    <img src={el.image} alt={el.image}/>
                    </a>
                    <p>{el.name}</p>
                    </div>
            ))
        }
        </div>
    </div>
       <div onClick={PressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    </>
    :null
    }
    </>
)

}


export default FaceCare