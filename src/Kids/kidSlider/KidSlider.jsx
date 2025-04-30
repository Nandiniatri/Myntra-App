import { useEffect, useState } from "react";
import Image from "../../components/Image";

const KidSlider = () => {
    const [kidSlider, setKidSlider] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchKidSliderApi = async () => {
            const response = await fetch('/data/shopData/Kids/slider/kidSlider.json');
            const result = await response.json();
            setKidSlider(result);
        }

        fetchKidSliderApi();
    }, [])

    useEffect(() => {
        const nextImg = setInterval(() => {
            setCurrentIndex(prevImg => (prevImg + 1) % kidSlider.length);
        }, 3000)

        return () => clearInterval(nextImg);
    }, [kidSlider.length])

    return (
        <div className="myntra-slider-div">
            {kidSlider.length > 0 && (
                <Image src={kidSlider[currentIndex].img} className="myntraSLider-img" />
            )}
        </div>
    )
}

export default KidSlider;