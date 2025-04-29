import usePagination from "../../customHook/usePagination";
import './LuxeGrand.css';
import Image from "../../components/Image";
import TextBanner from "../../resuableComp/textbanner/TextBanner";

const LuxeGrand = () => {
    const { currentPageData } = usePagination('/data/luxeGrandData.json', 5);

    return (
        <div className="rising-star-main-container">
            <div className="rising-star-text">
                <TextBanner url="/data/textBannerFile/luxeGrandText.json" />
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

export default LuxeGrand;