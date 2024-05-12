import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { ItemWrapper, MenuText } from "./HeaderItem.style";

function HeaderItem({ text, navigateTo, showNavbar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === navigateTo;
  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <ItemWrapper
      onClick={() => {
        handleClick(navigateTo);
        showNavbar();
      }}
      isActive={isActive}
    >
      <MenuText isActive={isActive}>{text}</MenuText>
    </ItemWrapper>
  );
}

HeaderItem.propTypes = {
  text: propTypes.string,
  navigateTo: propTypes.string,
};

export default HeaderItem;
