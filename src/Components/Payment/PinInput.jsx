import { useRef,useState } from "react"
import Pin from "./Pin"
import PropTypes from 'prop-types'


const PinInput = ({length,maxChar,HandleCardNumber})=>{

    const [inputLength] = useState(new Array(length).fill(null))

    
 const [otp,setOtp] = useState("")

    const inputRef = useRef([])

    const focusHandler = (e,index)=>{
        inputLength[index] = e.target.value
    if(e.target.value.length===maxChar && index<length-1){
        inputRef.current[index+1].focus()
    }
setOtp(()=>inputLength.join(""))
// HandleCardNumber(inputLength)
}


    const backSpaceHandler = (e,index)=>{
        inputLength[index] = e.target.value
if(index>0 && e.target.value.length==0){
    inputRef.current[index-1].focus()
}
setOtp(()=>inputLength.join(""))

// HandleCardNumber(inputLength)

    }


    const PasteHandler = (e)=>{
        let x = length*maxChar
       
let data = e.clipboardData.getData("Text").split("").splice(0,x)
let index = 0
for(let i=0; i<data.length; i++){
index = Math.floor(i/maxChar)


if(inputRef.current[index].value){

    inputRef.current[index].value += data[i]
}else{
    inputRef.current[index].value = data[i]

}

if(inputLength[index]){
    inputLength[index] += data[i]
}else{

    inputLength[index] = data[i]
}
    if(e.target.value.length===maxChar && index<length-1){
        inputRef.current[index+1].focus()
    }
    // HandleCardNumber(inputLength)

}



    }

    return(
        <>
        <div onPaste={PasteHandler}>
            {inputLength.map((el,index)=>{

                 return <Pin
                 key={index}
                 ref={(e)=>{inputRef.current[index] = e}}
                 maxChar={maxChar}
                 focusHandler={(e)=>focusHandler(e,index)}
                 backSpaceHandler = {(e)=>backSpaceHandler(e,index)}
                  />
                })}
            
        </div>
       
            </>
    )

}

export default PinInput



PinInput.propTypes = {
    length:PropTypes.number,
    maxChar:PropTypes.number.isRequired

}