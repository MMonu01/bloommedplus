import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import modalStyle from "../Styles/SignupModal/modal.module.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";

const Login = ({ showLogin, handleLoginShow, handleLoginClose }) => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  return (
    <Modal
      show={showLogin}
      onHide={handleLoginClose}
      className={modalStyle.mainMod}
    >
      <Flex>
        <div>
          <img
            className={modalStyle.pharmaLogin}
            alt=""
            src="../../Images/pharma.jpg"
          />
        </div>
        <div className={modalStyle.leftForm}>
          <Modal.Header className={modalStyle.cls}>
            <Modal.Title className={modalStyle.title}>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  className={modalStyle.mail}
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                />
              </Form.Group>

              <Button
                className={modalStyle.btn}
                variant={"ghost"}
                onClick={() =>
                  setShowLoginPassword(
                    (showLoginPassword) => !showLoginPassword
                  )
                }
              >
                {showLoginPassword ? (
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
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleLoginClose} className={modalStyle.create}>
              Create an account
            </Button>
          </Modal.Footer>
          <Flex gap="5%" alignItems={"center"} justify={"center"}>
            <Button onClick={handleLoginClose} className={modalStyle.close}>
              Close
            </Button>

            <Button onClick={handleLoginClose} className={modalStyle.login}>
              Signup
            </Button>
          </Flex>
        </div>
      </Flex>
    </Modal>
  );
};

export default Login;
