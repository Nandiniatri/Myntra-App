import useTopBrands from "../../customHook/useTopBrands";
import TextBanner from "../textbanner/TextBanner";
import './TopBrand.css';

const TopBrandGrid = ({ url }) => {
    const { topBrand } = useTopBrands(url);

    return (
        <div>
            <div className="brands-grid">
                <TextBanner url={url} />

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