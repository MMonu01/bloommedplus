import React,{useCallback,useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useSearchParams,useNavigate } from 'react-router-dom'
import { saveData,loadData } from '../Utils/accessLocalstorage'
import { GetAllSearchData } from '../Redux/Search/action'
import { GetProductData } from '../Redux/Products/action'



export const SearchContext = React.createContext()



function  SearchContextProvider({children}){ 

    const [query,setQuery] = useState("")
    const [suggestions,setSuggestions] = useState([])
    const [outcome,setOutcome] = useState("")
    
    
    const {ProductsData} = useSelector((store)=>{
        return {ProductsData:store.searchReducer.ProductsData}
    })
    
    const dispatch = useDispatch()
  const navigate = useNavigate()


const queryHandler = (val)=>{
    setQuery(val)
}

useEffect(()=>{

if(query===""){
    setSuggestions([])
}
else{

    let textQuery = query.trim().toLowerCase()
    let newSuggestions = ProductsData.filter((item)=>{
        return item.name.toLowerCase().indexOf(textQuery) !== -1
        ? true
        :false
    })

    setSuggestions(newSuggestions)

}

},[query])

React.useEffect(()=>{
dispatch(GetAllSearchData)
},[])


const dispatchOutcome = ()=>{
    console.log(outcome)

}



    
  

return(
    <SearchContext.Provider value={{queryHandler,outcome,setOutcome,suggestions,dispatchOutcome}} >
        {children}
    </SearchContext.Provider>
)

}

export default SearchContextProvider