import { useContext } from "react";
import Image from "../../components/Image";
import { AllDataContext } from "../../contextApi/AllDataContextApi";
import Input from "../../components/Input";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import './header.css'

const Header = () => {
    const { headerCenterData, logo } = useContext(AllDataContext);

    return (    
        <header>
            <div className="header-logo-main-container">
                {logo.map((headerLogo) => {
                    return (
                        <Image src={headerLogo.src} key={headerLogo.id} />
                    )
                })}
            </div>

            <div className="header-UL-LI-main-container">
                <ul>
                    {headerCenterData.map((headerCen) => {
                        return (
                            <li key={headerCen.id}>{headerCen.title}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="header-Input-mai-container">
                <Input placeholder="Search for a product,brands and more" />
            </div>

            <div className="header-icons-main-divS">
                <div>
                    <CiUser />
                    <h5>Profile</h5>
                </div>

                <div>
                    <CiHeart />
                    <h5>Wishlist</h5>
                </div>

                <div>
                    <BsHandbag />
                    <h5>Bag</h5>
                </div>
            </div>
        </header>
    )
}

export default Header;