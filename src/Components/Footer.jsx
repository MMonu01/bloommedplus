import styles from '../Styles/Footer.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faSquareInstagram,faSquareTwitter,faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {


  return (
    <footer className={styles.container}>


<section >
  <h1 className={styles.head}>
  INDIA’S LARGEST HEALTHCARE PLATFORM
  </h1>

  <div className={styles.platformContainer}>

<div>
<h1>260m+</h1>
<p>Visitors</p>
  </div>


  <div>
<h1>31m+</h1>
<p>Orders Delivered</p>
  </div>

  <div>
<h1>1800+</h1>
<p>Cities</p>
  </div>
  
</div>
</section>


<section className={styles.download}>

  <span>Get the link to download App
</span>
<input type="number" placeholder='Enter Phone Number'/>
<button>
  Send Link
</button>

</section>


<section className={styles.info}>

  <div>
<p>Know Us</p>
<li>About Us</li>
<li>ontact Us</li>
<li>Press Coverage</li>
<li>Careers</li>
<li>Business Partnership</li>
<li>Become a Health Partner</li>
<li>Corporate Governance</li>
  </div>


  <div>
<p>Our Policies</p>
<li>Privacy Policy</li>
<li>Terms and Conditions</li>
<li>Editorial Policy</li>
<li>Return Policy</li>
<li>IP Policy</li>
<li>Grievance Redressal Policy</li>
<li>Fake Jobs and Fraud Disclaimer</li>
  </div>


  <div>
<p>Our Services</p>
<li>Order Medicines</li>
<li>Book Lab Tests</li>
<li>Consult a Doctor</li>
<li>Ayurveda Articles</li>
<li>Hindi Articles</li>
<li>Care Plan</li>
  </div>

<div>
  <p>Connect</p>
  <span>Social Links</span>
<div className={styles.linkContainer}>
<FontAwesomeIcon className={styles.brand} icon={faSquareFacebook}/>
<FontAwesomeIcon  className={styles.brand} icon={faSquareInstagram}/>
<FontAwesomeIcon  className={styles.brand} icon={faSquareTwitter}/>
<FontAwesomeIcon  className={styles.brand} icon={faYoutube}/>
<FontAwesomeIcon  className={styles.brand} icon={faLinkedin}/>
</div>
  <span>Want daily dose of health?</span>
<Link to='/signup' className={styles.link}>
<button className={styles.signup}>SIGN UP</button>
</Link>
</div>


<div>
<p>  Download App</p>
  <img src="https://imgs.search.brave.com/LVnIYTcGOGeKqK66krYa_gyS8HKCD-HBSjtjKq77Ro4/rs:fit:1604:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/bzczOVhiT2JQNzNn/akdUZzBtckN3SGFD/TSZwaWQ9QXBp" alt="Google Play"/>
  <img src="https://imgs.search.brave.com/kkGnLqIIQZiTpmKh0Hj0yCcCBLlrXWzG3NK1Cy3S_VA/rs:fit:1152:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/QjJEU2s4SGZxbXNj/T2ZtUmpVaENnQUFB/QSZwaWQ9QXBp" alt='Apple Store'/>
</div>

</section>


    </footer>
  )
}
