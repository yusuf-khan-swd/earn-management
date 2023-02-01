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

import logo from "../assets/logo.png";
import discordImage from "../assets/discord.png";
import twitterImage from "../assets/twitter.png";

const Navbar = () => (
  <NavbarWrapper>
    <NavLogo src={logo}></NavLogo>
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
        <Discord src={discordImage}></Discord>
      </DiscordLink>
      <TwitterLink href="#">
        <Twitter src={twitterImage}></Twitter>
      </TwitterLink>
    </NavSocialMediaContainer>
  </NavbarWrapper>
);

export default Navbar;
