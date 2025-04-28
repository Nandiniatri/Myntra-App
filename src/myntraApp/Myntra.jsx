import Header from "./header/Header";
import LuxeGrand from "./luxeGrand/LuxeGrand";
import MedalWorthy from "./medalWorthy/MedalWorthy";
import RisingStar from "./risingStar/RisingStar";
import ShopByCatagory from "./shopByCatagory/ShortByCatagory";
import MyntraSlider from "./slider/MyntraSlider";

const Myntra = () => {
    return (
        <>
            <Header />
            <MyntraSlider />
            <RisingStar />
            <LuxeGrand />
            <MedalWorthy />
            <ShopByCatagory />
        </>
    )
}

export default Myntra;