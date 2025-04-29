import { createContext, useEffect, useState } from "react";

export const AllDataContext = createContext();

const AllDataContextProvider = ({ children }) => {
    const [logo, setLogo] = useState([]);
    const [headerCenterData, setHeaderCenterData] = useState([]);
    const [myntraSlider, setMyntraSlider] = useState([]);
    const [shopByCatagory, setShopByCatagory] = useState([]);

    //this is shop by category data api
    const fetchShopByCatagoryApi = async () => {
        const response = await fetch('/data/shopByCategory.json');
        const result = await response.json();
        setShopByCatagory(result);
    }

    //myntra slider
    const fetchMyntraSliderApi = async () => {
        const response = await fetch('/data/myntraSliderData.json');
        const result = await response.json();
        setMyntraSlider(result);
    }

    // header for center Data
    const fetchApiForHeaderCenter = async () => {
        const response = await fetch('/data/headerCenterData.json');
        const result = await response.json();
        setHeaderCenterData(result);
    }

    //myntra logo
    const fetchApiForMyntraLogo = async () => {
        const response = await fetch('/data/headerImg.json');
        const result = await response.json();
        setLogo(result);
    }

    useEffect(() => {
        fetchApiForMyntraLogo();
        fetchApiForHeaderCenter();
        fetchMyntraSliderApi();
        fetchShopByCatagoryApi();
    }, [])

    return (
        <AllDataContext.Provider value={{
            logo,
            headerCenterData,
            myntraSlider,
            shopByCatagory
        }}>
            {children}
        </AllDataContext.Provider>
    )
}

export default AllDataContextProvider;