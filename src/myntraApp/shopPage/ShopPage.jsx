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
                console.log(result);

                setData(result);
            } catch (err) {
                console.error("Error loading data", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <ul>
                        <h3>{item.title}</h3>
                        {item.subtitle.map((subItem) => {
                            return (
                                <li>
                                    <span>{subItem.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                ))}
            </ul>
        </div>
    );
};

export default ShopPage;
