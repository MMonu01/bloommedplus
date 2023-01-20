import {Route,Routes} from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'




const AllRoutes = ()=>{
return(
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products/skincare' element={<Products/>}/>
<Route path='/products/skincare/:id' element={<SingleProduct/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
)
}

export default AllRoutes