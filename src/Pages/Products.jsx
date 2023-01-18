import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import LeftSide from "../Components/products/LeftSide"
import styles from '../Styles/Products/products.module.css'
import RightSide from "../Components/products/RightSide"
import Pagination from "../Components/products/Pagination"


const GetData = (page,sort)=>{
    let sortby= null
    let order = null
    if(sort=="rating"){
      sortby = "rating"
    order = "desc"
    }
    else if(sort=="HL"){
        sortby = "price"
        order = "desc"
    }
    else if(sort=="LH"){
        sortby = "price"
        order = "asc"
    }
    else if(sort=="discount"){
        order="desc"
        sortby="discount"
    }
    else {
        sortby = "id"
        order = "asc"
    }
    return axios({
        method:"get",
        baseURL:"http://localhost:1010/products",
        params:  {_page:page,
               _limit:12,
               _sort:sortby,
               _order:order}
    })
}


const Products = ()=>{
const [data,setData] = useState([])
const [isLoading,setIsLoading] = useState(false)
const [page,setPage]  = useState(1)
const [totalPages,setTotalPages] = useState(0)
const [searchParams,setSearchParams] = useSearchParams()
const initialState = searchParams.get("sort")
const [sort,setSort] = useState(initialState || "")

const HandlePage = (val)=>{
    setPage((prev)=>prev+val)
}

useEffect(()=>{
InGetData()
},[page,sort])

const InGetData = ()=>{
    setIsLoading(true)
    GetData(page,sort)
    .then((res)=>{
        setIsLoading(false)
    
        let x = res.headers["x-total-count"]
        x = Math.ceil(x/12)
        setTotalPages(x)
setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
setIsLoading(false)
    })
}




const HandleSort = (e)=>{
    setSort(e.target.value)
}
console.log(sort)


useEffect(() => {
    const params = {
        sort
    };
    
    setSearchParams(params);
  }, [sort]);


    return (
        <main>
<div className={styles.container}>
<div >
    <LeftSide/>
</div>
<div>
<RightSide data={data} HandleSort={HandleSort}/>

<Pagination HandlePage={HandlePage} totalPages={totalPages} page={page}/>
</div>

</div>



        </main>
    )
}


export default Products