import styled from "styled-components";
import btnPng from '../assets/btnPng.png';
import logo from '../assets/logo.png';
import bannerImage from '../assets/banner.png';
import discordImage from '../assets/discord.png';
import twitterImage from '../assets/twitter.png';

export const Navbar = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin: 0 auto;
`

export const NavLogo = styled.img.attrs(() => ({
  src: logo
}))``

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
`
export const MenuItems = styled.li`
  cursor: pointer;
  margin-right: 8px;
  font-weight: 500;
  color: white;
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
  href: '#'
}))`
  font-size: 20px;
  margin-right: 29px;
  color: white;
`

export const Discord = styled.img.attrs(() => ({
  src: discordImage
}))``

export const TwitterLink = styled.a.attrs(() => ({
  href: '#'
}))`
  font-size: 20px;
  color: white;
`
export const Twitter = styled.img.attrs(() => ({
  src: twitterImage
}))``

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const BannerContentSection = styled.div``;
export const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 80px;
  color: white;
`;
export const BannerBody = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 89px;
  max-width: 477px;
  padding: 5px;
`;

export const Select = styled.select`
  
`
export const ButtonIcon = styled.img.attrs(() => ({
  src: btnPng
}))`
  max-width: 50px;
`

export const BannerImageSection = styled.div`
  background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BannerImage = styled.img.attrs(() => ({
  src: bannerImage
}))`
  width: 100%;
`