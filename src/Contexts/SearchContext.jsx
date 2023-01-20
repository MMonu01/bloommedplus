import React,{useState} from 'react'
import { useSearchParams } from 'react-router-dom'

export const SearchContext = React.createContext()


function  SearchContextProvider({children}){ 


    const [searchParams,setSearchParams] = useSearchParams()
    const initialSort = searchParams.get("sort")
    const initialSearch = searchParams.get("q")
    const [search,setSearch] = React.useState(initialSearch || "")
const [sort,setSort] = useState(initialSort || "")




React.useEffect(()=>{
    setSearchParams({sort,q:search})
},[search,sort])




return(
    <SearchContext.Provider value={{search,setSearch,sort,setSort}} >
        {children}
    </SearchContext.Provider>
)

}

export default SearchContextProvider