import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
            {data.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>

                    {item.subtitle && (
                        <ul>
                            {item.subtitle.map((sub) => (
                                sub.title && <li key={sub.id}>{sub.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ShopPage;
