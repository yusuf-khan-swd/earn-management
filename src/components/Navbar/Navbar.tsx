import React from "react";
import {
  Discord,
  DiscordLink,
  MenuContainer,
  MenuItems,
  MenuItemsLink,
  NavbarWrapper,
  NavLogo,
  NavSocialMediaContainer,
  Twitter,
  TwitterLink,
} from "../../styles/navbar";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLogo></NavLogo>
      <MenuContainer>
        <MenuItems>
          <MenuItemsLink>Road Map</MenuItemsLink>
        </MenuItems>
        <MenuItems>
          <MenuItemsLink>Contact</MenuItemsLink>
        </MenuItems>
        <MenuItems>
          <MenuItemsLink>Blog</MenuItemsLink>
        </MenuItems>
      </MenuContainer>
      <NavSocialMediaContainer>
        <DiscordLink>
          <Discord></Discord>
        </DiscordLink>
        <TwitterLink>
          <Twitter></Twitter>
        </TwitterLink>
      </NavSocialMediaContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
