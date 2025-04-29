import { useEffect, useState } from "react";
import './womenSlider.css';


// const imges = [
//     {
//         "id": 1,
//         "img": "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"
//     },
//     {
//         "id": 2,
//         "img": ""
//     },
//     {
//         "id": 3,
//         "img": ""
//     },
//     {
//         "id": 4,
//         "img": ""
//     },
//     {
//         "id": 5,
//         "img": ""
//     },
//     {
//         "id": 6,
//         "img": ""
//     },
//     {
//         "id": 7,
//         "img": ""
//     },
//     {
//         "id": 8,
//         "img": ""
//     },
//     {
//         "id": 9,
//         "img": ""
//     },
//     {
//         "id": 10,
//         "img": ""
//     }
// ]



const WomenSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [womenSlider, setWomenSlider] = useState([]);

    useEffect(() => {
        const fetchWomenSliderApi = async () => {
            const response = await fetch('/data/shopData/Women/womenSlider/WomenSlider.json');
            const result = await response.json();
            setWomenSlider(result);
        }

        fetchWomenSliderApi();
    }, [])


    useEffect(() => {
        const nextImg = setInterval(() => {
            setCurrentIndex(prevImg => (prevImg + 1) % womenSlider.length);
        }, 3000)

        return () => clearInterval(nextImg);
    }, [currentIndex , womenSlider])

    return (
        <div className="myntra-slider-div">
            {womenSlider.length > 0 && (
                <img src={womenSlider[currentIndex].img} className="myntraSLider-img" />
            )}
            <div className="myntra-slider-btn-div">
            </div>
        </div>
    )
}

export default WomenSlider;