import { useEffect, useState } from "react";
import './MenSlider.css';


const imges = [
    {
        "id": 1,
        "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg"
    },
    {
        "id": 2,
        "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/28/2b3b8a99-6b66-40b0-9246-6616e5719cbf1745836028793-unnamed.jpg"
    },
    {
        "id": 3,
        "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg"
    },
    {
        "id": 4,
        "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg"
    },
    {
        "id": 5,
        "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg"
    }
]

 
const MenSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextImg = setInterval(() => {
            setCurrentIndex(prevImg => (prevImg + 1) % imges.length);
        }, 3000)

        return () => clearInterval(nextImg);
    }, [currentIndex])

    return (
        <div className="myntra-slider-div">
            <img src={imges[currentIndex].img} className="myntraSLider-img" />
            <div className="myntra-slider-btn-div">
            </div>
        </div>
    )
}

export default MenSlider;