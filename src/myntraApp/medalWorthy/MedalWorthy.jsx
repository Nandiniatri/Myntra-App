import usePagination from "../../customHook/usePagination";
import useTextBanner from "../../customHook/useTextBanner";
import Image from "../../components/Image";

const MedalWorthy = () => {
    const { textData } = useTextBanner('/data/textBannerFile/medalWorthyText.json');
    const { currentPageData } = usePagination('/data/medalWorthy.json', 5);

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
                        <Image src={itm.image} key={itm.id} />
                    )
                })}
            </div>
        </div>
    )
}


export default MedalWorthy;