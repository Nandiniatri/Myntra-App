import useTopBrands from "../../customHook/useTopBrands";
import './CategoriesToBag.css';

const CatagoryToBag = ({ url, title }) => {
    const { topBrand } = useTopBrands(url);

    return (
        <div className="category-main-conatiner">
            <div className="category-title-div">
                <h4>{title}</h4>
            </div>

            <div className="category-list">
                {topBrand.map((cat) => (
                    <div key={cat.id} className="category-item">
                        <img src={cat.image} alt={cat.title} className="category-img" />
                        <p className="category-title">{cat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatagoryToBag; 