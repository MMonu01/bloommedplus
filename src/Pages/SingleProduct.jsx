import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import {Navbar} from '../Components/Navbar'
import { Footer } from "../Components/Footer";

const SingleProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  // fetch request
  // store

  // const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://bloodmedplus-server.onrender.com/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
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
