import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

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
      .get(`http://localhost:1010/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <ProductCard loader={loader}  product={product} />
    </div>
  );
};

export default SingleProducts;
