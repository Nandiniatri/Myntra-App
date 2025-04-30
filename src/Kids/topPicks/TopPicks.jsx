import { useContext } from "react";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Image from "../../components/Image";
import "./TopPicks.css"

const TopPicks = () => {
    const { kidTopPicks } = useContext(AllDataContext);

    return (
        <div className="kidTopPicks-main-container">
            <div className="rising-text-h4">
                <h4>Top Picks</h4>
            </div>

            <div className="kidTopPicks-data-div">
                {kidTopPicks.map((item) => {
                    return (
                        <div>
                            <Image src={item.img} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopPicks;