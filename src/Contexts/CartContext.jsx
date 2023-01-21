import React,{useState} from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { saveData,loadData } from '../Utils/accessLocalstorage'

export const CartContext = React.createContext()


let initialState = {
    id:"",
    name:"",
    username:"",
    email:"",
    mobile:"",
    password:"",
    cart:[]
  }
  


function  CartContextProvider({children}){ 

    const [userCart,setUserCart] = useState(loadData("Cart") || initialState)

const token = useSelector((store)=>store.authReducer.token)

// useEffect(()=>{
// let obj ={...userCart,...token}
//     saveData("Cart",obj)
// const data =  loadData("Cart")
// setUserCart(data)
// },[token])
// console.log(userCart,"this is token")


return(
    <CartContext.Provider value={{userCart,setUserCart}} >
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider