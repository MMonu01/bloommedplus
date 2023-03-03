import styles from "../../Styles/Products/LeftSide.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus,faMinus,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { BrandData,ProductTagData,ProductFormData,UsesData,AgeData,GenderData,DiscountData } from "./FilterData"
import { HandleFilter } from "./FilterFunction"





const LeftSide = ({brand,setBrand,productTag,setProductTag,productForm,setProductForm,uses,setUses,age,setAge,gender,setGender,discount,setDiscount})=>{


   const HandleBrand = (e)=>{
HandleFilter(brand,setBrand,e)
   }

const ClearBrand = ()=>{
   if(brand.length>0){
      setBrand([])
   }
}

const HandleProductTag = (e)=>{
   HandleFilter(productTag,setProductTag,e)
      }
   
   const ClearProductTag = ()=>{
      if(productTag.length>0){
         setProductTag([])
      }
   }

   const HandleProductForm = (e)=>{
      HandleFilter(productForm,setProductForm,e)
         }
      
      const ClearProductForm = ()=>{
         if(productForm.length>0){
            setProductForm([])
         }
      }

      const HandleUses = (e)=>{
         HandleFilter(uses,setUses,e)
            }
         
         const ClearUses = ()=>{
            if(uses.length>0){
               setUses([])
            }
         }

         const HandleAge = (e)=>{
            HandleFilter(age,setAge,e)
               }
            
            const ClearAge = ()=>{
               if(age.length>0){
                  setAge([])
               }
            }


            const HandleGender = (e)=>{
               HandleFilter(gender,setGender,e)
                  }
               
               const ClearGender = ()=>{
                  if(gender.length>0){
                     setGender([])
                  }
               }

               const HandleDiscount = (e)=>{
setDiscount(e.target.value)
               }

               const ClearDiscount = ()=>{
                  if(discount){
                     setDiscount("")
                  }
               }
   

    return (
        <div className={styles.LeftSide_container} style={{paddingLeft:"0px",marginLeft:"0px"}}>

<div >
{/* <h2 className={styles.header} style={{padding:"0 10px"}}>CATEGORIES</h2>
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
</div> */}



<h2 className={styles.header} style={{padding:"10px"}}>FILTER</h2>
<hr/>


{/* ---------------Brands */}
<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>BRANDS</h2>
<FontAwesomeIcon className={styles.clear} onClick={ClearBrand} icon={faTrash}/>
</div>

<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Brands"/>
<div className={styles.head} style={{padding:"4px 10px"}}>

   {
      BrandData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleBrand} checked={brand.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }

</div>

<hr/>




{/* ---------------------------------------------------- */}
<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>PRODUCT TAGS</h2>
<FontAwesomeIcon className={styles.clear} onClick={ClearProductTag} icon={faTrash}/>
</div>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Product Tags"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>

{
      ProductTagData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleProductTag} checked={productTag.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }


</div>

<hr />



{/* ---------------------------------------- */}
<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>DISCOUNT</h2>
<FontAwesomeIcon onClick={ClearDiscount} className={styles.clear} icon={faTrash}/>
</div>
<div className={styles.head}  style={{padding:"4px 10px"}}>

{
DiscountData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleDiscount} checked={discount==el.name} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }


</div>

<hr/>




{/* --------------------------------- */}
<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>PRODUCT FORM</h2>
<FontAwesomeIcon className={styles.clear} onClick={ClearProductForm} icon={faTrash}/>
</div>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Product Form"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>


   
{
      ProductFormData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleProductForm} checked={productForm.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }


</div>

<hr />






{/* --------------------------------- */}

<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>USES</h2>
<FontAwesomeIcon className={styles.clear} onClick={ClearUses} icon={faTrash}/>
</div>
<input type="text" style={{margin:"0 10px 5px 10px"}} placeholder="Search Uses"/>
<div className={styles.head}  style={{padding:"4px 10px"}}>

   
{
      UsesData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleUses} checked={uses.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }


</div>

<hr />

{/* -------------------------------------- */}
<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>AGE</h2>
<FontAwesomeIcon onClick={ClearAge} className={styles.clear} icon={faTrash}/>
</div>
<div className={styles.head}  style={{padding:"4px 10px"}}>

   
{
      AgeData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleAge} checked={age.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }



</div>

<hr/>



<div className={styles.headContainer}>
<h2 className={styles.header} style={{padding:"0 10px"}}>GENDER</h2>
<FontAwesomeIcon onClick={ClearGender} className={styles.clear} icon={faTrash}/>
</div>
<div className={styles.head}  style={{padding:"4px 10px"}}>

   
{
      GenderData.map((el)=>{
         return <div key={el.name}>
         <div>
         <input value={el.name} onChange={HandleGender} checked={gender.includes(el.name)} type={el.type} />
         <span>{el.name}</span>
         </div>
         <span>{el.count}</span>
      </div>
      })
   }



</div>






</div>
        </div>
    )
}

export default LeftSide