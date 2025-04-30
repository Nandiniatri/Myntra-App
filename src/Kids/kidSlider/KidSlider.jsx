import { useEffect, useState } from "react";
import Image from "../../components/Image";
import Button from "../../components/Button";
import "./KidSlider.css";

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
        }, 4000)

        return () => clearInterval(nextImg);
    }, [kidSlider.length])

    const handleButton = (id, index) => {
        setCurrentIndex(index);
    }


    return (
        <div className="myntra-slider-div">
            <div>
                {kidSlider.length > 0 && (
                    <>
                        <div>
                            <Image src={kidSlider[currentIndex].img} className="myntraSLider-img" />
                        </div>

                        <div className="kidSlider-btn-div">
                            {kidSlider.map((item, index) => {
                                return (
                                    <div>
                                        <Button onClick={() => handleButton(item.id, index)} className={`kidSlider-btn ${currentIndex === index ? 'btn' : ''}`}></Button>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default KidSlider;