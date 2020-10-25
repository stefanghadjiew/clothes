import React, {useContext,createContext,useState} from 'react';
import data from './Data';

export const Data = createContext()
export const useData = () => {
    return useContext(Data)
}

export const DataProvider = ({children}) => {
    const menData = data.Men
    const womenData = data.Women
    const childrenData = data.Children
    const reviewers = data.Reviews
    const [state] = useState({
        menData,
        womenData,
        childrenData,
        reviewers
    })
    return (
        <Data.Provider value={state}>
            {children}
        </Data.Provider>
    )
}
