import React from 'react'
import { useState } from "react";
import { Box, Image,Flex,Center,
   Link, Square,Spacer,
   Text } from "@chakra-ui/react";
import styles from '../../Styles/Banners.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Banners = () => {

  const sliderImg = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/0c3f2c0a-b7e5-449a-a59d-331faa3155c9.png",
      id: 1,
    },
    {
      img: "https://onemg.gumlet.io/5575ef45-e3e4-4bc6-88a9-df679558e902_1665495032.png?w=899&h=200&format=auto",
      id: 2,
    },
  
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/56f2453e-1eac-4319-8d0d-9f906d603513.png",
      id: 3,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/1f77f908-41e9-4411-8ea0-74da45d70bd1.png",
      id: 4,
    },
    {
      img: "https://onemg.gumlet.io/8d525ed6-ca7c-40da-9e9f-d357590df189_1673936156.png?w=899&h=200&format=auto",
      id: 5,
    },
    
  ];

  const [bimagess, setImages] = useState(sliderImg);

  return (
    <div className={styles.container}> 
    <div className={styles.box}>
      <div>
      <img src={"https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/0c3f2c0a-b7e5-449a-a59d-331faa3155c9.png"} alt="Banner"/>
</div>
<div>
      <img height="200px" src ="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/85bbe9a7-230b-4836-bff3-d5f451b426a7.png" />

      </div>
      </div>
<div className={styles.text}>
Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
  </div>

      <div>
      <img  src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt='Banner'/>
   </div>
     </div>
  )
}

