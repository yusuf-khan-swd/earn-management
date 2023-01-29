import React from 'react';
import { Banner, BannerBody, BannerContentSection, BannerImage, BannerImageSection, BannerTitle, ButtonIcon, DiscordLink, InputContainer, MenuContainer, MenuItems, Navbar, NavLogo, NavSocialMediaContainer, Select, TwitterLink } from '../../styles';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import bannerImage from '../../assets/banner.png';

const Home = () => {
  return (
    <div>
      <Navbar>
        <NavLogo></NavLogo>
        <MenuContainer>
          <MenuItems>Road Map</MenuItems>
          <MenuItems>Contact</MenuItems>
          <MenuItems>Blog</MenuItems>
        </MenuContainer>
        <NavSocialMediaContainer>
          <DiscordLink>
            <FaDiscord></FaDiscord>
          </DiscordLink>
          <TwitterLink>
            <FaTwitter></FaTwitter>
          </TwitterLink>
        </NavSocialMediaContainer>
      </Navbar>
      <Banner>
        <BannerContentSection>
          <BannerTitle>Guild Hub of the Metaverse</BannerTitle>
          <BannerBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet.
          </BannerBody>
          <InputContainer>
            <input type="email" placeholder="Enter you Email Address" />
            <Select>
              <option value="0">Owner:</option>
              <option value="1">Audi</option>
            </Select>
            <ButtonIcon></ButtonIcon>
          </InputContainer>
        </BannerContentSection>
        <BannerImageSection>
          <BannerImage></BannerImage>
        </BannerImageSection>
      </Banner>
    </div>
  );
};

export default Home;