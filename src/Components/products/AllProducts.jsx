import React,{useContext,useState} from 'react'
import styles from '../../Styles/Products/AllProducts.module.css'
import AddProducts from './AddProducts'




const AllProducts = ({data})=>{

return (
    <div className={styles.container}>

{data.map((el)=>(
    <AddProducts key={el.id} el={el}/>
))}
    </div>
)

}


export default AllProducts