import React from 'react'
import { useState } from "react";
import { Box, Image,Flex,Center,
   Link, Square,Spacer,
   Text } from "@chakra-ui/react";
import styles from '../../Styles/Home/Banners.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Banners = () => {


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

