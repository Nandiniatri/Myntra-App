import { useEffect, useState } from "react";

const useTopBrands = (url) => {
    const [topBrand, setTopBrand] = useState([]);

    const fetchTopBrands = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setTopBrand(result);
    }

    useEffect(() => {
        fetchTopBrands();
    }, [])

    return { topBrand }
}

export default useTopBrands;