import {GET_SEARCH_PRODUCT_REQUEST,GET_SEARCH_PRODUCT_SUCCESS,GET_SEARCH_PRODUCT_FAILURE} from './actionTypes'
import axios from 'axios'

const SearchProductRequestAction = ()=>{
return {type:GET_SEARCH_PRODUCT_REQUEST}
}

const SearchProductSuccessAction = (payload)=>{
    return {type:GET_SEARCH_PRODUCT_SUCCESS,payload}

}

const SearchProductFailureAction = ()=>{
return {type:GET_SEARCH_PRODUCT_FAILURE}
}




export const GetAllSearchData = (dispatch)=>{
dispatch(SearchProductRequestAction())

 axios("https://bloodmedplus-server.onrender.com/products")
.then((res)=>{
    dispatch(SearchProductSuccessAction(res.data))
})
.catch((err)=>{
    console.log(err)
    dispatch(SearchProductFailureAction())
})
}