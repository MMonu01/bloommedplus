import { FeaturedBrands } from "../Components/Home/FeaturedBrands"
import { PersonalCare } from "../Components/Home/PersonalCare"
import {Homeopathy}  from "../Components/Home/Homeopathy"
import { PopularCategories } from "../Components/Home/PopularCategory"
import { PopularCombo } from "../Components/Home/PopularCombo"
import { Biotin } from "../Components/Home/Biotin"
import { TrendingNow } from "../Components/Home/TrendingNow"
import { Breakfast } from "../Components/Home/Breakfast" 
import { Banners } from "../Components/Home/Banners"
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer"
export const Home = ()=>{

      return (
        <>  
         <Navbar/>
           {/* <h1>Homepage</h1> */}
         <main>
           <div > 
            <Banners/>
           </div>
            <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
             <PopularCategories/>
           </div>
          <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
           <TrendingNow/>
           </div>
            <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
           <Breakfast/>
           </div>
              <div style={{margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
           <FeaturedBrands/>
           </div>
            <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"50px"}}> 
           <PopularCombo/>
           </div>
           <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
            <PersonalCare/>
           </div>
           
           <div style={{ margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"20px"}}> 
           <Biotin/>
           </div>
          
            <div style={{margin:"auto",marginLeft:"1.5%",marginRight:'1.5%',marginTop:"10px"}}> 
             <Homeopathy/>
           </div> 

       </main>
             <Footer/>
               
        </>
     )  
}

export default Home