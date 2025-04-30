import CatagoryToBag from "../resuableComp/categoriesToBag/CategoriesToBag";
import ExploreMoreKid from "./exploreMore/ExploreMoreKid";
import FashionAndEss from "./fashion&Ess/Fashion&Ess";
import KidSlider from "./kidSlider/KidSlider";
import TopPicks from "./topPicks/TopPicks";

const Kids = () => {
    return (
        <div>
            <KidSlider />
            <CatagoryToBag url="/data/shopData/Kids/catagoriesToBagFile/CatagoryTobag.json" title="FAVOURITE BRANDS" />
            <TopPicks />
            <CatagoryToBag url="/data/shopData/Kids/iconicBrands/IconicBrands.json" title="ICONIC BRANDS" />
            <FashionAndEss />
            <ExploreMoreKid />
        </div>
    )
}

export default Kids;