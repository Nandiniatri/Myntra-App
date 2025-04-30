import { useContext } from "react";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Image from "../../components/Image";
import "./Fashion&Ess.css"

const FashionAndEss = () => {
    const { kidFashionAndEss } = useContext(AllDataContext);

    return (
        <div className="fashion-main-container">
            <div className="rising-text-h4">
                <h4>Fashion & Essentials</h4>
            </div>

            <div className="fashion-div2">
                {kidFashionAndEss.map((item) => {
                    return (
                        <Image src={item.image} />
                    )
                })}
            </div>
        </div>
    )
}

export default FashionAndEss;