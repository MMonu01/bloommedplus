import React, { useState } from "react";
import {
  Text,
  Box,
  Button,
  Stack,
  Select,
  Wrap,
  Flex,
  Radio,
  Image,
} from "@chakra-ui/react";
import styles from "../Styles/SingleProduct.module.css";
import { FaRegStar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
const ProductCard = ({ products }) => {
  const [value, setValue] = useState("1");
  return (
    <div key={products.id} className={styles.sp}>
      <div className={styles.container}>
        <p className={styles.head}>{`Home>${products.name}`}</p>
        <Flex className={styles.algn}>
          <div className={styles.imgDiv}>
            <img
              className={styles.pimg}
              src={products.image}
              alt={products.name}
            />
          </div>

          <div className={styles.info}>
            <h1>{products.name}</h1>
            <h5>{"Laboratory"}</h5>
            <div className={styles.review_rtng}>
              <Box className={styles.rtng}>
                <p className={styles.r}>{products.rating}</p>
                <FaRegStar className={styles.strIcn} />
              </Box>
              <Text
                className={styles.rtng_cnt_revw}
              >{`${products.rating_count} Ratings & ${products.reviews} Reviews`}</Text>
            </div>
            <h3 className={styles.ph}>{"Products Highlights"}</h3>
            <ul className={styles.list}>
              {products.product_highlight.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
          </div>
          <div>
            <Box className={styles.sideDiv}>
              <div className={styles.people}>
                <img src="https://www.1mg.com/images/social_cue.svg" />
                <Text>509 people bought this recently</Text>
              </div>

              <Form className={styles.mrp_prc_dscnt}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`}>
                    <Flex className={styles.flx}>
                      <Form.Check
                        type={type}
                        name={"radio"}
                        id={`default-${type}`}
                        label={`₹ ${products.price}`}
                        className={styles.chk1}
                        defaultChecked
                      />{" "}
                      <del className={styles.mrp1}> {`₹ ${products.mrp}`}</del>{" "}
                      <Text
                        className={styles.discnt}
                      >{`${products.discount}% off`}</Text>
                    </Flex>
                    <Flex className={styles.flx1}>
                      <Form.Check
                        type={type}
                        name={"radio"}
                        label={`₹ ${products.price}`}
                        id={`disabled-default-${type}`}
                        className={styles.chk2}
                      />
                      <div>
                        <div className={styles.corePlan}>
                          <Image src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" />
                          <Image height="20px" src="Images/i_icon.png" />
                        </div>
                        <p className={styles.free}>
                          + free shipping and 3% Extra NeuCoins With
                        </p>
                      </div>
                    </Flex>
                  </div>
                ))}
              </Form>
              <Text className={styles.incl}>Inclusive of all taxes</Text>
              <Flex className={styles.slct_txt}>
                <select placeholder="Select option" className={styles.slct}>
                  <option value="option1" className={styles.optn}>
                    1 Quantity
                  </option>
                  <option value="option2" className={styles.optn}>
                    2 Quantities
                  </option>
                  <option value="option3" className={styles.optn}>
                    3 Quantities
                  </option>
                  <option value="option3" className={styles.optn}>
                    4 Quantities
                  </option>
                </select>
                <Text>{`of ${products.stock} ${products.name}`}</Text>
              </Flex>
              <Button className={styles.addToCart}>Add To Cart</Button>
            </Box>
          </div>
        </Flex>
        <Box>
          <Text>
            Earliest delicery by <span>8pm, Today</span>
          </Text>
          <Text>Delivering To:Shibangi </Text>
        </Box>
        <img src="Images/health.jpg" />
        <Box>
          <img src="Images/Additional_offers.jpg" />
        </Box>
      </div>
      <h2>{`Information about ${products.name}`}</h2>
      <p>{products.description}</p>
      <h4>Key Ingredients:</h4>
      <ul>
        {products.key_ingredients.map((el, i) => {
          return <li>{el}</li>;
        })}
      </ul>
      <h4>Key Benefits:</h4>
      <ul>
        {products.key_benefits.map((el, i) => {
          return <li>{el}</li>;
        })}
      </ul>
      <h4>Safety Information:</h4>
      <ul>
        {products.safety_information.map((el, i) => {
          return <li>{el}</li>;
        })}
      </ul>

      <Box>
        <h1>Ratings & Reviews</h1>
        <h1>{products.rating}</h1>
        <BsStarFill />
        <Text>{`${products.rating_count} Ratings & ${products.reviews} Reviews`}</Text>
        <img src="Images/Ratings_Reviews.jpg" />
      </Box>
    </div>
  );
};

export default ProductCard;
