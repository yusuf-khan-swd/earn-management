import React, { useState } from "react";
import {
  Discord,
  DiscordLink,
  MenuIcon,
  MenuContainer,
  MenuItems,
  MenuItemsLink,
  NavbarWrapper,
  NavLogo,
  NavSocialMediaContainer,
  Twitter,
  TwitterLink,
  MenuIconContainer,
  DesktopMenuContainer,
  MobileMenuContainer,
  MobileSideNav,
  MobileMenuAnchor,
  CloseButton,
} from "../styles/navbarStyles";

import logo from "../assets/images/logo.png";
import discordImage from "../assets/images/discord.png";
import twitterImage from "../assets/images/twitter.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = ["Road Map", "Contact", "Blog"];

  return (
    <>
      <NavbarWrapper>
        <NavLogo src={logo} alt="logo" />
        <DesktopMenuContainer>
          <MenuContainer>
            {navItems.map((item, index) => (
              <MenuItems key={index}>
                <MenuItemsLink href="#">{item}</MenuItemsLink>
              </MenuItems>
            ))}
          </MenuContainer>
          <NavSocialMediaContainer>
            <DiscordLink href="#">
              <Discord src={discordImage} alt="discord" />
            </DiscordLink>
            <TwitterLink href="#">
              <Twitter src={twitterImage} alt="twitter" />
            </TwitterLink>
          </NavSocialMediaContainer>
        </DesktopMenuContainer>
        <MobileMenuContainer>
          <MenuIconContainer onClick={() => setOpenMenu(true)}>
            <MenuIcon />
            <MenuIcon />
            <MenuIcon />
          </MenuIconContainer>
        </MobileMenuContainer>
      </NavbarWrapper>

      <MobileSideNav openMenu={openMenu}>
        <CloseButton href="#" onClick={() => setOpenMenu(false)}>
          &times;
        </CloseButton>
        {navItems.map((item, index) => (
          <MobileMenuAnchor key={index} href="#">
            {item}
          </MobileMenuAnchor>
        ))}
        <NavSocialMediaContainer>
          <DiscordLink href="#">
            <Discord src={discordImage} alt="discord" />
          </DiscordLink>
          <TwitterLink href="#">
            <Twitter src={twitterImage} alt="twitter" />
          </TwitterLink>
        </NavSocialMediaContainer>
      </MobileSideNav>
    </>
  );
};

export default Navbar;
