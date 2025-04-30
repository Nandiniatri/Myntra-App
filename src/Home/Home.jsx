import { useState, useEffect } from "react";
import Image from "../components/Image";
import './Home.css';

const Home = () => {
    const [homeLivingBanner, setHomeLivingBanner] = useState([]);
    const [niceToSee, setNiceToSee] = useState([]);
    const [homeCategory, setHomeCategory] = useState([]);
    const [getInspBanner1, setgetInspBanner1] = useState([]);
    const [trendHome, setTrendHome] = useState([]);
    const [featureBrandBanner1 , setFeatureBrandBanner1] = useState([]);
    const [featureImg , setFeatureImg] = useState([]);

    const fetchfeatureImg1Api = async () => {
        const response = await fetch('/data/shopData/Home/featureImg.json');
        const result = await response.json();
        setFeatureImg(result);
    }

    const fetchfeatureBrandBanner1Api = async () => {
        const response = await fetch('/data/shopData/Home/featureBrandBanner1.json');
        const result = await response.json();
        setFeatureBrandBanner1(result);
    }

    const fetchTrendApi = async () => {
        const response = await fetch('/data/shopData/Home/trend.json');
        const result = await response.json();
        setTrendHome(result);
    }

    const fetchGetInspiredBanner1Api = async () => {
        const response = await fetch('/data/shopData/Home/getInspiredBanner1.json');
        const result = await response.json();
        setgetInspBanner1(result);
    }

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
        fetchGetInspiredBanner1Api();
        fetchTrendApi();
        fetchfeatureBrandBanner1Api();
        fetchfeatureImg1Api();
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
                    <div className="nice-to-see-grid">
                        {niceToSee.map((seeItm, index) => (
                            <div key={index} className="grid-item">
                                <Image src={seeItm.image} className="nice-to-see-image" />
                                <div className="grid-title">{seeItm.title}</div>
                            </div>
                        ))}
                    </div>

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
                {getInspBanner1.map((ban1) => (
                    <div key={ban1.id} className="get-inspired-banner">
                        <Image src={ban1.image} />
                    </div>
                ))}

                <div className="trend-home-grid">
                    {trendHome.map((trnd) => (
                        <div key={trnd.id} className="trend-card">
                            <Image src={trnd.image} className="trend-card-img" />
                            <div className="trend-card-title">{trnd.title}</div>
                            <div className="trend-card-subtitle">{trnd.subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="feature-main-container">
                <div className="feature-div1">
                    {featureBrandBanner1.map((fea) => {
                        return (
                            <div className="feature-div1-inner">
                                <Image src={fea.image}/>
                            </div>
                        )
                    })}
                </div>

                <div className="feature-div2">
                    {featureImg.map((fecImg) => {
                           return (
                            <div className="feature-div2-inner">
                                <Image src={fecImg.image}/>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
};

export default Home;
