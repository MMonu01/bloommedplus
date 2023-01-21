
import React from "react"
import styles from '../Styles/Footer.module.css'

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



       <Box  m={"auto"} w={"98%"} mt={"30px"} >
      <Stack >
        <Box     background={"white"} >
        <Accordion
          margin={"auto"}
          maxW={"container.xl"}
          defaultIndex={[0]}
          allowMultiple
          pt="1px"
          background={"#fffcf8"}
        >
          <AccordionItem lineHeight="1.81"  p="25"  >
            <h4>
              <AccordionButton border='0px solid white'  box-shadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px" >
                <Box flex="1"  alignItems= "center" textAlign="left" 
                 fontWeight="bold"   p="4" 
                 fontSize="18px"  bg='transparent' border='none'>
                 Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h4>
            <AccordionPanel pb={4}>
            <br />
              <Text as="h6" fontWeight="bold"  fontSize="18px">
              We Bring Care to Health.
              </Text>
             
                <Text>
                  Tata 1mg is India's leading digital healthcare platform. From
                  doctor consultations on chat to online pharmacy and lab tests
                  at home: we have it all covered for you. Having delivered over
                  25 million orders in 1000+ cities till date, we are on a
                  mission to bring "care" to "health" to give you a flawless
                  healthcare experience.
                </Text>
             
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
                Order medicines online
              </Text>
             
                <Text>
                  Tata 1mg is India's leading online chemist with over 2 lakh
                  medicines available at the best prices. We are your one-stop
                  destination for other healthcare products as well, such as
                  over the counter pharmaceuticals, healthcare devices and
                  homeopathy and ayurveda medicines.
                </Text>
               
                <Text>
                  With Tata 1mg, you can buy medicines online and get them
                  delivered at your doorstep anywhere in India! But, is ordering
                  medicines online a difficult process? Not at all! Simply
                  search for the products you want to buy, add to cart and
                  checkout. Now all you need to do is sit back as we get your
                  order delivered to you.
                </Text>
                <br />
                <Text>
                  In case you need assistance, just give us a call and we will
                  help you complete your order.
                </Text>
                
                <Text>
                  Don't want to go through the hassle of adding each medicine
                  separately? You can simply upload your prescription and we
                  will place your order for you. And there is more! At Tata 1mg,
                  you can buy health products and medicines online at best
                  discounts.
                </Text>
             

                <Text>
                  Now, isn't that easy? Why go all the way to the medicine store
                  and wait in line, when you have Tata 1mg Pharmacy at your
                  service.
                </Text>
                <br />
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
              Book lab tests
              </Text>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Tata 1mg are procured from
              verified and licensed pharmacies.
            
            </AccordionPanel>
            <br />
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
              The Feathers in Our Cap

              </Text>
              
                <Text>
                  At Tata 1mg, our goal is to make healthcare understandable,
                  accessible and affordable in India. We set out on our journey
                  in 2015, and have come a long way since then. Along the way,
                  we have been conferred with prestigious titles like{" "}
                  <Heading as="span" fontSize={"1rem"}>
                    BML Munjal Award for 'Business Excellence through Learning
                    and Development', Best Online Pharmacy in India Award
                  </Heading>{" "}
                  and{" "}
                  <Heading as="span" fontSize={"1rem"}>
                    Top 50 venture in The Smart CEO-Startup50 India.
                  </Heading>{" "}
                  We have been selected as the only company from across the
                  globe for{" "}
                  <Heading as="span" fontSize={"1rem"}>
                    SD#3 "Health &amp; Well Being for all" by Unreasonable
                    group, US State Department.
                  </Heading>{" "}
                  In 2019 alone we received three awards including the{" "}
                  <Heading as="span" fontSize={"1rem"}>
                    BMW Simply Unstoppable Award.
                  </Heading>{" "}
                </Text>
                <br />
              
                <Text  as="h6" fontWeight="bold" fontSize="18px" >
                  The Services We Offer
                </Text>
              
                <Text>
                  Tata 1mg is India's leading digital healthcare platform, where
                  you can buy medicines online with discount. Buy medicine
                  online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon,
                  Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000
                  more cities. Besides delivering your online medicine order at
                  your doorstep, we provide accurate, authoritative &amp;
                  trustworthy information on medicines and help people use their
                  medicines effectively and safely.
                </Text>
                <br />
                <Text>
                  We also facilitate lab tests at home. You can avail over 2,000
                  tests and get tested by 120+ top and verified labs at the best
                  prices. Need to consult a doctor? On our platform, you can
                  talk to over 20 kinds of specialists in just a few clicks.
                </Text>
                <br />
                <Text>
                  Customer centricity is the core of our values. Our team of
                  highly trained and experienced doctors, phlebotomists and
                  pharmacists looks into each order to give you a fulfilling
                  experience.
                </Text>
               
                <Text>
                  We’ve made healthcare accessible to millions by giving them
                  quality care at affordable prices. Customer centricity is the
                  core of our values. Our team of highly trained and experienced
                  doctors, phlebotomists and pharmacists looks into each order
                  to give you a fulfilling experience.
                </Text>
              
                <Text>
                  Visit our online medical store now, and avail online medicine
                  purchase at a discount.
                  <br />
                  Stay Healthy!
                </Text>


            </AccordionPanel>


          </AccordionItem>
        </Accordion>
        </Box>
      </Stack>
    </Box>








      <Box border={"2px solid #e6e9f0"} w={"98%"}    m={"auto"}>
        <Container maxW="container.xl" pt={"10px"}  >
          <Stack>
            <Flex flexDirection={"column"} >
              <Center>
                <Text
                  as="h6"
                  fontSize={"20px"}
                  fontFamily="monospace"
                  fontWeight={{ base: "bold", sm: "bold", md: "light" }}
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
          <Box >
          <Center >
          <Flex alignItems="center" gap="1.5rem" padding="10px"   >
            <Box fontSize={"1.3rem"}>Get the link to download App</Box>
            <Input size="40" color="black" p="10px"
             borderRadius="5px"
               h="25px"  w="520" 
               bg='whitesmoke'
                border="1px solid white"  
              placeholder="Enter Phone number" 
              />
            <Box>
               <Text   borderRadius="5px"
                    fontSize="0.9rem"
                    margin="2px"
                    padding="10px"
                    color="white"
                    bg='tomato' border="none" >
                    Send Link
                  </Text>
            </Box>
            </Flex>
          </Center>

          </Box>

        
       
        </Container>
      </Box>
            
            {/* **************** */}

       <Flex   justifyContent={"space-around"}
             w={"98%"}  
             m={"auto"}
                textAlign="left"
                bg="rgb(202, 171, 171)"
                p={"2rem 0"}  > 
        <Box className={styles.knowbox} >
            <Text
              fontWeight={"500"}
              fontSize="1.125rem"
              bg="transparent"
              marginBottom={"0.5rem"}
            >
                   Know Us
            </Text>

            <p className={styles.knowbox}>
              About
            </p>
            <p   className={styles.knowbox}>
              Contact Us
            </p>
            <p  className={styles.knowbox}>
              {" "}
              Press Coverage
            </p>
            <p className={styles.knowbox} >
              Careers
            </p>
            <p  className={styles.knowbox}>
              Business Partnership
            </p>
            <p  className={styles.knowbox} >
              Become a Health Partner
            </p>
            <p  className={styles.knowbox}>
              Corporate Governance
            </p>
          </Box>

          <Box  className={styles.knowbox}>
            <Text className={styles.knowbox}
              fontWeight={"500"}
              fontSize="1.125rem"
              marginBottom={"0.5rem"}
            >
        Our Policies
            </Text>
            <p className={styles.knowbox}>
            Privacy Policy
            </p>
            <p className={styles.knowbox} >
            Terms and Conditions
            </p>
            <p className={styles.knowbox}>
              {" "}
              Editorial Policy
            </p>
            <p className={styles.knowbox}>
            Return Policy
            </p>
            <p className={styles.knowbox} >
            IP Policy
            </p>
            <p className={styles.knowbox} >
              Become a Health Partner
            </p>
            <p  className={styles.knowbox} >
            Grievance Redressal Policy
            </p>
            <p  className={styles.knowbox}>
            Fake Jobs and Fraud Disclaimer
            </p>
          </Box>

          <Box className={styles.knowbox}>
            <Text className={styles.knowbox}
              fontWeight={"500"}
              fontSize="1.125rem"
              marginBottom={"0.5rem"}
            >
          
           Our Services
            </Text>
          
            <p className={styles.knowbox}>
            Order Medicines
            </p>
            <p className={styles.knowbox} >
            Book Lab Tests
            </p>
            <p className={styles.knowbox}>
              {" "}
              Ayurveda Articles
            </p>
            <p href="#" className={styles.knowbox}>
            Hindi Articles
            </p>
            <p className={styles.knowbox}>
            Care Plan
            </p>
            
          </Box>

          <Box className={styles.knowbox}>
            <Text className={styles.knowbox}
              fontWeight={"500"}
              fontSize="1.125rem"
              marginBottom={"0.5rem"}
            >
              Connect
            </Text>
            <p href="#" className={styles.knowbox}>
              Social Links
            </p>
            <Box  bg='rgb(202, 171, 171)'   display={"flex"} margin="8px 0px 0px" gap={"8px"}>
               
                 <img bg='rgb(202, 171, 171)'     borderradius={"10px"} height={"25px"} width={"25px"}  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
                 <img height={"25px"} width={"25px"} src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"/>
                 <img  height={"25px"} width={"25px"} src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png"/>
                 <img height={"25px"} width={"25px"}  src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"/>
                
            </Box>
            <p className={styles.knowbox} >Want daily dose of health?</p>
                   <Button  fontWeight="200" 
                     borderRadius="5px"
                    fontSize="1.2rem"
                    margin="2px"
                    padding="10px"
                    color="white"
                    bg='tomato' border="none">
                       SIGN UP
                </Button>
          </Box>
           
              
          <Box className={styles.knowbox} >
            <Text className={styles.knowbox}
              fontWeight={"500"}
              fontSize="1.125rem"
              marginBottom={"0.5rem"}
            >
              {" "}
              Download App
            </Text>
            
             <Flex  className={styles.knowbox} flexDirection={"column"}  alignItems="center" gap="1.5rem"  >
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
          </Flex>

                    {/* ********end******* */}  
   
			<div className={styles.Rsadiv}>
				<div className={styles.reliable}>
					<div>
						<img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliabletitle}>Reliable</div>
						<div className={styles.reliablePara}>
							All products displayed on Tata 1mg are procured from
							verified and licensed pharmacies. All labs listed on
							the platform are accredited
						</div>
					</div>
				</div>
				<div className={styles.reliable}>
					<div>
						<img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571132500/reliable-rebrand_rcpof3.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliabletitle}>Secure</div>
						<div className={styles.reliablePara}>
							Tata 1mg uses Secure Sockets Layer (SSL) 128-bit
							encryption and is Payment Card Industry Data
							Security Standard (PCI DSS) compliant
						</div>
					</div>
				</div>
				<div className={styles.reliable}>
					<div>
						<img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg" alt="" />
					</div>
					<div>
						<div className={styles.reliabletitle}>Affordable</div>
						<div className={styles.reliablePara}>
							Find affordable medicine substitutes, save up to 50%
							on health products, up to 80% off on lab tests and
							free doctor consultations.
						</div>
					</div>
				</div>
			</div>
		     {/* ********end******* */}

         {/* ******************* */}
         <Box align={"center"} pt="1px" background={"#fffcf8"}>
          <Center flexDirection={"column"} gap={5}>
            <Image
              width="10%"
              src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
            />
            <Text fontWeight="bold">
              India's only LegitScript and ISO/ IEC 27001 certified online
              healthcare platform
            </Text>
          </Center>
        </Box>
            
        <Accordion
           w={"98%"}
          margin={"auto"}
          maxW={"container.xl"}
          defaultIndex={[0]}
          allowMultiple
          pt="1px"
          background={"#fffcf8"}
        >
          <AccordionItem lineHeight="1.81"  p="25"  >
            <h4>
              <AccordionButton border='0px solid white'  box-shadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px" >
                <Box flex="1"  alignItems= "center" textAlign="left" 
                 fontWeight="bold"   p="5" 
                 fontSize="18px"  bg='transparent' border='none'>
                  Know more about Tata 1mg
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h4>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold"  fontSize="18px">
                Access medical and health information
              </Text>
              Tata 1mg provides you with medical information which is curated,
              written and verified by experts, accurate and trustworthy. Our
              experts create high-quality content about medicines, diseases, lab
              investigations, Over-The-Counter (OTC) health products, Ayurvedic
              herbs/ingredients, and alternative remedies.
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
                Order medicines online
              </Text>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Tata 1mg are procured from
              verified and licensed pharmacies.
            </AccordionPanel>

            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
              Book lab tests
              </Text>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Tata 1mg are procured from
              verified and licensed pharmacies.
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold" fontSize="18px" >
              Consult a doctor online

              </Text>
              Got a health query? Consult doctors online from the 
              comfort of your home for free. Chat privately with our
               registered medical specialists to connect directly with verified doctors. Your privacy is guaranteed.


            </AccordionPanel>


          </AccordionItem>
        </Accordion>
               
        <Box maxW={"container.xl"} margin={"auto"} w={"98%"}>
          <Text
            as="h6"
            pt={"20px"}
            fontSize={"15px"}
            color="#536971"
            background={"#fffcf8"}
            textAlign="center"
          >
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
             
                      {/* ********end******* */}

       

       </div>

      </>
    )
}