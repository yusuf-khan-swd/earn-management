import React from "react";
import {
  FooterContainer,
  SocialContent,
  SocialIcon,
  FooterSiteMapContainer,
  FooterSocialContainer,
  FooterSocial,
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
  CopyRight,
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
        <FooterSocial>
          <SocialContent>
            <SocialIcon src={footerDiscord} alt="discord" />
            Join us on Discord
          </SocialContent>
          <SocialContent>
            <SocialIcon src={mobileIcon} alt="phone" />
            (239) 555-0193
          </SocialContent>
          <FooterIconWrapper>
            <SmallTwitter src={smallDiscord} alt="twitter" />
            <SmallDiscord src={smallTwitter} alt="discord" />
          </FooterIconWrapper>
        </FooterSocial>
      </FooterSocialContainer>
      <BigDiscordImageWrapper>
        <FooterBigDiscordContainer>
          <DiscordJoiningButton>
            <DiscordButtonImage src={discordButtonImage} alt="discord" />
            <DiscordContent>Join Discord</DiscordContent>
          </DiscordJoiningButton>
        </FooterBigDiscordContainer>
      </BigDiscordImageWrapper>
    </FooterContainer>

    <CopyRight>@Copyright. play 2022</CopyRight>
  </FooterWrapper>
);

export default Footer;
