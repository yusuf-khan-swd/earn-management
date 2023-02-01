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
        <Discord src={discordImage}></Discord>
      </DiscordLink>
      <TwitterLink>
        <Twitter src={twitterImage}></Twitter>
      </TwitterLink>
    </NavSocialMediaContainer>
  </NavbarWrapper>
);

export default Navbar;
