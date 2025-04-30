import { useState, useEffect } from "react";
import Image from "../components/Image";
import './Home.css';

const Home = () => {
    const [homeLivingBanner, setHomeLivingBanner] = useState([]);
    const [niceToSee, setNiceToSee] = useState([]);
    const [homeCategory, setHomeCategory] = useState([]);

    const fetchHomeCategoryApi = async () => {
        const response = await fetch('/data/shopData/Home/homeCategories.json');
        const result = await response.json();
        setHomeCategory(result);
    };

    const fetchNiceToSeeApi = async () => {
        const response = await fetch('/data/shopData/Home/niceToseeYou.json');
        const result = await response.json();
        setNiceToSee(result);
    };

    const fetchHomeLivingBannerApi = async () => {
        const response = await fetch('/data/shopData/Home/homeLivingBanner1.json');
        const result = await response.json();
        setHomeLivingBanner(result);
    };

    useEffect(() => {
        fetchHomeLivingBannerApi();
        fetchNiceToSeeApi();
        fetchHomeCategoryApi();
    }, []);

    return (
        <div className="home-main-container">
            <div className="home-main-div1">
                {homeLivingBanner.map((bannerOne) => (
                    <div key={bannerOne.id}>
                        <Image src={bannerOne.image} />
                    </div>
                ))}
            </div>

            <div className="nice-to-see-container">
                <h4 className="rising-text-h4">NICE TO SEE YOU, COME ON IN!</h4>

                <div className="nice-to-See-inner-DIv">
                    {/* Left Image Grid */}
                    <div className="nice-to-see-grid">
                        {niceToSee.map((seeItm, index) => (
                            <div key={index} className="grid-item">
                                <Image src={seeItm.image} className="nice-to-see-image" />
                                <div className="grid-title">{seeItm.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right Category List */}
                    <div className="nice-to-see-list">
                        <span>Furnishings & Bed Linen</span>
                        {homeCategory.map((cat) => (
                            <div key={cat.id} className="list-item">
                                <a href={cat.title}>{cat.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="get-inspired-main-container">
                <div>

                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
