import { Button,RadioGroup,Stack,Radio,DrawerOverlay,Drawer,DrawerHeader,DrawerBody,DrawerContent,DrawerCloseButton,useDisclosure,VStack,StackDivider,Box } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faLocationDot,faLocationCrosshairs,faMagnifyingGlass,faChevronDown,faBars,faCapsules,faBottleDroplet,faFlask,faStethoscope,faHandHoldingMedical,faHandHoldingDroplet,faPlateWheat,faFileInvoice,faGear,faDisease, faPills,faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'
import styles from '../Styles/Sidebar.module.css'
import { faFile } from '@fortawesome/free-regular-svg-icons'


const Sidebar = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        <RadioGroup defaultValue={placement}  onChange={setPlacement}>
          {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
        </RadioGroup>
        {/* <Button colorScheme='blue' onClick={onOpen}> */}
        <div onClick={onOpen} style={{background:"white"}}>
        <FontAwesomeIcon className={styles.menu} icon={faBars}/>
        </div>
     
        <Drawer placement={placement} onClose={onClose}  isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent style={{marginLeft:"20px"}}>
          <div className={styles.close}>
                <img src='../../Images/bloommedplus.png' alt='logo'/>
          <DrawerCloseButton style={{border:"none",cursor:"pointer"}} />
            </div>
            
          
            <DrawerHeader borderBottomWidth='1px'>Hi, there!</DrawerHeader>
            <DrawerBody>
              
              <div className={styles.box}>

       <div className={styles.container}>
              <div>
              <span>Login</span> | <span>Signup</span>
              </div>
<hr style={{marginTop:"10px"}} />

<tbody className={styles.tbody}>
    <tr><td><FontAwesomeIcon icon={faCapsules}/></td><td>   <span>Buy medicines</span></td></tr>
    <tr><td><FontAwesomeIcon icon={faBottleDroplet}/></td><td> <span>Buy health products</span></td></tr>
    <tr><td> <FontAwesomeIcon icon={faFlask}/></td><td> <span>Book lab tests</span></td></tr>
    <tr><td><FontAwesomeIcon icon={faStethoscope}/></td><td> <span>Consult a doctor</span></td></tr>
    <tr><td><FontAwesomeIcon icon={faHandHoldingMedical}/></td><td> <span>bloommedplus Care Plan</span></td></tr>
</tbody>





<hr style={{marginTop:"10px"}} />

<tbody className={styles.tbody}>
<tr><td><FontAwesomeIcon icon={faHandHoldingDroplet}/></td><td> <span>Covid support</span></td></tr>
<tr><td>  <FontAwesomeIcon icon={faPlateWheat}/></td><td> <span>Ayurveda</span></td></tr>
<tr><td><FontAwesomeIcon icon={faFileInvoice}/></td><td><span>Hindi articles</span></td></tr>
<tr><td>  <FontAwesomeIcon icon={faGear}/></td><td>   <span>Offers</span></td></tr>
<tr><td> <FontAwesomeIcon icon={faDisease}/></td><td> <span>All diseases</span></td></tr>
<tr><td> <FontAwesomeIcon icon={faPills}/></td><td> <span>All medicines</span></td></tr>
<tr><td><FontAwesomeIcon icon={faPrescriptionBottle}/></td><td> <span>All diseases</span></td></tr>
</tbody>
</div>


{/* <div style={{background:"red",height:"100%"}}> */}

{/* </div> */}



        </div>       
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Sidebar