import  React,{ useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../../Styles/FeauturedBrands.module.css"

import { Box, Text, Image } from "@chakra-ui/react";

export const FeaturedBrands = () => {
      
    const [allbrands, setAllbrands] = React.useState([]);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7
    }
    React.useEffect(() => {
      const   getdata = async () => {
        let  res = await  fetch(`http://localhost:1010/Landing_page`)
        let data = await res.json();
        console.log("feat",data)
        setAllbrands(data[0].featured_brands)
     };
      getdata();
   }, []);
   


  return (
    <> 
       
       <div className={styles.featureb}>
          <div className={styles.fbtitle}> 
             <h2> Featured brands</h2>
          </div>
         <Slider {...settings}>
         {allbrands.map((elem) => (
         <Box key={elem.id}>
          <Box style={{ cursor: "pointer" ,scrollBehavior:"smooth",background:"transparent"} } className="one">
            <Image
              style={{ display: "flex", margin: "1px auto" }}
              src={elem.image}
            />
            <Text textAlign="center" py="1" px="1">
              {elem.name}
            </Text>
          </Box>
          </Box>
         ))}
         </Slider>
       
       </div>
         {/* ****feature brands completed*** */}



    </>
  )
}
