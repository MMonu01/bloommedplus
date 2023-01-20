import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import modalStyle from "../Styles/SignupModal/modal.module.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";

const Signup = ({ show, handleShow, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Modal show={show} onHide={handleClose} className={modalStyle.mainMod}>
      <Flex>
        <div>
          <img
            className={modalStyle.pharma}
            alt=""
            src="../../Images/pharma.jpg"
          />
        </div>
        <div className={modalStyle.leftForm}>
          <Modal.Header className={modalStyle.cls}>
            <Modal.Title className={modalStyle.title}>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  className={modalStyle.nm}
                  type="text"
                  placeholder="Enter your full name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.unique}
                  type="text"
                  placeholder="Create a unique user name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.mail}
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={modalStyle.mob}
                  type="tel"
                  placeholder="Enter your mobile number"
                  autoFocus
                />
              </Form.Group>
              <Button
                className={modalStyle.btn}
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <ViewIcon
                    backgroundColor={"#ffffff"}
                    color={"rgb(81, 75, 75);"}
                  />
                ) : (
                  <ViewOffIcon
                    backgroundColor={"#ffffff"}
                    color={"rgb(81, 75, 75);"}
                  />
                )}
              </Button>
              <Form.Group>
                <Form.Control
                  className={modalStyle.pwd}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} className={modalStyle.create}>
              Create an account
            </Button>
          </Modal.Footer>
          <Flex gap="5%" alignItems={"center"} justify={"center"}>
            <Button onClick={handleClose} className={modalStyle.close}>
              Close
            </Button>
            <Button className={modalStyle.login}>Login</Button>
          </Flex>
        </div>
      </Flex>
    </Modal>
  );
};

export default Signup;
