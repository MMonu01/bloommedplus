import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../../Styles/Products/Nav.module.css'

const Nav = ()=>{
    return (
        <nav className={styles.container}>
            <Link style={{textDecoration:"none"}} to="/"><span className={styles.color}>Home</span></Link>

<FontAwesomeIcon icon={faChevronRight}/>
<span className={styles.color}>
OTC Categories
</span>
<FontAwesomeIcon icon={faChevronRight}/>

<span className={styles.color}>
Personal Care
</span>
<FontAwesomeIcon icon={faChevronRight}/>

<span >
Skin Care
</span>
        </nav>
    )
}


export default Nav