import React, {createContext} from 'react'
import shopify from '../../api/shopify'


export const GlobalState=createContext()

export const Dataprovider=({children})=>{
    const state={
        shopify:shopify()
    }
  
    return(
        <GlobalState.Provider value={state} >
            {children}
        </GlobalState.Provider>
    )
}



