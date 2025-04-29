import usePagination from "../../customHook/usePagination";
import Image from "../../components/Image";
import TextBanner from "../../resuableComp/textbanner/TextBanner";

const MedalWorthy = () => {
    const { currentPageData } = usePagination('/data/medalWorthy.json', 5);

    return (
        <div className="rising-star-main-container">
            <div className="rising-star-text">
                <TextBanner url="/data/textBannerFile/medalWorthyText.json" />
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


export default MedalWorthy;