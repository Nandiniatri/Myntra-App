import usePagination from "../../customHook/usePagination";
import useTextBanner from "../../customHook/useTextBanner";

const RisingStar = () => {
    const { textData } = useTextBanner('/data/textBannerFile/risingStarText.json');
    const { currentPageData } = usePagination('/data/risingStar.json', 5);

    return (
        <>
            <div>
                {textData.map((item,) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>

            <div>
                {currentPageData.map((itm) => {
                    return (
                        <img src={itm.image} />
                    )
                })}
            </div>
        </>
    )
}

export default RisingStar;