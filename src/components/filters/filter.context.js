import { createContext, useContext, useReducer } from "react"
import filterReducer from "./filter.reducer"

const FilterContext = createContext()

const initialState = {
    sort: "",
    brands:[],
    sizes:[],
    idealFor: []
}

export function FilterProvider({ children }){

    const [state, dispatch] = useReducer(filterReducer, initialState)

    return(
        <FilterContext.Provider value={{ filterState: state, filterDispatch: dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)