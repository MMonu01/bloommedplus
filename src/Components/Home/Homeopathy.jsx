import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Home/Homeopathy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Homeopathy as GetData } from "./api";




export const Homeopathy = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    InGetData();
  }, []);


  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(() => res.data[7].homeopathy);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };



  
  const buttonPressRev = () => {
    let box = document.querySelector("#homeo1");
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };

  const buttonPressNext = () => {
    let box = document.querySelector("#homeo1");
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
        Homeopathy{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            className="one"
            id="homeo1"
            style={{ scrollBehavior: "smooth", background: "white" }}
          >
            {data.map((el) => (
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
    :null}
  </>
  );
};
