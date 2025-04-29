import { useContext } from "react";
import Image from "../../components/Image";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Input from "../../components/Input";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import './Header.css';

const Header = () => {
    const { headerCenterData, logo } = useContext(AllDataContext);

    return (
        <header>
            <div className="header-logo-main-container">
                {logo.map((headerLogo) => {
                    return (
                        <Image src={headerLogo.src} key={headerLogo.id} />
                    );
                })}
            </div>

            <div className="header-UL-LI-main-container">
                {headerCenterData.map((headerCen) => {
                    return (
                        <a href={"#"} key={headerCen.id} className="header-nav-link">
                            {headerCen.title}
                        </a>
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
    );
};

export default Header;
