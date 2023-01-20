import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../Styles/address.module.css";
import { Flex } from "@chakra-ui/react";
function Address() {
  return (
    <>
      <div className={styles.head}>
        <h3>Please Enter Your Detailed Location</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Add new address" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="landmark" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="enter pin code" />
          </Form.Group>
          <Flex>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="radio" placeholder="enter pin code" />
              <Form.Label>Home</Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="radio" placeholder="enter pin code" />
              <Form.Label>Office</Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="radio" placeholder="enter pin code" />
              <Form.Label>Other</Form.Label>
            </Form.Group>
          </Flex>
          <Button variant="primary" type="submit">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
      <div>
        <img src="../../Images/newbanner.jpg" className={styles.banner} />
      </div>
    </>
  );
}

export default Address;
