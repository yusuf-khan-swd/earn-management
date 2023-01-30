import styled from "styled-components";
import btnPng from "../assets/btnPng.png";
import logo from "../assets/logo.png";
import bannerImage from "../assets/banner.png";
import discordImage from "../assets/discord.png";
import twitterImage from "../assets/twitter.png";
import roadMapMainImage from "../assets/roadmapMainImage.png";

export const Navbar = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin: 0 auto;
`;

export const NavLogo = styled.img.attrs(() => ({
  src: logo,
}))`
  max-width: 70px;
  margin: 8px;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
`;
export const MenuItems = styled.li`
  margin-right: 31px;
`;

export const MenuItemsLink = styled.a.attrs(() => ({
  href: "/#",
}))`
  color: white;
  text-decoration: none;
`;

export const NavSocialMediaContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 60px;
  width: 106px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiscordLink = styled.a.attrs(() => ({
  href: "#",
}))`
  font-size: 20px;
  margin-right: 29px;
  color: white;
`;

export const Discord = styled.img.attrs(() => ({
  src: discordImage,
}))``;

export const TwitterLink = styled.a.attrs(() => ({
  href: "#",
}))`
  font-size: 20px;
  color: white;
`;
export const Twitter = styled.img.attrs(() => ({
  src: twitterImage,
}))``;

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerContentSection = styled.div``;

export const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 80px;
  color: white;
  margin-bottom: 10px;
`;

export const BannerBody = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 89px;
  max-width: 400px;
`;

export const InputEmail = styled.input.attrs(() => ({
  type: "email",
  placeholder: "Enter you Email Address",
}))`
  border: none;
  padding: 12px 0px;
  width: 60%;
  background: transparent;
  margin-left: 4px;
`;

export const Select = styled.select`
  background: transparent;
  color: white;
  border: none;

  option: {
    margin-left: 10px;
  }
`;
export const SelectOption = styled.option.attrs(() => ({
  value: "0",
}))``;

export const ButtonIcon = styled.img.attrs(() => ({
  src: btnPng,
}))`
  max-width: 50px;
  margin-right: 2px;
`;

export const BannerImageSection = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 209, 255, 0.24) 0%,
    rgba(0, 163, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BannerImage = styled.img.attrs(() => ({
  src: bannerImage,
}))`
  width: 100%;
`;

export const RoadMapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border: 3px solid rgba(255, 255, 255, 0.12); */
  margin: 0 80px;
`;

export const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RoadMapTitleContainer = styled.div``;

export const RoadMapTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  color: #ffffff;
  margin: 0px;
`;

export const RoadMapSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin: 0px;
`;

export const RoadMapImageContainer = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 56, 255, 0.24) 0%,
    rgba(0, 133, 255, 0) 100%
  );
`;

export const RoadMapMainImage = styled.img.attrs(() => ({
  src: roadMapMainImage,
}))``;
