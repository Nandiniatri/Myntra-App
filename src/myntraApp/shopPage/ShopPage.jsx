import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const ShopPage = () => {
    const { category } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/headerHoverData/${category}.json`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Error loading data", err);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            <div>
                
            </div>
        </div>
    );
};

export default ShopPage;
