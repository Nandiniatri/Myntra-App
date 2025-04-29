import { useContext, useState } from "react";
import Image from "../../components/Image";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Input from "../../components/Input";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const { headerCenterData, logo, setIsHover, isHover } = useContext(AllDataContext);

    const handleMouseOver = () => {
        setIsHover(null);
    }

    const handleMouseEnter = (id) => {
        setIsHover(id);
    }

    return (
        <>
            <header>
                <div className="header-logo-main-container">
                    {logo.map((headerLogo) => {
                        return (
                            <Link to="/">
                                <Image src={headerLogo.src} key={headerLogo.id} />
                            </Link>
                        );
                    })}
                </div>

                <div className="header-UL-LI-main-container">
                    {headerCenterData.map((headerCen) => {
                        return (
                            <div key={headerCen.id} onMouseEnter={() => handleMouseEnter(headerCen.id)} onMouseOver={handleMouseOver}>
                                <Link to={`/shop/${headerCen.title}`} key={headerCen.id} className="header-nav-link">
                                    {headerCen.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>


                <div className="header-Input-mai-container">
                    <Input placeholder="Search for a product, brands and more" />
                </div>

                <div className="header-icons-main-container">
                    <div className="header-icon-div">
                        <CiUser size={22} />
                        <span>Profile</span>
                    </div>

                    <div className="header-icon-div">
                        <CiHeart size={22} />
                        <span>Wishlist</span>
                    </div>

                    <div className="header-icon-div">
                        <BsHandbag size={22} />
                        <span>Bag</span>
                    </div>
                </div>
            </header>



            <div>
                {isHover && (
                    <div>Hello beta ji</div>
                )}
            </div>
        </>
    );
};

export default Header;
