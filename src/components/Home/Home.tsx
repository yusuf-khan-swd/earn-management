import React from 'react';
import { Banner, ButtonIcon, DiscordLink, InputContainer, MenuContainer, MenuItems, Navbar, NavLogo, NavSocialMediaContainer, Select, TwitterLink } from '../../styles';
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
        <div>
          <h1>Guild Hub of the Metaverse</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil totam fuga atque incidunt possimus numquam temporibus, natus sit ea ullam.</p>
          <InputContainer>
            <input type="email" placeholder="Enter you Email Address" />
            <Select>
              <option value="0">Owner:</option>
              <option value="1">Audi</option>
            </Select>
            <ButtonIcon></ButtonIcon>
          </InputContainer>
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </Banner>
    </div>
  );
};

export default Home;