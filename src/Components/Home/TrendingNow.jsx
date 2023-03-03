import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Home/PopularCombo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { background } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const GetData = () => {
  return axios({
    method: "get",
    baseURL: "https://bloodmedplus-server.onrender.com/Landing_page",
  });
};



export const TrendingNow = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    InGetData();
  }, []);


  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(() => res.data[5].Trending_now);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };



  
  const buttonPressRev = () => {
    let box = document.querySelector("#bio1");
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };

  const buttonPressNext = () => {
    let box = document.querySelector("#bio1");
    let width = box.clientWidth;
    box.scrollLeft += width;
  };




  return (<>
    {loading === false?
      <div className={styles.maxContainer} > 
      <h3
       className={styles.head}
      >
        Trending now{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            id="bio1" 
            style={{ scrollBehavior: "smooth", background: "white" }}
          >
            { data.map((el) => (
                  <div
                    key={el.id}
                    style={{
                      // height: "270px",
                      fontSize: "14px",
                      padding: "10px",
                      background: "white",
                    }}
                  >
                        <Link to="/products/skincare">

                    <img
                      src={el.image}
                      alt={el.image}
                      height="150px"
                      // width="150px"
                      />
                      </Link>
                    <div>
                      <p
                        style={{
                          height: "20px",
                          overflow: "hidden",
                          marginBottom: "0px",
                        }}
                      >
                        {el.name}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        {" "}
                        &#10534;{` ${el.packs}`}
                      </p>
                      <div style={{ display: "flex", gap: "2px" }}>
                        <div style={{ display: "flex", gap: "2px" }}>
                          <span>MRP ₹ </span>
                          <span
                            style={{ textDecoration: "line-through" }}
                            >{`${el.mrp}`}</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "3px",
                            color: "green",
                          }}
                          >
                          <span style={{}}>{`${el.discount}`}</span>
                          <span>off</span>
                        </div>
                      </div>
                      <h4
                        style={{ "text-align": "start" }}
                        >{` ₹ ${el.price}`}</h4>
                    </div>
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
    :null}
  </>
  );
};
