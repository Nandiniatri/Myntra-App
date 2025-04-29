import useTextBanner from "../../customHook/useTextBanner";
import './textBanner.css'

const TextBanner = ({url}) => {

    const { textData } = useTextBanner(url);

    return (
        <div className="text-banner-main-div">
            {textData.map((item) => (
                <div key={item.id}>
                    <h4 className="rising-text-h4">{item.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default TextBanner;