import usePagination from "../../customHook/usePagination";
import useTextBanner from "../../customHook/useTextBanner";
import './RisingStar.css';
import Image from "../../components/Image";
import TextBanner from "../../resuableComp/textbanner/TextBanner";

const RisingStar = () => {
    const { currentPageData } = usePagination('/data/risingStar.json', 5);

    return (
        <div className="rising-star-main-container">
            <div className="rising-star-text">
                <TextBanner url="/data/textBannerFile/risingStarText.json" />
            </div>

            <div className="rising-star-carousel">
                {currentPageData.map((itm) => {
                    return (
                        <Image src={itm.image} key={itm.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default RisingStar;