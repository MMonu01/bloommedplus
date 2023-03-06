import React, {useEffect,useState,useRef,useContext} from 'react'
import styles from "../Styles/Navbar.module.css"
import {useThrottle} from 'use-throttle'
import { SearchContext } from '../Contexts/SearchContext'
import { Text } from '@chakra-ui/react'
import { GetSingleData } from '../Redux/SingleProduct/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {

    const [input,setInput] = useState("")
    const [activeOption,setActiveOption] = useState(0)
    const scrollDiv = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

const {queryHandler,outcome,setOutcome,suggestions,dispatchOutcome} = useContext(SearchContext)



    const HandleInputChange = (e)=>{
        setInput(e.target.value)
    }

const HandleActiveSuggestions = (e)=>{

if(e.keyCode===13 && outcome !==""){
    let id;
    for(let i=0; i<suggestions.length; i++){
        if(outcome==suggestions[i].name){
            id = suggestions[i].id
            break;
        }
    }
    if(id){
        setInput("")
        setOutcome("")
        return navigate(`/products/skincare/${id}`)
    }
    else{

        dispatchOutcome()
    }
}

    switch(e.keyCode){
        case 38:
          
             if(activeOption <=suggestions.length -3){
scrollDiv.current.scrollTop -=30
            }

            if(activeOption>1 && activeOption<=suggestions.length){
                setOutcome(suggestions[activeOption-2].name)
                setActiveOption((prev)=>prev-1)
            }
            break;

    case 40:
       
         if(activeOption>=4 && activeOption <=suggestions.length-1){
            scrollDiv.current.scrollTop +=30
        }
        if(activeOption <= suggestions.length-1){

            setOutcome(suggestions[activeOption].name)
            setActiveOption((prev)=>prev+1)
        }


        break;

        default: return;
    }



}
const throttleText = useThrottle(input,1000)



useEffect(()=>{
queryHandler(throttleText)

setOutcome(throttleText)
},[throttleText])



const HandleItem = ()=>{
    let id = suggestions[activeOption-1].id
console.log(suggestions[activeOption-1])
setInput("")
setOutcome("")
return navigate(`/products/skincare/${id}`)
}

const HandleOutcome = (e)=>{
    if(e.keyCode===13){
        console.log(outcome)
    }
}

  return (
    <div  onKeyUp={HandleActiveSuggestions} >
        <div>
    <input type="text" className={styles.input}  placeholder="Search for Medicines and Health Products"  value={input} onChange={HandleInputChange}/>
        </div>

<div
className={styles.Box}
active = {activeOption}
ref={scrollDiv}

>
    {
        suggestions.map((item,index)=>{
            return (
                <Text fontSize="10px" noOfLines={[0,0,0,0,0]} key = {index} onClick={()=>HandleItem(item.name)} className={styles.item} 
                style={{background:activeOption == index+1?"whitesmoke":"white"}}
                onMouseOver={()=>setActiveOption(index+1)}>
                    {item.name}
                </Text>
            )
        })
    }

    </div>



    </div>
  )
}


