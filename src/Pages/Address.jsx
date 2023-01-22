import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../Styles/address.module.css";
import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { CartContext } from "../Contexts/CartContext";
import { saveData } from "../Utils/accessLocalstorage";

const initialState = {
  flat: "",
  landmark: "",
  pincode: "",
  locality: "",
  city: "",
  state: "",
  name: "",
  mobile: "",
  product_used: "",
};

function Address() {
  const [formData, setFormData] = useState(initialState);
  const { setLocationDetails } = useContext(CartContext);

  const HandleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(e.target.textContent,"this is radio")

  const HandleUse = (e) => {
    setFormData({ ...formData, product_used: e });
  };

  const SubmitData = () => {
    setLocationDetails(formData);
    saveData("locationDetails", formData);
    setFormData(initialState);
  };

  return (
    <>
      <Navbar />
      <div>
        <h3 className={styles.please}>Please Enter Your Detailed Location</h3>
        <div className={styles.head}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Flat number,Building name,Street/Locality"
                className={styles.flat}
                name="flat"
                value={formData.flat}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Landmark(optional)"
                className={styles.land}
                name="landmark"
                value={formData.landmark}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Pincode"
                className={styles.pin}
                name="pincode"
                value={formData.pincode}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Locality"
                className={styles.loc}
                name="locality"
                value={formData.locality}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="City"
                className={styles.city}
                name="city"
                vallue={formData.city}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="State"
                className={styles.state}
                name="state"
                value={formData.state}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Customer Name"
                className={styles.nm}
                name="name"
                value={formData.name}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="number"
                placeholder="10 Digit Mobile Number"
                className={styles.mob}
                name="mobile"
                value={formData.mobile}
                onChange={HandleFormData}
                autoFocus="true"
              />
            </Form.Group>
            <Flex className={styles.hoo}>
              <Form.Group
                onClick={() => HandleUse("Home")}
                className={styles.radioGroup}
                style={{ background: "#f6f6f6" }}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    style={{ background: "#f6f6f6" }}
                    className={styles.home}
                  />
                  <span> Home</span>
                </Form.Label>
              </Form.Group>

              <Form.Group
                onClick={() => HandleUse("Office")}
                className={styles.radioGroup}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    className={styles.office}
                  />
                  <span> Office</span>
                </Form.Label>
              </Form.Group>

              <Form.Group
                onClick={() => HandleUse("Other")}
                className={styles.radioGroup}
              >
                <Form.Label style={{ background: "#f6f6f6" }}>
                  <Form.Control
                    type="radio"
                    name="radio"
                    className={styles.other}
                  />
                  <span> Others</span>
                </Form.Label>
              </Form.Group>
            </Flex>
            <Box className={styles.can_sa}>
              <Button
                variant="primary"
                onClick={() => setFormData(initialState)}
                className={styles.cancel}
                style={{
                  padding: "5px 15px",
                  background: "white",
                  color: "red",
                }}
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                onClick={SubmitData}
                className={styles.save}
                style={{
                  padding: "5px 18px",
                  background: "red",
                  color: "white",
                }}
              >
                <Link
                  style={{
                    background: "red",
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/payment"
                >
                  Save
                </Link>
              </Button>
            </Box>
          </Form>
        </div>
        <div>
          <img src="../../Images/newbanner.jpg" className={styles.banner} />
        </div>
      </div>
    </>
  );
}

export default Address;
