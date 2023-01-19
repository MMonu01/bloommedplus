import { FeaturedBrands } from "../Components/Home/FeaturedBrands"
import { PersonalCare } from "../Components/Home/PersonalCare"
import {Homeopathy}  from "../Components/Home/Homeopathy"

export const Home = ()=>{

      return (
        <>  
        <h1> homepage </h1>
         <main>
            <FeaturedBrands/>
          
           <div style={{marginTop:"50px"}}> 
            <PersonalCare/>
           </div>

           <div style={{marginTop:"50px"}}> 
            <Homeopathy/>
           </div>
         
       </main>
        </>
     )  
}

export default Home