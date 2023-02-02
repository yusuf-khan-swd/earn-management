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

import footerDiscord from "../assets/images/footer-discord.png";
import mobileIcon from "../assets/images/mobile-icon.png";
import smallTwitter from "../assets/images/small-twitter.png";
import smallDiscord from "../assets/images/small-discord.png";
import discordButtonImage from "../assets/images/discord-image-button-icon.png";

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
            <SocialIcon src={footerDiscord} alt=""></SocialIcon>
            Join us on Discord
          </SocialContent>
          <SocialContent>
            <SocialIcon src={mobileIcon} alt=""></SocialIcon>
            (239) 555-0193
          </SocialContent>
          <FooterIconWrapper>
            <SmallTwitter src={smallDiscord} alt="" />
            <SmallDiscord src={smallTwitter} alt="" />
          </FooterIconWrapper>
        </FooterSocialLeftSide>
      </FooterSocialContainer>
    </FooterContainer>
    <BigDiscordImageWrapper>
      <FooterBigDiscordContainer>
        <DiscordJoiningButton>
          <DiscordButtonImage
            src={discordButtonImage}
            alt=""
          ></DiscordButtonImage>
          <DiscordContent>Join Discord</DiscordContent>
        </DiscordJoiningButton>
      </FooterBigDiscordContainer>
    </BigDiscordImageWrapper>
  </FooterWrapper>
);

export default Footer;
