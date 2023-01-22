import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children})=>{
    const location = useLocation()

    const isAuth  = useSelector((store)=>store.authReducer.isAuth)
    if(!isAuth){
        return <Navigate to="/login"  />
    }

return children
}



export default PrivateRoute