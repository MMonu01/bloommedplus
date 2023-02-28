import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Homeopathy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const GetData = () => {
  return axios({
    method: "get",
    baseURL: "https://bloodmedplus-server.onrender.com/Landing_page",
  });
};
export const PersonalCare = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    InGetData();
  }, []);
  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(() => res.data[4].Personal_care);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  let box = document.querySelector("#c2");
  const buttonPressRev = () => {
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };
  const buttonPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft += width;
  };
  return (
    <div>
      <h3
      className={styles.head}
      >
        {" "}
        Personal care{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            className="one"
            id="c2"
            style={{ scrollBehavior: "smooth", background: "white" }}
          >
            {loading === false
              ? data.map((el) => (
                  <div key={el.id}>
                    <img src={el.image} alt={el.image} />
                    <p>{el.name}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div onClick={buttonPressNext}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};
