import React,{useContext,useState} from 'react'
import { useSelector } from 'react-redux'
import styles from '../../Styles/Products/AllProducts.module.css'
import AddProducts from './AddProducts'




const AllProducts = ()=>{

    const {data,loader} = useSelector((store)=>{
        return {
data:store.productReducer.ProductsData,loader:store.productReducer.isLoading
        }
    }) 
    console.log(data)



return (
    <>
    {loader===false ?
    <div className={styles.container}>

{data.map((el)=>(
    <AddProducts key={el.id} el={el}/>
    ))}
    </div>
  : <div className={styles.loader}></div>}
    </>
)

}


export default AllProducts