import React, { useEffect, useState,useContext } from "react"
import { useSearchParams } from "react-router-dom"
import LeftSide from "../Components/products/LeftSide"
import styles from '../Styles/Products/products.module.css'
import RightSide from "../Components/products/RightSide"
import Pagination from "../Components/products/Pagination"
import  {Navbar} from '../Components/Navbar'
import { Footer } from "../Components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { GetProductData } from "../Redux/Products/action"
import { totalCount } from "../Redux/Products/action"
import { BrandData, ProductTagData,ProductFormData,UsesData,AgeData,GenderData,DiscountData } from "../Components/products/FilterData"
import { HalfFilter } from "../Components/products/HalfFilter"



const Products = ()=>{

const [searchParams,setSearchParams] = useSearchParams()
const [totalItem,setTotalItem] = useState(12)

const initialPage = Number(searchParams.get("page"))
const [page,setPage]  = useState(initialPage || 1)

const initialLimit = Number(searchParams.get("limit"))
const [limit,setlimit] = useState(initialLimit || 12)


const initialSort = searchParams.get("sort")
const [sort,setSort] = useState(initialSort || "")

const initialBrand  = searchParams.getAll("brand")
const [brand,setBrand] = useState(initialBrand || [])

const initialProductTag = searchParams.getAll("tag")
const [productTag,setProductTag] = useState(initialProductTag || [])

const initialProductForm = searchParams.getAll("form")
const [productForm,setProductForm] = useState(initialProductForm || [])

const initialDiscount = searchParams.getAll("discount")
const [discount,setDiscount] = useState(initialDiscount || "")


const initialUses  = searchParams.getAll("use")
const [uses,setUses] = useState(initialUses || [])

const initialAge = searchParams.getAll("age")
const [age,setAge]  = useState(initialAge || [])

const initialGender = searchParams.getAll("gender")
const [gender,setGender] = useState(initialGender || [])


const dispatch = useDispatch()


const HandlePage = (val)=>{
    setPage((prev)=>prev+val)
}


const {loader,CountLoader} = useSelector((store)=>{
    return {loader:store.productReducer.isLoading,CountLoader:store.productReducer.isCountLoading}
})


    


React.useEffect(()=>{

// searchParams-------------------------------------
const obj = {}

if(page>1){
    obj.page = page
}

if(sort=="rating" || sort == "name" || sort=="Pricelth" || sort=="Pricehtl" || sort=="discountlth" || sort=="discounthtl"){
    obj.sort = sort
}



if(brand.length>0){
    obj.brand = HalfFilter(brand,BrandData)
}


if(productTag.length>0){
   obj.tag = HalfFilter(productTag,ProductTagData)
    }

if(productForm.length>0){
    obj.form  = HalfFilter(productForm,ProductFormData)
}

if(uses.length>0){
    obj.use  = HalfFilter(uses,UsesData)
}

if(age.length>0){
    obj.age = HalfFilter(age,AgeData)
}

if(gender.length>0){
    obj.gender = HalfFilter(gender,GenderData)
}




if(discount=="Less than 10%" || discount=="10% and above" || discount == "20% and above" || discount=="30% and above"){
    obj.discount = discount
}




setSearchParams(obj)




// api filter---------------------------------------------


let payload = {_page:page,_limit:limit}

let _sort = "name"
let _order = "asc"

if(sort=="rating"){
_sort = "rating"    
_order = "desc"
}

else if(sort=="Pricelth"){
    _sort = "price"
    _order = "asc"
}

else if(sort=="Pricehtl"){
    _sort = "price"
    _order = "desc"
}
else if(sort=="discountlth"){
    _sort="price"
    _order="asc"
}

else if(sort=="discounthtl"){
    _sort="price"
    _order="desc"
}



payload._sort = _sort
payload._order = _order

if(brand.length>0){   
    payload.brand = brand
}

if(productTag.length>0){
    payload.tag = productTag
}

if(productForm.length>0){
    payload.form = productForm
}
if(uses.length>0){
    payload.use = uses
}

if(age.length>0){
    payload.age = age
}
if(gender.length>0){
    payload.gender = gender
}



let gte = 0
let lte = 100
if(discount=="Less than 10%"){
    lte = 9
   
}
else if(discount =="10% and above"){
    gte = 10
    lte = 100
}
else if(discount =="20% and above"){
    gte = 20
    lte = 100
}
else if(discount =="30% and above"){
    gte = 30
    lte = 100
}

payload.discount_gte=gte
payload.discount_lte=lte



dispatch(GetProductData(payload))
dispatch(totalCount(payload))
},[page,limit,sort,brand,productTag,productForm,uses,age,gender,discount])




const HandleSort = (e)=>{
    setSort(e.target.value)
}


    return (
        <>
        <Navbar/>
        <main>
<div className={styles.container}>
    {
        loader?null:

<div >
    <LeftSide brand={brand} productForm={productForm} setProductForm={setProductForm} setBrand={setBrand} setProductTag={setProductTag} productTag={productTag} uses={uses} setUses={setUses} age={age} setAge = {setAge} gender={gender} setGender={setGender} discount={discount} setDiscount={setDiscount}  />
</div>
}
<div>

{
    loader?null:
    
<RightSide sort={sort} setSort={setSort}  HandleSort={HandleSort}/>
}

{
    loader?null :
<Pagination HandlePage={HandlePage} limit={limit} page={page}/>
}

</div>

</div>



        </main>
        <Footer/>
        </>
    )
}


export default Products