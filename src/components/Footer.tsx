import React from "react";
import {
  FooterContainer,
  SocialContent,
  SocialIcon,
  FooterSiteMapContainer,
  FooterSocialContainer,
  FooterSocialLeftSide,
  FooterWrapper,
  SiteMapColumn,
  SiteMapData,
  SiteMapTitle,
  FooterSocialRightSide,
  FooterDiscordBigImage,
  FooterIconWrapper,
  SmallTwitter,
  SmallDiscord,
} from "../styles/footerStyles";

import footerDiscord from "../assets/footer-discord.png";
import mobileIcon from "../assets/mobile-icon.png";
import smallTwitter from "../assets/small-twitter.png";
import smallDiscord from "../assets/small-discord.png";
import footerDiscordBigImage from "../assets/footer-discord-big-image.png";

const Footer = () => (
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
          <SiteMapTitle>About</SiteMapTitle>
          <SiteMapData>Home</SiteMapData>
          <SiteMapData>Blog</SiteMapData>
          <SiteMapData>RoadMap</SiteMapData>
          <SiteMapData>Contact</SiteMapData>
        </SiteMapColumn>
      </FooterSiteMapContainer>
      <FooterSocialContainer>
        <FooterSocialLeftSide>
          <SocialContent>
            <SocialIcon src={footerDiscord}></SocialIcon>
            Join us on Discord
          </SocialContent>
          <SocialContent>
            <SocialIcon src={mobileIcon}></SocialIcon>
            (239) 555-0193
          </SocialContent>
          <FooterIconWrapper>
            <SmallTwitter src={smallDiscord} />
            <SmallDiscord src={smallTwitter} />
          </FooterIconWrapper>
        </FooterSocialLeftSide>
        <FooterSocialRightSide>
          <FooterDiscordBigImage
            src={footerDiscordBigImage}
          ></FooterDiscordBigImage>
        </FooterSocialRightSide>
      </FooterSocialContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
