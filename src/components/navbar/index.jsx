import { useRef, useState } from "react";
import "./navbar.style.css";
import Logo from "../../assets/icons/mintfarm-logo.svg";
import closeIcon from "../../assets/icons/close-navicon.svg";
import menuIcon from "../../assets/icons/menu-navicon.svg";
import { HeaderLinks } from "../../mocks/mockData";
import profilePic from "../../assets/icons/pic2.svg";
import ConnectWalletModal from "../connect-wallet-modal";
import HeaderItem from "../header/header-item";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <img src={Logo} />
        <nav ref={navRef}>
          {HeaderLinks.map((links) => (
            <HeaderItem
              text={links.text}
              navigateTo={links.url}
              showNavbar={showNavbar}
            />
          ))}
          <button
            className="button"
            onClick={() => {
              handleModal();
              showNavbar();
            }}
          >
            connect wallet
          </button>
          <img
            src={closeIcon}
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
          />
          <img className="profilePic" src={profilePic} alt="profile=pic" />
        </nav>
        <img src={menuIcon} className="nav-btn" onClick={showNavbar} />
      </header>
      {isOpen && <ConnectWalletModal handleModal={handleModal} />}
    </>
  );
}

export default Navbar;
