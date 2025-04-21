import { createContext, useEffect, useState } from "react";

export const AllDataContext = createContext();

const AllDataContextProvider = ({ children }) => {
    const [logo , setLogo] = useState([]);
    const [headerCenterData, setHeaderCenterData] = useState([]);



    // header for center Data
    const fetchApiForHeaderCenter = async () => {
        const response = await fetch('/data/headerCenterData.json');
        const result = await response.json();
        setHeaderCenterData(result);
    }

    //myntra logo
    const fetchApiForMyntraLogo = async() => {
        const response = await fetch('/data/headerImg.json');
        const result = await response.json();
        // console.log(result);
        
        setLogo(result);
    }

    useEffect(() => {
        fetchApiForMyntraLogo();
        fetchApiForHeaderCenter();
    }, [])

    return (
        <AllDataContext.Provider value={{
            logo,
            headerCenterData
        }}>
            {children}
        </AllDataContext.Provider>
    )
}

export default AllDataContextProvider;