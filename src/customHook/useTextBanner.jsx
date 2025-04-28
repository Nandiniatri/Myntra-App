import { useEffect, useState } from "react";

const useTextBanner = (url) => {
    const [textData, setTextData] = useState([]);

    const fetchTextBanner = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setTextData(result);
    }

    useEffect(() => {
        fetchTextBanner();
    }, [url])

    return { textData }
}

export default useTextBanner;