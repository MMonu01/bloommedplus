import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE,GET_PRODUCT_TOTAL_SUCCESS,GET_PRODUCT_TOTAL_REQUEST,GET_PRODUCT_TOTAL_FAILURE,GET_SEARCH_PRODUCT_REQUEST,GET_SEARCH_PRODUCT_SUCCESS,GET_SEARCH_PRODUCT_FAILURE} from './actionTypes'
import axios from 'axios'

const GetProductRequestAction  = ()=>{
return {type:GET_PRODUCT_REQUEST}
}


const GetProductSuccessAction = (payload)=>{
return {type:GET_PRODUCT_SUCCESS,payload}
}


const GetProductFailureAction = ()=>{
    return {type:GET_PRODUCT_FAILURE}
}

const GetTotalCountRequest = ()=>{
    return {type:GET_PRODUCT_TOTAL_REQUEST}
    }

const GetTotalCount = (payload)=>{
    return {type:GET_PRODUCT_TOTAL_SUCCESS,payload}
    }

const GetTotalCountFailure = ()=>{
        return {type:GET_PRODUCT_TOTAL_FAILURE}
        }

const SearchProductRequestAction = ()=>{
return {type:GET_SEARCH_PRODUCT_REQUEST}
}

const SearchProductSuccessAction = (payload)=>{
    return {type:GET_SEARCH_PRODUCT_SUCCESS,payload}

}

const SearchProductFailureAction = ()=>{
return {type:GET_SEARCH_PRODUCT_FAILURE}
}


export const GetProductData = (payload)=>(dispatch)=>{
dispatch(GetProductRequestAction())

    // axios.get("https://bloodmedplus-server.onrender.com/products")
    axios({
        method:"get",
        baseURL:"https://bloodmedplus-server.onrender.com/products",
        params:payload
    })
    .then((res)=>{
    dispatch(GetProductSuccessAction(res.data))
    // console.log(res.headers['X-Total-Count'])
    })
    .catch((err)=>{
        console.log(err)
       dispatch(GetProductFailureAction())
    })

}


export const totalCount = (payload) =>(dispatch)=>{

    delete payload._limit
    delete payload._page

    dispatch(GetTotalCountRequest())
    
        axios({
            method:"get",
            baseURL:"https://bloodmedplus-server.onrender.com/products",
            params: payload
            
        })
        .then((res)=>{
        dispatch(GetTotalCount(res.data.length))
        // console.log(res.headers['X-Total-Count'])
        })
        .catch((err)=>{
            console.log(err)
           dispatch(GetTotalCountFailure())
        })
    
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