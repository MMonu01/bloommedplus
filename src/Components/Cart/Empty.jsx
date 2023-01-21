import React from 'react'
import styles from '../../Styles/Cart/Empty.module.css'
import { Link } from 'react-router-dom'

const Empty = ()=>{
return (
    <div className={styles.container}>
        <div>
        <img  src='../../Images/emptycart.png'/>
        </div>
        <p className={styles.oop}>Opps!</p>
        <p className={styles.looks}>Looks like there is no item in your cart yet.</p>
        <Link to='/products/skincare'>
        <button>ADD PRODUCTS</button>
        </Link>
    </div>
)
}

export default Empty