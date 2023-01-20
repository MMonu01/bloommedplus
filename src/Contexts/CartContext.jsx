import React,{useState} from 'react'

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
    const [userCart,setUserCart] = useState(initialState)
console.log(userCart)

return(
    <CartContext.Provider value={{userCart,setUserCart}} >
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider