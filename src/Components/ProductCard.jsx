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
const ProductCard = ({ product, loader }) => {
  const [value, setValue] = useState("1");

  return (
    <div key={product.id} className={styles.sp}>
      <div className={styles.container}>
        <p className={styles.head}>{`Home>${product.name}`}</p>
        <Flex className={styles.algn}>
          <div className={styles.imgDiv}>
            <img
              className={styles.pimg}
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className={styles.info}>
            <h1 style={{ backgroundColor: "#ffffff" }}>{product.name}</h1>
            <h5 style={{ backgroundColor: "#ffffff" }}>{"Laboratory"}</h5>
            <div className={styles.review_rtng}>
              <div className={styles.rev}>
                <p
                  style={{
                    backgroundColor: "#1aab2a",
                    color: "#ffffff",
                    marginLeft: "10%",
                  }}
                >
                  {product.rating}
                </p>
                <FaRegStar
                  style={{
                    backgroundColor: "#1aab2a",
                    color: "#ffffff",
                    height: "22px",
                  }}
                />
              </div>
              <Text
                className={styles.rtng_cnt_revw}
              >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
            </div>
            <h3 className={styles.ph}>{"Products Highlights"}</h3>
            <ul className={styles.lst}>
              {loader === false
                ? product.product_highlight.map((el, i) => {
                    return (
                      <li key={i} style={{ backgroundColor: "#ffffff" }}>
                        {el}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <Box className={styles.sideDiv}>
              <div className={styles.people}>
                <img src="https://www.1mg.com/images/social_cue.svg" />
                <Text>509 people bought this recently</Text>
              </div>

              <Form className={styles.mrp_prc_dscnt}>
                {["radio"].map((type) => (
                  <div
                    key={`default-${type}`}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <Flex className={styles.flx}>
                      <Form.Check
                        type={type}
                        name={"radio"}
                        id={`default-${type}`}
                        label={`₹ ${product.price}`}
                        className={styles.chk1}
                        defaultChecked
                      />{" "}
                      <del className={styles.mrp1}> {`₹ ${product.mrp}`}</del>{" "}
                      <Text
                        className={styles.discnt}
                      >{`${product.discount}% off`}</Text>
                    </Flex>
                    <Flex className={styles.flx1}>
                      <Form.Check
                        type={type}
                        name={"radio"}
                        label={`₹ ${product.price}`}
                        id={`disabled-default-${type}`}
                        className={styles.chk2}
                      />
                      <div style={{ backgroundColor: "#ffffff" }}>
                        <div className={styles.corePlan}>
                          <Image src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" />
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
                <Text
                  className={styles.stck}
                >{`of ${product.stock} ${product.name}`}</Text>
              </Flex>
              <Button className={styles.addToCart}>Add To Cart</Button>
            </Box>
            <Box className={styles.ear}>
              <Text className={styles.del}>
                Earliest delicery by{" "}
                <span className={styles.pm}>8pm, Today</span>
              </Text>
              <Text className={styles.delive}>
                Delivering To:{" "}
                <span className={styles.pin}>pin , location</span>{" "}
              </Text>
            </Box>

            <Box className={styles.img1}>
              <img
                src="../../Images/pedia.png"
                alt="med"
                className={styles.med}
              />
            </Box>

            <img
              src="../../Images/Additional_offers.jpg"
              alt="add"
              className={styles.additional_offers}
            />
          </div>
        </Flex>
      </div>
      <div className={styles.info_about}>
        <Flex gap="3%">
          <div className={styles.ki_kb_sf}>
            <h2
              className={styles.infabt}
            >{`Information about ${product.name}`}</h2>
            <p className={styles.descrip}>{product.description}</p>
            <h4 className={styles.ki}>Key Ingredients:</h4>
            <ul className={styles.ki_li}>
              {loader === false
                ? product.key_ingredients.map((el, i) => {
                    return <li style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>
            <h4 className={styles.kb}>Key Benefits:</h4>
            <ul className={styles.kb_li}>
              {loader === false
                ? product.key_benefits.map((el, i) => {
                    return <li style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>

            <h4 className={styles.sf}>Safety Information:</h4>
            <ul className={styles.sf_li}>
              {loader === false
                ? product.safety_information.map((el, i) => {
                    return <li style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>
            <div className={styles.rtngRev}>
              <Box backgroundColor="#ffffff">
                <h2 style={{ backgroundColor: "#ffffff" }}>
                  Ratings & Reviews
                </h2>
                <Flex gap="2%" backgroundColor="#ffffff" marginTop={"2%"}>
                  <h1 className={styles.prdrtnd}>{product.rating}</h1>
                  <img
                    src="../../Images/icons8-star-96.png"
                    backgroundColor="#1aab2a"
                    className={styles.icn}
                  />
                </Flex>
                <Text
                  backgroundColor="#ffffff"
                  marginTop={"2%"}
                >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
                <img
                  style={{
                    height: "150px",
                    marginTop: "2%",
                    backgroundColor: "#ffffff",
                    marginLeft: "-2%",
                  }}
                  src="../../Images/Ratings_Reviews.jpg"
                />
              </Box>
            </div>
          </div>
          <div>
            <div className={styles.lb}>
              <Box>
                <img
                  src="../../Images/book_lab_test.jpg"
                  alt="lab"
                  class={styles.labTest}
                />
              </Box>
            </div>
            <div>
              <img
                src="../../Images/doctor_consult.jpg"
                alt="doctor"
                class={styles.docCons}
              />
            </div>
            <div>
              <Box>
                <img src="../../Images/ags.jpg" alt="" class={styles.ags} />
              </Box>
              <Box>
                <img
                  src="../../Images/contentDetails.jpg"
                  alt=""
                  class={styles.cdt}
                />
              </Box>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default ProductCard;
