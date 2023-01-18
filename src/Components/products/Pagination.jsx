import styles from '../../Styles/Products/Pagination.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Pagination = ({page,totalPages,HandlePage})=>{
return (
    <div className={styles.container}>
       <button onClick={()=>HandlePage(-1)} style={{display:page===1?"none":"block"}} disabled={page===1}><FontAwesomeIcon className={styles.icon} icon={faChevronLeft}/> Previous</button>
       <div>{page}</div>
       <button onClick={()=>HandlePage(1)} style={{display:page===totalPages?"none":"block"}} disabled={page===3}>Next <FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></button>
        
    </div>
)
}


export default Pagination