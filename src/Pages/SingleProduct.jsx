import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductDetails/ProductCard";
import { Link } from "react-router-dom";
import {Navbar} from '../Components/Navbar'
import { Footer } from "../Components/Footer";
import { GetSingleData } from "../Redux/SingleProduct/action";
import styles from '../Styles/SingleProduct.module.css'


const SingleProducts = () => {
  const { id } = useParams();
  

const {loader,product} = useSelector((store)=>{
  return {loader:store.singleProductReducer.isLoading,product:store.singleProductReducer.singleProductData}
}) 


const dispatch = useDispatch()
  useEffect(() => {
  
    dispatch(GetSingleData(id))
  
  }, [id]);



  return (<>
    <Navbar/>
    {
      loader === false?
      <div style={{marginTop:"-50px"}}>
      <ProductCard loader={loader}  product={product} />
    </div>
    : <div className={styles.loader}></div>
    }
    <Footer/>
  </>
  );
};

export default SingleProducts;
