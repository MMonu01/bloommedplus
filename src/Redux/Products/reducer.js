import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE,GET_PRODUCT_TOTAL_SUCCESS,GET_PRODUCT_TOTAL_REQUEST,GET_PRODUCT_TOTAL_FAILURE,GET_SEARCH_PRODUCT_REQUEST,GET_SEARCH_PRODUCT_SUCCESS,GET_SEARCH_PRODUCT_FAILURE} from './actionTypes'


const initialState ={
    totalCount: 1,
    ProductsData:[],
    isLoading:true,
    isError:false,
    isCountLoading:true,
    isCountError:false
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
    case GET_PRODUCT_TOTAL_REQUEST: return {
        ...state,isCountLoading:true, 
    }
    case GET_PRODUCT_TOTAL_SUCCESS: return {
        ...state,isCountLoading:false, totalCount:payload
    }
    case GET_PRODUCT_TOTAL_FAILURE: return {
        ...state,isCountLoading:false, isCountError:true
    }


    default: return state
}



}