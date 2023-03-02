import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import {Navbar} from '../Components/Navbar'
import { Footer } from "../Components/Footer";
import { GetSingleData } from "../Redux/SingleProduct/action";


const SingleProducts = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({});
  // const [loader, setLoader] = useState(true);
  // fetch request
  // store

const {loader,product} = useSelector((store)=>{
  return {loader:store.singleProductReducer.isLoading,product:store.singleProductReducer.singleProductData}
}) 

const dispatch = useDispatch()
  // const navigate = useNavigate();
  useEffect(() => {
    // setLoader(true);
    dispatch(GetSingleData(id))
    // axios
    //   .get(`https://bloodmedplus-server.onrender.com/products/${id}`)
    //   .then(({ data }) => {
    //     setProduct(data);
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     setLoader(false);
    //     console.log(err);
    //   });
  }, [id]);

  return (<>
    <Navbar/>
    <div style={{marginTop:"-50px"}}>
      <ProductCard loader={loader}  product={product} />
    </div>
    <Footer/>
  </>
  );
};

export default SingleProducts;
