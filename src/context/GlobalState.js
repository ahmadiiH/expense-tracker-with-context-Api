import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"


const initiState = {
    transactions: [
    
     ]
}

export const GlobalContext = createContext(initiState)
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initiState)

    function deleteTransaction(id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
        
    }
    function addTransaction(transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
        
    }
    return (<GlobalContext.Provider value={{transactions : state.transactions,
        deleteTransaction, addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}
