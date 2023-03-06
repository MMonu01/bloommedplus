import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Home/Homeopathy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Spinner } from '@chakra-ui/react'
import { PopularCategory as GetData } from "./api";





export const PopularCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    InGetData();
  }, []);


  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(() => res.data[1].popular_categories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };


  const buttonPressRev = () => {
    let box = document.querySelector(".oneworld");
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };


  const buttonPressNext = () => {
    let box = document.querySelector(".oneworld");

    let width = box.clientWidth;
    box.scrollLeft += width;
  };



  return (<>
      {loading === false?
            <div className={styles.maxContainer} > 
  
    
      <h3
       className={styles.head}
      >
        {" "}
        Popular categories{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            className="oneworld"
            id="h2"
            style={{ scrollBehavior: "smooth", background: "white" }}
          >
              { data.map((el, index) =>
             
                <div key={el.id}>
                      <Link to="/products/skincare">
                        <img src={el.image} alt={el.image} />
                      </Link>
                      <p>{el.name}</p>
                    </div>
                 
                  )
                }
          </div>
        </div>
        <div onClick={buttonPressNext}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>
      </div>
    </div>
                  
              : <div className={styles.loader}></div>}
                  </>
  );
};
