import CatagoryToBag from "../resuableComp/categoriesToBag/CategoriesToBag";
import TextBanner from "../resuableComp/textbanner/TextBanner";
import TopBrandGrid from "../resuableComp/topBrand/TopBrand";
import MenSlider from "./menSlider/MenSlider";

const Men = () => {
    return (
        <div>
            <MenSlider />
            <TopBrandGrid url='/data/shopData/Men/topBrandFile/TopBrand.json' />
            <CatagoryToBag url='/data/shopData/Men/catagoriesToBagFile/CatagoryTobag.json' title="Categories To Bag" />
            <CatagoryToBag url="/data/shopData/Men/exploreTopBrandsFile/ExploreTopBrands.json" title="Explore Top Brands" />
            <CatagoryToBag url="/data/shopData/Men/myntraLuxe/MyntraLuxe.json" title="Myntra Luxe" />
            <CatagoryToBag url="/data/shopData/Men/trendingInIndianWear/TrendingInIndianWear.json" title="Trending In Indian Wear" />
            <CatagoryToBag url="/data/shopData/Men/trendingInSportsWear/TrendingInSportsWear.json" title="Trending In Sports Wear" />
            <CatagoryToBag url="/data/shopData/Men/trendingInFootwear/TrendingInFootwear.json" title="Trending In Footwear" />
            <CatagoryToBag url="/data/shopData/Men/trendingInAccessories/TrendingInAccessories.json" title="Trending In Accessories" />
        </div>
    )
}

export default Men;