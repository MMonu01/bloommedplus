import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE} from './actionTypes'


const GetProductRequestAction  = ()=>{
return {type:GET_PRODUCT_REQUEST}
}


const GetProductSuccessAction = (payload)=>{
return {type:GET_PRODUCT_SUCCESS,payload}
}


const GetProductFailureAction = ()=>{
    return {type:GET_PRODUCT_FAILURE}
}


export const GetProductData = (dispatch)=>{
dispatch(GetProductRequestAction())

    // axios.get("https://bloodmedplus-server.onrender.com/products")
    axios({
        method:"get",
        baseURL:"https://bloodmedplus-server.onrender.com/products",
        
    })
    .then((res)=>{
    dispatch(GetProductSuccessAction(res.data))
    })
    .catch((err)=>{
        console.log(err)
       dispatch(GetProductFailureAction())
    })

}

