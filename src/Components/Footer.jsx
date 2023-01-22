import React from "react";
import styles from "../Styles/Footer.module.css";

import {
  Box,
  Input,
  Center,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Button,
  FormControl,
  Heading,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Grid,
} from "@chakra-ui/react";

export const Footer = () => {
  const Data = [
    {
      img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg",
      desc: "All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited",
      title: "Reliable",
    },
    {
      img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571132500/reliable-rebrand_rcpof3.svg",
      desc: "Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant",
      title: "Secure",
    },
    {
      img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg",
      desc: "Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.",
      title: "Affordable",
    },
  ];

  return (
    <>
      <div>
        <Box border={"2px solid #e6e9f0"}>
          <Container maxW="container.xl" pt={"10px"}>
            <Stack>
              <Flex flexDirection={"column"}>
                <Center>
                  <Text
                    as="h6"
                    fontFamily="Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
                    fontWeight={{ base: "bold", sm: "bold", md: "light" }}
                    color={"#1a1a1a"}
                    fontSize={"24px"}
                    marginTop={"3%"}
                    marginRight={"10px"}
                    marginLeft={"10px"}
                    
                    className={styles.ind}
                  >
                    INDIAS LARGEST HEALTHCARE PLATFORM
                  </Text>
                </Center>

                <Flex
                  justifyContent={"space-around"}
                  textAlign="center"
                  p={"2rem 0"}
                >
                  <Box fontWeight="bold" fontSize="1.7rem">
                    260m+
                    <br />
                    <Text fontWeight="400" fontSize="1.2rem">
                      Visitors
                    </Text>
                  </Box>
                  <Box fontWeight="bold" fontSize="1.7rem">
                    31m+
                    <br />
                    <Text fontWeight="400" fontSize="1.2rem">
                      Orders Delivered
                    </Text>
                  </Box>
                  <Box fontWeight="bold" fontSize="1.7rem">
                    1800+
                    <br />
                    <Text fontWeight="400" fontSize="1.2rem">
                      Cities
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Stack>
            <Box>
              <Center>
                <Grid
                  alignItems="center"
                  gap="1.5rem"
                  padding="10px"
                  className={styles.box2}
                >
                  <Box fontSize={"1.3rem"} className={styles.box1}>
                    Get the link to download App
                  </Box>
                  <Input
                    size="40"
                    p="10px"
                    borderRadius="5px"
                    h="25px"
                    w="300px"
                    bg="whitesmoke"
                    border="1px solid white"
                    placeholder="Enter Phone number"
                    fontSize={"14px"}
                    className={styles.phn}
                  />
                  <Box>
                    <Text
                      borderRadius="5px"
                      fontSize="0.9rem"
                      color="white"
                      border="none"
                      backgroundColor={"#ff6f61"}
                      w={"100px"}
                      textAlign={"center"}
                      h={"30px"}
                      paddingTop={"5px"}
                      className={styles.snd}
                    >
                      Send Link
                    </Text>
                  </Box>
                </Grid>
              </Center>
            </Box>
          </Container>
        </Box>

        {/* **************** */}
        <div className={styles.box4}>
          <Grid textAlign="left" p={"2rem 0"} className={styles.box3}>
            <Box className={styles.knowbox}>
              <Text fontWeight={"500"} fontSize="1rem" marginBottom={"0.5rem"}>
                Know Us
              </Text>

              <p className={styles.knowbox}>About</p>
              <p>Contact Us</p>
              <p> Press Coverage</p>
              <p href="#">Careers</p>
              <p>Business Partnership</p>
              <p>Become a Health Partner</p>
              <p>Corporate Governance</p>
            </Box>

            <Box className="each-box-footer">
              <Text fontWeight={"500"} fontSize="1rem" marginBottom={"0.5rem"}>
                Our Policies
              </Text>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p> Editorial Policy</p>
              <p href="#">Return Policy</p>
              <p>IP Policy</p>
              <p>Become a Health Partner</p>
              <p>Grievance Redressal Policy</p>
              <p>Fake Jobs and Fraud Disclaimer</p>
            </Box>

            <Box className="each-box-footer">
              <Text fontWeight={"500"} fontSize="1rem" marginBottom={"0.5rem"}>
                Our Services
              </Text>
              <p>Order Medicines</p>
              <p>Book Lab Tests</p>
              <p> Ayurveda Articles</p>
              <p href="#">Hindi Articles</p>
              <p>Care Plan</p>
            </Box>

            <Box className="each-box-footer">
              <Text fontWeight={"500"} fontSize="1rem" marginBottom={"0.5rem"}>
                Connect
              </Text>
              <p href="#">Social Links</p>
              <Box display={"flex"} margin="8px 0px 0px" gap={"8px"}>
                <img
                  height={"25px"}
                  width={"25px"}
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                />
                <img
                  height={"25px"}
                  width={"25px"}
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                />
                <img
                  height={"25px"}
                  width={"25px"}
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png"
                />
                <img
                  height={"25px"}
                  width={"25px"}
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
                />
              </Box>
            </Box>

            <Box className={styles.dow}>
              <Text
                fontWeight={"500"}
                fontSize="1rem"
                marginBottom={"0.5rem"}
                marginLeft={"30%"}
                className={styles.datxt}
              >
                {" "}
                Download App
              </Text>

              <Flex flexDirection={"column"} alignItems="center" gap="1.5rem">
                <Image
                  src="	https://tata1mg-clone-nem201.vercel.app/static/media/playStore.e90b791f32fd288d86619c5edfde0096.svg"
                  w={"120px"}
                />
                <Image
                  src="	https://tata1mg-clone-nem201.vercel.app/static/media/appleStore.aed5594bfaeebd7e873d6c126b8588f7.svg"
                  w={"120px"}
                ></Image>
              </Flex>
            </Box>
          </Grid>
        </div>
        <div>
          <Container
            as={Stack}
            maxW={"container.xl"}
            borderY="1px solid #D3D3D3"
            background={"#fffcf8"}
            className={styles.container}
          >
            <Flex
              // columns={{ base: 1, sm: 2, md: 3 }}
              // textAlign="left"
              justifyContent={"space-around"}
              textAlign="center"
              maxW={"2xl"}
              spacing={95}
              className={styles.footerStampWrapper}
            >
              <div className={styles.secura}>

              {Data.map((el) => (
                <Box className={styles.footerStamp}>
                  <Image src={el.img} />
                  <Box>
                    <Text fontSize={"26px"} fontWeight="bold">
                      {el.title}
                    </Text>
                    <Text
                      style={{ height: "25px", marginBottom: "0px" }}
                      lineHeight="1.81"
                      fontSize="10px"
                      color="#767676"
                      >
                      {el.desc}
                    </Text>
                  </Box>
                </Box>
              ))}
              </div>
            </Flex>
          </Container>
        </div>
        <Box align={"center"} pt="1px" background={"#fffcf8"}>
          <Center flexDirection={"column"} gap={5}>
            <Image
              className={styles.img1}
              height={"80px"}
              marginTop={"20px"}
              paddingBottom={"20px"}
              src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
            />
            <Text fontWeight="bold">
              India's only LegitScript and ISO/ IEC 27001 certified online
              healthcare platform
            </Text>
          </Center>
        </Box>

        <Accordion
          margin={"auto"}
          maxW={"container.xl"}
          defaultIndex={[0]}
          allowMultiple
          pt="1px"
          background={"#fffcf8"}
        >
          <AccordionItem lineHeight="1.81" p="25">
            <h4>
              <AccordionButton
                border="0px solid white"
                box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              >
                <Box
                  flex="1"
                  alignItems="center"
                  textAlign="left"
                  fontWeight="bold"
                  p="5"
                  fontSize="18px"
                  bg="transparent"
                  border="none"
                >
                  Know more about Bloommedplus
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h4>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px">
                Access medical and health information
              </Text>
            <span style={{fontSize:"14px"}}>
            Bloommedplus provides you with medical information which is curated,
              written and verified by experts, accurate and trustworthy. Our
              experts create high-quality content about medicines, diseases, lab
              investigations, Over-The-Counter (OTC) health products, Ayurvedic
              herbs/ingredients, and alternative remedies.
            </span>
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px">
                Order medicines online
              </Text>
              <span style={{fontSize:"14px"}}>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Bloommedplus are procured from
              verified and licensed pharmacies.
              </span>
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px">
                Book lab tests
              </Text>
              <span  style={{fontSize:"14px"}}>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Bloommedplus are procured from
              verified and licensed pharmacies.
              </span>
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px">
                Consult a doctor online
              </Text>
              <span  style={{fontSize:"14px"}}>
              Got a health query? Consult doctors online from the comfort of
              your home for free. Chat privately with our registered medical
              specialists to connect directly with verified doctors. Your
              privacy is guaranteed.
              </span>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box maxW={"container.xl"} margin={"auto"}>
          <Text
            as="h6"
            pt={"20px"}
            // fontSize={"15px"}
            // color="#536971"
            // background={"#fffcf8"}
            // textAlign="center"
            className={styles.copy}
          >
            © 2022 Bloommedplus. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
      </div>
    </>
  );
};
