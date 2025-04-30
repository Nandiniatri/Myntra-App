import { useContext } from "react";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Image from "../../components/Image";
import "./ExplorMoreKid.css"; 

const ExploreMoreKid = () => {
    const { exploreMore } = useContext(AllDataContext);

    return (
        <div>
            <div className="rising-text-h4">
                <h4>EXPLORE MORE</h4>
            </div>

            <div className="explore-more-container">
                {exploreMore.map((item) => (
                    <div className="explore-item" key={item.id}>
                        <Image src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreMoreKid;
