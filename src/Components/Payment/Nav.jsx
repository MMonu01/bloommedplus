import React from 'react'
import styles from '../../Styles/Payment/Nav.module.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (<>
    <nav className={styles.navbar}>
    <Link to="/" style={{background:"white"}}>
<img src="../Images/bloommedplus.png"/>
    </Link>

<div>Need Help?</div>
  </nav>
  </>
  )
}
