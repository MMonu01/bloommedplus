import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE} from './actionTypes'

const initialState ={
    ProductsData:[],
    isLoading:true,
    isError:false
}


export const reducer = (state=initialState,{type,payload})=>{

switch(type){
    case GET_PRODUCT_REQUEST: return {
        ...state,isLoading:true
    }
    case GET_PRODUCT_SUCCESS: return {
        ...state,isLoading:false, ProductsData:payload
    }
    case GET_PRODUCT_FAILURE: return {
        ...state,isLoading:false,isError:true
    }

    default: return state
}



}