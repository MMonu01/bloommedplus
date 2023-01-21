import React from 'react'
import styles from '../Styles/NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = ()=>{
return (
    <div className={styles.container}>
        <div>
        <img  src='../../Images/notfound.png'/>
        </div>
        <p className={styles.oop}>Page Not Found</p>
        <p className={styles.looks}>We're sorry, the page you requested could not be found. Please go back to homepage.</p>
        <Link to='/'>
        <button>Go Home</button>
        </Link>
    </div>
)
}

export default NotFound