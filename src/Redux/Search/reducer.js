import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE,GET_PRODUCT_TOTAL_SUCCESS,GET_PRODUCT_TOTAL_REQUEST,GET_PRODUCT_TOTAL_FAILURE,GET_SEARCH_PRODUCT_REQUEST,GET_SEARCH_PRODUCT_SUCCESS,GET_SEARCH_PRODUCT_FAILURE} from './actionTypes'


const initialState ={
 
    ProductsData:[],
    isLoading:true,
    isError:false,
   
}


export const reducer = (state=initialState,{type,payload})=>{

switch(type){
   
    case GET_SEARCH_PRODUCT_REQUEST: return {
        ...state,isLoading:true
    }
    case GET_SEARCH_PRODUCT_SUCCESS: return {
        ...state,isLoading:false, ProductsData:payload
    }
    case GET_SEARCH_PRODUCT_FAILURE: return {
        ...state,isLoading:false,isError:true
    }

    default: return state
}



}