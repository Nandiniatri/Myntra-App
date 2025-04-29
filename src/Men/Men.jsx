import CatagoryToBag from "../resuableComp/categoriesToBag/CategoriesToBag";
import TopBrandGrid from "../resuableComp/topBrand/TopBrand";
import MenSlider from "./menSlider/MenSlider";

const Men = () => {
    return (
        <div>
            <MenSlider />
            <TopBrandGrid url='/data/shopData/Men/topBrandFile/TopBrand.json' />
            <CatagoryToBag url='/data/shopData/Men/catagoriesToBagFile/CatagoryTobag.json' />
            <CatagoryToBag url="/data/shopData/Men/exploreTopBrandsFile/ExploreTopBrands.json" />
            <CatagoryToBag url="/data/shopData/Men/myntraLuxe/MyntraLuxe.json" />
            <CatagoryToBag url="/data/shopData/Men/trendingInIndianWear/TrendingInIndianWear.json" />
            <CatagoryToBag url="" />
            <CatagoryToBag url="" />
            <CatagoryToBag url="" />
        </div>
    )
}

export default Men;