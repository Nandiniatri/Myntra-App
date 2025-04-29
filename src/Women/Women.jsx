import CatagoryToBag from "../resuableComp/categoriesToBag/CategoriesToBag";
import TopBrandGrid from "../resuableComp/topBrand/TopBrand";
import WomenSlider from "./womenSlider/womenSlider";

const Women = () => {
    return (
        <div>
            <WomenSlider />
            <TopBrandGrid url='/data/shopData/Women/topBrandFile/TopBrand.json' />
            <CatagoryToBag url='/data/shopData/Women/catagoriesToBagFile/CatagoryTobag.json' title="Categories To Bag" />
            <CatagoryToBag url="/data/shopData/Women/exploreTopBrandsFile/ExploreTopBrands.json" title="Explore Top Brands" />
            <CatagoryToBag url="/data/shopData/Women/myntraLuxe/MyntraLuxe.json" title="Trending In Western Wear" />
            <CatagoryToBag url="/data/shopData/Women/trendingInIndianWear/TrendingInIndianWear.json" title="Trending In Indian Wear" />
            <CatagoryToBag url="/data/shopData/Women/trendingInSportsWear/TrendingInSportsWear.json" title="Trending In Sports Wear" />
            <CatagoryToBag url="/data/shopData/Women/trendingInFootwear/TrendingInFootwear.json" title="Trending In Footwear" />
            <CatagoryToBag url="/data/shopData/Women/trendingInAccessories/TrendingInAccessories.json" title="Trending In Accessories" />
        </div>
    )
}

export default Women;