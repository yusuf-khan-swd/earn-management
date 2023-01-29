import React from 'react';
import { Banner, BannerBody, BannerContentSection, BannerImage, BannerImageSection, BannerTitle, ButtonIcon, Discord, DiscordLink, InputContainer, MenuContainer, MenuItems, Navbar, NavLogo, NavSocialMediaContainer, Select, Twitter, TwitterLink } from '../../styles';

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
            <Discord></Discord>
          </DiscordLink>
          <TwitterLink>
            <Twitter></Twitter>
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