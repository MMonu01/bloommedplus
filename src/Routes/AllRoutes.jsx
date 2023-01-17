import {Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'




const AllRoutes = ()=>{
return(
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/products/:id' element={<SingleProduct/>}/>
    </Routes>
)
}

export default AllRoutes