import axios from "axios"
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const GetData = (id)=>{
    return axios({
        method:"get",
        baseURL:"http://localhost:1010/products",
        url:`${id}`
    })
}

const SingleProducts = ()=>{

    const [data,setData] = useState({})
    const id = useParams()

useEffect(()=>{
InGetData()
},[data])
console.log(data)
const InGetData =()=>{
GetData()
.then((res)=>setData(res.data))
.catch((err)=>console.log(err))
}
console.log(data)
    return (
        <div>
            SingleProducts
        </div>
    )
}


export default SingleProducts