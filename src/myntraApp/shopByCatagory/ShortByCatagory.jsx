import { useContext } from "react";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Image from "../../components/Image";
import './shopByCatagory.css';
import useTextBanner from "../../customHook/useTextBanner";

const ShopByCatagory = () => {
    const { shopByCatagory } = useContext(AllDataContext);
    const { textData } = useTextBanner('/data/textBannerFile/shopByCataText.json');

    return (
        <div className="shopByCategory-main-container">
            <div className="rising-star-text">
                {textData.map((item) => (
                    <div key={item.id}>
                        <h4 className="rising-text-h4">{item.title}</h4>
                    </div>
                ))}
            </div>

            <div className="shopByCategory-image-div">
                {shopByCatagory.map((itm) => {
                    return (
                        <div key={itm.id}>
                            <Image src={itm.img} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopByCatagory;