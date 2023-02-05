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

const footerData = [
  {
    title: "Fingertip",
    home: "Home",
    blog: "Blog",
    roadMap: "RoadMap",
    contact: "Contact",
  },
  {
    title: "Resources",
    home: "Discord",
    blog: "Blog",
    roadMap: "RoadMap",
    contact: "Contact",
  },
  {
    title: "About",
    home: "Home",
    blog: "Blog",
    roadMap: "RoadMap",
    contact: "Contact",
  },
];

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterSiteMapContainer>
        {footerData.map((data, index) => (
          <SiteMapColumn key={index}>
            <SiteMapTitle>{data.title}</SiteMapTitle>
            <SiteMapData>{data.home}</SiteMapData>
            <SiteMapData>{data.blog}</SiteMapData>
            <SiteMapData>{data.roadMap}</SiteMapData>
            <SiteMapData>{data.contact}</SiteMapData>
          </SiteMapColumn>
        ))}
      </FooterSiteMapContainer>
      <FooterSocialContainer>
        <FooterSocialLeftSide>
          <SocialContent>
            <SocialIcon src={footerDiscord} alt="" />
            Join us on Discord
          </SocialContent>
          <SocialContent>
            <SocialIcon src={mobileIcon} alt="" />
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
          <DiscordButtonImage src={discordButtonImage} alt="" />
          <DiscordContent>Join Discord</DiscordContent>
        </DiscordJoiningButton>
      </FooterBigDiscordContainer>
    </BigDiscordImageWrapper>
  </FooterWrapper>
);

export default Footer;
