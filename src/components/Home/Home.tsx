import React from "react";
import {
  Banner,
  BannerBody,
  BannerContentSection,
  BannerImage,
  BannerImageSection,
  BannerTitle,
  ButtonIcon,
  Discord,
  DiscordLink,
  InputContainer,
  InputEmail,
  MenuContainer,
  MenuItems,
  MenuItemsLink,
  Navbar,
  NavLogo,
  NavSocialMediaContainer,
  RoadMapContainer,
  RoadMapContent,
  RoadMapImageContainer,
  RoadMapMainImage,
  RoadMapSubTitle,
  RoadMapTitle,
  RoadMapTitleContainer,
  Select,
  SelectOption,
  Twitter,
  TwitterLink,
} from "../../styles";

const Home = () => {
  return (
    <>
      <Navbar>
        <NavLogo></NavLogo>
        <MenuContainer>
          <MenuItems>
            <MenuItemsLink>Road Map</MenuItemsLink>
          </MenuItems>
          <MenuItems>
            <MenuItemsLink>Contact</MenuItemsLink>
          </MenuItems>
          <MenuItems>
            <MenuItemsLink>Blog</MenuItemsLink>
          </MenuItems>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sagittis mattis hendrerit. Praesent vel risus in risus vestibulum
            aliquet.
          </BannerBody>
          <InputContainer>
            <InputEmail></InputEmail>
            <Select>
              <SelectOption>Owner</SelectOption>
              <SelectOption>Audi</SelectOption>
            </Select>
            <ButtonIcon></ButtonIcon>
          </InputContainer>
        </BannerContentSection>
        <BannerImageSection>
          <BannerImage></BannerImage>
        </BannerImageSection>
      </Banner>
      <RoadMapContainer>
        <RoadMapContent>
          <RoadMapTitleContainer>
            <RoadMapTitle>Road Map</RoadMapTitle>
            <RoadMapSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </RoadMapSubTitle>
          </RoadMapTitleContainer>
        </RoadMapContent>
        <RoadMapImageContainer>
          <RoadMapMainImage></RoadMapMainImage>
        </RoadMapImageContainer>
      </RoadMapContainer>
    </>
  );
};

export default Home;
