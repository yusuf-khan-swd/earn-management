import React, { useEffect } from "react";
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
} from "../styles/navbarStyles";

import logo from "../assets/images/logo.png";
import discordImage from "../assets/images/discord.png";
import twitterImage from "../assets/images/twitter.png";

import "./nav.css";

const Navbar = () => {
  const openNav = () => {
    const mySideNav = document.getElementById("mySidenav");
    const main = document.getElementById("main");

    if (mySideNav != null) {
      mySideNav.style.width = "100vw";
    }

    if (main != null) {
      main.style.marginLeft = "0";
    }
  };
  const closeNav = () => {
    const mySideNav = document.getElementById("mySidenav");
    const main = document.getElementById("main");

    if (mySideNav != null) {
      mySideNav.style.width = "0";
    }

    if (main != null) {
      main.style.marginLeft = "0";
    }
  };

  return (
    <>
      <NavbarWrapper>
        <NavLogo src={logo} alt="logo" />
        <DesktopMenuContainer>
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
        </DesktopMenuContainer>
        <MobileMenuContainer>
          <MenuIconContainer onClick={openNav}>
            <MenuIcon />
            <MenuIcon />
            <MenuIcon />
          </MenuIconContainer>
        </MobileMenuContainer>
      </NavbarWrapper>

      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main"></div>
    </>
  );
};

export default Navbar;
