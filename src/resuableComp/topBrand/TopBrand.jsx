import useTopBrands from "../../customHook/useTopBrands";
import TextBanner from "../textbanner/TextBanner";
import './TopBrand.css';

const TopBrandGrid = ({ url }) => {
    const { topBrand } = useTopBrands(url);

    return (
        <div>
            <div className="brand-main-div">
                <div className="brandText">
                    <h4>Biggest Deals On Top Brands</h4>
                </div>

                <div className="brands-grid">
                    {topBrand.map((brand, index) => (
                        <div className="brand-card" key={index}>
                            <img src={brand.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopBrandGrid;