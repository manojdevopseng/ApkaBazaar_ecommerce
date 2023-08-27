import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Products</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        APKABAZAAR.
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                        {/* {
                            isAuthenticated && <h4>{user.name}</h4>
                        }
                        {isAuthenticated ?<div className="banner-cta logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Logout
                        </div> : (
                        <div className="banner-cta login" onClick={() => loginWithRedirect()}>Log In</div>)
                        } */}
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;
