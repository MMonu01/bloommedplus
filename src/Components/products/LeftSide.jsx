import styles from "../../Styles/Products/LeftSide.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


const LeftSide = ()=>{



    return (
        <div className={styles.LeftSide_container} style={{paddingLeft:"0px",marginLeft:"0px"}}>

<div >
<h2 className={styles.header} style={{padding:"0 10px"}}>CATEGORIES</h2>
<div style={{fontSize:"14px",padding:"0 10px"}} >PERSONAL CARE</div>

<div className={styles.category} style={{marginLeft:"15px",marginTop:"7px",padding:"0 10px"}}>

<div><span style={{color:'red'}}>Skin Care</span> <span><FontAwesomeIcon icon={faMinus}/></span></div>

<div className={styles.skin_care}>
<div>Body Lotions</div>
<div>Mosquito Redivellents</div>
<div>Lip Balm</div>
<div>Acne Care</div>
<div>Bath Essentials</div>
<div>Facewash</div>
<div>Sanitizers & Handwash</div>
<div>Sunscreen</div>
</div>

<div><span>Sexual Wellness</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Baby Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Hair Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Elderly Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Women Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Men Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Oral Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
<div><span>Pet Care</span> <span><FontAwesomeIcon icon={faPlus}/></span></div>
</div>



<h2 className={styles.header} style={{padding:"10px"}}>FILTER</h2>
<hr/>


{/* ---------------Brands */}
<h2 className={styles.header} style={{padding:"0 10px"}}>BRANDS</h2>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Brands"/>
<div className={styles.head} style={{padding:"4px 10px"}}>
<div>
   <div>
   <input type="checkbox" />
   <span>WOW Skin</span>
   </div>
   <span>422</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Maxisoft</span>
</div>
   <span>266</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Vaadi Herbals</span>
</div>
   <span>258</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Mirah Belle</span>
</div>
   <span>246</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Pearldew</span>
</div>
   <span>214</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>VLCC</span>
</div>
   <span>195</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Khadi Naturals</span>
</div>
   <span>180</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>St.Botanica</span>
</div>
   <span>177</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>inatur</span>
</div>
   <span>163</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Naturoman</span>
</div>
   <span>150</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Oshea Herbals</span>
</div>
   <span>133</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Organic Harvest</span>
</div>
   <span>130</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Vagad's Khadi</span>
</div>
   <span>130</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Khadi India</span>
</div>
   <span>126</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Aloe Veda</span>
</div>
   <span>123</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Deve Herbes</span>
</div>
   <span>120</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Nivea</span>
</div>
   <span>116</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Tjori</span>
</div>
   <span>111</span>
</div>

</div>

<hr/>





<h2 className={styles.header} style={{padding:"4px 10px"}}>PRODUCT TAGS</h2>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Product Tags"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
  <div>
  <input type="checkbox" />
   <span>Antioxidant</span>
  </div>
   <span>165</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Wrinkles</span>
</div>
   <span>138</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Pores</span>
</div>
   <span>135</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Pimple</span>
</div>
   <span>134</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Complexion</span>
</div>
   <span>120</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Blemishes</span>
</div>
   <span>107</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Impurity</span>
</div>
   <span>88</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Antibacterial</span>
</div>
   <span>87</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Paraben</span>
</div>
   <span>77</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Oily</span>
</div>
   <span>76</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Moisturizer</span>
</div>
   <span>70</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Cleanser</span>
</div>
   <span>67</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Dryness</span>
</div>
   <span>67</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Sunscreen</span>
</div>
   <span>67</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Greasy</span>
</div>
   <span>65</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Elasticity</span>
</div>
   <span>63</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Khadi</span>
</div>
   <span>62</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Eczema</span>
</div>
   <span>60</span>
</div>

</div>

<hr />



<h2 className={styles.header} style={{padding:"4px 10px"}}>DISCOUNT</h2>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
   <div>
   <input type="checkbox" />
   <span>Less than 10%</span>
   </div>
   <span>5159</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>10% and above</span>
</div>
   <span>7912</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>20% and above</span>
</div>
   <span>3513</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>30% and above</span>
</div>
   <span>1714</span>
</div>

</div>

<hr/>




{/* --------------------------------- */}

<h2 className={styles.header} style={{padding:"4px 10px"}}>PRODUCT FORM</h2>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Product Form"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
<div>
<input type="checkbox" />
   <span>Cream</span>
</div>
   <span>2273</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Soap</span>
</div>
   <span>2221</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Oil</span>
</div>
   <span>2138</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Face Wash</span>
</div>
   <span>1526</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Lotion</span>
</div>
   <span>1405</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Bottle</span>
</div>
   <span>964</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Gel</span>
</div>
   <span>847</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Serum</span>
</div>
   <span>771</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Pack</span>
</div>
   <span>671</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Scrub</span>
</div>
   <span>668</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Sanitizer</span>
</div>
   <span>661</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Liquid</span>
</div>
   <span>593</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Body Wash</span>
</div>
   <span>553</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Kit</span>
</div>
   <span>517</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Powder</span>
</div>
   <span>384</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Tube</span>
</div>
   <span>356</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Cleanser</span>
</div>
   <span>301</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Face Mask</span>
</div>
   <span>286</span>
</div>

</div>

<hr />






{/* --------------------------------- */}

<h2 className={styles.header} style={{padding:"4px 10px"}}>USES</h2>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Uses"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
   <div>
   <input type="checkbox" />
   <span>Skin Care</span>
   </div>
   <span>17260</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Hair Care</span>
</div>
   <span>1170</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Daily living aids</span>
</div>
   <span>990</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Baby Care</span>
</div>
   <span>609</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Mind Care</span>
</div>
   <span>524</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Men Care</span>
</div>
   <span>207</span>
</div>



<div>
<div>
<input type="checkbox" />
   <span>Bone, Joint</span>
</div>
   <span>166</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Women Care</span>
</div>
   <span>163</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Stomach Care</span>
</div>
   <span>159</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Cardiac Care</span>
</div>
   <span>103</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Cough & Cold</span>
</div>
   <span>83</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Immunity Booster</span>
</div>
   <span>68</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Disinfectants</span>
</div>
   <span>62</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Eye & Ear Care</span>
</div>
   <span>26</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Kidney Care</span>
</div>
   <span>20</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Mother Care</span>
</div>
   <span>20</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Sexual Wellness</span>
</div>
   <span>20</span>
</div>

<div>
<div>
<input type="checkbox" />
   <span>Liver Care</span>
</div>
   <span>19</span>
</div>

</div>

<hr />



<h2 className={styles.header} style={{padding:"4px 10px"}}>AGE</h2>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
  <div>
  <input type="checkbox" />
   <span>All</span>
  </div>
   <span>18031</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Child</span>
</div>
   <span>683</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Adult</span>
</div>
   <span>19</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Elderly</span>
</div>
   <span>10</span>
</div>

</div>

<hr/>




<h2 className={styles.header} style={{padding:"4px 10px"}}>GENDER</h2>
<div className={styles.head}  style={{padding:"4px 10px"}}>
<div>
 <div>
 <input type="checkbox" />
   <span>Unisex</span>
 </div>
   <span>18061</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Male</span>
</div>
   <span>428</span>
</div>


<div>
<div>
<input type="checkbox" />
   <span>Female</span>
</div>
   <span>212</span>
</div>



</div>






</div>
        </div>
    )
}

export default LeftSide