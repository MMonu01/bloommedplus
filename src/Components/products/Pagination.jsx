import styles from '../../Styles/Products/Pagination.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useSelector } from 'react-redux'

const Pagination = ({page,limit,HandlePage})=>{


const totalItem = useSelector((store)=>  store.productReducer.totalCount) || 30
let x = 1;
         x = totalItem && Math.ceil(Number(totalItem)/Number(limit))
        let arr = []
        for(let i=0; i<x;i++){
            arr.push(i+1)
    }
    

return (
    <>
    {
        totalItem && 
     <div className={styles.container}>
  
  {
    page==1 ? <FontAwesomeIcon style={{background:page==1?"#c2edee":"#00b5b7",borderColor:page==1?"#c2edee":"#00b5b7"}} className={styles.btn} type="button"  icon={faChevronLeft}  /> :

<FontAwesomeIcon style={{background:+page==1?"#c2edee":"#00b5b7",borderColor:page==1?"#c2edee":"#00b5b7"}} className={styles.btn} type="button"  icon={faChevronLeft} onClick={()=>HandlePage(-1)} />
  }

   
{arr.map((el)=>{
    return <button style={{background:el===page?"red":"white",color:el===page?"white":"black"}} key={el}>{el}</button>
})}


{
    page==x? <FontAwesomeIcon style={{background:+page==x?"#c2edee":"#00b5b7",borderColor:page==x?"#00b5b7":"#c2edee"}} className={styles.btn} icon={faChevronRight} />
    :
    <FontAwesomeIcon style={{background:+page==x?"#c2edee":"#00b5b7",borderColor:page==x?"#00b5b7":"#c2edee"}} className={styles.btn} icon={faChevronRight} onClick={()=>HandlePage(+1)}/>
}
    </div>


}
    </>
)
}


export default Pagination