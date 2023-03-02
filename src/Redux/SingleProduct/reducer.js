import {GET_PRODUCTD_REQUEST,GET_PRODUCTD_SUCCESS,GET_PRODUCTD_FAILURE} from './actionTypes'

const initialState ={
    singleProductData:[],
    isLoading:true,
    isError:false
}


export const reducer = (state=initialState,{type,payload})=>{

switch(type){
    case GET_PRODUCTD_REQUEST: return {
        ...state,isLoading:true
    }
    case GET_PRODUCTD_SUCCESS: return {
        ...state,isLoading:false, singleProductData:payload
    }
    case GET_PRODUCTD_FAILURE: return {
        ...state,isLoading:false,isError:true
    }

    default: return state
}



}