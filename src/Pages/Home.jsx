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
             <PopularCategories/>
           <TrendingNow/>
           
           <Breakfast/>
           
    
           <FeaturedBrands/>
       
           <PopularCombo/>
     
            <PersonalCare/>
           
           <Biotin/>
          
             <Homeopathy/>

       </main>
             <Footer/>
               
        </>
     )  
}

export default Home