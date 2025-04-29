import useTextBanner from "../../customHook/useTextBanner";
import useTopBrands from "../../customHook/useTopBrands";
import './TopBrand.css';

const TopBrandGrid = ({ url }) => {
    const { topBrand } = useTopBrands(url);

    return (
        <div>
            <div className="brands-grid">
                {topBrand.map((brand, index) => (
                    <div className="brand-card" key={index}>
                        <img src={brand.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBrandGrid;