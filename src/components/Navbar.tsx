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
} from "../styles/navbarStyles";

import logo from "../assets/images/logo.png";
import discordImage from "../assets/images/discord.png";
import twitterImage from "../assets/images/twitter.png";

const Navbar = () => (
  <NavbarWrapper>
    <NavLogo src={logo} alt="logo" />
    <MenuContainer>
      <MenuItems>
        <MenuItemsLink href="#">Road Map</MenuItemsLink>
      </MenuItems>
      <MenuItems>
        <MenuItemsLink href="#">Contact</MenuItemsLink>
      </MenuItems>
      <MenuItems>
        <MenuItemsLink href="#">Blog</MenuItemsLink>
      </MenuItems>
    </MenuContainer>
    <NavSocialMediaContainer>
      <DiscordLink href="#">
        <Discord src={discordImage} alt="discord" />
      </DiscordLink>
      <TwitterLink href="#">
        <Twitter src={twitterImage} alt="twitter" />
      </TwitterLink>
    </NavSocialMediaContainer>
  </NavbarWrapper>
);

export default Navbar;
