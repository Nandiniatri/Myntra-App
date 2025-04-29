import Men from "../Men/men";
import Women from "../Women/Women";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import LuxeGrand from "./luxeGrand/LuxeGrand";
import MedalWorthy from "./medalWorthy/MedalWorthy";
import RisingStar from "./risingStar/RisingStar";
import ShopByCatagory from "./shopByCatagory/ShortByCatagory";
import ShopPage from "./shopPage/ShopPage";
import MyntraSlider from "./slider/MyntraSlider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Myntra = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <MyntraSlider />
                            <RisingStar />
                            <LuxeGrand />
                            <MedalWorthy />
                            <ShopByCatagory />
                            {/* <Footer /> */}
                        </>
                    }
                />
                <Route path="/shop/men" element={<Men />} />
                <Route path="/shop/women" element={<Women />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Myntra;
