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
  FooterBigDiscordContainer,
  DiscordJoiningButton,
  FooterIconWrapper,
  SmallTwitter,
  SmallDiscord,
  BigDiscordImageWrapper,
  DiscordButtonImage,
  DiscordContent,
} from "../styles/footerStyles";

import footerDiscord from "../assets/footer-discord.png";
import mobileIcon from "../assets/mobile-icon.png";
import smallTwitter from "../assets/small-twitter.png";
import smallDiscord from "../assets/small-discord.png";
import discordButtonImage from "../assets/discord-image-button-icon.png";

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
      </FooterSocialContainer>
    </FooterContainer>
    <BigDiscordImageWrapper>
      <FooterBigDiscordContainer>
        <DiscordJoiningButton>
          <DiscordButtonImage src={discordButtonImage}></DiscordButtonImage>
          <DiscordContent>Join Discord</DiscordContent>
        </DiscordJoiningButton>
      </FooterBigDiscordContainer>
    </BigDiscordImageWrapper>
  </FooterWrapper>
);

export default Footer;
