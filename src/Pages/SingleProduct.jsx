import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import  ProductCard  from "../Components/ProductCard";

const initialState= {
  "id": "sc1",
  "adminId": "mdmonu",
  "image": "https://onemg.gumlet.io/images/w_150,c_fit,q_auto,h_150,f_auto/963edfc93b2f4f319f6f6d08df1cece8/tetmosol-medicated-soap.jpg",
  "name": "Tetmosol Medicated Soap",
  "stock": 40,
  "packs":"packet of 100 gm Soap",
  "mrp":92,
  "price": 80,
  "discount": 13,
  "total_price": null,
  "status": null,
  "rating_count":1107,
  "reviews":219,
  "rating": "4.3",
  "description": "Tetmosol Medicated Soap is a Grade 1 medicated soap that helps cleanse the skin and relieves skin problems like itching, irritation, rashes and redness. It has a mild fragrance and can be used daily for adults and children.",
  "key_ingredients":["Sodium tallowate","Sodium Cocoate","Water (Aqua)","Glycerin"],
  "key_benefits":[
    "Provides effective relief against itching and rashes",
    "Provides relief against infections caused by parasites",
    "Relieves sores and crusting of the skin",
    "Helps fight skin infections and diseases"
  ],
  "safety_information":[
    "Read the label carefully before use",
    "Keep out of the reach of children",
    "https://us06web.zoom.us/j/85817378497"
  ],
  "product_highlight":[
      "Helps relieve skin infections",
      "Protects the skin from irritation",
      "Relieves itching and rashes",
      "Keeps the skin clean and healthy"
  ]
} 


 const SingleProducts = () => {
  const { id } = useParams();
  // const products = useSelector((store) => store.productReducer.products);
  const [products, setProduct] = useState(initialState);

  // fetch request
  // store
console.log(products)
  useEffect(() => {
   // let productData = products.find((el) => el.id === +id);
   // productData && setProduct(productData);
  
  }, []);

  return (
    <div>
      <h1>Single Product {id}</h1>
      <ProductCard products={products} />
    </div>
  );
};

export default SingleProducts;