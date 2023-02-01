import React from "react";
import {
  FooterContainer,
  SocialContent,
  SocialIcon,
  FooterSiteMapContainer,
  FooterSocialContainer,
  FooterSocialLeft,
  FooterWrapper,
  SiteMapColumn,
  SiteMapData,
  SiteMapTitle,
} from "../styles/footerStyles";

import footerDiscord from "../assets/footer-discord.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSiteMapContainer>
          <SiteMapColumn>
            <SiteMapTitle>Fingertip</SiteMapTitle>
            <SiteMapData>Home</SiteMapData>
            <SiteMapData>Blog</SiteMapData>
            <SiteMapData>RoadMap</SiteMapData>
            <SiteMapData>Contact</SiteMapData>
          </SiteMapColumn>
          <SiteMapColumn>
            <SiteMapTitle>Resources</SiteMapTitle>
            <SiteMapData>Discord</SiteMapData>
            <SiteMapData>Blog</SiteMapData>
            <SiteMapData>RoadMap</SiteMapData>
            <SiteMapData>Contact</SiteMapData>
          </SiteMapColumn>
          <SiteMapColumn>
            <SiteMapTitle>Fingertip</SiteMapTitle>
            <SiteMapData>Home</SiteMapData>
            <SiteMapData>Blog</SiteMapData>
            <SiteMapData>RoadMap</SiteMapData>
            <SiteMapData>Contact</SiteMapData>
          </SiteMapColumn>
        </FooterSiteMapContainer>
        <FooterSocialContainer>
          <FooterSocialLeft>
            <SocialContent>
              <SocialIcon src={footerDiscord}></SocialIcon>
              Join us on Discord
            </SocialContent>
          </FooterSocialLeft>
        </FooterSocialContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
