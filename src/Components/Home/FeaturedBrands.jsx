import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Home/Homeopathy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const GetData = () => {
  return axios({
    method: "get",
    baseURL: "https://bloodmedplus-server.onrender.com/Landing_page",
  });
};



export const FeaturedBrands = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    InGetData();
  }, []);



  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(() => res.data[0].featured_brands);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };


  let box = document.querySelector("#fbrands");

  const buttonPressRev = () => {
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };


  const buttonPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft += width;
  };



  return (
    <>
      {loading === false?
    <div className={styles.maxContainer}>
      <h3
       
          className={styles.head}
      >
        {" "}
        Featured Brands{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            // className="one"
            id="fbrands"
            style={{ scrollBehavior: "smooth", background: "white" }}
          >

              { data.map((el) => (
                <div key={el.id}>
                  <Link to="/products/skincare">

                <img src={el.image} alt={el.image} />
                  </Link>
                <p>{el.name}</p>
                  </div>
                ))
              }
          </div>
        </div>
        <div onClick={buttonPressNext}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>
      </div>
    </div>
              : null}
    </>
  );
};
