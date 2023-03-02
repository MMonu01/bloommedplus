import {GET_PRODUCTD_REQUEST,GET_PRODUCTD_SUCCESS,GET_PRODUCTD_FAILURE} from './actionTypes'
import axios from 'axios'

const GetProductRequestAction  = ()=>{
return {type:GET_PRODUCTD_REQUEST}
}


const GetProductSuccessAction = (payload)=>{
return {type:GET_PRODUCTD_SUCCESS,payload}
}


const GetProductFailureAction = ()=>{
    return {type:GET_PRODUCTD_FAILURE}
}


export const GetSingleData = (id)=>(dispatch)=>{
dispatch(GetProductRequestAction())

    axios.get(`https://bloodmedplus-server.onrender.com/products/${id}`)
    .then((res)=>{
    dispatch(GetProductSuccessAction(res.data))
    })
    .catch((err)=>{
        console.log(err)
       dispatch(GetProductFailureAction())
    })


}

