import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../Styles/address.module.css";
import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";


function Address() {
  return (
    <>
    <Navbar/>
    <div>
    
      <h3 className={styles.please}>Please Enter Your Detailed Location</h3>
      <div className={styles.head}>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Flat number,Building name,Street/Locality"
              className={styles.flat}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Landmark(optional)"
              className={styles.land}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Pincode"
              className={styles.pin}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Locality"
              className={styles.loc}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="City"
              className={styles.city}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="State"
              className={styles.state}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Customer Name"
              className={styles.nm}
              autoFocus="true"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="10 Digit Mobile Number"
              className={styles.mob}
              autoFocus="true"
            />
          </Form.Group>
          <Flex className={styles.hoo}>
            <Form.Group>
              <Form.Control type="radio" className={styles.home} />
              <Form.Label>Home</Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Control type="radio" className={styles.office} />
              <Form.Label>Office</Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Control type="radio" className={styles.other} />
              <Form.Label>Other</Form.Label>
            </Form.Group>
          </Flex>
          <Box className={styles.can_sa}>
            <Button
              variant="primary"
              type="submit"
              className={styles.cancel}
        
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className={styles.save}
          
            >
              Save
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
