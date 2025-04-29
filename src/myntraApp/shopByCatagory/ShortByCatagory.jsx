import { useContext } from "react";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Image from "../../components/Image";
import './shopByCatagory.css';
import useTextBanner from "../../customHook/useTextBanner";
import TextBanner from "../../resuableComp/textbanner/TextBanner";

const ShopByCatagory = () => {
    const { shopByCatagory } = useContext(AllDataContext);

    return (
        <div className="shopByCategory-main-container">
            <div className="rising-star-text">
                <TextBanner url="/data/textBannerFile/shopByCataText.json" />
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