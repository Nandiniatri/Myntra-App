import usePagination from "../../customHook/usePagination";
import useTextBanner from "../../customHook/useTextBanner";
import './RisingStar.css';
import Image from "../../components/Image";

const RisingStar = () => {
    const { textData } = useTextBanner('/data/textBannerFile/risingStarText.json');
    const { currentPageData } = usePagination('/data/risingStar.json', 5);

    return (
        <div className="rising-star-main-container">
            <div className="rising-star-text">
                {textData.map((item) => (
                    <div key={item.id}>
                        <h4 className="rising-text-h4">{item.title}</h4>
                    </div>
                ))}
            </div>

            <div className="rising-star-carousel">
                {currentPageData.map((itm) => {
                    return (
                        <Image src={itm.image} />
                    )
                })}
            </div>
        </div>
    )
}

export default RisingStar;